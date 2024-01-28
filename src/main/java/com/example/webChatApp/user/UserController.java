package com.example.webChatApp.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/api/signUp")
    public @ResponseBody User signUpTest(@RequestBody User user) {
        System.out.println(user.toString());
        //set uid
        //encode password and user.setpassword
        userRepository.save(user);
        return user;
    }  
}
