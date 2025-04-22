package com.duckach.yumly.config;

import com.duckach.yumly.domain.Food;
import com.duckach.yumly.domain.Tag;
import com.duckach.yumly.food.repository.FoodRepository;
import com.duckach.yumly.food.repository.TagRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Set;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {
    private final FoodRepository foodRepository;
    private final TagRepository tagRepository;

    @Override
    @Transactional
    public void run(String... args) throws Exception {

        // hashtag 추가
        Tag koreanFood = new Tag("한식");
        Tag japaneseFood = new Tag("일식");
        tagRepository.saveAll(Set.of(koreanFood, japaneseFood));

        Food ramen = new Food("라멘");
        ramen.getTags().add(japaneseFood);

        Food kimchiJJim = new Food("김치찜");
        kimchiJJim.getTags().add(koreanFood);
        
    }
}
