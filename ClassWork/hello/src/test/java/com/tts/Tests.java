package com.tts;

import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

public class Tests {
    private int methodCount;
    private String className;

    @Test
    public void checkDefaultsForAttributes() {
        assertEquals(0, methodCount);
        assertNull(className);
    }

    @Test
    public void incrementMethodCountTest() {
        int mainInt = 1;
        methodCount += mainInt;
        assertEquals(1, methodCount);
    }

    @Test
    public void castFloatToInt() {
        float f = 856.2f;
        int castFloat = (int) f;
        System.out.println("float: " + f + ", cast float " + castFloat);

    }
}
