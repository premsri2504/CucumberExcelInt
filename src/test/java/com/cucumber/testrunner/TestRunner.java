package com.cucumber.testrunner;

import java.awt.Desktop;
import java.io.File;
import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.cucumber.base.AllMethods;
import com.cucumber.helper.ConfigReader;
import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {
		"com.cucumber.listener.ExtentCucumberFormatter:src\\test\\resource\\com\\cucumber\\reports\\ExtentReport\\extent.html",

		"json:src\\test\\resource\\com\\cucumber\\reports\\report.json",
		"junit:src\\test\\resource\\com\\cucumber\\reports\\report.xml",
		"html:src\\test\\resource\\com\\cucumber\\reports\\" }, features = "src\\test\\java\\com\\cucumber\\featureCompile\\", glue = "com.cucumber.stepdefinition", tags = "@fb1", dryRun = false, strict = true, monochrome = true)

public class TestRunner extends AllMethods {

	@BeforeClass
	public static void browserLaunch() throws Throwable {
		try {
			ConfigReader cr = new ConfigReader();
			driver = gettingBrowser(cr.getBrowserName());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@AfterClass
	public static void quit() throws IOException, InterruptedException {
		driver.quit();
		Reporter.loadXMLConfig(new File(
				System.getProperty("user.dir") + "\\src\\test\\resource\\com\\cucumber\\prop\\extent-config.xml"));

		File htmlFile = new File(System.getProperty("user.dir")
				+ "\\\\src\\\\test\\\\resource\\\\com\\\\cucumber\\\\reports\\\\ExtentReport\\\\extent.html");
		Desktop.getDesktop().browse(htmlFile.toURI());

	}

}
