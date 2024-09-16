package com.indeed.server.repository;

import com.indeed.server.entity.PostEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostEntityRepository extends MongoRepository<PostEntity, String> {

}
