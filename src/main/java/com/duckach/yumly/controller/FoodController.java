package com.duckach.yumly.controller;

import com.duckach.yumly.domain.Food;
import com.duckach.yumly.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class FoodController {

    private final FoodService foodService;

    @Autowired
    public FoodController(FoodService foodService) {
        this.foodService = foodService;
    }

    @GetMapping("getFoodAllList")
    public String getFoodAllList(Model model) {
        List<Food> foods = foodService.findAll();
        model.addAttribute("foods", foods);
        return "food/foodList";
    }

}
