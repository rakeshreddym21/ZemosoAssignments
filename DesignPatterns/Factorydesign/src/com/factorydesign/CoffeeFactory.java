package com.factorydesign;

public class CoffeeFactory {
    public CoffeeVending getCoffee(String choice)
    {
        if (choice=="Espresso")
        {
            return new Espresso();
        }
        else if(choice=="BlackCoffee")
        {
            return new BlackCoffee();
        }
        else if(choice=="Cappuccino")
        {
            return new Cappuccino();
        }
        else
        {
            System.out.println("Your choice is not Available");
            return null;
        }
    }
}
