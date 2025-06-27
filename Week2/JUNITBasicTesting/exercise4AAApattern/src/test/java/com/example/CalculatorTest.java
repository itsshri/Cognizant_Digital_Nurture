package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;


class Calculator
{
    public int add(int a, int b)
    {
        return a + b;
    }

    public void close()
    {
        System.out.println("Calculator resources closed.");
    }
}

public class CalculatorTest
{

    private Calculator calculator;

    // Setup method
    @Before
    public void setUp() {
        System.out.println("Setting up...");
        calculator = new Calculator();  // Arrange
    }

    // Teardown method
    @After
    public void tearDown()
    {
        System.out.println("Cleaning up...");
        calculator.close();  // clean up
    }

    // Test method following AAA pattern
    @Test
    public void testAddition()
    {
        // Act
        int result = calculator.add(2, 3);

        // Assert
        assertEquals(5, result);
        System.out.println("Test executed ✅");
    }
}
