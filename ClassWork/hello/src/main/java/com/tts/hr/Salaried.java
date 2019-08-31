package com.tts.hr;

import java.text.NumberFormat;

public class Salaried extends Employee {

    public static final double DEFAULT_SALARY = 104_000.0;
    private double salary = DEFAULT_SALARY;

    // Constructors
    public Salaried(String name){
        this(name, DEFAULT_SALARY); // calls the constructor below with args name and DEFAULT_SALARY
    }

    public Salaried(String name, double salary) {
        super(name); // calls the constructor in the super class
        this.salary = salary;
    }


    // Getters and Setters
    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    @Override // makes the compiler check to see if this is indeed an override and not an overload
    public double computePay() {
        return salary / 26.0;
    }

    @Override
    public String toString() { //overrides the toString() method in Employee - override always points to the parent
        return super.toString() + ", Salary = " + NumberFormat.getCurrencyInstance().format(salary);
    }
}
