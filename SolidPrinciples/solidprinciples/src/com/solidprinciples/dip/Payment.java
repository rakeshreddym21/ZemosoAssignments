package com.solidprinciples.dip;

public class Payment {
    public BankService bank;
    public Payment(BankService b)
    {
        bank=b;
    }
    public void doTransaction(double amt)
    {
        bank.payAmount(amt);
    }
}

