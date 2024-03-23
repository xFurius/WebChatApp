package com.example.webChatApp.security;

import org.apache.catalina.authenticator.SpnegoAuthenticator.AuthenticateAction;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.webChatApp.user.User;
import com.example.webChatApp.user.UserRepository;

import lombok.AllArgsConstructor;


@Controller
@AllArgsConstructor
public class SecurityController {
    private UserRepository userRepository;
    private AuthenticationManager authenticationManager;

    @PostMapping("/api/signIn")
    public ResponseEntity<String> postMethodName(@RequestBody AuthRequest authRequest) {
        System.out.println(authRequest.toString());
        //check if user exists
        //User u = userRepository.findByEmail(authRequest.getEmail()).get();
        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword());
        Authentication auth = authenticationManager.authenticate(authToken);
        System.out.println(auth.isAuthenticated());
        //jwt token
        //return token in response

        return ResponseEntity.ok().body("");
    }
        
}
