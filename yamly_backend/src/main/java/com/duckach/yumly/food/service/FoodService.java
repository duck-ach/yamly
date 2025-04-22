package com.duckach.yumly.food.service;

import com.duckach.yumly.domain.Food;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.util.List;

public interface FoodService {
    public List<Food> findAll();
    public void saveFood(HttpServletRequest request, HttpServletResponse response);
}
