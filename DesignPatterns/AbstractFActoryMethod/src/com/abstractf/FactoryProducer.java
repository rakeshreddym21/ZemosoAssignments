package com.abstractf;

public class FactoryProducer {
    public static AbstractFactory getFactory(String S){
        if(S.equalsIgnoreCase("Fuel"))
        {
            return new FuelCarFactory();
        }
        else{
            return new ElectricCarFactory();
        }
    }
}
