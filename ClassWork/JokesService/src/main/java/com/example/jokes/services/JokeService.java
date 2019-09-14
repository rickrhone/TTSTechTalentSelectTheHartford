package com.example.jokes.services;

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class JokeService {
    private RestTemplate restTemplate;

    public JokeService(RestTemplateBuilder restTemplate) {
        this.restTemplate = restTemplate.build();
    }
}
