package com.ttcnpm.g36.sharexe.service;

import antlr.debug.MessageListener;
import com.ttcnpm.g36.sharexe.model.ChatRoom;
import com.ttcnpm.g36.sharexe.model.Message;
import com.ttcnpm.g36.sharexe.model.User;
import com.ttcnpm.g36.sharexe.payload.ChatRoomResponse;
import com.ttcnpm.g36.sharexe.repository.ChatRoomRepository;
import com.ttcnpm.g36.sharexe.repository.MessageRepository;
import com.ttcnpm.g36.sharexe.repository.UserRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ChatRoomService {
    private final ChatRoomRepository chatRoomRepository;
    private final UserRepository userRepository;
    private final MessageRepository messageRepository;

    public ChatRoomService(ChatRoomRepository chatRoomRepository, UserRepository userRepository, MessageRepository messageRepository) {
        this.chatRoomRepository = chatRoomRepository;
        this.userRepository = userRepository;
        this.messageRepository = messageRepository;
    }

    @Transactional
    public long createRoom(long userId, String partnerUsername) {
        User user = userRepository.findById(userId).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        User participant = userRepository.findByUsername(partnerUsername).orElseThrow(() -> new UsernameNotFoundException("User not found"));

        if (user.getUsername() == participant.getUsername() || chatRoomRepository.checkRoomExists(userId, participant.getId()).size() > 0) {
            return 0;
        }

        ChatRoom chatRoom = new ChatRoom();

        user.joinChatRoom(chatRoom);
        participant.joinChatRoom(chatRoom);
        chatRoomRepository.save(chatRoom);

        return chatRoom.getId();
    }

    @Transactional
    public Message addMessage(long userId, long roomId, String messageContent) {
        ChatRoom chatRoom = chatRoomRepository.findById(roomId).orElseThrow(() -> new UsernameNotFoundException("Room not found"));
        User author = userRepository.findById(userId).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        Message message = new Message();

        message.setText(messageContent);
        message.setAuthor(author.getUsername());
        message.setAuthorName(author.getUsername());

        chatRoom.addMessage(message);
        messageRepository.save(message);

        return message;
    }

    public List<ChatRoomResponse> getUserRoom(long userId) {
        List<ChatRoomResponse> chatRoomResponses = new ArrayList<>();

        List<Object[]> recentContacts = chatRoomRepository.getRecentContacts(userId);
        for (Object[] recentContactTuple: recentContacts) {
            ChatRoomResponse chatRoomResponse = new ChatRoomResponse();

            chatRoomResponse.setRoomId(((BigInteger)recentContactTuple[0]).longValue());
            chatRoomResponse.setLastMessageCreatedAt((Date)recentContactTuple[1]);
            chatRoomResponse.setLastMessageContent((String)recentContactTuple[2]);
            chatRoomResponse.setLastMessageUsername((String)recentContactTuple[3]);
            chatRoomResponse.setLastMessageFullName((String)recentContactTuple[4]);

            getPartner(userId, recentContactTuple, chatRoomResponse);

            chatRoomResponses.add(chatRoomResponse);
        }

        List<Object[]> recentRooms = chatRoomRepository.getUserRooms(userId);
        for (Object[] recentRoom: recentRooms) {
            boolean found = false;
            for (ChatRoomResponse chatRoomResponse : chatRoomResponses) {
                if (chatRoomResponse.getRoomId() == ((BigInteger)recentRoom[0]).longValue()) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                ChatRoomResponse chatRoomResponse = new ChatRoomResponse();
                chatRoomResponse.setRoomId(((BigInteger)recentRoom[0]).longValue());
                getPartner(userId, recentRoom, chatRoomResponse);
                chatRoomResponses.add(chatRoomResponse);
            }
        }

        return chatRoomResponses;
    }

    private void getPartner(long userId, Object[] recentRoom, ChatRoomResponse chatRoomResponse) {
        Object[] partnerTuple = chatRoomRepository.getRecentContactsPartner(userId, ((BigInteger)recentRoom[0]).longValue()).get(0);
        chatRoomResponse.setPartnerId(((BigInteger)partnerTuple[0]).longValue());
        chatRoomResponse.setPartnerUsername((String)partnerTuple[1]);
        chatRoomResponse.setPartnerFullName((String)partnerTuple[2]);
        chatRoomResponse.setProfileImage((String)partnerTuple[3]);
    }

    @Transactional
    public List<Message> getRoomMessages(long userId, long roomId) {
        ChatRoom chatRoom = chatRoomRepository.findById(roomId).orElseThrow(() -> new UsernameNotFoundException("Room not found"));

        boolean found = false;
        for (User user: chatRoom.getUsers()) {
            if (user.getId() == userId) {
                found = true;
                break;
            }
        }

        if (!found) return null;

        List<Message> messages = chatRoom.getMessageList();
        return  messages.subList(Math.max(messages.size() - 3, 0), messages.size());
    }
}