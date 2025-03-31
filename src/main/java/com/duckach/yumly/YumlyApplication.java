package com.duckach.yumly;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.duckach.yumly.domain")
public class YumlyApplication {

    public static void main(String[] args) {
        SpringApplication.run(YumlyApplication.class, args);
    }

}
