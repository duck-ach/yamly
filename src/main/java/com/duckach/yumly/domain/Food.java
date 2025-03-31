package com.duckach.yumly.domain;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "FOOD")
@NoArgsConstructor
public class Food {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "FOOD_ID")
    private int foodId;

    @Column(name = "FOOD_NAME")
    private String foodName;

    public Food(String foodName) {
        this.foodName = foodName;
    }
}
