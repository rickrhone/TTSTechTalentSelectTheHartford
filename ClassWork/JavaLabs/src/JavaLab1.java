// Java Data Types and Variables - LAB
// Ricardo Rhone Aug 20, 2019

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

    // -------------------------------------------- Task 24 -----------------------------------------------------
    // Create a string variable that represents a template to print an integer.
    public static void template(int integer) {System.out.println("The integer printed from the template is: " + integer);};

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

        // -------------------------------------------- Task 15 -----------------------------------------------------
        // Now lets move on to boolean operators. Reuse the previous int values and declare them as follows
        // x = y = 13; z = 15;
        x = y = 13;
        z = 15;

        // -------------------------------------------- Task 16 -----------------------------------------------------
        // After that print the value of the following expressions:
        // x == y; x <= y; x != y; x > y; z < (x+y); z > (x+2)
        System.out.println("\n----------- Task 16 ---------------");
        System.out.println("x = " + x + ", y = " + y + ", z = " + z);

        System.out.print("(x == y) = ");
        System.out.println(x == y);

        System.out.print("(x <= y) = ");
        System.out.println(x <= y);

        System.out.print("(x != y) = ");
        System.out.println(x != y);

        System.out.print("(x > y) = ");
        System.out.println(x > y);

        System.out.print("(z < (x + y)) = ");
        System.out.println(z < (x + y));

        System.out.print("(z > (x + 2)) = ");
        System.out.println(z > (x + 2));

        // -------------------------------------------- Task 17 -----------------------------------------------------
        // For binary operators, write the statements that will verify the first 6 lines of the table on binary
        // operations. The statements should be in the form (using slightly different variable names):
        // b3 = b1 & b2; System.out.println("50 AND 19 is: " + b3);
        int b1 = 50; // binary 0011 0010
        int b2 = 19; // binary 0001 0011
        int b3 = 0;
        System.out.println("\n----------- Task 17 ---------------");

        b3 = b1 & b2; // bitwise AND
        System.out.println("50 AND(&) 19 = " + b3);

        b3 = b1 | b2; // bitwise OR
        System.out.println("50 OR(|) 19 = " + b3);

        b3 = b1 ^ b2; // bitwise XOR
        System.out.println("50 XOR(^) 19 = " + b3);

        b3 = ~b1; // bitwise COMPLEMENT
        System.out.println("COMPLEMENT(~) 50 = " + b3); //HELP

        b3 = b2 << 2; // bitwise shift left
        System.out.println("19 bitwise shift left(<<) 2 = " + b3);

        b3 = b2 >> 2; // bitwise shift right
        System.out.println("19 bitwise shift right(>>) = " + b3);

        // -------------------------------------------- Task 18 -----------------------------------------------------
        // For the right shift carry and non-carry operators, type in the following and note the output:
        System.out.println("\n----------- Task 18 ---------------");
        b3 = b2>>>2;
        System.out.println("19 SHIFT RIGHT (NON CARRY) 2 = " + b3);

        b3 = (~b1)>>2;
        System.out.println("50 COMP SHIFT RIGHT (CARRY) 2 = " + b3);

        b3 = (~b1)>>>2;
        System.out.println("50 COMP SHIFT RIGHT (NON CARRY) 2 = " + b3);

        // -------------------------------------------- STRINGS -----------------------------------------------------

        // -------------------------------------------- Task 19 -----------------------------------------------------
        // Declare three string variables, firstName , lastName , middle and initialize them with the appropriate values.
        // Use different methods; one directly with a literal string, one with the new operator,
        // and one with assigning a value after initialization.
        String firstName = "Ricardo"; // directly with a literal string
        String lastName = new String("Rhone"); // with the new operator
        String middle = "Antonio";
        middle = "Java"; // with assigning a value after initialization

        // -------------------------------------------- Task 20 -----------------------------------------------------
        // Print out each variable to ensure that the values are correct.
        System.out.println("\n----------- Task 20 ---------------");
        System.out.println("firstName: " + firstName);
        System.out.println("lastName: " + lastName);
        System.out.println("middle: " + middle);

        // -------------------------------------------- Task 21 -----------------------------------------------------
        // Create a string called fullName that will be made from concatenating the previous three values. Will
        // you use the concat() method or the + operator? Be sure the spacing is correct.
        System.out.println("\n----------- Task 21 ---------------");
        String fullName = firstName.concat(" ").concat(middle) + " " + lastName;
        System.out.println("Full Name is: " + fullName);
        // Question 9 - Will you use the concat() method or the + operator?
        // Answer - I used both the concat() method and the + operator

        // -------------------------------------------- Task 22 -----------------------------------------------------
        // Create three strings with the values of "James", "James" and james.
        String Str1 = "James";
        String Str2 = "James";
        String Str3 = "james";
        System.out.println("\n----------- Task 22 ---------------");
        System.out.println("Str1 = " + Str1 + ", Str2 = " + Str2 + ", Str3 = " + Str3);
        // Question 10 -  Are the first two equal if you use the "==" operator
        // Answer - Yes, same value in String Pool
        System.out.print("(Str1 == Str2) = ");
        System.out.println(Str1 == Str2);

        // Question 11 -  Are the first two equal if you use the equals() method?
        // Answer - Yes, same literal value
        System.out.print("Str1.equals(Str2) = ");
        System.out.println(Str1.equals(Str2));

        // Question 12 -  Are the first and third equal if you use the equals() method?
        // Answer - no, not the same literal value because of the lower case j
        System.out.print("Str1.equals(Str3) = ");
        System.out.println(Str1.equals(Str3));

        // Question 13 -  How can you compare them (str1 and str3) and ignore the case?
        // Answer - by using the equalsIgnoreCase() method
        System.out.print("Str1.equals(Str3) Ignore Case = ");
        System.out.println(Str1.equalsIgnoreCase(Str3));

        // -------------------------------------------- Task 23 -----------------------------------------------------
        // Create a string with a full sentence of a least ten words. Using that string and any resultant variables
        // carry out the following operations:
        System.out.println("\n----------- Task 23 ---------------");
        String stringSentence = "However, since primitive types most commonly exist in two places, \r\n"
                + "class variables and method variables, it maybe necessary to use certain aspects \r\n"
                + "of classes during this lab.";
        System.out.println("stringSentence:\n" + stringSentence);

        // Check to see if the sentence contains the word 'and'.
        System.out.print("\nDoes stringSentence contain 'and'?: ");
        System.out.println(stringSentence.contains("and"));

        // Declare a char variable and put the 16th letter in it.
        char charVar = stringSentence.charAt(16);
        System.out.println("The 16th letter of the sentence is: " + charVar);

        // Declare an int variable and find the first instance of the letter 'u'.
        int firstInstofU = stringSentence.indexOf('u', 0);
        System.out.println("The first instance of the letter 'u' is at index position: " + firstInstofU);

        // Declare an int variable and find the last instance of the letter 'c'.
        int lastInstofC = stringSentence.lastIndexOf('c');
        System.out.println("The last instance of the letter 'c' is at index position: " + lastInstofC);

        // Declare an int and find the total length of the string.
        int totalLength = stringSentence.length();
        System.out.println("The total length of the string is: " + totalLength);

        // Does the sentence start with the word "The"?
        boolean startWithThe = stringSentence.startsWith("The");
        System.out.println("Does the sentence start with the word 'The'?: " + startWithThe);

        // -------------------------------------------- Task 25 -----------------------------------------------------
        // Create a string variable that represents a template to print an integer - Task 24 at the top
        // Now use that template and an integer to print the template with the values of 22, 89, and 93.
        System.out.println("\n----------- Task 25 ---------------");
        template(22);
        template(89);
        template(93);

        // -------------------------------------------- WRAPPERS -----------------------------------------------------

        // -------------------------------------------- Task 26 -----------------------------------------------------
        // Declare an integer wrapper object and initialize it with the value of 42.
        Integer intWrapper = 42;

        // -------------------------------------------- Task 27 -----------------------------------------------------
        // Declare another wrapper object and initialize it from the literal "88".
        Integer intWrapper2 = Integer.parseInt("88");
        // Integer intWrapper3 = new Integer("88"); // deprecated
        // Question 13 - Will you use a constructor or a Parse() function?
        // Answer - I used the parseInt() function the Integer(String S) constructor is deprecated

        // -------------------------------------------- Task 28 -----------------------------------------------------
        // Finally, to wrap things up and combine a wrapper class with a string substitution (and to prove out
        // some of the earlier statements), enter the following three lines and examine the output:
        System.out.println("\n----------- Task 28 ---------------");
        b3 = b2>>2;
        System.out.println("19 SHIFT RIGHT (NON CARRY) 2 is: " + b3);
        System.out.println(String.format("In binary %s", Integer.toBinaryString(b3)));

        b3 = (~b1)>>2;
        System.out.println("\n50 COMP SHIFT RIGHT (CARRY) 2 is: " + b3);
        System.out.println(String.format("In binary %s", Integer.toBinaryString(b3)));

        b3 = (~b1)>>>2;
        System.out.println("\n50 COMP SHIFT RIGHT (NON CARRY) 2 is: " + b3);
        System.out.println(String.format("In binary %s", Integer.toBinaryString(b3)));

        // Note that in the output, leading zeros aren't included. So the fact that the last string is 2 characters
        // shorter than the previous one indicates that there are two leading zeros - hence zeros were inserted
        // and the sign bit not kept.
    }
}
