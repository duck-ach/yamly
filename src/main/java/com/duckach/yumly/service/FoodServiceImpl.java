package com.duckach.yumly.service;

import com.duckach.yumly.domain.Food;
import com.duckach.yumly.repository.FoodRepository;
import com.duckach.yumly.repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodServiceImpl implements FoodService {

    private final FoodRepository foodRepository;
    private final TagRepository tagRepository;

    @Autowired
    public FoodServiceImpl(FoodRepository foodRepository, TagRepository tagRepository) {
        this.foodRepository = foodRepository;
        this.tagRepository = tagRepository;
    }

    @Override
    public List<Food> findAll() {
        List<Food> foods = foodRepository.findAll();
        System.out.println("foods = " + foods);
        return foods;
    }
}
