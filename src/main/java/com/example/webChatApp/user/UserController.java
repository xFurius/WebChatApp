package com.example.webChatApp.user;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {
    @RequestMapping("/api/signUp")
    public @ResponseBody User signUpTest(@RequestBody User user) {
        System.out.println(user.toString());
        //user binded
        //set uid
        //encode password and user.setpassword
        //userrepository.save(user)

        return user;
    }  
}
