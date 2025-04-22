package com.duckach.yumly.domain;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "FOOD_IMAGE")
@NoArgsConstructor
public class FoodImage {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "FOOD_IMG_ID")
    private int foodImgId;

    @Column(name = "FOOD_IMG_PATH")
    private String foodImgPath;

    @Column(name = "FOOD_IMG_ORIGIN")
    private String foodImgOrigin;

    @Column(name = "FOOD_IMG_FILESYSTEM")
    private String foodImgFileSystem;

    @ManyToOne // 여러개의 이미지가 하나의 음식
    @JoinColumn(name = "FOOD_ID")
    private Food food;

    public FoodImage(String foodImgPath, String foodImgOrigin, String foodImgFileSystem) {
        this.foodImgPath = foodImgPath;
        this.foodImgOrigin = foodImgOrigin;
        this.foodImgFileSystem = foodImgFileSystem;
    }
}
