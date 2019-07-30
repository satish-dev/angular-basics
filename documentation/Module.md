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

