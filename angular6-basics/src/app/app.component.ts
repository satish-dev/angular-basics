import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6-basics';
  // declared array of weeks
  weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday",
  "Thrusday", "Friday", "Saturday"];
  validationStatus = true;
  buttonClickFunction(event) { 
    //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    console.log(event);
}
}
