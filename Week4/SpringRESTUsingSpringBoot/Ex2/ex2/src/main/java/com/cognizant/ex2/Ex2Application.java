package com.cognizant.ex2;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


import com.cognizant.ex2.model.Country;


@SpringBootApplication
public class Ex2Application {

	private static final Logger LOGGER = LoggerFactory.getLogger(Ex2Application.class);

	public static void main(String[] args) {
		LOGGER.debug("Inside main()");
		displayCountry();
	}

	public static void displayCountry() {
		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		Country country = context.getBean("country", Country.class);
		LOGGER.debug("Country : {}", country.toString());
	}

}
