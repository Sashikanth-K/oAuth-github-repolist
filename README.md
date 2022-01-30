# OAuth Integration 

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




## Wireframe
![alt text](/Wireframe.png)
