package com.tts.ttsdemo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HelloController {

    @GetMapping("/hello")
    public String sayHello (@RequestParam(required = false, defaultValue = "World") String name, Model model) {

        model.addAttribute("user", name);
        return "hello"; //because of Thymleaf will go to templates folder and look for hello.html
    }
}
