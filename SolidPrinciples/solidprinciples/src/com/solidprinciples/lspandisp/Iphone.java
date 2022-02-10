package com.solidprinciples.lspandisp;

public class Iphone implements MobilePhones,DigitalDevices {
    @Override
    public void addDevice() {
        System.out.println("Adding to Digital Devices Section");
    }

    @Override
    public void addMobiles(String name) {
        System.out.println("Adding to Mobile Phones Section");

    }
}
