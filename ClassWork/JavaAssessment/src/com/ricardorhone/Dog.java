package com.ricardorhone;

public abstract class Dog {
    protected String name;

    public Dog(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public String speak() {
        return "Woof";
    }

    // adding the abstract method
    public abstract int avgBreedWeight();
}
