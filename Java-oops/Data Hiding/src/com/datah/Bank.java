package com.datah;
class bankacount{
    private double balance=2000000;
    private String username = "bankaccount";
    private String password = "pwd";
    public double getbankbalnce(String user,String pass)
    {
        if((user==username) &&(pass==password))
        {
            return balance;
        }
        else{
            return 0.0;
    }
    }

}

public class Bank {
    public static void main(String[] args) {
       bankacount acc=new bankacount();
       double ans=acc.getbankbalnce("bankaccount","pwd");
        System.out.println(ans);
    }
}
