<div align="center">

  <h1 align="center">SHIFT-POSTING</h1>

  <p align="center">
    An interactive space for sales staff to manage commissions and communicate.
    <br />
    <a href="https://jshaq1.github.io/Project_4-ShiftPosting/undefined">View Demo</a>
    <br/>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#useful resources">Useful Resources</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>

## About The Project

![Screenshot of project](./shiftposting/public/Screenshot%202023-03-03%20at%206.16.51%20pm.PNG?raw=true"HUE")
![Screenshot of project](./shiftposting/public/Screenshot%202023-03-03%20at%206.17.29%20pm.PNG?raw=true"HUE")
![Screenshot of project](./shiftposting/public/Screenshot%202023-03-03%20at%206.17.15%20pm.PNG?raw=true"HUE")

Essentially JBHIFI where I currently work offer their sales people the chance to claim back commission they lose by discounting/pricematching items below a thresh-hold. The trouble is naturally they do not provide an automated way to keep track of this so its incumbant on the sales team to keep track and manage this manually. Currently there is no tool to calculate and keep record of commissions which makes this very difficult. 

This dashboard provides this calculator and a few extra features to make this teams life easier and in the process make sure they are being paid what they deserve. 
<br/>
<br/>
# Features (planned/complete)
 - [x] User Profiles 
    - [ ] Avatars
    - [x] Email auth
    - [x] Nickname's

 - [x] Commissions Calculator
    - [x] Save Comission
    - [x] Projected comissions
    - [x] Comissions weekly history
    - [ ] Current weekly largest commissions paid
    - [ ] Spived items
    
- [x]Chat Window
    - [x] Global all users 
    - [ ] Speech to text 
    - [ ] Only nice things API
<br/>
<br/>

# Built With

- React 
- npm 
- Material ui 
- Material uix 
- Firebase 
- Spline 

<br/>
<br/>

#  Getting Started

### Prerequisites

 ```sh
 npm install npm@latest -g
 npx install react
 ```

 ### Installation
 1. Clone the repo
    ```sh
    git clone https://github.com/Jshaq1/Project_4-ShiftPosting.git
    ```

 2. Install packages
    ```sh
    npm install
    ```

3. Sign up to firebase and add FireStore Database and Authentication 
4. Create a .env and paste in your project config from the firebase project window
    ```sh
    REACT_APP_FIREBASE_KEY='**************'
    REACT_APP_FIREBASE_DOMAIN='**************'
    REACT_APP_FIREBASE_DATABASE='**************'
    REACT_APP_FIREBASE_PROJECT_ID='**************'
    REACT_APP_FIREBASE_STORAGE_BUCKET='**************'
    REACT_APP_FIREBASE_SENDER_ID='**************'
    REACT_APP_MEMEGEN_APIKEY='**************'
    ```

### Useful Resources 
- https://github.com/splinetool/react-spline
- https://create-react-app.dev/
- https://firebase.google.com/docs
    

<br/><br/>
# Difficulties

### Spline 
 - A relatively new technology, there is a huge amount of documentation on how these 3D scenes interact with react as well as just JS in general, so I spent alot of time figuring out how to make use of the 3D assets . 

 - A lot of time was wasted trying to create my own 3D assets and in the end I was forced to use an accumulation of existing assets as creating my own was becoming more than I had planned on. 

 - The spline scene acts as its own div and consumes the entire space it occupies so you cant place other HTML elements within the scene or the interactivity of the Spline scene either is in front or behind. In hindsight youd want to split your scene into each component. 

 ### Firebase 
 - Creating an individual document for every commission and linking these to a user when using the pre built Authorization is difficult as the firestore and auth have no direct link. 

 - Anything more complex than the data I needed would proove difficult to attain using variables. 

 - Auth emailAndPassword does will create an account the moment it is called so making sure any conditionals played out before hand was something that caused alot of headaches as the Auth would often happen reguardless of my conditionals. Something to work on. 


# Unfinished 

### Coffee Run 
- This is basically a feature to organize and keep track of coffee orders and who owes whom and how much. Did not have time to impliment just yet so as of now the icon is just for show. 

### Customisation
- The theme and character customisation prooved to be alot of work outside of code, and as suck took a back seat to core functionality. In future I would hope to create a scenario where users can pick between a set of 5 character aesthetics to please. For the time being you have to be a while male with a beard which really is not overly acceptable. 

- Dark Mode was something I toyed with but ultimately only worked seemlessly with the material UI components that have this built in so will need to wkr on that later. 


 # Bugs
 
 ### Auth
 - Firebase Auth will occasionally create an account regardless of passing conditionals in code. Not sure why this happens but seems to bypass anything I put in the way when using any of firebase pre build log in forms 

### Login
- The login form shows for a second before loading up the spline scene regardless of login status. I believe this is due to the spline scene loading in before Auth has been retreived. So for a second the app is still waiting for the auth info from firebase to know if a user exists or not. 

### Errors 
- Errors code section also displays succesful logins under the same prefic as 'errors'. Not ideal and a bit hacky but something I need to go back and change. 

### Comissions 
- Commissions calculator will only show the total claimable on the side window for a short time till the firebase get occures and resets the data. This info is then available in the table but not ideal for this to dissapear from the larger display too fast. 

- The Commissions are not dated so its incumbant on the user to maintain this window and make sure they are deleting and using the data as they go. Something that needs to rectified as its important the user can see this info to know if they need to or have already used the data. 

