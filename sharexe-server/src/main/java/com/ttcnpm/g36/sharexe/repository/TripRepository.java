package com.ttcnpm.g36.sharexe.repository;

import com.ttcnpm.g36.sharexe.model.Trip;
import com.ttcnpm.g36.sharexe.model.TripStatus;
import com.ttcnpm.g36.sharexe.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface TripRepository extends JpaRepository<Trip, Long> {
    List<Trip> findAllByBeginAt(Date currentDate);
    @Query(nativeQuery = true, value = "select t.* from trip t where status = ?1 order by t.created_at desc")
    List<Trip> findAllByStatus(String status);

    @Query(nativeQuery = true,value = "select t.* from trip t inner join participants_in_trip pt on t.id = pt.trip_id where user_id  = ?1 and status = ?2 order by t.created_at desc")
    List<Trip> findAllByParticipantsAndStatus(Long userId, String status);
}
