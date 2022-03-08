package com.BuilderP;

public class Pc {

    private final String monitor;
    private final String CPU;
    private final String keyboard;
    private final String mouse;
    private final String graphicCard;

    public Pc(String monitor, String CPU, String keyboard, String mouse, String graphicCard) {
        this.monitor = monitor;
        this.CPU = CPU;
        this.keyboard = keyboard;
        this.mouse = mouse;
        this.graphicCard = graphicCard;
    }

    @Override
    public String toString() {
        return "BuiltPc With Specifications {" +
                "monitor='" + monitor + '\'' +
                ", CPU='" + CPU + '\'' +
                ", keyboard='" + keyboard + '\'' +
                ", mouse='" + mouse + '\'' +
                ", graphicCard='" + graphicCard + '\'' +
                '}';
    }
}

