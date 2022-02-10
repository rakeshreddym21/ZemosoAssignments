package com.polymorphism;
class Subtraction{
    public void sub(int a,int n)
    {
        System.out.println((a-n));
    }
    public void sub(double a,double n)
    {
        System.out.println((a-n));
    }
}
public class overloadingdemo {
    public static void main(String[] args) {
        Subtraction s=new Subtraction();
        s.sub(10,8);
        s.sub(10.8,3.2);

    }
}
