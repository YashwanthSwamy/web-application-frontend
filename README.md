# Project Rubric

| Rubric | Commentary| 
|:---:|:---:|
| Web application | [AppLink](https://senti-duplg2fs2a-uc.a.run.app/), [GitRepo](https://github.com/YashwanthSwamy/web-application-frontend) |:---:|:---:|
| basic form, reporting | [AppLink](https://senti-duplg2fs2a-uc.a.run.app/), [GitRepo](https://github.com/YashwanthSwamy/web-application-frontend) |:---:|
| Data collection | [Collector](https://github.com/SudarshanSridhar/CollectorForSentimentAnalysis)|:---:|
| Data analyzer | [Analyzer](https://github.com/Varsha-JK/sentiment-analysis-analyzer)|:---:|
| Unit tests | [Dashboard](https://github.com/YashwanthSwamy/web-application-frontend/blob/main/src/Dashboard/Dashboard.test.tsx), [Login](https://github.com/YashwanthSwamy/web-application-frontend/blob/main/src/LoginForm/Login.test.tsx), [Signin](https://github.com/YashwanthSwamy/web-application-frontend/blob/main/src/SigninForm/Signin.test.tsx) [Backend - Collector](https://github.com/SudarshanSridhar/CollectorForSentimentAnalysis/blob/main/test/test_connection.py) [Backend-Analyzer](https://github.com/Varsha-JK/sentiment-analysis-analyzer/tree/main/test) |
| Data persistence any data store | [Code](https://github.com/SudarshanSridhar/CollectorForSentimentAnalysis/blob/main/Connection.py) connecting to Postgresql |
| Rest collaboration internal or API endpoint | [Frontend code](https://github.com/YashwanthSwamy/web-application-frontend/blob/main/src/Dashboard/Dashboard.tsx) - Integrating frontend with backend API end points |:--:|
| Product environment | [Web Page on GCP at 2.47](https://drive.google.com/file/d/1Bzy4iC968VXBoWmdVlWLZZkMCnaWGpz7/view), [Backend,Analyzer,Collector on Heroku at 1.59](https://drive.google.com/file/d/1Bzy4iC968VXBoWmdVlWLZZkMCnaWGpz7/view)|:--:|
| Integration tests | [Link](https://github.com/YashwanthSwamy/web-application-frontend/blob/main/src/IntegrationTests.test.tsx)|:--:|
| Using mock objects or any test doubles | [Dashboard](https://github.com/YashwanthSwamy/web-application-frontend/blob/main/src/Dashboard/Dashboard.test.tsx), [BackendAPI](https://github.com/Varsha-JK/sentiment-analysis-analyzer/blob/main/test/conftest.py)|
| Continuous integration | [Frontend](https://github.com/YashwanthSwamy/web-application-frontend/blob/main/.circleci/config.yml), [Backend-userInfo](https://github.com/YashwanthSwamy/user-info-service/blob/main/.circleci/config.yml), [Backend-Collector](https://github.com/SudarshanSridhar/CollectorForSentimentAnalysis/blob/main/.circleci/config.yml), [Backend-Analyzer](https://github.com/Varsha-JK/sentiment-analysis-analyzer/blob/main/.circleci/config.yml), [CircleCI](https://app.circleci.com/projects/project-dashboard/github/YashwanthSwamy/)|
| Production monitoring instrumenting | [Grafana Monitoring at 4.46](https://drive.google.com/file/d/1Bzy4iC968VXBoWmdVlWLZZkMCnaWGpz7/view)
| Acceptance tests | [Link](https://github.com/YashwanthSwamy/web-application-frontend/blob/main/src/AcceptanceTests.test.tsx)|:--:|
| Event collaboration messaging |[Kafka-producer](https://github.com/Varsha-JK/sentiment-analysis-analyzer/blob/main/kafka_messaging.py), [Kafka-consumer](https://github.com/SudarshanSridhar/CollectorForSentimentAnalysis/blob/main/kafka_messaging.py)|
| Continuous delivery | [Frontend](https://github.com/YashwanthSwamy/web-application-frontend/blob/main/.circleci/config.yml), [Backend-userInfo](https://github.com/YashwanthSwamy/user-info-service/blob/main/.circleci/config.yml), [Backend-Collector](https://github.com/SudarshanSridhar/CollectorForSentimentAnalysis/blob/main/.circleci/config.yml), [Backend-Analyzer](https://github.com/Varsha-JK/sentiment-analysis-analyzer/blob/main/.circleci/config.yml), [CircleCI](https://app.circleci.com/projects/project-dashboard/github/YashwanthSwamy/)|

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
