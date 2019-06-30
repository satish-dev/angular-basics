<link rel="stylesheet" href="/css/main.css">
# Installation of Angular 6
Now we will see how do we can install *Angular 6* in our machine.
For *Linux* user I will guide how you can install it on your local machine.
*To install Angular 6 we require the following*
### 1. Nodejs
*Nodejs has to be greater than 8.11*.
To install Nodejs open this link *https://nodejs.org/en/download/* and install it as per your OS.
Once you installed you can check it by using the node -v command from your terminal.<br/>
``` 
var/www/html/angular-basics$ *node -v* 
*v8.15.0* 
```
### 2. NPM (Node Package Manager)
*NPM has to be greater than 5.6*.
Once Nodejs is installed, npm will also get installed along with it. To check if npm is installed or not, type npm -v in the terminal. It should display the version of the npm.<br/>
```
var/www/html/angular-basics$ *npm -v* 
*6.4.1*
```
### 3. Angular CLI
Angular 6 installations are very simple with the help of angular CLI. Visit the homepage https://cli.angular.io/ of angular to get the reference of the command.
Type *npm install -g @angular/cli*, to install angular cli on your system.
We are using -g parameter to install angular globally.<br/>
```
var/www/html/angular-basics$ *npm install -g @angular/cli*
```
### 4. IDE (Integrated development environment ) for writing your code 
Once Angular CLI is installed. You can use any IDE of your choice, i.e., WebStorm, Atom, Visual Studio Code(), etc.
For my point of *Visual Studio Code* could be a better option rest depands on your choice.
### Creating Angular project
We have now installed Angular 6. Let us now create our first project in Angular 6. To create a project in Angular 6, we will use the following command −
```
ng new <projectname>
or 
var/www/html/angular-basics$ ng new angular6-basics
```
### Windows users can follow the below link to install Angular 6 in your system.
*Link* => https://peakup.org/blog/how-to-setup-angular-6-environment-on-windows/
<div>
	<div class="left-side"><a href ="https://github.com/satish-dev/angular-basics/blob/master/Introduction.md" >Next(Installation)</a></div>
	<div class="right-side"><a href ="https://github.com/satish-dev/angular-basics/blob/master/Installation.md" >Next(Installation)</a> </div>
</div>