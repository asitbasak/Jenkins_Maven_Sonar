package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= "features",
                     glue= {"stefDefinition"},
                   format= {"pretty","html:test-output"}
                )

public class TestRunner {
	
	
	

}
