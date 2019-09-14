// Ricardo Rhone
// Assessment #2a - Java Short Answer
// September 11, 2019

package com.ricardorhone;

public class MyArray {

    public static void main(String[] args) {

        // ************ Exercise 1 *****************
        // Create a class called "MyArray"
        int a[] = new int[5];
        a[0]=10; //initialization
        a[1]=20;
        a[2]=70;
        a[3]=40;
        a[4]=50;
        // write code to print out each value in the array.

        // ANSWER  - Code to Print out Each Value in the Array
        for(int value : a) {
            System.out.println(value);
        }

        // ************ Exercise 2 *****************
        // What is another way to create the array created in exercise #1?
        // ANSWER - the array in exercise 1 can be created with the following
        int[] a2 = {10,20,70,40,50};

        // ************ Exercise 6 *****************
        // When dividing an integer by zero an ArithmeticExecption is thrown, how would you fix the
        // following code so that it captures this exception and provides the user with a friendly message.

         /*
          int number = 1;
          return number / 0;
         */

        // ANSWER - the solution to catch the exception is as follows
        int number = 1;
        try {
            System.out.println(number / 0);
        } catch (ArithmeticException e) {
            System.out.println("You should not divide a number by zero");
        }

        // ************ Exercise 7 *****************
        // What will be the output of this program?

        /*
            class A {
             int i = 10;
            }
            class B extends A {
             int i = 20;
            }
            public class MainC
             public static void main(String[] args) {
             A a = new B();
             System.out.println(a.i);
             }
            }
        */
        // ANSWER = 10
    }
}
