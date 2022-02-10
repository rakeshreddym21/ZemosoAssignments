package com.factorydesign;

public class Cappuccino implements CoffeeVending{
    @Override
    public void getDrink() {
        System.out.println("cappuccino is Ready");
    }
}
