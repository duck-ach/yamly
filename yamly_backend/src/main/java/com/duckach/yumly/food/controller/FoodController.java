package com.duckach.yumly.food.controller;

import com.duckach.yumly.domain.Food;
import com.duckach.yumly.food.service.FoodService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

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

    @GetMapping("/add")
    public String addFood(Model model) {
        return "food/addFood";
    }

    @PostMapping("/saveFood")
    public String saveFood(HttpServletRequest request, HttpServletResponse response) {

        return "food/addFood";
    }
}
