package com.duckach.yumly.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "BOARD_TYPE")
public class BoardType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int boardTypeId;

    private String name;
    private String description;
}
