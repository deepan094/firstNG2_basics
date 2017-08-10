import { Input, Component, OnInit, Output, EventEmitter, SimpleChanges, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { UtilityService } from "../Services/app.UtilityService";

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class Child1Component implements OnInit {
  oldHeroName: any;
  changeLog = []; 
  copy:any;
  emitToParent(){
    this.childData.emit(['AngularJs','EmberJs','Bootstrap']);
    alert(this._UtilityService.getValue());
  }

  deleteMe(inx){
    this.parentObj.splice(inx,1);
  }

  
  @Input() parentObj:any; 
  @Input() onChangeTest:any;
  @Output() childData = new EventEmitter();
  constructor(private _UtilityService : UtilityService) {}

  ngOnInit() {
      // Can be used for Reset
      this.copy =JSON.parse(JSON.stringify(this.parentObj));
  }

  ngDoCheck() {
    this.parentObj;
  }
   ngOnChanges(args: any[]) {
        console.log('changing', args);
    }

  
  
}
