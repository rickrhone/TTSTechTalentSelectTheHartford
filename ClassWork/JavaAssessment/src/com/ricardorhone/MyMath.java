// Ricardo Rhone
// Assessment #2a - Java Short Answer
// September 11, 2019

package com.ricardorhone;

import java.util.Scanner;
// ************ Exercise 3 *****************
// Examine the following code, modify it to subtract two numbers and display the output.

public class MyMath {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Input first number: ");
        int num1 = in.nextInt();
        System.out.print("Input second number: ");
        int num2 = in.nextInt();
        System.out.println(num1 + " x " + num2 + " = " + num1 * num2);

        // ANSWER - The Modification is as follows
        System.out.println(num1 + " - " + num2 + " = " + (num1 - num2));

        // ************ Exercise 4 *****************
        // Refactor your solution to exercise #3, so that it calls a function call add that takes two integers
        // and returns the sum, then display the sum.

        // ANSWER - The add method is declared below and the call to it is as follows
        int sum = add(num1,num2); // capturing the returned sum
        System.out.println(num1 + " + " + num2 + " = " + sum); // displaying the sum

        // ************ Exercise 5 *****************
        // Refactor your solution to exercise #3, so that it calls a function call subtract that takes two
        // integers and returns the sum (INTERPRETED AS DIFFERENCE), then display the difference.

        // ANSWER - The subtract method is declared below and the call to it is as follows
        int difference = subtract(num1,num2); // capturing the returned difference
        System.out.println(num1 + " - " + num2 + " = " + difference); // displaying the difference
    }


    // Defining the function/method called add
    public static int add(int num1, int num2) {
        return num1 + num2;
    }

    // Defining the function/method called add
    public static int subtract(int num1, int num2) {
        return num1 - num2;
    }
}
