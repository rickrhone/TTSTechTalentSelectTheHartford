package com.tts.ttsdemo.controllers;

import com.tts.ttsdemo.com.tts.demo.com.tts.demo.json.Greeting;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@org.springframework.web.bind.annotation.RestController
public class RestController {

    @GetMapping("/rest")
    public Greeting greet(@RequestParam(required = false, defaultValue = "World") String name) {
        return new Greeting("Hello, " + name + "!");
    }
}
