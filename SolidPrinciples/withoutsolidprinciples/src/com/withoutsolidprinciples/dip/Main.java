package com.withoutsolidprinciples.dip;

public class Main {
    public static void main(String[] args) {
        Card c=new Card();
        Payment p=new Payment(c);
        p.doPayment();
    }
}
