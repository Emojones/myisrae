#Code Louisville FSJS Capstone

You are about to clone my capstone repository for my Code Louisville capstone project. I've redone a basic website for a non-profit I used to volunteer to show case my knowledge of the MEAN stack. I've included use of Angular with custome directives, mongodb with mongoose for CRUD functions and boostrap 3 for stylings.

##Install Mongo
First you need to have mongodb installed in order to get some of the content back for angular. To installed mongo go to: https://www.mongodb.com/download-center?jmp=nav#community and follow the documentation to install.

##Install Node
You need to have node installed for this project to work. Get node from https://nodejs.org/en/ and follow the documentation to get it configured.

##clone git respository
From git use git clone to clone the files to your local machine. Use git clone repositoryName to do this.

##Launching NPM and Packages
Make sure you have node insalled first then using the bash shell navigate to the location of the repository directory. Once there type 'NPM Install' to install the dependency packages for the project.

##start mongo
To start mongo open a bash shell and type 'mongod' to start your mongo server. If you get a bash command not found error you will need to edit your windows files to recognize mongod as a path to the mongo bin file.

##start src/app.js
Using a window seperate from where you started mongo navigate to your repository directory and run 'src/app.js' you should see a notification that the server is running on port 3000 and that it is connected to the database. Now you're ready!

##navigate to localhost:3000/
With both mongo and the server running, open a new web browser and go to the web address 'localhost:3000/' to get to the site.
