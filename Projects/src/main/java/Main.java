//Objective: Create a program that prints out whether you won or lost on each roll.

// This class is solely for the execution of the program

import java.util.List;

public class Main {

    public static void main(String[] args) {
        // Declaring and Storing the winning and loosing values
        // ArrayList of wining values on the first try
        List firstTryWinningValues = GameLogic.firstTryWinningValues();

        // ArrayList of loosing values on the first try
        List firstTryLosingValues = GameLogic.firstTryLosingValues();

        // Declaring the variable to be used to quit the game.
        String newGame = "Y";

        // Declaring the variable to store the players choice for a new game
        String playersChoice = "Y";

        // Starting a new game
        do {

            // Declaring a variable to store the point
            int point = 0;

            // Declaring and initializing a variable to store the condition in which the player looses starting at roll 2.
            int lossOnRoll2Plus = 7;

            // Declaring a variable to store the current try
            int currentTry = 1;

            // Declaring a variable to store when the game has ended
            boolean endOfGame = false;

            while (!endOfGame) {
                // Perform the following while the game is in process

                System.out.println("\n***************** Current Try = " + currentTry + " *****************");
                // First Try - Roll the dice and store the sum of both die
                int sumOfDieValues = GameLogic.newRoll();

                // Determine if the player won the game on the first try and if so end the game
                if (firstTryWinningValues.contains(sumOfDieValues)) {
                    GameLogic.youWon();
                    endOfGame = GameLogic.gameOver();
                    // Determine if the player would like to play again
                    System.out.print("\nWould you like to play again (Y/N)? ");
                    playersChoice = GameLogic.playAgain();
                } else if (firstTryLosingValues.contains(sumOfDieValues)) {
                    // Determine if the player loss the game on the first try and if so end the game
                    GameLogic.youLoss();
                    endOfGame = GameLogic.gameOver();
                    // Determine if the player would like to play again
                    System.out.print("\nWould you like to play again (Y/N)? ");
                    playersChoice = GameLogic.playAgain();
                } else {
                    // Store the point
                    point = sumOfDieValues;
                    System.out.println("POINT = " + point);
                    currentTry++; // Ends the first try

                    // Starts try 2
                    do {
                        System.out.println("\n***************** Current Try = " + currentTry + " *****************");
                        // Roll again and store the values
                        sumOfDieValues = GameLogic.newRoll();
                        // determine if the player won the game on subsequent tries and if so end the game
                        if (sumOfDieValues == point) {
                            GameLogic.youWon();
                            endOfGame = GameLogic.gameOver();
                            // Determine if the player would like to play again
                            System.out.print("\nWould you like to play again (Y/N)? ");
                            playersChoice = GameLogic.playAgain();
                        } else if (sumOfDieValues == lossOnRoll2Plus) {
                            // determine if the player loss the game on subsequent tries and if so end the game
                            GameLogic.youLoss();
                            endOfGame = GameLogic.gameOver();
                            // Determine if the player would like to play again
                            System.out.print("\nWould you like to play again (Y/N)? ");
                            playersChoice = GameLogic.playAgain();
                        } else {
                            currentTry++; // Move to the next try
                        }

                    } while (!endOfGame); // End the current game
                }

            }

        } while (newGame.equalsIgnoreCase(playersChoice)); // Game re-entry / exit condition
    }

}
