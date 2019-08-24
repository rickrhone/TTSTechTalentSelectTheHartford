import org.junit.Test;

import static org.junit.Assert.*;

public class HelloWorldTest {

    private   HelloWorld helloWorld = new HelloWorld();

    @Test
    public void checkIntegerDivision() {
        assertEquals(2, 5/2);
    }

    @Test
    public void checkFloatingPointDivision() {
        assertEquals(2.5, 5/2.0, 0.01);
    }

    @Test
    public void isLengthGreaterThan() {
        // Test for not nulls
        assertTrue(helloWorld.islengthGreaterThan("hello", 5));
    }

    @Test
    public void verifyMethodWorksForNull() {
        assertFalse(helloWorld.islengthGreaterThan(null,5));
    }

}