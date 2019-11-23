import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {
  serviceproperty = "Service Created";
  constructor() { }
  displayTodayDate() {
    let ndate = new Date();
    return ndate;
 }
}
