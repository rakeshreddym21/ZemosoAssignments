package com.abstractf;

public class Main {

    public static void main(String[] args) {

AbstractFactory f=FactoryProducer.getFactory("Fuel");
Car c=f.carType("Petrol");
c.carProperties();



    }
}
