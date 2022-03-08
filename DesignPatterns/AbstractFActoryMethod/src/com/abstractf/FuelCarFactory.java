package com.abstractf;

public class FuelCarFactory extends AbstractFactory{
    @Override
   public Car carType(String Type) {
        if(Type.equalsIgnoreCase("Petrol"))
            return new PetrolCar();
        else if(Type.equalsIgnoreCase("Diesel"))
            return new DieselCar();
return null;
    }
}
