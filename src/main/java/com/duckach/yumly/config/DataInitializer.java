package com.duckach.yumly.config;

import com.duckach.yumly.domain.Food;
import com.duckach.yumly.repository.FoodRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {
    private final FoodRepository foodRepository;

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        foodRepository.save(new Food("피자"));
    }
}
