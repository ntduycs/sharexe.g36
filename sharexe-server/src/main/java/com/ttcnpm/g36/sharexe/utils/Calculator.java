package com.ttcnpm.g36.sharexe.utils;

import java.time.temporal.ChronoUnit;
import java.util.Date;

public class Calculator {
    public static long betweenDates(Date startAt, Date endAt) {
        return ChronoUnit.DAYS.between(
                ((java.sql.Date) endAt).toLocalDate(),
                ((java.sql.Date) startAt).toLocalDate());
    }
}
