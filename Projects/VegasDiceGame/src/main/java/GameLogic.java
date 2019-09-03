// Ricardo Rhone

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

// Contains all the methods for the game
public class GameLogic {

    // Method to create an ArrayList of winning values for the first try - Returns the ArrayList
    public static List firstTryWinningValues() {
        List<Integer> firstTryWinningValues = new ArrayList<>();
        firstTryWinningValues.add(7);
        firstTryWinningValues.add(11);
        return firstTryWinningValues;
    }

    // Method to create an ArrayList of losing values for the first try - Returns the ArrayList
    public static List firstTryLosingValues() {
        List<Integer> firstTryLosingValues = new ArrayList<>();
        firstTryLosingValues.add(2);
        firstTryLosingValues.add(3);
        firstTryLosingValues.add(12);
        return firstTryLosingValues;
    }

    // Method to simulate a die roll - returns a number between 1 and 6
    public static int diceValue() { // accessible without instantiation
        return 1 + (int)(Math.random() * 6);
    }

    // Method capture the rolls of die 1 and 2 - returns the sum of both dice
    public static int newRoll() { // accessible without instantiation
        // Store the rolls of both die
        int die1Value = diceValue();
        int die2Value = diceValue();
        // log the values to the console
        System.out.println("Die1Value = " + die1Value + " | " + "Die2Value = " + die2Value + " | " + "Sum = " + (die1Value + die2Value));
        // return the sum of the die values
        return die1Value + die2Value;
    }

    // Method to notify the player that they won
    public static void youWon() { // accessible without instantiation
        System.out.println("\n         ******************************      ");
        System.out.println("         *     VICTORY IS YOURS!!!    *      ");
        System.out.println("         ******************************      ");
    }

    // Method to notify the player that they loss
    public static void youLoss() { // accessible without instantiation
        System.out.println("\n         ************************************* ");
        System.out.println("         * YOU LOSE - BETTER LUCK NEXT TIME  * ");
        System.out.println("         *************************************   ");
    }

    // Method to end the current game
    public static boolean gameOver() {
        System.out.println("\n******************** GAME OVER ********************");
        return true;
    }

    // Method to start a new game
    public static String playAgain() {
        // Ask the player for input
        System.out.println("\nWould you like to play again (Y/N)? ");
        // Store the players input
        Scanner sc = new Scanner(System.in);
        String newGame = sc.nextLine();
        return newGame;
    }
}
