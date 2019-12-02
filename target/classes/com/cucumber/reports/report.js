$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/cucumber/feature/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Task in adactin hotel application",
  "description": "",
  "id": "task-in-adactin-hotel-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 112500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Launch hotel reservation application using URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Launch hotel reservation application",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Login to the application using username and password",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 3639011000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.login_to_the_application_using_username_and_password()"
});
formatter.result({
  "duration": 20155474000,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "To verify valid login details",
  "description": "",
  "id": "task-in-adactin-hotel-application;to-verify-valid-login-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@TC_101"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User verifies the username in the HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.user_verifies_the_username_in_the_HomePage()"
});
formatter.result({
  "duration": 142867800,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cHello[@]cbzsrini!\u003e but was:\u003cHello[ ]cbzsrini!\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.cucumber.stepdefinition.AdactinStepDefinition.user_verifies_the_username_in_the_HomePage(AdactinStepDefinition.java:68)\r\n\tat ✽.Then User verifies the username in the HomePage(src/test/java/com/cucumber/feature/Adactin.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1236493500,
  "status": "passed"
});
formatter.before({
  "duration": 60900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Launch hotel reservation application using URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Launch hotel reservation application",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Login to the application using username and password",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 779195100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.login_to_the_application_using_username_and_password()"
});
formatter.result({
  "duration": 3128689800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "To verify whether the check-out date field accepts a later date than checkin date",
  "description": "",
  "id": "task-in-adactin-hotel-application;to-verify-whether-the-check-out-date-field-accepts-a-later-date-than-checkin-date",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@TC_102"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Select location as in test data",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Select hotel as in test data",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Select room type as in test data",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select no-of-rooms as in test data",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter check-in-date later than the checkout-date field as in test data",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify that system gives an error saying ‘check-in-date should not be later than check-out-date’",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.select_location_as_in_test_data()"
});
formatter.result({
  "duration": 577613700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.select_hotel_as_in_test_data()"
});
formatter.result({
  "duration": 239828300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.select_room_type_as_in_test_data()"
});
formatter.result({
  "duration": 206495300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.select_no_of_rooms_as_in_test_data()"
});
formatter.result({
  "duration": 186907600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.enter_check_in_date_later_than_the_checkout_date_field_as_in_test_data()"
});
formatter.result({
  "duration": 648551800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_that_system_gives_an_error_saying_check_in_date_should_not_be_later_than_check_out_date()"
});
formatter.result({
  "duration": 128540800,
  "status": "passed"
});
formatter.after({
  "duration": 46300,
  "status": "passed"
});
formatter.before({
  "duration": 29800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Launch hotel reservation application using URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Launch hotel reservation application",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Login to the application using username and password",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 563282400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.login_to_the_application_using_username_and_password()"
});
formatter.result({
  "duration": 2292952000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "To check if error is reported if check-out date field is in the past",
  "description": "",
  "id": "task-in-adactin-hotel-application;to-check-if-error-is-reported-if-check-out-date-field-is-in-the-past",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@TC_103"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "Select location as in test data",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Select hotel as in test data",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Select room type as in test data",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select no-of-rooms as in test data",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enter check-out-date as in test data",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User Click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verify that application throws error message",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.select_location_as_in_test_data()"
});
formatter.result({
  "duration": 315379300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.select_hotel_as_in_test_data()"
});
formatter.result({
  "duration": 172249900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.select_room_type_as_in_test_data()"
});
formatter.result({
  "duration": 162406500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.select_no_of_rooms_as_in_test_data()"
});
formatter.result({
  "duration": 169173100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.enter_check_out_date_as_in_test_data()"
});
formatter.result({
  "duration": 309728800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_Click_on_Search_button()"
});
formatter.result({
  "duration": 262995600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_that_application_throws_error_message()"
});
formatter.result({
  "duration": 32563100,
  "status": "passed"
});
formatter.after({
  "duration": 35100,
  "status": "passed"
});
formatter.before({
  "duration": 17800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Launch hotel reservation application using URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Launch hotel reservation application",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Login to the application using username and password",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 1328650500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.login_to_the_application_using_username_and_password()"
});
formatter.result({
  "duration": 2932722200,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "To verify whether locations in Select Hotel page are displayed according to the location selected in Search Hotel",
  "description": "",
  "id": "task-in-adactin-hotel-application;to-verify-whether-locations-in-select-hotel-page-are-displayed-according-to-the-location-selected-in-search-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@TC_104"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "Select location as in test data",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Select hotel as in test data",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Select room type as in test data",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Select no-of-rooms as in test data",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User Enters the check-out-date as in test data",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Select No-of-adults as in test data",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Select No-of-children as in test data",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Click on Search button.",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Verify that hotel displayed is the same as selected in search Hotel form.",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.select_location_as_in_test_data()"
});
formatter.result({
  "duration": 322706700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.select_hotel_as_in_test_data()"
});
formatter.result({
  "duration": 153251300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.select_room_type_as_in_test_data()"
});
formatter.result({
  "duration": 170399300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.select_no_of_rooms_as_in_test_data()"
});
formatter.result({
  "duration": 168046000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_Enters_the_check_out_date_as_in_test_data()"
});
formatter.result({
  "duration": 236496700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.select_No_of_adults_as_in_test_data()"
});
formatter.result({
  "duration": 215305000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.select_No_of_children_as_in_test_data()"
});
formatter.result({
  "duration": 245642400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.click_on_Search_button_test3()"
});
formatter.result({
  "duration": 1953689000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_that_hotel_displayed_is_the_same_as_selected_in_search_Hotel_form()"
});
formatter.result({
  "duration": 51657800,
  "status": "passed"
});
formatter.after({
  "duration": 28500,
  "status": "passed"
});
formatter.before({
  "duration": 37900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Launch hotel reservation application using URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Launch hotel reservation application",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Login to the application using username and password",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 1101744900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.login_to_the_application_using_username_and_password()"
});
formatter.result({
  "duration": 2476375800,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "To verify whether check-in date and Check Out date are being displayed in Select Hotel page according to the dates selected in search Hotel.",
  "description": "",
  "id": "task-in-adactin-hotel-application;to-verify-whether-check-in-date-and-check-out-date-are-being-displayed-in-select-hotel-page-according-to-the-dates-selected-in-search-hotel.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@TC_105"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "User launched application and selects as in test data",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "User selects number of rooms as in test data",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "User enters check-in and check-out date",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User selects number of adults and childrens as in test data",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User verifies that hotel displayed is same as selected in search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.user_launched_application_and_selects_as_in_test_data()"
});
formatter.result({
  "duration": 289640700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_selects_number_of_rooms_as_in_test_data()"
});
formatter.result({
  "duration": 180782000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enters_check_in_and_check_out_date()"
});
formatter.result({
  "duration": 260366700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_selects_number_of_adults_and_childrens_as_in_test_data()"
});
formatter.result({
  "duration": 278611700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_clicks_on_search_button()"
});
formatter.result({
  "duration": 1339652700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_verifies_that_hotel_displayed_is_same_as_selected_in_search_hotel_page()"
});
formatter.result({
  "duration": 4905237600,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using id\u003dusername_show\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-06OKJ4FN\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getAttribute(Unknown Source)\r\n\tat com.cucumber.stepdefinition.AdactinStepDefinition.user_verifies_that_hotel_displayed_is_same_as_selected_in_search_hotel_page(AdactinStepDefinition.java:241)\r\n\tat ✽.Then User verifies that hotel displayed is same as selected in search hotel page(src/test/java/com/cucumber/feature/Adactin.feature:49)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 183671700,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d78.0.3904.108)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-06OKJ4FN\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\cbzsr\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56733}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b0f16e1bd59f2cb6918603d5fc5b64fa\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.cucumber.base.AllMethods.screenShot(AllMethods.java:112)\r\n\tat com.cucumber.stepdefinition.Hooks.afterHooks(Hooks.java:20)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:377)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:138)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:465)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:451)\r\n",
  "status": "failed"
});
});