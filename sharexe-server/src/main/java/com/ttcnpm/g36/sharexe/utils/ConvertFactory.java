package com.ttcnpm.g36.sharexe.utils;

import com.ttcnpm.g36.sharexe.model.TripStatus;
import com.ttcnpm.g36.sharexe.model.UserGender;

public class ConvertFactory {
    public static UserGender normalizeGender(String input) {
        return input.toLowerCase().equals("male") || input.toLowerCase().equals("m") ? UserGender.MALE : UserGender.FEMALE;
    }

    public static TripStatus getTripStatusFromRequest(String status) {
        if (status.equals("finished")) {
            return TripStatus.FINISHED;
        } else if (status.equals("in-progress")) {
            return TripStatus.IN_PROGRESS;
        }
        return TripStatus.WAITING;
    }

    public static String getFullNameFrom(String firstName, String lastName) {
        return firstName + " " + lastName;
    }
}
