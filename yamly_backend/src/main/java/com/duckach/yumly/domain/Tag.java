package com.duckach.yumly.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "TAG")
@NoArgsConstructor
@Getter @Setter
public class Tag {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "TAG_ID")
    private int tagId;

    @Column(name = "TAG_NAME")
    private String tagName;

    @ManyToMany(mappedBy = "tags")
    private Set<Food> foods = new HashSet<>();

    public Tag(String tagName) {
        this.tagName = tagName;
    }
}
