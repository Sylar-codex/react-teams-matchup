## ReactJS Teams Matchup App 

[Github Repo](https://github.com/tmeralus/react-teams-matchup)

*Sorry for the wait brother.*

Above is the GitHub repository for us to finish building. Here is some of the guidelines and ideas I have for the project. This project is meant to be a simple project to showcase our skills in React JS, Docker, and modern development 
Of an application using the [12factor app method](https://12factor.net/). 

###### Inspiration and Idea 
I was inspired to create the app because a friend of mine had mentioned that every time his team (minnesota timberwolves) played my team (Miami Heat) they beat them every game. I didn't believe him and when i tried going to diffferent resources online like nba.com, stats.nba.com, landofbasketball.com, or anywhere else it always took 20+ clicks or 10+ minutes to look back at every nba season to find out how many times both teams played each other and who won. 

My idea here is to use the simplistic UI of the popular [Wordle](https://www.nytimes.com/games/wordle/index.html) game and create a ReactJS based web scraper that will allow you to match up two teams and find out how many times they have played each other in a current season, the last 5 seasons, and other stats about the teams. 

Here is a rough draft of what the UI should look like. 

[Rough Draft Image](https://github.com/tmeralus/react-teams-matchup/blob/main/src/img/tme-rough-draft.png)

I would like to use the [nba-api-client](
https://www.npmjs.com/package/nba-api-client) API to pull the data required to grab team names, wins, losses, and all data for the teams. I have not even started with importing the api or setting up the api to grab data so I dont have any idea how the best approach as of yet. 

This [github repo](https://github.com/JimmyYummy/NBA-stats-using-REACT) is an example of how we can get NBA stats using React and might be what we need to help us with this goal. 

As of right now I have been focused on the UI and making sure it is responsive and that there are fields in place to output the data. 

My goal at the end of all the UI changes is to give the site the look and feel of the Wordle game, but with old school video game like graphics from NBA Jam like the pictures [here](https://github.com/tmeralus/react-teams-matchup/blob/main/src/img/Nintendo%2064%20-%20NBA%20Jam%202000%20-%20Team%20Logos.png), [here](https://github.com/tmeralus/react-teams-matchup/blob/main/src/img/SNES%20-%20NBA%20Jam%20Tournament%20Edition%20-%20Menu%20Elements%20Fonts.png), [and here](https://github.com/tmeralus/react-teams-matchup/blob/main/src/img/SNES%20-%20NBA%20Jam%20Tournament%20Edition%20-%20Title%20Screen%20Logo.png). 


## Your Job
 I need assistance with the following: 
* configure the nba-api-client as our API to provide data to the app
* create a list of team names names that can be used in a dropdown list for choosing
* create the logic for pulling the data from the nba-api-client and providing that to the app. 
* testing the app in a containerized environment 
* setting up the app to run using github pages 


Lets do our best to keep an email chain as our communication tool to keep track of discussion 
points, changes and development, and other things like that. 


## End Goals 
The end goal of this project is to showcase a simple web app in ReactJS that follows modern technology practices and uses docker-compose to spin up 
The application for people to test and use.  
