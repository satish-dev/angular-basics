import { Component } from '@angular/core';
import { TestserviceService } from './testservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Angular 6 Project !';
  todaydate : Date;
  constructor(private testservice: TestserviceService) {}
  ngOnInit() {
    this.todaydate = this.testservice.displayTodayDate();
  }
  // todaydate = new Date();
  // jsonval = {name: 'Ram', age: '50', address : {permenant:'Uttrakhand', temporary: 'Delhi' }};
  // weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
  
  // declared array of weeks
  // weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
  
  // validationStatus = true;
  
  // buttonClickFunction(event) { 
  //   //just added console.log which will display the event details in browser on click of the button.
  //   alert("Button is clicked");
  //   console.log(event);
  // }
  
  // changeWeekDays(event) {
  //   console.log("Changed day from the Dropdown");
  //   console.log(event);
  // }
}