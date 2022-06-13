package com.jennifer.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
public class HelloController {

    @GetMapping
    @RequestMapping()
    public @ResponseBody String Hello(){
        return "Oi,paixão!Tudo certo?Ainda lembra desses exemplos básicos de spring boot?";
    }
    
}
