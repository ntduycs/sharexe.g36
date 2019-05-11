package com.ttcnpm.g36.sharexe.utils;

import com.ttcnpm.g36.sharexe.model.Trip;
import com.ttcnpm.g36.sharexe.model.TripStatus;
import com.ttcnpm.g36.sharexe.repository.TripRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

@Component
public class ScheduledTask {
    private static final Logger LOGGER = LoggerFactory.getLogger(ScheduledTask.class);

    private final TripRepository tripRepository;

    public ScheduledTask(TripRepository tripRepository) {
        this.tripRepository = tripRepository;
    }

    /**
     * @implSpec This task is executed every day at given time automatically
     * */
    @Scheduled(cron = "0 0 6,18 * * *", zone = "GMT+7:00") // 6:00 AM and 6:00 PM every day
    public void updateTripStatus() {
        LOGGER.info("Scheduled task has been called.......");
        List<Trip> comingTrips = tripRepository.findAllByBeginAt(new Date());
        for (Trip trip: comingTrips) {
            trip.setStatus(TripStatus.IN_PROGRESS);
            tripRepository.save(trip);
        }
    }
}
