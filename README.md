# Project Name:
 Lingo Bingo: A Vocabulary Learning Application

# Purpose:
The purpose of this language learning web application is to make learning the Arabic language easy and enjoyable. For this reason, I have tried to make the web application user-friendly and attractive for people of all ages, using any device. Just the device has to be connected to the Internet to visit the website.

## Live URL:
- (https://react-learning-language.web.app/)

## Key Features:
Responsiveness: The website is fully responsive on mobile, tablet, and desktop.

1. Layout Structure:
The whole application will be on a single-page layout. With the following components.
Header: 
- A welcome message is shown with the user name at the top.  (only if user login) 
- A header with Logo at the Left, Login Button at the Right
If user Logged in ( user image and Log-Out Button are shown ) 
Footer; and
Main: The Main Section will show different pages based on route.

2. JSON Data Generation:
I have created a JSON data (array of objects) of 150 object of vocabularies.

3. Let’s Learn Page:
- Users are shown 10 static cards for 10 Lessons.  The card will have a simple Text Lesson-1/2/3
    - Clicking the card will redirect him/her to the lesson/lesson_no page

4. Lessons/:lesson_no  _private Route_:
This page is only accessible after login; if the user is not authenticated, he/she is redirected to the login page. 

5. Authentication System:
- User Login: On Clicking the Login Button / browsing any private Route user will be redirected to this route.
- User Registration: I have created a register page with a form, so that the user can register himself in this application. 

6. My-Profile _private Route_
On clicking on my profile at navbar, the user will see this page. The user will see all his Profile Information here. 

7. Tutorial page (Private Route):
- I have embedded 8 videos on this language from youtube.
- A Button “Learn Vocabularies” will navigate users to the “start-lesson” route.

8. I have implemented One Animation package on the Home Page.

9. Forget Password

10. Update Information Feature:
- On Clicking update, the user profile is updated from Firebase and the user is navigated to the my profile Route.

11. Speak up your Vocabularies
- On clicking a particular vocabulary card, the word is pronounced so that the user can hear the vocabularies.
NOTE :
Make sure the Arabic language with voice is installed on your PC. 
Go to PC Settings > Language > install this language with voice pack.

## Npm packages used:
- [tailwindcss](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)
- [Firebase](https://firebase.google.com/)
- [React Router](https://reactrouter.com/home)
- [animate.style](https://animate.style/)
- [react countup - npm](https://www.npmjs.com/package/react-countup)