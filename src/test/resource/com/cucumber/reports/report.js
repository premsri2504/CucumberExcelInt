$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Facebook3.feature");
formatter.feature({
  "line": 2,
  "name": "Facebook Test scenarios",
  "description": "",
  "id": "facebook-test-scenarios",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@fb1"
    }
  ]
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Verify the register functionality with examples",
  "description": "",
  "id": "facebook-test-scenarios;verify-the-register-functionality-with-examples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@fb3"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enter the firstname \u0027\u003cFirstName\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter the lastname \u0027\u003cLastName\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enter the mobilenumber \u0027\u003cMobile\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enter the password \u0027\u003cPassword\u003e\u0027",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "facebook-test-scenarios;verify-the-register-functionality-with-examples;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Mobile",
        "Password"
      ],
      "line": 19,
      "id": "facebook-test-scenarios;verify-the-register-functionality-with-examples;;1"
    },
    {
      "cells": [
        "TestFN",
        "TestLN",
        "9876543212345",
        "1234"
      ],
      "line": 20,
      "id": "facebook-test-scenarios;verify-the-register-functionality-with-examples;;2"
    },
    {
      "cells": [
        "Test1FN",
        "Test1ln",
        "12345678",
        "5678"
      ],
      "line": 21,
      "id": "facebook-test-scenarios;verify-the-register-functionality-with-examples;;3"
    },
    {
      "cells": [
        "Test2FN",
        "Test2LN",
        "4657676",
        "9012"
      ],
      "line": 22,
      "id": "facebook-test-scenarios;verify-the-register-functionality-with-examples;;4"
    },
    {
      "cells": [
        "Test2FN",
        "Test2LN",
        "4657676",
        "9012"
      ],
      "line": 23,
      "id": "facebook-test-scenarios;verify-the-register-functionality-with-examples;;5"
    },
    {
      "cells": [
        "Test2FN",
        "Test2LN",
        "4657676",
        "9012"
      ],
      "line": 24,
      "id": "facebook-test-scenarios;verify-the-register-functionality-with-examples;;6"
    },
    {
      "cells": [
        "Test2FN",
        "Test2LN",
        "4657676",
        "9012"
      ],
      "line": 25,
      "id": "facebook-test-scenarios;verify-the-register-functionality-with-examples;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 224900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launch the fb",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_fb()"
});
formatter.result({
  "duration": 6785289400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify the register functionality with examples",
  "description": "",
  "id": "facebook-test-scenarios;verify-the-register-functionality-with-examples;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@fb3"
    },
    {
      "line": 1,
      "name": "@fb1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enter the firstname \u0027TestFN\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter the lastname \u0027TestLN\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enter the mobilenumber \u00279876543212345\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enter the password \u00271234\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "TestFN",
      "offset": 26
    }
  ],
  "location": "Stepdefinition.user_enter_the_firstname_D(String)"
});
formatter.result({
  "duration": 324015400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestLN",
      "offset": 25
    }
  ],
  "location": "Stepdefinition.user_enter_the_lastname_D(String)"
});
formatter.result({
  "duration": 339688500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9876543212345",
      "offset": 29
    }
  ],
  "location": "Stepdefinition.user_enter_the_mobilenumber_d(String)"
});
formatter.result({
  "duration": 240128600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 25
    }
  ],
  "location": "Stepdefinition.user_enter_the_password_d(String)"
});
formatter.result({
  "duration": 143589600,
  "status": "passed"
});
formatter.after({
  "duration": 173900,
  "status": "passed"
});
formatter.before({
  "duration": 39700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launch the fb",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_fb()"
});
formatter.result({
  "duration": 2743789900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify the register functionality with examples",
  "description": "",
  "id": "facebook-test-scenarios;verify-the-register-functionality-with-examples;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@fb3"
    },
    {
      "line": 1,
      "name": "@fb1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enter the firstname \u0027Test1FN\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter the lastname \u0027Test1ln\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enter the mobilenumber \u002712345678\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enter the password \u00275678\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Test1FN",
      "offset": 26
    }
  ],
  "location": "Stepdefinition.user_enter_the_firstname_D(String)"
});
formatter.result({
  "duration": 214928200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test1ln",
      "offset": 25
    }
  ],
  "location": "Stepdefinition.user_enter_the_lastname_D(String)"
});
formatter.result({
  "duration": 248369600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 29
    }
  ],
  "location": "Stepdefinition.user_enter_the_mobilenumber_d(String)"
});
formatter.result({
  "duration": 261651400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5678",
      "offset": 25
    }
  ],
  "location": "Stepdefinition.user_enter_the_password_d(String)"
});
formatter.result({
  "duration": 211189200,
  "status": "passed"
});
formatter.after({
  "duration": 62300,
  "status": "passed"
});
formatter.before({
  "duration": 43900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launch the fb",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_fb()"
});
formatter.result({
  "duration": 3189636600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify the register functionality with examples",
  "description": "",
  "id": "facebook-test-scenarios;verify-the-register-functionality-with-examples;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@fb3"
    },
    {
      "line": 1,
      "name": "@fb1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enter the firstname \u0027Test2FN\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter the lastname \u0027Test2LN\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enter the mobilenumber \u00274657676\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enter the password \u00279012\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Test2FN",
      "offset": 26
    }
  ],
  "location": "Stepdefinition.user_enter_the_firstname_D(String)"
});
formatter.result({
  "duration": 235651900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test2LN",
      "offset": 25
    }
  ],
  "location": "Stepdefinition.user_enter_the_lastname_D(String)"
});
formatter.result({
  "duration": 209710600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4657676",
      "offset": 29
    }
  ],
  "location": "Stepdefinition.user_enter_the_mobilenumber_d(String)"
});
formatter.result({
  "duration": 181465900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9012",
      "offset": 25
    }
  ],
  "location": "Stepdefinition.user_enter_the_password_d(String)"
});
formatter.result({
  "duration": 140867600,
  "status": "passed"
});
formatter.after({
  "duration": 38200,
  "status": "passed"
});
formatter.before({
  "duration": 37100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launch the fb",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_fb()"
});
formatter.result({
  "duration": 2600297300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify the register functionality with examples",
  "description": "",
  "id": "facebook-test-scenarios;verify-the-register-functionality-with-examples;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@fb3"
    },
    {
      "line": 1,
      "name": "@fb1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enter the firstname \u0027Test2FN\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter the lastname \u0027Test2LN\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enter the mobilenumber \u00274657676\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enter the password \u00279012\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Test2FN",
      "offset": 26
    }
  ],
  "location": "Stepdefinition.user_enter_the_firstname_D(String)"
});
formatter.result({
  "duration": 181432500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test2LN",
      "offset": 25
    }
  ],
  "location": "Stepdefinition.user_enter_the_lastname_D(String)"
});
formatter.result({
  "duration": 300530200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4657676",
      "offset": 29
    }
  ],
  "location": "Stepdefinition.user_enter_the_mobilenumber_d(String)"
});
formatter.result({
  "duration": 184967600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9012",
      "offset": 25
    }
  ],
  "location": "Stepdefinition.user_enter_the_password_d(String)"
});
formatter.result({
  "duration": 140017800,
  "status": "passed"
});
formatter.after({
  "duration": 37100,
  "status": "passed"
});
formatter.before({
  "duration": 33800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launch the fb",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_fb()"
});
formatter.result({
  "duration": 2101840900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify the register functionality with examples",
  "description": "",
  "id": "facebook-test-scenarios;verify-the-register-functionality-with-examples;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@fb3"
    },
    {
      "line": 1,
      "name": "@fb1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enter the firstname \u0027Test2FN\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter the lastname \u0027Test2LN\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enter the mobilenumber \u00274657676\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enter the password \u00279012\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Test2FN",
      "offset": 26
    }
  ],
  "location": "Stepdefinition.user_enter_the_firstname_D(String)"
});
formatter.result({
  "duration": 211345900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test2LN",
      "offset": 25
    }
  ],
  "location": "Stepdefinition.user_enter_the_lastname_D(String)"
});
formatter.result({
  "duration": 165403500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4657676",
      "offset": 29
    }
  ],
  "location": "Stepdefinition.user_enter_the_mobilenumber_d(String)"
});
formatter.result({
  "duration": 143036500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9012",
      "offset": 25
    }
  ],
  "location": "Stepdefinition.user_enter_the_password_d(String)"
});
formatter.result({
  "duration": 117923300,
  "status": "passed"
});
formatter.after({
  "duration": 30100,
  "status": "passed"
});
formatter.before({
  "duration": 47300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launch the fb",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_fb()"
});
formatter.result({
  "duration": 2453101700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify the register functionality with examples",
  "description": "",
  "id": "facebook-test-scenarios;verify-the-register-functionality-with-examples;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@fb3"
    },
    {
      "line": 1,
      "name": "@fb1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enter the firstname \u0027Test2FN\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter the lastname \u0027Test2LN\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enter the mobilenumber \u00274657676\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enter the password \u00279012\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Test2FN",
      "offset": 26
    }
  ],
  "location": "Stepdefinition.user_enter_the_firstname_D(String)"
});
formatter.result({
  "duration": 217357200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test2LN",
      "offset": 25
    }
  ],
  "location": "Stepdefinition.user_enter_the_lastname_D(String)"
});
formatter.result({
  "duration": 182955600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4657676",
      "offset": 29
    }
  ],
  "location": "Stepdefinition.user_enter_the_mobilenumber_d(String)"
});
formatter.result({
  "duration": 176900500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9012",
      "offset": 25
    }
  ],
  "location": "Stepdefinition.user_enter_the_password_d(String)"
});
formatter.result({
  "duration": 140300900,
  "status": "passed"
});
formatter.after({
  "duration": 29900,
  "status": "passed"
});
});