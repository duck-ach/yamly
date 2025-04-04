package com.duckach.yumly.repository;

import com.duckach.yumly.domain.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagRepository extends JpaRepository<Tag, Integer> {
    public List<Tag> findAllByTagName(List<String> tagName);
}
