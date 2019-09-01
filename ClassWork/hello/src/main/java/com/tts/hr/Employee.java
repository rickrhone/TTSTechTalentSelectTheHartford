package com.tts.hr;

public abstract class Employee implements Payable{

    private String name;

    // Constructor - since this is a abstract class (cannot be instantiated) the child will call this constructor
    public Employee(String name) {
        this.name = name;
    }

    // Getter and Setter
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

//    // abstract method - each subclass implement in its own way
//    public abstract double computePay(); //no braces - because abstract methods cannot have a body

    // overriding the String method from the Object class
    @Override // to check to see if the signature is correct
    public String toString() {
        return name;
    }

}
