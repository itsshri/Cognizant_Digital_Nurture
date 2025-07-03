package com.example.DependencyInjection;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.example.DependencyInjection.service.BookService;

@SpringBootApplication
public class DependencyInjectionApplication {

	public static void main(String[] args)
	{
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

		BookService bookService = (BookService) context.getBean("bookService");

		bookService.addBook("Clean Code by Robert C. Martin");
	}

}
