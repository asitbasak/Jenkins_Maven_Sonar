package stefDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {
	
	WebDriver driver;
	
	@Given("^Open Freecrm login page$")
	public void open_Freecrm_login_page() throws Throwable {
	   
		System.setProperty("webdriver.chrome.driver", "/software/chromedriver_win32/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.freecrm.com");
		
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("#1 Free CRM for Any Business: Online Customer Relationship Software", title);
	}

	@When("^enter Id and password$")
	public void enter_Id_and_password() throws Throwable {
	    
		driver.findElement(By.name("username")).sendKeys("asitbasak");
		driver.findElement(By.name("password")).sendKeys("hello123");
	}

	@Then("^sucessfull login$")
	public void sucessfull_login() throws Throwable {
		WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", loginBtn);
		
	}
	

}
