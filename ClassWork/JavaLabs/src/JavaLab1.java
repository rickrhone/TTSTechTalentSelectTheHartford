public class JavaLab1 {

    // -------------------------------------------- Task 2 -----------------------------------------------------
    // Declare two variables in the class: 1. an integer named methodCount 2. a string variable named className
    private static int methodCount = 2;
    private static String className = "Java Bootcamp";
    // Question 1 - Should these variables have any modifiers on them?
    // Answer - yes the static modifier is required for access in the static main method
    // Question 2 - Should these variables have an initial value?
    // Answer - No class variables do not have to be initialized.
    // Question 3 - If not, do they have an initial value? How could you tell?
    // Answer - Yes they do have a default initial value. No compile time error if they are used without being initialized.
    // Question 4 - Where are these variables visible?
    // Answer - because the access modifier is private they are visible only to the this class.

    public static void main(String[] args)
    {
        // -------------------------------------------- Task 1 -----------------------------------------------------
        // Start with a very basic class with main() method and Hello World! so that it can be run easily
        System.out.println("\n----------- Task 1 ---------------");
        System.out.println("Hello World!");

        // -------------------------------------------- Task 3 -----------------------------------------------------
        // Write two statements to print out the value of each variable (methodCount & className)
        System.out.println("\n----------- Task 3 ---------------");
        System.out.println("methodCount = " + methodCount);
        System.out.println("className = " + className);

        // -------------------------------------------- Task 4 -----------------------------------------------------
        // Declare an integer variable inside of the main() method named mainInt.
        // Using the add assignment operator, add the value of mainInt to methodCount and print the value of
        // methodCount to ensure the value is correct.
        System.out.println("\n----------- Task 4 ---------------");
        int mainInt = 10;
        // Question 5 - What happens if mainInt is not initialized?
        // Answer - compile time error results if this variable is not initialized
        System.out.println("mainInt = " + mainInt);
        methodCount += mainInt;
        System.out.println("methodCount + mainInt = " + methodCount);

        // -------------------------------------------- Task 5 -----------------------------------------------------
        // Declare a floating point variable inside of the main method and initialize its value to 845.4f.
        float mainFloat = 845.4f;

        // -------------------------------------------- Task 6 -----------------------------------------------------
        // Now declare an integer and try to initialize it with the value of the floating point varible.
        // int intFloat = 845.4f;
        // Question 6 - What happens?
        // Answer - compile time error results because an float cannot be assigned to an int

        // -------------------------------------------- Task 7 -----------------------------------------------------
        // To assign the value of a float to an int the cast operator must be used. Use this operator and then
        // print the value of both the float and the integer.
        int floatToInt = (int) mainFloat;
        System.out.println("\n----------- Task 7 ---------------");
        System.out.println("mainFloat: " + mainFloat + ", Cast to Int: " + floatToInt);
        // Question 7 - What do you notice?
        // Answer - the value gets truncated. Only the integer portion fo the number is returned.

        // -------------------------------------------- Task 8 -----------------------------------------------------
        // Declare a couple of integer variables with initial values.
        // Add them together and place the result in a third variable. Then print that value.
        int x = 5;
        int y = 10;
        int intVar3 = x + y;
        System.out.println("\n----------- Task 8 ---------------");
        System.out.println("(intVar3 = x + y) = " + intVar3);

        // -------------------------------------------- Task 9 -----------------------------------------------------
        // Declare another variable with an initial value.
        int z = 20;

        // -------------------------------------------- Task 10 -----------------------------------------------------
        // Construct three different statements
        // x + y * z; (x + y) * z; x + (y * z)
        int S1 = x + y * z;
        int S2 = (x + y) * z;
        int S3 = x + (y * z);

        // -------------------------------------------- Task 11 -----------------------------------------------------
        // Print the values of each operation.
        System.out.println("\n----------- Task 11 ---------------");
        System.out.println("x = " + x + ", y = " + y + ", z = " + z);
        System.out.println("x + y * z = " + S1);
        System.out.println("(x + y) * z = " + S2);
        System.out.println("x + (y * z) = " + S3);
        // Question 8 - Which are the same? Which are different? Why?
        // Answer - x + y * z and x + (y * z) are the same because of the order of operations results in
        // y * z being evaluated first in both instances. (x + y) * z is different because x + y is evaluated first.

        // -------------------------------------------- Task 12 -----------------------------------------------------
        // Using the add-assignment operator, increment the value of x by 15 and print that value.
        x = x + 15;
        System.out.println("\n----------- Task 12 ---------------");
        System.out.println("(x = x + 15) = " + x);

        // -------------------------------------------- Task 13 -----------------------------------------------------
        // Increment the value of x by the value of y and print that value.
        x = x + y;
        System.out.println("\n----------- Task 13 ---------------");
        System.out.println("(x = x + y) = " + x);

        // -------------------------------------------- Task 14 -----------------------------------------------------
        // To prove that a compound statement can be on the right side of a shortcut operator, type in
        // the following and then print the value. z += (x*2)-6;
         z += (x * 2) - 6;
        System.out.println("\n----------- Task 14 ---------------");
        System.out.println("(z += (x * 2) - 6) = " + z);


    }
}
