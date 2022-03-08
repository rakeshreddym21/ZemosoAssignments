package com.singleton;

public class SynchronizedInstantiation {
    public static SynchronizedInstantiation obj; //lazy instantiation

    private SynchronizedInstantiation(){

    }
    private double i;
    public void setbal(double num)
    {
        i=num;
    }
    public void getbal()
    {
        System.out.println("Account balance is: " +i);
    }

    public static synchronized SynchronizedInstantiation getobject() {
        if(obj == null)
        {
            obj = new SynchronizedInstantiation();
            System.out.println("user logged in");
        }
        else
        {

            System.out.println("User has already logged in");
        }
        return obj;
    }

}
/*
 Thread t1=new Thread(new Runnable() {
            @Override
            public void run() {
                lazyinstantiation l1=lazyinstantiation.getobject();
                l1.setbal(100.0);
                l1.getbal();
            }
        });
        Thread t2=new Thread(new Runnable() {
            @Override
            public void run() {
                lazyinstantiation l2=lazyinstantiation.getobject();
                l2.setbal(800.0);
                l2.getbal();
            }
        });
          t1.start();
          t2.start();
 */
