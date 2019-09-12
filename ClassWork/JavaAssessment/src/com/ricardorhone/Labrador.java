package com.ricardorhone;

public class Labrador extends Dog {
    private String color; // black, yellow, or chocolate?
    private static int breedWeight = 75;  // MODIFIED - static added to get this code to compile
    public Labrador(String name, String color) {
        super(name);
        this.color = color;
    }

    public String speak() {
        return "WOOF";
    }

    public int avgBreedWeight() {
        return breedWeight;
    }
}
