package com.polymorphism;
class vehicle{
    public void run(){
        System.out.println("Vehicle Run");
    }

}
class Bike extends vehicle{
    public void run(){
        System.out.println("Bike Run");
    }
}
public class Overridingdemo {
    public static void main(String[] args) {
        vehicle v=new vehicle();
        v.run();
        Bike b=new Bike();
        b.run();
        vehicle v1=new Bike();
        v1.run();

    }
}
