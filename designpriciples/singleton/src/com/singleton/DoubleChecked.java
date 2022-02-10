package com.singleton;

public class DoubleChecked {
    public static DoubleChecked obj; //lazy instantiation

    private DoubleChecked() {

    }

    private double i;

    public void setBal(double num) {
        i = num;
    }

    public void getBal() {
        System.out.println("Account balance is: " + i);
    }

    public static synchronized DoubleChecked getobject() {
        if (obj == null) {

            synchronized (DoubleChecked.class) {

                if (obj == null)
                    obj = new DoubleChecked();
            }
        }

        else
            {

                System.out.println("User has already logged in");
            }
            return obj;
        }

    }

