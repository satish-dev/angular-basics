# Angular 6 Event Binding
Whenever a user interacts with the application by keyboard movement, mouse click, or a mouseover that will generate an *event*. These events need to be handled to perform some kind of action. 
*Binding these types of events to any process is called the Event handling*
Let just understand it with the help of example:- In your app.component.html create a button just like the below example
```
<button (click)="buttonClickFunction($event)">
   Click Me
</button>
```
In the above example we are calling a function *buttonClickFunction*, Now the time is to define that function in your *app.component.ts* file just like the below example
```
    buttonClickFunction(event) { 
        //just added console.log which will display the event details in browser on click of the button.
        alert("Button is clicked");
        console.log(event);
    }
```
Whenever you click to the button, The control will come to the function *buttonClickFunction* that was defined in app.component.ts file . In function we have a statment that will display that button was clicked just like the below image.
<img src="../images/eventBinding.png" height="80%">