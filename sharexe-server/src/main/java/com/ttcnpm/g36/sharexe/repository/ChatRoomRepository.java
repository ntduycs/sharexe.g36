package com.ttcnpm.g36.sharexe.repository;

import com.ttcnpm.g36.sharexe.model.ChatRoom;
import com.ttcnpm.g36.sharexe.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

@Repository
public interface ChatRoomRepository extends JpaRepository<ChatRoom, Long> {
    Optional<ChatRoom> findById(long id);

    @Query(value = "SELECT 1 FROM " +
            "users_in_room a INNER JOIN users_in_room b " +
            "ON a.room_id = b.room_id " +
            "WHERE a.user_id <> b.user_id  AND a.user_id = ?1 AND b.user_id = ?2", nativeQuery = true)
    List<?> checkRoomExists(long userId, long participantId);

    @Query(value = "SELECT room_id, created_at, text, author, author_name " +
            "FROM (" +
            "      SELECT * " +
            "      FROM  message NATURAL JOIN users_in_room " +
            "      WHERE user_id = ?1) AS O " +
            "natural join (" +
            "      SELECT room_id, max(created_at) AS created_at " +
            "      FROM message NATURAL JOIN users_in_room  " +
            "      WHERE user_id = ?1" +
            "      GROUP BY room_id) AS D " +
            "GROUP BY room_id " +
            "ORDER BY created_at DESC", nativeQuery = true)
    List<Object[]> getRecentContacts(long userId);

    @Query(value = "SELECT id, username, full_name, profile_image " +
            "FROM user U INNER JOIN " +
                "(SELECT Y.room_id, Y.user_id " +
                "FROM users_in_room X " +
                "INNER JOIN users_in_room Y ON X.room_id = Y.room_id " +
                "WHERE X.user_id <> Y.user_id AND  X.user_id = ?1 AND X.room_id = ?2) " +
            "E ON U.id = E.user_id;", nativeQuery = true)
    List<Object[]> getRecentContactsPartner(long userId, long roomId);

    @Query(value = "SELECT room_id from users_in_room where user_id = ?1", nativeQuery = true)
    List<Object[]> getUserRooms(long userId);
}