package com.solidprinciples.lspandisp;

public class Jacket implements MensFashion,Fashion{
    @Override
    public void addFashion(String name) {
        System.out.println("Adding " +name);
        System.out.println(" to fashion category");
    }

    @Override
    public void addMensFashion(String name) {

        System.out.println("Adding " +name);
        System.out.println(" to mens fashion category");
    }
}
