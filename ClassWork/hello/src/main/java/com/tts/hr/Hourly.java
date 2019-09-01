package com.tts.hr;

public class Hourly extends Employee {

    public static final double DEFAULT_HOURS = 80;

    private double rate;
    private double  hours = DEFAULT_HOURS;

    // Constructors
    public Hourly(String name) {
        this(name, 100.00, DEFAULT_HOURS); // calls the constructor with 3 args below
    }

    public Hourly(String name, double rate) {
        this(name, rate, DEFAULT_HOURS); // calls the constructor with 3 args below
    }

    public Hourly(String name, double rate, double hours) {
        super(name); // calls the one arg constructor in the Employee class
        this.rate = rate;
        this.hours = hours;
    }

    // Getters and Setters
    public double getRate() {
        return rate;
    }

    public void setRate(double rate) {
        this.rate = rate;
    }

    public double getHours() {
        return hours;
    }

    public void setHours(double hours) {
        this.hours = hours;
    }

    @Override
    public double computePay() {
        return rate * hours;
    }

    @Override
    public String toString() { //overrides the toString() method in Employee - override always points to the parent
        return super.toString() + ", rate = " + rate + ", hours = " + hours;
    }
}
