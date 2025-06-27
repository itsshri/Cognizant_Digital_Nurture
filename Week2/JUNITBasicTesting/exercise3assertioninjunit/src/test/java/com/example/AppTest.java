package com.example;

import org.junit.Test;
import static org.junit.Assert.*;

/**
 * Unit test for simple App.
 */
public class AppTest
{
    @Test
    public void sampleTest() {
        System.out.println("Test ✅");
        int a = 2;
        int b = 3;
        int sum = a + b;

        assertEquals(5, sum);
    }
}
