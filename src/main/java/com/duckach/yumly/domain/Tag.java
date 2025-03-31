package com.duckach.yumly.domain;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "TAG")
@NoArgsConstructor
public class Tag {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "TAG_ID")
    private int tagId;

    @Column(name = "TAG_NAME")
    private String tagName;

    public Tag(String tagName) {
        this.tagName = tagName;
    }
}
