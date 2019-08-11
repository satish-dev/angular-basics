## Angular 6 Folder and File Structure
The Angular 6 has *the following folder structure*
### e2e
End to end test folder. Mainy e2e is used for integration testing and helps ensure the application works fine.
### node_modules
All the the packages that we install by using the *npm install* are available here. You can open the folder and see the packages available.
## src
This folder is where we will work on the project using the Angular 6.

The Angular 6 app *has the following file structure*
### .angular-cli.json/.angular.json
It basically holds the project name, version of cli etc.
### .editorconfig
Keeping consistent coding style between multiple developers working on the same project is not a simple task, specially with todays proliferation of editors and IDEs.
To maintain the coding style betwee developers it uses the this file it contain basic editor setting and we can also change it as per our requirement.
### .gitignore
A .gitignore file should be committed into the repository, in order to share the ignore rules with any other users that clone the repository.
### .package.json
*package.json provides a simple way to keep track of packages that are being used in application*
The package.json file tells which libraries will be installed into node_moudles when you run npm install.
At present, if you open the file in the editor, you will get the following modules added in it.
```
"dependencies": {
    "@angular/animations": "~7.2.0",
    "@angular/common": "~7.2.0",
    "@angular/compiler": "~7.2.0",
    "@angular/core": "~7.2.0",
    "@angular/forms": "~7.2.0",
    "@angular/platform-browser": "~7.2.0",
    "@angular/platform-browser-dynamic": "~7.2.0",
    "@angular/router": "~7.2.0",
    "core-js": "^2.5.4",
    "rxjs": "~6.3.3",
    "tslib": "^1.9.0",
    "zone.js": "~0.8.26"
  },
```
In case if you want to add more dependencies/libraries, you can add those over here and then run the following command.
```
npm install
```
### tsconfig.json
It basically have the *TypeScript compiler configuration*.
Typically, you add a TypeScript configuration file called tsconfig.json to your project to guide the compiler as it generates JavaScript files.
### tslint.json
This is the config file with rules to be considered while compiling.
# src
*The src folder is the main folder, which internally has a different folder and file structure.*
## app
First folder that src has is *app* which have the following file structure:-
### app.module.ts
If you open this file, you will see that the code has reference to different libraries, which are imported. Angular-cli has used these default libraries for the importing the - angular/core, platform-browser. They are imported and saved into the variables such as *declarations, imports , providers and bootstrap*.
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
Now let's discuss about these variables:-
#### declarations
In declartions the refrence to the components is stored. The Appcomponent is the default component that is created whenever a new project is initiated.
#### imports
This will havee the modules imported as shown in the above example. At present, BrowserModule is part of the imports which is imported from @angular/platform-browser.
#### providers
This will have reference to the services created
#### bootstrap
This has the reference to the default component created, i.e. , AppComponent.
### app.component.css
You can write your css structure over here. Now we will add only the background color to the div.
```
.divdetails{
  background-color: #00FFFF;
}
```
### app.component.html
All the html code will be available in this file.
```
<!--The content below is only a placeholder and can be replaced.-->
<div class = "divdetails">
  <div style="text-align:center">
    <h1>
      Welcome to {{ title }}!
    </h1>
    <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
  </div>
</div>
<h2>Here are some links to help you start: </h2>
<ul>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
  </li>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://angular.io/cli">CLI Documentation</a></h2>
  </li>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
  </li>
</ul>
```
The above will be the default html code is available with the project creation.
### app.component.spec.ts
These are automatically generated files which contain unit tests for source component.
### app.component.ts
The class for the component is defined over here. You can do the processing of the html structure in the .ts file. The processing will include activities such as *connecting to the database, interacting with other components, routing, services etc.
The structure of the file will be like below :-
```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6-basics';
}
```
## Assets
You can save your images, js files in this folder.
## Environment
This folder has the details for the production or the dev environment. The folder contains two files.
environment.prod.ts
envirnonment.ts
Both the files have details of whether the final file should be compiled in the production environment of the dev environment.
## favicon.ico
It is the file that define the favourite icon for your site.
## index.html
This is the file which is dispalyed in the browser.The file have the following content in it.
```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Angular6Basics</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```
The body has **<app-root></app-root>**.This is the selector which is used in app.component.ts file and will display the details from app.component.html file.
## main.ts
main.ts is the file from where we start our project development.It starts with importing the basic module which we need.Right now if you see angular/core, angular/platform-browser-dyanamic, app.module and environment is imported by default during angular-cli installation and project setup.
```
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
if (environment.production) {
   enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
```
The **platformBrowserDynamic().bootstrapModule(AppModule)** has the **parent** module reference **AppModule**.Hence, when it executes in the browser, the file that is called is index.html. Index.html internally referes to main.ts which calls the parent module, i.e **AppModule** when the following code executes - 
```
platformBrowserDynamic().bootstrapModule(AppModule);
```
When AppModule is called, it calls app.module/.ts which further calls the AppComponent based on the bootstrap as follows-
```
bootstrap: [AppComponent]
```
In app.component.ts, there is a selector: app-root which is used in the index.html file. This will display the contents present in app.component.html.
## polyfill.ts
This is mainly used for backward compatibility.
## styles.css
This is the style file required for the project.
## test.ts
Here, the unit test cases for testing the project will be handled.
## tsconfig.app.json
This is used during compilation, it has the config details that need to be used to run the application.
## tsconfig.spec.json
This helps maintain the details for testing.
## tslint.json
This is the config file with rules to be considered while compiling ts to js.
<div>
	<span><a href ="https://github.com/satish-dev/angular-basics/blob/master/documentation/RunningProject.md" >Previous (Running Project)</a></span>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	&nbsp;&nbsp;
	<span><a href ="https://github.com/satish-dev/angular-basics/blob/master/documentation/Component.md" >Next (Angular Component)</a> </span>
</div>