package com.ttcnpm.g36.sharexe.utils;

import com.ttcnpm.g36.sharexe.model.UserGender;

public class UserGenderConverter {
    public static UserGender normalize(String input) {
        return input.toLowerCase().equals("male") || input.toLowerCase().equals("m") ? UserGender.MALE : UserGender.FEMALE;
    }
}
