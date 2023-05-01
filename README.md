# TravelSomeWhere using HTML, CSS, JavaScript, Node.js and MongoDB



# project-documentation

<p align="center">
  <a href="" rel="noopener">
 <img width=500px height=200px src="Home Page.png" alt="Project logo"></a>
</p>


<h3 align="center">Home Page</h3>

---

<p align="center"> In my project, I had implemented the javascript, HTML, CSS, Node.js and MongoDB in the name of "TravelSomeWhere". This is a travel website that provides information on various destinations around the world. Users can search for destinations, view details about the location and plan their trip accordingly. Main Purpose of this project is to Plan a trip by selecting a destination and choosing from various travel options such as foods, maps, myths and activities. 
    <br> 
</p>

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Flow Chart](#flowchart)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>
Home Page of facebook cloning in name of "Friendzee" is a responsive website. The technologies used in this project are HTML, CSS, JavaScript, MongoDB and cluster. There are a few important modules in the project like home page, creating post, adding/deleting the images, online/offline status of user and Like/Share/Comments. The data is accessed using Rest API and then rendered into the webpage. I took almost 40 - 50 hrs to complete this project. SkillLync helped me by providing the wire-frames for all relevant features.

## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
1. Clone the repository and navigate to the root directory.
2. Install the required dependencies for the SpringBoot backend by running ./mvnw install or mvnw.cmd install on Windows or from https://start.spring.io/.
3. Configure the database connection by modifying application.properties with your database information.
4. Start the SpringBoot backend by running ./mvnw spring-boot:run or mvnw.cmd spring-boot:run on Windows or run "java application" from "Run As".
5. Navigate to the client directory and install the required dependencies for the Next.js frontend by running npm install.
6. Start the Next.js frontend by running npm run dev.
7. Open your web browser and navigate to http://localhost:3000 to view the application.


 See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

we have to install 

Eclipse(java 17),
Visual Studio,
MySQL5,
Next-auth, 
next-react, 
react-redux, 
@reduxjs/toolkit, 
TailwindCSS, 
axios, 
eslint

### Installing
A step by step series of examples that tell you how to get a development env running.

Back-End:

https://start.spring.io/

https://mysql.com/downloads/mysql/

https://www.eclipse.org/downloads/download.php?file=/oomph/epp/2023-03/R/eclipse-inst-jre-win64.exe

Front-End:

npx create-next-app facebook-clone

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

npm install react-icons --save

npm install --save next-auth

npm install axios

npm install react-redux

npm install @reduxjs/toolkit

npm install --save-dev eslint



## 🔧 Running the tests <a name = "tests"></a>

Running the project using the following commands:

1. By clicking "java application" from "Run As" for SpringBoot to start the project

2. By typing "npm run dev" for nextJs in Front-End


### Break down into end to end tests
End-to-end tests are designed to test the complete flow of the application from the user's perspective so it's important to think about the different user actions and interactions that need to be tested. 

1. User authentication: Test the user authentication flow, including logging in with valid and invalid credentials, session management, and logout functionality using the NextAuth(facebook).

2. User profile: Test the user profile functionality, including editing user information, uploading pictures, and viewing other users' profiles.

3. Creating the post: Test the ability to create posts and comments, including the display of posts and comments in the user's feed, and the ability to delete or edit posts and comments.

4. Search functionality: Test the ability to search for users, posts, and other content within the application.

5. Status: Test the status whether user is online or offline mode.

6. Integration with external APIs: Test any integrations with external APIs for social media platforms.

By testing the application end-to-end, the entire application is functioning as expected and that users can successfully complete the tasks.

## 🎈 Usage <a name="usage"></a>
1. Installation: Need to install all the supporting dependencies as mentioned in installing topic.

2. Configuration: Configure the database connection by modifying application.properties with your database information.

3. Usage instructions: Start the back end server, then start the front end using npm run dev, give the login access using NextAuth from facebook. After successful login, we can create the post using images/videos and Activity.

4. API documentation: REST APIs communicate via HTTP requests to perform standard database functions like creating, reading, updating, and deleting records (also known as CRUD) within a resource. For example, a REST API would use a GET request to retrieve a record, a POST request to create one, a PUT request to update a record, and a DELETE request to delete one. All HTTP methods can be used in API calls. A well-designed REST API is similar to a website running in a web browser with built-in HTTP functionality.

5. Limitations: As it is cloning project, users can able to create post or delete the post when using the application. This can include known bugs or issues, performance limitations, or any specific use cases that the application or library may not support.

6. Troubleshooting: Before starting the Back-end server, user can't start from the client side. It will throw axios: NetworkError.

## 🚀 Deployment <a name = "deployment"></a>
To deploy the application to a production environment, follow these steps:

1. Ensure that you have installed the required dependencies and have configured the necessary environment variables, such as the database connection details and any API keys or secrets(facebook).

2. Start the application by running "java application" from Run As for the backend.

3. Copy the built application to the server or hosting environment where you want to deploy the application.

4. Start the application by running "npm run dev" for the frontend.

5. Application is accessible from the internet by configuring http://loclhost:3000 and http://localhost:8080/api/v1/post.

6. Monitor the application for any errors or issues, and make any necessary updates or patches as needed.



## ⛏ Flow Chart <a name = "flowchart"></a>

![bg width:1000px](./flowchart_of_Fb_cloning.drawio.png)

- [MySQL](https://mysql.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NextJs](https://nextjs.org/) - Web Framework
- [Eclipse](https://www.eclipse.org/) - Server Environment

## ✍️ Authors <a name = "authors"></a>
- [@SkillLymc](https://github.com/kylelobo) - FSD

See also the list of [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>
I would like to thank the following individuals for their contributions to this project:

- The team at Skill-Lync, for generously providing the data used in this project. 

  Without their contributions, this project would not have been possible.
- References:
https://dev.to/cometchat/how-to-build-a-social-networking-site-with-next-js-facebook-clone-3eke

  https://www.codejava.net/frameworks/spring-boot/social-login-with-facebook-example

  https://bobbyhadz.com/blog/react-axios-network-error-stack-trace
