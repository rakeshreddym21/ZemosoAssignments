package com.basicpre;

public abstract class Department {
public abstract void workers();
public void greetings()
{
    System.out.println("HEllo Everyone");
}

}
class subdept extends Department{
    public  void workers(){
        System.out.println("They have 50 workers");
    }
}
