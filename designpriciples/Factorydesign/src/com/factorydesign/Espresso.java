package com.factorydesign;

public class Espresso implements CoffeeVending
        {

            @Override
            public void getDrink() {
                System.out.println("Espresso is ready");
            }
        }
