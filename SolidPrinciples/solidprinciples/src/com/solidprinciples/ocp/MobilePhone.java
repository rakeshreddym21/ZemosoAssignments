package com.solidprinciples.ocp;

public class MobilePhone implements PromotionalNotifications {

    @Override
    public void sendNotifications() {
        System.out.println("New collection are available");
    }
}
