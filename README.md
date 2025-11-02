# Project Name: React Learning Language

# Purpose:
The purpose of this language learning web application is to make learning the Arabic language easy and enjoyable. For this reason, I have tried to make the web application

## Live URL:

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Key Features:
Responsiveness: Ensure the website is fully responsive on mobile, tablet, and desktop.

Layout Structure
The whole application will be on a single-page layout. With the following components.
Header: 
- Show a welcome message with the user name at the top.  (only if user login) 
- A header with Logo at the Left/ center, Login Button at the Right
If user Logged in ( show user image and Log-Out Button ) 

Footer
Main: The Main Section will show different pages based on route.

JSON Data Generation
Create a JSON data (array of objects) of a minimum of (50-200) object of vocabularies

3. Let’s Learn Page
- Show users 10 static cards for 10 Lessons.  The card will have a simple Text Lesson-1/2/3
    - Clicking the card will redirect you to the lesson/lesson_no page

4. Lessons/:lesson_no  _private Route_
This page is only accessible after login; redirect to the login page if the user is not authenticated. 

6. Authentication System
On Clicking the Login Button / browsing any private Route user will be redirected to this route.
User Login
User Registration
Create a register page with a form, so that the user can register himself in this application. 

7. My-Profile(Private Route)  _private Route_
On clicking on my profile at navbar,  the user will see this page.  The user will see all his Profile Information Here 

8. Tutorial page (Private Route):
- Embed 6-8 videos on this language from youtube
- A Button “Learn Vocabularies”  will navigate users to the “start-lesson”  route.

1. Implemented One Animation package on the Home Page

2. Forget Password

3. Update Information Feature:
- On Clicking update, update the user profile from Firebase and navigate the user to the my profile Route

4.  Speak up your Vocabularies
- On clicking a particular vocabulary card, pronounce the word so that the user can hear the vocabularies.
NOTE :   
If you use Spanish ,  make sure the Spanish language with voice  install on your PC. 
Go to PC Settings > Language >  install this language with voice pack.

## Npm packages used:
Currently, one npm package is listed:

- npm install firebase
- [animate.style](https://animate.style/)
- [@react countup - npm](https://www.npmjs.com/package/react-countup)
- uses [SWC](https://swc.rs/) for Fast Refresh
