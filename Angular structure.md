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
### app
First folder that src has is *app* which have the following file structure:-
