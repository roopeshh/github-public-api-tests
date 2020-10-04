## Prerequisites

1. **Docker** should be installed. You can install the latest version from [here](https://docs.docker.com/get-docker/).
2. **Nodejs** should be installed. You can install the LTS version from [here](https://nodejs.org/en/).
3. **Allure** should be installed for viewing the test results. You can install the latest version from [here](https://docs.qameta.io/allure/#_get_started).
4. You will need a IDE/text editor like [VSCode](https://code.visualstudio.com/download)/[WebStorm](https://www.jetbrains.com/webstorm/download/) or similar to view/edit the code.

## How to run the tests locally
- **To test with npm**: Update **_`src/config/local.env`_** with your github _username_ and _personal access token_.
- **To test with docker**: Update **_`Dockerfile`_** with your github _username_ and _personal access token_.
- You can generate _personal access token_ from your github account -> https://github.com/settings/tokens.

### Test With Makefile (npm)
1. Open the project folder (github-public-api-tests).
2. Run **_`source src/config/local.env`_** to set environment variables on your command line.
3. Run command **_`make npm`_** on your command line. It will run the tests and opens the allure test report in the browser.

### Test With Makefile (docker)
1. Open the project folder (github-public-api-tests).
2. Run command **_`make docker`_** on your command line. It will run the tests on docker locally. Unfortunately, allure doesn't have official image yet for reports on docker.

### Other way
1. Open the project folder (github-public-api-tests). 
2. Run **_`npm install`_** on your command line to install all the dependencies.
3. Run **_`source src/config/local.env`_** to set environment variables on your command line.
4. To run the tests, run command **_`npm test`_**. You can check for the test results in the terminal.
5. To see the test report run command **_`allure serve`_**. This opens test report in your browser.

#### Note:
- All the commands are run from folder **_github-public-api-tests_**.
- If you want to use the _username_ and _personal access token_ of my test account it is already saved in local.env. But, the _personal access token_ expires and you will have to request me for the new token(could be related to 2FA). Sorry for the inconvenience.

## CI/CD:
- Gitlab-CI integration is available [here](https://gitlab.com/roopesh.hiriyanna/github-public-api-tests/-/pipelines).
- For now, tests can be run on gitlab and then the test results in xml are stored as artifacts. But, we do not have the results in html yet.
