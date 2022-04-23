import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() value:string ="";

  constructor() { }

  ngOnInit(): void {
    
  }  


  }

