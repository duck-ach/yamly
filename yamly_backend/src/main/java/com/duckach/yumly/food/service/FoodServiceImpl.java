package com.duckach.yumly.food.service;

import com.duckach.yumly.domain.Food;
import com.duckach.yumly.domain.Tag;
import com.duckach.yumly.food.repository.FoodRepository;
import com.duckach.yumly.food.repository.TagRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

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

    @Override
    public void saveFood(HttpServletRequest request, HttpServletResponse response) {
        String foodName = request.getParameter("foodName");
        List<String> tagNames = List.of(request.getParameterValues("tagNames"));

        // 기존 TAG 조회
        List<Tag> existingTags = tagRepository.findAllByTagNameIn(tagNames);
        Set<String> existingTagNames = existingTags.stream().map(Tag::getTagName).collect(Collectors.toSet());
        // 없는 TAG 추가
        Set<Tag> allTags = new HashSet<>(existingTags);
        for (String tagName : tagNames) {
            if(!existingTagNames.contains(tagName)) {
                Tag newTag = new Tag(tagName);
                tagRepository.save(newTag);
                allTags.add(newTag);
            }
        }
        /*List<Tag> tags = tagRepository.findAll();

        for(int i=0; i<tagName.size(); i++) {
            if(!tags.contains(tagName.get(i))) {
                Tag tag = new Tag();
                tag.setTagName(tagName.get(i));
                tagRepository.save(tag);
            }
        }*/

        // save Food and mapping Tag
        Food food = new Food(foodName);
        food.setTags(allTags);
        foodRepository.save(food);
/*        List<Tag> saveTags = tagRepository.findAllByTagName(tagNames)

        // Food 추가
        Food food = new Food();
        food.setFoodName(foodName);
        for(int i=0; i<saveTags.size(); i++) {

        }
        foodRepository.save(food);*/





    }


}
