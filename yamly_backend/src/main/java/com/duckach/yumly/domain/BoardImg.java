package com.duckach.yumly.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "BOARD_IMG")
public class BoardImg {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int boardImgId;
    private String boardImgUrl;
    @ManyToOne
    @JoinColumn(name = "BOARD_ID")
    private Board board;
}
