import {Input, Component, OnInit ,Output , EventEmitter } from '@angular/core';
import { UtilityService } from "../Services/app.UtilityService";

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  emitToParent(){
    this.childData.emit(['AngularJs','EmberJs','Bootstrap']);
    alert(this._UtilityService.getValue());
  }

  constructor(private _UtilityService : UtilityService) {}

  ngOnInit() {
  }

  @Input() parentObj:any; 
  @Output() childData = new EventEmitter();
  
  
}
