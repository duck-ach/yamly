package com.duckach.yumly.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "FOOD")
@NoArgsConstructor
@Getter @Setter
public class Food {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "FOOD_ID")
    private int foodId;

    @Column(name = "FOOD_NAME")
    private String foodName;

    @ManyToMany
    @JoinTable(
            name = "FOOD_TAG_MAPPING",
            joinColumns = @JoinColumn(name = "FOOD_ID"),
            inverseJoinColumns = @JoinColumn(name = "TAG_ID")
    )
    private Set<Tag> tags = new HashSet<>();

    public Food(String foodName) {
        this.foodName = foodName;
    }
}
