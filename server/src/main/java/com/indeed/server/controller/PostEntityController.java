package com.indeed.server.controller;

import com.indeed.server.entity.PostEntity;
import com.indeed.server.service.PostEntityServices;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping
@CrossOrigin
@RequiredArgsConstructor
public class PostEntityController {

    private final PostEntityServices postEntityServices;

    @PostMapping("/post")
    public void savePost(@Valid @RequestBody PostEntity myPostEntity) {
        log.info("Saving post: {}", myPostEntity);
        postEntityServices.SaveEntry(myPostEntity);
    }

    @GetMapping("posts")
    public List<PostEntity> getPosts() {
        log.info("Retrieving all posts");
        return postEntityServices.getAll();
    }

}
