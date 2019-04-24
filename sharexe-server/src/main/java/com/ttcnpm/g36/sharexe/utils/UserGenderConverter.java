package com.ttcnpm.g36.sharexe.utils;

import com.ttcnpm.g36.sharexe.model.UserGender;

public class UserGenderConverter {
    public static UserGender normalize(String input) {
        return input.equals("Male") || input.equals("M") ? UserGender.MALE : UserGender.FEMALE;
    }
}
