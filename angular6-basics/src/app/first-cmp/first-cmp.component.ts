import { Component, OnInit } from '@angular/core';
import {TestserviceService} from '../testservice.service';
@Component({
  selector: 'app-first-cmp',
  templateUrl: './first-cmp.component.html',
  styleUrls: ['./first-cmp.component.css']
})
export class FirstCmpComponent implements OnInit {
  firstcomponent = "First component content displayed";
  todaydate: Date;
  constructor(private testservice: TestserviceService) { }
  ngOnInit() {
    this.todaydate = this.testservice.displayTodayDate();
  }

}
