package com.example.DependencyInjection.service;

import com.example.DependencyInjection.repository.BookRepository;

public class BookService
{
    private BookRepository bookRepository;

    // Setter for DI
    public void setBookRepository(BookRepository bookRepository)
    {
        this.bookRepository = bookRepository;
    }

    public void addBook(String bookName)
    {
        System.out.println("BookService: Adding book...");
        bookRepository.saveBook(bookName);
    }
}