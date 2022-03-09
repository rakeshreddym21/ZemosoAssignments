package com.singleton;

public class EagerInstantiation {
    public static EagerInstantiation obj=new EagerInstantiation(); //Eager instantiation

    private EagerInstantiation(){}
    private double i;
    public void setBal(double num)
    {
        i=num;
    }
    public void getBal()
    {
        System.out.println("Account balance is: " +i);
    }

    public static EagerInstantiation getobject()
    {

        return obj;
    }
}
