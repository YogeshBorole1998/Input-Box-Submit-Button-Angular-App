import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  enteredValue="";
  initialValue="";
  
  

  constructor(private readonly appservice:AppService) {
    
   }

  ngOnInit(): void {
    
  }

  displayText() {

    this.enteredValue = this.appservice.customStringGenerator(Number(this.initialValue));
  }

}
