package com.ttcnpm.g36.sharexe.security;

import com.ttcnpm.g36.sharexe.model.User;
import com.ttcnpm.g36.sharexe.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @UserDetailService consists of a single method, which is used by Spring security
 * to load users details based on username to authenticate a User or perform various role-based checks.
 * In there, we implement UserDetailsService interface and then define CustomUserDetails class,
 * which implement UserDetails interface and use it as returned object from loadUserByUsername() method
 */

@Service
public class CustomUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * @param usernameOrEmail allows user login using by username or email
     * @throws UsernameNotFoundException thrown when cannot find the user with given usernameOrEmail parameter
     * @Transactional annotation is used to prevent Hibernate throws a LazyInitializationException when the roles are accessed
     */
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String usernameOrEmail) throws UsernameNotFoundException {
        User user = userRepository.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username or email : " + usernameOrEmail));

        return CustomUserDetails.create(user);
    }

    /**
     * This method will be used by JWTAuthenticationFilter
     * @param userId must be not null
     * @throws UsernameNotFoundException thrown when cannot find the user with given usernameOrEmail parameter
     * @Transactional annotation is used to prevent Hibernate throws a LazyInitializationException when the roles are accessed
     */
    @Transactional
    public UserDetails loadUserById(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with id : " + userId));

        return CustomUserDetails.create(user);
    }
}
