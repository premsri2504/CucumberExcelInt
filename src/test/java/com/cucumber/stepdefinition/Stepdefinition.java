package com.cucumber.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.cucumber.testrunner.TestRunner;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdefinition {

	public static WebDriver driver = TestRunner.driver;

	@When("^User launch the fb$")
	public void user_launch_the_fb() {
		driver.get("https://www.facebook.com/");

	}
	@When("^User enter the email in the emailid feild$")
	public void user_enter_the_email_in_the_emailid_feild() throws Throwable {
		driver.findElement(By.id("email")).sendKeys("test");
	}

	@When("^User enter the password in the password feild$")
	public void user_enter_the_password_in_the_password_feild() throws Throwable {
		driver.findElement(By.id("pass")).sendKeys("test");

	}

	@When("^User click on login button$")
	public void user_click_on_login_button() throws Throwable {
		driver.findElement(By.id("loginbutton")).click();
	}

	@When("^User enter the email id '(.*)'$")
	public void user_enter_the_email_id_d(String arg) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(arg);

	}

	@When("^User enter the password '(.*)'$")
	public void user_enter_the_password_d(String arg) throws Throwable {
		driver.findElement(By.id("pass")).sendKeys(arg);

	}

	@When("^User enter the firstname '(.*)'$")
	public void user_enter_the_firstname_D(String arg) throws Throwable {
		driver.findElement(By.name("firstname")).sendKeys(arg);
	}

	@When("^User enter the lastname '(.*)'$")
	public void user_enter_the_lastname_D(String arg) throws Throwable {
		driver.findElement(By.name("lastname")).sendKeys(arg);

	}

	@When("^User enter the mobilenumber '(.*)'$")
	public void user_enter_the_mobilenumber_d(String arg) throws Throwable {
		driver.findElement(By.name("reg_email__")).sendKeys(arg);

	}

}
