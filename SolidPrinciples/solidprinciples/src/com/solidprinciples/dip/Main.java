package com.solidprinciples.dip;

public class Main {
    public static void main(String[] args) {
        BankService b=new Card();
       Payment p=new Payment(b);
        p.doTransaction(8000);

    }
}
