package com.Abstraction;
interface atm{
     void withdraw(double money);
     void checkbalance(int pin);

}
class bank implements atm{
    public void deposit(double amt){
        System.out.println("Amt of Rs" +amt );
    }
    @Override
    public void withdraw(double money) {
        System.out.println("Withdrawing an amt of"+money);

    }

    @Override
    public void checkbalance(int pin) {
        System.out.println("Remaining balance is 100000");

    }
}
public class AbstractionDemo {
    public static void main(String[] args) {
        bank acc =new bank();
        acc.deposit(1000000);
        acc.withdraw(70000);
        acc.checkbalance(9866);
    }
}
