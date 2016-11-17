#Code Louisville FSJS Capstone

You are about to clone my capstone repository for my Code Louisville capstone project. I've redone a basic website for a non-profit I used to volunteer to show case my knowledge of the MEAN stack. I've included use of Angular with custome directives, mongodb with mongoose for CRUD functions and boostrap 3 for stylings.

##Install Mongo
First you need to have mongodb installed in order to get some of the content back for angular. To installed mongo go to: https://www.mongodb.com/download-center?jmp=nav#community and follow the documentation to install.

##Install Node
You need to have node installed for this project to work. Get node from https://nodejs.org/en/ and follow the documentation to get it configured.

##Clone git respository
From git use git clone to clone the files to your local machine. Use git clone repositoryName to do this.

##Launching NPM and Packages
Make sure you have node insalled first then using the bash shell navigate to the location of the repository directory. Once there type 'NPM Install' to install the dependency packages for the project.

##Start mongo
To start mongo open a bash shell and type 'mongod' to start your mongo server. If you get a bash command not found error you will need to edit your windows files to recognize mongod as a path to the mongo bin file.

##Start src/app.js
Using a new window from where you started mongo navigate to your repository directory and run 'node src/app.js' you should see a notification that the server is running on port 3000 and that it is connected to the database. Now you're ready!

##Navigate to localhost:3000/
With both mongo and the server running, open a new web browser and go to the web address 'localhost:3000/' to get to the site.

####Other stuff
At this time I chose not to minify or ugly for the sake of peer review. Having easy to read code makes it a lot easier to get tips from folks on my code.

If you shut down the node server and restart, it will seed the database with a core set of fake posts to populate the screen.

##Pending functionality to add
Form doesnt reset when cancelled or after it's submitted
when deleting a post, especially from the bottom, the buttons from the div remain behind
Posts aren't sorted chronologically on GET

