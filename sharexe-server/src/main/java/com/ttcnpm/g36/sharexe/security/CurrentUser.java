package com.ttcnpm.g36.sharexe.security;

import org.springframework.security.core.annotation.AuthenticationPrincipal;

import java.lang.annotation.*;

/**
 * This annotation wraps around @AuthenticationPrincipal,
 * which is used to access the currently authenticated user in the controllers by Spring Security
 * */

@Target({ElementType.PARAMETER, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@AuthenticationPrincipal
public @interface CurrentUser {
}
