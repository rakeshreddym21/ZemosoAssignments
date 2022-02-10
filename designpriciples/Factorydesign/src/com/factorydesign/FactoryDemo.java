package com.factorydesign;

import javax.sound.midi.Soundbank;
import java.util.Scanner;

public class FactoryDemo {

    public static void main(String[] args) {                                //main


	CoffeeFactory c=new CoffeeFactory();
    Scanner input = new Scanner(System.in);
    int choice;
        System.out.println("Enter the choice from Dropdown:");
        System.out.println("1.Espresso");
        System.out.println("2.BlackCoffee");
        System.out.println("3.Cappuccino");
     choice =input.nextInt();
     String type;
     switch (choice)
     {
         case 1:
             type="Espresso";
             break;
         case 2:
             type="BlackCoffee";
             break;
         case 3:
             type="CoffeeFactory";
             break;
         default:
             type=null;
     }
     CoffeeVending coffee=c.getCoffee(type);
    
    coffee.getDrink();
    }
}
