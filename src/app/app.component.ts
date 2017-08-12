import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { UtilityService } from "./Services/app.UtilityService";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //providers: [Child1Component]
})
export class AppComponent {
  constructor(public _UtilityService:UtilityService){}
  
  ngOnInit(){
  }

}
