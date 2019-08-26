package com.tts.oop.model;

public class LibraryItem {

    // Attributes
    // Each Library Item has a:
    private int ISBN;
    private String locationTag; // encoding to locate and store on shelves
    private String shelfLocation;
    private String title;
    private String[] Author; // Array is used to account for multiple authors
    private String publisher;
    private String[] genre; // Array is use to account for multiple genres
    private String format;
    private String releaseDate;

    // Constructor
    public LibraryItem(int ISBN, String locationTag, String shelfLocation, String title, String[] author, String publisher, String[] genre, String format, String releaseDate) {
        this.ISBN = ISBN;
        this.locationTag = locationTag;
        this.shelfLocation = shelfLocation;
        this.title = title;
        Author = author;
        this.publisher = publisher;
        this.genre = genre;
        this.format = format;
        this.releaseDate = releaseDate;
    }
}
