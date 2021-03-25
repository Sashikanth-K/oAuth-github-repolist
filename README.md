# OAuth Integration Code Challenge
## Instructions
Congratulations, you made it to the next step at Zelt's recruiting process! At this stage, we need to check your techinical skills by asking you to do what you like the most: writing code.
In this technical challenge we would like to see your best work. The most important aspects that we're going to judge is your capacity to produce high quality code that is well organised, readable, testable and that follows the best practices in the software engineering industry. That's why we provide you a boilerplate project so you don't need to spend time with it.  We'd like you to create a private repository (you can fork this repo or you can clone it and then use the code for your repo) and invite us to have access to it.
We expect you to collaborate with us the same way that you'd do in a daily basis when working at Zelt, meaning:
* Create (one or multiple, at your discretion) pull requests with your changes.
* Write clear commit messages and keep your commit history clean.
* We would like to see some tests (Frontend and Backend). There's no need to cover everything, just pick the most important cases to see how you deal with it.
* If you're applying to a Frontend/Fullstack role, it's nice to give some attention to the UI/UX aspect of it.
### Brief
1. Create a web app which enables a user to view his github profile details after authorizing the Github application the user has created.
2. Create a page where the user can see his public and private repositories, filter and sort them.
## Requirements
### * Make sure your repository is private and add us as collaborators. You can invite us using the following usernames: rbagrin, elgutierrez and xBartu
* Create the Github OAuth application.
* Create a start page with a form containing a button which will be used to initiate the Github OAuth flow.
* On clicking the button you should start the OAuth flow and be redirected to the Github Authorization page.
* After the user accepts the Authorization, store the credentials so you can use the Github API.
* Using the credentials call the Github API to get the needed information and list it on the /results page of the application.
* You should use Node JS and Express Routes for every API call you make. The only frontend requests should be the initialize the OAuth flow and the getUserData path after you obtained the credentials for the OAuth app and stored them.
* Use the .env file to store the Github Client Id and Client Secret.
### Needed information
* Authenticated user's login, id, link to user's github page (on click redirect to the user's profile) and email (if available - email is available if listed as public on github page).
* login, id, link to user's github page and email of the octocat user.

### The tech stack
#### Frontend
* React
* Tailwindcss

#### Backend
* Node JS 15.7.0
* Express framework

#### Database
* sqlite3

## Run locally

Clone the repository. Then from 2 different terminals set up the backend and the frontend of the app.
### Compile the web-api:
```
$ cd api
$ npm install
$ ./node_modules/.bin/sequelize-cli db:migrate
$ ./node_modules/.bin/sequelize-cli db:seed:all
$ npm run dev
```
### Compile the web-app:
```
$ cd frontend
$ npm install
$ npm start
```
You should be able to access the app inside the browser using ```localhost:3000```.
The web api should be running on port ```5000```.
If everything went as expected, on the homepage of the app you should see the ```Hello World from API!```.
You also can access `/debug` from the browser to see a list with the users and the credentials that are now stored in the database.


## Quick tips
* Use the existent credentials table to save the credentials. You can use 'github' as the appName for the record.
* You don't need to implement user authetication and you don't need to save multiple records of credentials for different users, just save the credentials once (you can store the credentials using appName = 'github' and then query the credentials using the appName = 'github', but make sure you store the credentials once or you replace the credentials if you've already stored them). 
* The focus should be on implementing the OAuth flow and querying the asked information using the Github API.
* There are no limitations on how the app should work as long as you get the asked information using the Github API. Feel free to change the databse structure if you need to.

## Wireframe
![alt text](/Wireframe.png)
