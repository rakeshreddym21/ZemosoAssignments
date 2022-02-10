package com.singleton;

public class LazyInstantiation {
    public static LazyInstantiation obj; //lazy instantiation

    private LazyInstantiation(){

    }
    private double i;
    public void setBal(double num)
    {
        i=num;
    }
    public void getBal()
    {
        System.out.println("Account balance is: " +i);
    }

    public static LazyInstantiation getObject() {
     if(obj == null)
     {
         obj = new LazyInstantiation();
         System.out.println("user logged in");
     }
      else
     {

         System.out.println("User has already logged in");
     }
      return obj;
    }
}
