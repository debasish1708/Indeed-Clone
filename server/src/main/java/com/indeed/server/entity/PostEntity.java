package com.indeed.server.entity;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "posts_entries")
@Data
@NoArgsConstructor
public class PostEntity {

    @NotNull
    @NotEmpty
    private String profile;

    @NotNull
    private String type;

    @NotNull
    private String description;

    @NotNull
    private String experience;

    @NotNull
    private String[] technology;

    @NotNull
    private String salary;

    private LocalDateTime date;
}
