@fb1
Feature: Facebook Test scenarios 

Background: User launch the browser
Given User launch the fb

Scenario: Verify the login functionality
When User enter the email in the emailid feild
And User enter the password in the password feild

@fb3
Scenario Outline: Verify the register functionality with examples
When User enter the firstname '<FirstName>'
And User enter the lastname '<LastName>'
And User enter the mobilenumber '<Mobile>'
And User enter the password '<Password>'

Examples:
|FirstName|LastName|Mobile|Password|
|TestFN|TestLN|9876543212345|1234|
|Test1FN|Test1ln|12345678|5678|
|Test2FN|Test2LN|4657676|9012|
|Test2FN|Test2LN|4657676|9012|
|Test2FN|Test2LN|4657676|9012|
|Test2FN|Test2LN|4657676|9012|
