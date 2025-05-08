package com.duckach.yumly.board.repository;

import com.duckach.yumly.domain.BoardType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BoardTypeRepository extends JpaRepository<BoardType, Integer> {
    Optional<BoardType> findByName(String name);
}
