# The Oxford Dictionary Application
Classification of the The Oxford Dictionary's 3000-word list by letter.
There are two practice parts. Turkish - English and English Turkish.
The logic of the exercises, for example, in the Turkish exercise there are only English words at first. If the word is pressed, its Turkish equivalent is opened.
## Getting Started
Clone this repository on your local machine.<br/><br/>
`git clone https://github.com/ibrahimaykutbas/the-oxford-dictionary`<br/><br/>
`cd my-app`<br/><br/>
Run the following commands into the project folder to install project dependencies.<br/><br/>
`npm init`<br/><br/>
`npm install`<br/><br/>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.<br/>
## Built With
ReactJS
## Available Scripts
In the project directory, you can run: <br/><br/>
`npm start`<br/><br/>
Runs the app in the development mode.<br/><br/>
`http://localhost:3000`<br/>
## API
The json-server needs to be initialized because the API is used in the project.<br/><br/>
This process needs to be done in a different terminal tab.<br/><br/>
Go to the api folder by going to the top directory.<br/><br/>
`cd..` <br/><br/>
`cd api` <br/><br/>
`json-server --watch db.json` <br/><br/>
This process will run on port 3000.<br/><br/>
Therefore, the application running on port 3000 will not work. The project is restarted by going to the terminal where the project is run.<br/><br/>
`CTRL+C` <br/><br/>
`Y`<br/><br/>
`npm start` <br/><br/>
`Yes`<br/>
## Learn More
You can learn more in the [Create React App documentation](https://create-react-app.dev/docs/getting-started/).<br/><br/>
To learn React, check out the [React documentation](https://reactjs.org/).
