package com.ricardorhone;

public class DogTest {
    public static void main(String[] args) {
        Dog dog = new Dog("Spike");
        System.out.println(dog.getName() + " says " + dog.speak());
        // ************ Inheritance Exercise 1 *****************
        // Add statements in DogTest.java to create and print a Yorkshire and a Labrador.

        // ANSWER 1 - statement to create a Yorkshire and prints it
        Dog dog2  = new Yorkshire("JellBeans");
        System.out.println(dog2.getName() + " says " + dog2.speak());

        // ANSWER 2 - statement to create a Labrador and prints it
        Dog dog3  = new Labrador("Max", "Black");
        System.out.println(dog3.getName() + " says " + dog3.speak());

        // ************ Inheritance Exercise 2 *****************
        // Add code to DogTest.java to print the average breed weight for both your Labrador and your
        // Yorkshire. Use the avgBreedWeight() method for both. What error does this cause? How
        // would you go about fixing the error?

        // ANSWER 1 - printing the average breed weight for the Labrador
        System.out.println(Labrador.avgBreedWeight()); // this prints 75 prior to completing Exercise 3.

        // ANSWER 2 - printing the average breed weight for the Yorkshire
        // This is not doable as the Yorkshire class does not have a avgBreedWeight method nor does it's parent class Dog.
        // To fix this I can either add the avgBreedWeight method to parent Dog or to the Yorkshire Class

        // ************ Inheritance Exercise 3 *****************
        // Add an abstract int avgBreedWeight() method to the Dog class. How does adding this method
        // effect subclasses of Dog?

        // ANSWER 1 - The avgBreedWeight() method in the Labrador class must become non static which means it can only be called now from an instance of Labrador. for example from dog3 above.
        // also the Yorkshire class must implement the abstract method or be classified as an abstract class if the desire is to not implement the method.
    }
}
