import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppService {


  constructor() { }
  customStringGenerator(noDay: number) {
    let weekdays = [

      ["1st", "Sunday"],
      ["2nd", "Monday"],
      ["3rd", "Tuesday"],
      ["4th", "Wednesday"],
      ["5th", "Thursday"],
      ["6th", "Friday"],
      ["7th", "Saturday"]


    ]


    return "You have selected " + weekdays[noDay - 1][0] + " day of the week which is " + weekdays[noDay - 1][1];



  }
}
