package com.BuilderP;

public class Main {
    public static void main(String[] args) {
        Pc P1=new PcBuilder().setMonitor("ACER").setCPU("HP").setKeyboard("IBall").buildPc();
        System.out.println(P1.toString());
        Pc P2=new PcBuilder().setMonitor("ACER").setCPU("HP").setKeyboard("IBall").setGraphicCard("Nvidia").buildPc();
        System.out.println(P2.toString());

    }
}
/*“Separate the construction of a complex object
from its representation so that the same construction
 process can create different representations. It is used to construct
 a complex object step by step and the final step will return the object.*/