#Angular 6 - Components
Major part of the developement with Angular 6 is done in the components.
It basically classes that interact with the .html file of the component on the browser.
Component has the following file structure :-
* app.component.css
* app.component.html
* app.component.spec.ts
* app.component.ts
* app.module.ts
All the above files were created when we created new angular project.
#Creating your component
Angular cli has a command to create your own component. Besides, the app component which is created while creating the project will always remain the parent and the created component will be the child components.
Run the below command to create a component
```
ng generate component first-cmp
```
After executing the above command you will see the following output.
<img src="../images/createComponent.png" height="80%">