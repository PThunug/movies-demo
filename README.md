# movies-demo



Task:- 

Design a single page application in Angular2+ for a Movie database. 

# Implemented SPA web app with technologies Google Firebase(For storing JSON data), Angular 5, Angular Material, TypeScript, CSS3, HTML5,angular materail

1.Assume there are 50 movies in the database. Every movie has a title, description, Average ratings, your rating, comments. 
# Data model created for movie 

2.Upon successful login, all the 50 movies shall be displayed to the user as tiles. Each title shall be clickable and upon a tile click, the movie details(title,description,ratings) appear on a different page. A normal user shall be able to give ratings and post comments for the movie. 

# implemented lazy loading until we have an given correct credentials this will increase startup time, wild card route, child routing introduced to movies list and movie detail pages
Upon singn up, every user will be treated as normal user, Testing users credentials
Normal user(username/password):   user@cyr3con.ai/normaluser

3.There shall be admin user who will be able to update details of a movie, add new movies, delete movies. 
# Differentiated the admin and normal user and admin user has spcial privilages to update movie details, this user can able to see admin dashboard
Admin user(username/password):  admin@cyr3con.ai/adminuser


4. The landing page shall contain a search bar that the users can search for a movie based on title. Also, there shall be options for the user to list movies based on average ratings. 
# implemented sorting, search and pagination for movie list

You can mimic a real database by storing the data with in the application and write services to fetch the data. Any other specifications not mentioned, you are free to make your own assumptions. It would be great if you could complete the assignment before Friday. Please upload the code to your github repo and provide access to anudeep@cyr3con.ai




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
