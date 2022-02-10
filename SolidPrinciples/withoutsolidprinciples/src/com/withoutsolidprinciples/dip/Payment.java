package com.withoutsolidprinciples.dip;

public class Payment {
private Card c;
public Payment(Card c)
{
    this.c=c;

}
public void doPayment()
{
    c.payAmount();
}
}
