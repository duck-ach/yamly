package com.duckach.yumly.board.repository;

import com.duckach.yumly.domain.Board;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Integer> {
    List<Board> findByBoardType(String name);
}
