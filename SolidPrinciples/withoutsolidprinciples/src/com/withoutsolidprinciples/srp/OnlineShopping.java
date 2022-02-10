package com.withoutsolidprinciples.srp;
class admin implements Login
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
    public void register(String username, String pwd, String mail) {
        name=username;
        password=pwd;
        email=mail;
    }

    @Override
    public void error() {
        System.out.println("Please enter correct details or register");

    }
}

public class OnlineShopping {
    public static void main(String[] args) {
        admin u=new admin();
        u.login("rakesh","1234548");
    }


}
