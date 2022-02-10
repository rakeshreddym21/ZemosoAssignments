package com.solidprinciples.srp;

public class Admin implements Login, ErrorHandling
{
    private String name="Rakesh";
    private String password="qwerty";
    private String email="xyz@email.com";

    @Override
    public void login(String username, String pwd) {
        if(this.name==username && this.password==pwd)
        {
            System.out.println("User details are validated");
        }
        else{
            this.error();
        }
    }

    @Override
    public void registration(String username, String pwd,String mail) {
        name=username;
        password=pwd;
        email=mail;
    }

    @Override
    public void error() {
        System.out.println("Please enter correct details or register");

    }
}
