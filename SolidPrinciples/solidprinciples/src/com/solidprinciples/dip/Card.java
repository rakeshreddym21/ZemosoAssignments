package com.solidprinciples.dip;

public class Card implements BankService {
    @Override
    public void payAmount(double amt) {
        System.out.println("paying the amt through card");

    }
}
