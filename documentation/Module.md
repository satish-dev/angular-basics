# Angular 6 - Modules
In angular *Module* refers to a place where you can group the *components, directives, pipes and services*, which are the part of our application.
In Website we usally have header, footer, left, center and the right section become part of a module.
For defining the module, we can use the **NgModule**, while creating the project using the Angular-cli command, the ngModule is created in the app.module.ts file by default and it look like the below -
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCmpComponent } from './first-cmp/first-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCmpComponent
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
Usually *NgModule* imports in the following way - 
```
import {NgModule} from '@angular/core';
```
The structure for the above **ngModule** is given below-
```
@NgModule({
  declarations: [
    AppComponent,
    FirstCmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```
Above structure starts with **@NgModule** and contains an object which has *declarations, imports, providers and bootstrap*.
* **Declarations**
It is an array of components of our application. If we creates a new components it will automatically gets included in this list.Below is the example 
```
declarations: [
AppComponent,
FirstCmpComponent
]
```
* **Import**
This will have the array of modules that to be used in the application. This can also be used by the components in the Declaration array. If we look the *import* section of *ng.module.ts* , we can see the Browser Module is imported. Now the case your application needs forms, you can include the module as follows
```
import { FormsModule } from '@angular/forms';
imports: [
   BrowserModule,
   FormsModule // We have inculded the module here
]
```
* **Providers**
It will include the services that were created.
* **Bootstrap**
It will includes the main app component for starting the execution of our application.


