package com.withoutsolidprinciples.srp;

public interface Login {
    void login(String Username,String pwd);
    void register(String Username, String pwd, String email);
    void error();
}
