package com.example.webChatApp.user;

import java.util.Random;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.AllArgsConstructor;

@Controller
@AllArgsConstructor
public class UserController {
    private UserRepository userRepository;
    private BCryptPasswordEncoder passwordEncoder;

    @RequestMapping("/api/signUp")
    public ResponseEntity<String> signUp(@RequestBody User user) {
        if(userRepository.findByEmail(user.getEmail()).isPresent()){
            return ResponseEntity.status(HttpStatus.FOUND).body("Email already in use");
        } 
        
        System.out.println(user.toString());
        user.setUID(""+new Random(System.currentTimeMillis()).nextInt(99999999));
        //check if uid exists
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        userRepository.save(user);
        return ResponseEntity.ok().body("");
    }  
}