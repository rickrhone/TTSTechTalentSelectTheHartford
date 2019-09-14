package com.ricardorhone;

public class Yorkshire extends Dog {
    public Yorkshire(String name) {
        super(name);
    }

    public String speak() {
        return "woof";
    }

    @Override
    public int avgBreedWeight() {
        return 0;
    }
}