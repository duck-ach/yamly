package com.duckach.yumly.food.repository;

import com.duckach.yumly.domain.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagRepository extends JpaRepository<Tag, Integer> {
    public List<Tag> findAllByTagNameIn(List<String> tagName);
}
