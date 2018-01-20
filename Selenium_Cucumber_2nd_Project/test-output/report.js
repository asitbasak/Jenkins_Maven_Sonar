$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Testing of Freecrm login page",
  "description": "",
  "id": "testing-of-freecrm-login-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 23,
  "name": "Testing steps of Freecrm login page",
  "description": "",
  "id": "testing-of-freecrm-login-page;testing-steps-of-freecrm-login-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Open Freecrm login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "enter Id and password",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "sucessfull login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.open_Freecrm_login_page()"
});
formatter.result({
  "duration": 5992125964,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.enter_Id_and_password()"
});
formatter.result({
  "duration": 140889352,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.sucessfull_login()"
});
formatter.result({
  "duration": 7151706797,
  "status": "passed"
});
});