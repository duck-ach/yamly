package com.duckach.yumly.domain;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "BOARD")
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int boardId;

    private String title;

    @Column(length = 5000)
    private String content;

    @ManyToOne
    private BoardType boardType;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @OneToMany(mappedBy = "BOARD", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<BoardImg> images = new ArrayList<>();
}
