# Whiteboard Client - Student

This is a Angular client for the Whiteboard web app. It is built for student to see their courses and take quizzes. The client for faculty is in another repository: [whiteboard-client-faculty](https://github.com/SiyanH/whiteboard-client-faculty).

Whiteboard is a simple learning management platform where faculty can create courses and learning materials for students with various types of widgets, and students can take, submit and get scores for quizzes.

## Test

You can test this app by either visiting the [live demo](https://wbdv-sp20-siyan-client-angular.herokuapp.com/) hosted on Heroku or running the code on your local machine.

*Please note that the live demo may take few minutes to start when you visit it.*

RESTful web services were built on a [Node.js server](https://github.com/SiyanH/whiteboard-server-node) for the client to retrieve courses and quizzes. A generic server was also used to provide some of the web services for learning purpose. 

*Please note that only courses added using the [faculty client](https://github.com/SiyanH/whiteboard-client-faculty) or the RESTFul APIs will be shown in the course list.*

## Available Scripts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.5.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Disclaimer

This is a personal project for CS5610 Web Development and the repository was migrated from GitHub Enterprise. For maintaining academic intergity, please do NOT reuse any code in this repository if you are working on your project for a related course.
