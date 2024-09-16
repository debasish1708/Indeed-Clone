package com.indeed.server.service;

import com.indeed.server.entity.PostEntity;
import com.indeed.server.repository.PostEntityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;

@RequiredArgsConstructor
@Component
public class PostEntityServices {

    private final PostEntityRepository postEntityRepository;

    public void SaveEntry(PostEntity postEntity) {
        postEntity.setDate(LocalDateTime.now());
        postEntityRepository.save(postEntity);
    }

    public List<PostEntity> getAll() {
        return postEntityRepository.findAll();
    }
}
