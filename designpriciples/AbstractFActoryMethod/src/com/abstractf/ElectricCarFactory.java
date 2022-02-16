package com.abstractf;

public class ElectricCarFactory extends AbstractFactory {
    @Override
    Car carType(String Type) {
        if(Type.equalsIgnoreCase("Electric"))
            return new ElectricCar();
        return null;
    }
}
