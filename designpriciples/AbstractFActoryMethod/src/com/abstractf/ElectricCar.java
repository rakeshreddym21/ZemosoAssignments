package com.abstractf;

 public class ElectricCar implements Car{

    @Override
    public void carProperties() {
        System.out.println("It does not have engine but they run on battery");
    }
}
