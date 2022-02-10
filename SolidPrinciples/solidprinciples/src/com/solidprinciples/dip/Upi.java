package com.solidprinciples.dip;

public class Upi implements BankService {
    @Override
    public void payAmount(double amt) {
        System.out.println("paying the amt through upi");
    }
}
