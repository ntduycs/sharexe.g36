package com.ttcnpm.g36.sharexe.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

/**
 * To enable JPA Auditing, this class has been created as a configuration class which included @EnableJpaAuditing annotation
 * */

@Configuration
@EnableJpaAuditing
public class AuditConfig {
}

