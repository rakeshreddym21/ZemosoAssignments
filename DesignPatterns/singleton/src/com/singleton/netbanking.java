package com.singleton;

public class netbanking {
    public static void main(String[] args)
    {
   EagerInstantiation e1= EagerInstantiation.getobject();
   LazyInstantiation l1= LazyInstantiation.getObject();
   e1.setBal(10000);
   e1.getBal();
    }
}
