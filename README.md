Name:  Friday Night Roulette
Team Members:  Lisa Ewart, Miki Collins, Steven Sammon
Project Description:  Are you too lazy to figure out what you want to do on a Friday night?  If the answer is yes, this is the app for you!
Through a series of questions and/or inputs, this app will determine what users in the Atlanta area do on a Friday night.  The app will elicit the information through a series of unrelated questions that correlate to the search parameters in the APIs.  Our initial goal is to provide the user with either a restaurant recommendation or a recipe recommendation (depending on whether the app determines that the user should stay in or go out), but if time allows, the app will also provide a movie recommendation or other activity recommendation.  This app will utilize the EatStreet API and Edamam API.
Basic Tasks:
1.	By 12/5/2017 a.m.:  Basic understanding of the APIs, the questions for the user relating to the search parameters and the activity array, and selection of associated images.  
2.	By 12/5/2017 p.m.:  Write user stories; divvy up tasks; basic html and Jquery inputs; return results from API.
3.	By 12/6/2017 p.m.:  Connect backend with front end; develop storage component; MVP finalized.
4.	By 12/7/2017 p.m.:  Continue styling; develop “rejection” and generation of new results; develop “suspense” mechanism.
5.	12/8/2017 p.m.:  final styling; debugging, and presentation preparation.

______________________________
Team Notes:
1.	Understand how APIs work – EatStreet and Edamam
2.	Develop the Questions
A.	Develop the questions that determine whether user stays in or out.
B.	If user out
(1)	Cuisine
(2)	Location in Atlanta
C.	If user in
(1)	Meat 
(2)	Vegetable
(3)	Cuisine
D.	Develop the array of activities 
(1)	For inside
(2)	For outside
3.	Develop the basic UI
A.	Opening state – clever to announce the game (every user)
B.	Second state – first question (every user)
C.	Third State 
(1)	State A:  User In (users who are staying in)
(2)	State B:  User Out (users who are staying out)
D.	Fourth State – generating results (every user)
E.	Fifth State
(1)	State A:  User in results (return recipe and activity)
(2)	State B:  User out results (return restaurant and activity)

UserStories
(1)	As a user, I want to know the purpose of the App.
(2)	As a user, if I am going to provide information, I need to be able to input or make a selection.  
(3)	As a user, I want to see a display of the selected activity and understand what that activity is.
(4)	As a user, I want my answers to the questions to be saved so that I don’t have to answer again if the session is terminated or the page is refreshed.
(5)	As a user, I want to be in suspense as I am waiting for my results.
(6)	As a user, I want to generate a new experience if I do not like the experience selected for me.  But I do not want to reinput information or reanswer questions.  
Other ideas:
•	link to the dating website if they want to have a date
•	spinning during generation



