# BACTracker Source Code
This GitHub repository contains the code for our Capstone project.

## About the Project
<img align="right" width="150" height="150" src="./assets/icons/BACtracker_logo.png">
Through this project, our group has created and implemented a mobile application that serves as a toolkit on safe alcohol consumption practices for our fellow peers. The app provides a hub of information regarding alcohol consumption, safety practices, and general resources. Using user specific demographics and information, the app can also calculate the BAC (Blood Alcohol Content) of the user as they input the different drinks they have consumed. 

## About the GitHub
[App.js:](./App.js) Serves as the home file of the app. Holds imports to all pages... 

[License File:](./LICENSE) Outlines copyright and other software permissions of our project. 

[Assets Directory:](./assets/) Contains more specific directories that contain visual elements used in our application
<img align="right" height="200" src="./assets/avatars/Curious_Rosie_shadow.png">
- [Avatars directory:](./assets/avatars/) Contains image files of our avatar: Rosie
- [Icons directory:](./assets/icons/) Contains image files of our logo
- [Images directory:](./assets/images/) Contains other image files used in our app

[Components Directory:](./components/) Contains shared components used across all of the screens (such as modules and reusable parts)
- [styles.js:](./components/styles.js) Contains all of our styling rules within one constant to be imported to all screens
- [AlcoholPopUp.js:](./components/AlcoholPopUp.js) Popup component displaying information on common alcohol drink types
- [CalcDrinkCards.js:](./components/CalcDrinkCards.js) Component displaying drinks stored in async storage when calculating BAC
- [InfoTopicPage.js:](./components/InfoTopicPage.js) Page component outlining topic pages within information hub
- [Superscript.js:](./components/Superscript.js) Text component linking source and is superscripted for citation purposes

[JSON Directory:](./json/) Contains JSON files containing data used to create pages and calculate BAC
- [alcoholtypes directory:](./json/alcoholtypes/) Contains separate JSON files for each alcohol type explained in app
- [bac-levels.json:](./json/bac-levels.json) Contains data on different BAC levels and effects felt
- [sources.json:](./json/sources.json) Contains list of sources
- [topics.json:](./json/topics.json) Contains data and information on different topics within information hub

[Screens Directory:](./screens/) Contains JavaScript files of all individual screens of our app
- [aboutScreens directory:](./screens/aboutScreens/) Contains Javascript files of pages in the About section of our app
    - [HowToUse.js:](./screens/aboutScreens/HowToUse.js) Contains page explaining how users can use and navigate our app
    - [OurMission.js:](./screens/aboutScreens/OurMission.js) Contains page outlining project mission and team
    - [OurSources.js:](./screens/aboutScreens/OurSources.js) Contains page listing the sources used to create this toolkit
- [onboardingScreens directory:](./screens/onboardingScreens/) Contains Javascript files of onboarding pages that only show up at the beginning of the user's journey
- [AddDrink.js:](./screens/AddDrink.js) Contains page navigated through the BAC Calculator page that allows user to add drink to the calculator
- [BACCalc.js:](./screens/BACCalc.js) Contains the BAC calculator page
- [CommonAlcoholTypes.js:](./screens/CommonAlcoholTypes.js) Contains page listing different common alcohol types - a sub page of the information hub
- [InformationHub.js:](./screens/InformationHub.js) Contains the main home page of the app - an information hub
- [Profile.js:](./screens/Profile.js) Contains the profile page where users can change personal information and read about project and app

## How to Build and Deploy Code
TODO: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## How to Contribute to Code
TODO: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 

## About Us
Hello! We're iBant, a group of four Informatics students studying at the University of Washington. Through this Capstone Project, we aim to utilize and reflect our education at the iSchool to produce a product that fills an information gap and creates positive social impact.<img align="right" height="200" src="./assets/avatars/Casual_Rosie.png"> 
<br>
Upon reflecting on our personal and fellow peer's experiences, we decided to create a toolkit to help our fellow students with safe alcohol consumption practices. Overuse of alcohol and abuse that leads to unsafe drinking can be both dangerous in the moment and long term among young adults. Through this, we hope to fill the information gap and address misinformation regarding safe alcohol consumption.

### Project Group Member Contact Information
Melina Perraut: mperraut@uw.edu
<br>
Emiri Nishizawa: emirin1@uw.edu
<br>
Roshni Srikanth: rsrika@uw.edu
<br>
Gisele Fox: gjfox@uw.edu
