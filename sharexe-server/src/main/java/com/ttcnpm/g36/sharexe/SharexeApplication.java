package com.ttcnpm.g36.sharexe;

import com.ttcnpm.g36.sharexe.config.ImageStorageConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;
import org.springframework.scheduling.annotation.EnableScheduling;

import javax.annotation.PostConstruct;
import java.util.TimeZone;

@SpringBootApplication
@EnableScheduling
@EntityScan(basePackageClasses = {
		SharexeApplication.class,
		Jsr310JpaConverters.class // convert Java Date/Time to MySQL types when persisting
})
@EnableConfigurationProperties({ImageStorageConfig.class})
public class SharexeApplication {
	@PostConstruct
	void init() {
		TimeZone.setDefault(TimeZone.getTimeZone("GMT+7:00"));
	}

	public static void main(String[] args) {
		SpringApplication.run(SharexeApplication.class, args);
	}

}
