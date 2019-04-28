package com.ttcnpm.g36.sharexe.controller;

import com.ttcnpm.g36.sharexe.model.Message;
import com.ttcnpm.g36.sharexe.payload.ChatRoomRequest;
import com.ttcnpm.g36.sharexe.payload.ChatRoomResponse;
import com.ttcnpm.g36.sharexe.payload.MessageRequest;
import com.ttcnpm.g36.sharexe.service.ChatRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/rooms")
public class ChatRoomController {
    private final ChatRoomService chatRoomService;

    public ChatRoomController(ChatRoomService chatRoomService) {
        this.chatRoomService = chatRoomService;
    }

    /** Get recent contacts */
    @GetMapping("/")
    public List<ChatRoomResponse> getRooms(HttpServletRequest request) {
        return chatRoomService.getUserRoom((long) request.getAttribute("userId"));
    }

    /** Create chat room */
    @PostMapping("/")
    public long createRoom(HttpServletRequest request, @Valid @RequestBody ChatRoomRequest chatRoomRequest) {
        long userId = (long) request.getAttribute("userId");
        String partnerUsername = chatRoomRequest.getPartnerUsername();
        return chatRoomService.createRoom(userId, partnerUsername);
    }

    /** Create messages */
    @PostMapping("/{roomId}/messages")
    public Message createMessage(HttpServletRequest request, @Valid @RequestBody MessageRequest messageRequest,
                                 @PathVariable long roomId) {
        long userId = (long) request.getAttribute("userId");
        return chatRoomService.addMessage(userId, roomId, messageRequest.getMessageContent());
    }

    /** Get room's messages */
    @GetMapping("/{roomId}/messages")
    public List<Message> getMessage(HttpServletRequest request, @PathVariable long roomId) {
        return chatRoomService.getRoomMessages((long) request.getAttribute("userId"), roomId);
    }
}
