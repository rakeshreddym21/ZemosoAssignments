package com.solidprinciples.ocp;

public class Email implements PromotionalNotifications{
    @Override
    public void sendNotifications() {
        System.out.println("New clothes are available");
    }
}
