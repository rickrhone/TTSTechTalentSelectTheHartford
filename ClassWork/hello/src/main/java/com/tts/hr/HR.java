package com.tts.hr;

import java.util.ArrayList;
import java.util.List;

public class HR {
    private List<Employee> employees =  new ArrayList<>();

    // method to get the List of employees
    public List<Employee> getEmployees() {
        return employees;
    }

    // method to get the number of emplyees
    public int getNumEmployees() {
        return employees.size();
    }

    // Method to add employees (hire them)
    public void hire(Employee e) {
        employees.add(e);
    }

    // method to pay all employees - calculates the pay and add it to the total then return the total
    public double payEverybody() {
        double total = 0.0;
        for (Employee e : employees) {
            System.out.println(e + ", pay = " + e.computePay());
            total += e.computePay();
        }
        return total;
    }
}
