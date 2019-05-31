package com.ttcnpm.g36.sharexe.config;

import com.ttcnpm.g36.sharexe.security.JwtAuthenticationEntryPoint;
import com.ttcnpm.g36.sharexe.security.JwtAuthenticationFilter;
import com.ttcnpm.g36.sharexe.service.CustomUserDetailsService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
        // enables the @Secured, @RolesAllowed, (@PreAuthorize, @PostAuthorize) annotations, respectively
        securedEnabled = true,
        jsr250Enabled = true,
        prePostEnabled = true
)
// WebSecurityConfigurerAdapter class provides default security configurations
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    /**
     * To authenticate a User or perform various role-based checks
     */
    private final CustomUserDetailsService customUserDetailsService;

    /**
     * Used to return a 401 unauthorized error to clients that
     * try to access a protected resource without proper authentication
     */
    private final JwtAuthenticationEntryPoint unauthorizedHandler;

    public SecurityConfig(CustomUserDetailsService customUserDetailsService, JwtAuthenticationEntryPoint unauthorizedHandler) {
        this.customUserDetailsService = customUserDetailsService;
        this.unauthorizedHandler = unauthorizedHandler;
    }

    /**
     * JwtAuthenticationFilter is used to
     * - reads JWT authentication token from the Authorization header of all the requests
     * - validates the token
     * - loads the user details associated with that token
     * - Sets the user details in Spring Security’s SecurityContext, which is used to perform authorization checks
     */
    @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter() {
        return new JwtAuthenticationFilter();
    }

    /**
     * @param authenticationManagerBuilder used to create an AuthenticationManager instance
     *                                     which is used authenticate a user in the login API
     */
    @Override
    public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder
                .userDetailsService(customUserDetailsService)
                .passwordEncoder(passwordEncoder());
    }

    @Bean(BeanIds.AUTHENTICATION_MANAGER)
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /**
     * @implSpec used to configure security functionalities like csrf, sessionManagement,
     * and permit access to static resources and few other public APIs to everyone
     * and restricting access to other APIs to authenticated users only.
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .cors()
                .and()
                .csrf()
                .disable()
                .exceptionHandling()
                .authenticationEntryPoint(unauthorizedHandler)
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers("/",
                        "/favicon.ico",
                        "/**/*.png",
                        "/**/*.gif",
                        "/**/*.svg",
                        "/**/*.jpg",
                        "/**/*.html",
                        "/**/*.css",
                        "/**/*.js")
                .permitAll()
                .antMatchers("/api/auth/**")
                .permitAll()
                .antMatchers("/api/user/checkUsernameAvailability", "/api/user/checkEmailAvailability")
                .permitAll()
                .antMatchers("/upload/**","/api/vehicles/**", "/api/users/**", "/api/trips/**")
                .permitAll()
                .anyRequest()
                .authenticated();
        // try .antMatchers("/api/auth/**").access("hasRole('ADMIN')") for restricting access

        // Add our custom JWT security filter
        http.addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);

    }
}
