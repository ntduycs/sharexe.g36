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
    Page<Trip> findAllByStatus(TripStatus status, Pageable pageable);
    Page<Trip> findAllByParticipantsAndStatus(User user, TripStatus status, Pageable pageable);

    @Query(value = "select user_id, full_name, username from user inner join participants_in_trip on user.id = participants_in_trip.user_id where trip_id = ?1 and user_id <> ?2", nativeQuery = true)
    List<Object[]> getTripsParticipants(long tripId, long userId);
}
