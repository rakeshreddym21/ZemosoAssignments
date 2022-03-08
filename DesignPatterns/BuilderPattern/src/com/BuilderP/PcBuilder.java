package com.BuilderP;

public class PcBuilder {
    private String monitor;
    private String CPU;
    private String keyboard;
    private String mouse;
    private String graphicCard;


    public PcBuilder setMonitor(String monitor) {
            this.monitor = monitor;
            return this;
        }

        public PcBuilder setCPU(String CPU) {
            this.CPU = CPU;
            return this;
        }

        public PcBuilder setKeyboard(String keyboard) {
            this.keyboard = keyboard;
            return this;
        }

    public PcBuilder setGraphicCard(String graphicCard) {
        this.graphicCard = graphicCard;
        return this;
    }

    public PcBuilder setMouse(String mouse) {
            this.mouse = mouse;
            return this;
        }
    public Pc buildPc()
    {
        return new Pc(monitor, CPU,keyboard,mouse,graphicCard);
    }
}
