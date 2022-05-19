# Things I need help with 

- Creating a dropdown list all off nba teams and add images to each name on the list 
- create a grid that looks simliar to the DRAFT image below (confirm that it is responsive and looks good on mobile)
- create a popup window or the icons in the top navbar (similar to the way its done on the [wordle app](https://www.nytimes.com/games/wordle/index.html))

The goal in the front-end of this is to keep it simple and have it 
mimmick the simplicity of the New York Times Wordle App. 

This app is built with reactJS so the CSS files are found under src/css dir. 
Each CSS component is named the same as the .js folder in the src/ dir as well. 
So if wanted to edit the grid in the middle of the app you can edit the src/css/Grid.css
and then edit the src/Grid.js file to see the changes. 


##### Spinning up the application 
 You will need to install docker to spin up the application properly. 
 I dont have the best way to do that in a windows environemnt but if you are using MacOS or Linux you can run the build.sh script or the compose.sh script in the scripts dir. 

Doing it this way allows you to spin up the proper env and not have to install dependancies or make changes locally on your machine. 

 To rebuild the image to see what your changes you can rerun the build.sh script and then check the changes on your browswer at http://localhost:3000 


 ## Draft Picture 
 This is an idea of what I would like the front of the app to look like. 
![Draft Idea](/src/img/drafts/graph-draft-idea.png "The graph should have 3 columns with a dropdown list in the left and right column and a small list in the middle.")

 ## Current Setup 
 This is what the current setup should look like when you spin it up with docker  
![Current setup](/src/img/drafts/tme-rough-draft.png "run the build.sh script to see locally")
