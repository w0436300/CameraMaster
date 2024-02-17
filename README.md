<img width="150px" src="https://w0244079.github.io/nscc/nscc-jpeg.jpg" >

# WEBD 5010 - Full Stack App


# Express API for MongoDB Data with Deployment

## Objective

This assignment builds on your previous work, assuming you have already defined and imported your dataset into both your local MongoDB instance running in Docker and your cloud instance hosted on MongoDB Atlas. The goal is to enhance your Express API, deploy it live on Render.com, and configure the application to function in both development and live environments using environment variables.

## Instructions

### REQ-1 Create the Express application
Create an express API application that exposes endpoints to be able to retrieve your custom-defined dataset created from Assignment 1. 
Use this repository to store all of the necessary files and packages.

### REQ-2 Define the required API endpoints
1. The first endpoint should return all of the data defined in your MongoDB collection of data.
2. The second endpoint should return a single document from your collection according to the document's unique id.
3. You will create more endpoints in the future to allow manipulation of the data, however for now, simply define these two endpoints.

### REQ-3 Define a Mongoose Model and Schema that reflects the documents currently stored in your MongoDB
Just as we defined the beginnings of a Student schema in a previous ICA, so too should you use Mongoose to describe the data and shape of your documents.

### REQ-4 Configure the app to function both in your development environment and in a deployment environment, such as render.com
In the previous ICA, we explored how one can configure an application's behaviour based on specifically-defined variables (env variables). Add the necessary code such that the application will communicate with the applicable database depending on the environment in which it is running.

### REQ-5 Deployment to Render.com
As in the previous ICA, create a Web Service in Render.com and tie it to this repository such that the code in this repository is deployed, built, and correctly executes in a live environment. This deployment should also contain all necessary configurations/variables so that the live application can connect and use the data defined on MongoDB Atlas.
