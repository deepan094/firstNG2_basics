import { Component ,ViewChild} from '@angular/core';
import { UtilityService } from "./Services/app.UtilityService";
import { HttpHelperService } from './Services/http-service'
import { Router } from '@angular/router'
import { Child1Component } from './child1/child1.component'
import { xyClass } from './app.child'

@Component({
  selector: 'app-parent',
  templateUrl: './app.parent.html'
  //providers: [Child1Component]
})
export class ParentComponent {
  changeData: { "Driver": string; "Country": string; };
  @ViewChild(Child1Component) aa:Child1Component;
  
  ngAfterViewInit(){
    this.aa;
  }
  
  isShowDrivers = false;
  constructor( 
    private _Router : Router,
    private _UtilityService:UtilityService , 
    private _HttpServiceService:HttpHelperService){
    
      this.changeData = {
      "Driver" : "Geetha",
      "Country" : "India"
    };

  }
  handleChildData($e){
    alert($e);
  }
  Router_3Go(){
    this._Router.navigate(['/router3']);
  }
  getData(){
    
    /* -------------------------
     NORMAL HTTP WITHOUT PROMISE
    ----------------------------*/

    // this._HttpServiceService.getHttpData("http://date.jsontest.com/")
    //   .subscribe(
    //     data  => this.getMe(data),//alert(JSON.stringify(data)),
    //     error => console.log('Error in get !'),
    //     ()    => console.log('Get call done !')
    //   )
    
    /* -------------------------
     NORMAL HTTP WITH PROMISE
    ----------------------------*/

    this._HttpServiceService.getHttpService("http://date.jsontest.com/")
       .then( result => this.getMe(result))
       .catch( error => console.log(error));
  }

  getMe(_data){  
    alert(JSON.stringify(_data));
  }

  showDrivers(){
    this.isShowDrivers = !this.isShowDrivers;
    this._UtilityService.setValue("service getter setter TEST++++");

  }
  
  addDriver(){
    this.changeData = {
      "Driver" : "vijayadeepan",
      "Country" : "India"
    };
  }
  
  title = 'parent component _ main';
  mainData = [
    {
      "Driver" : "Sebastian Vettel",
      "Country" : "Germany"
    },
    {
      "Driver" : "Lewis Hamilton",
      "Country" : "England"
    },
    {
      "Driver" : "Valtteri Bottas",
      "Country" : "Finland"
    },
    {
      "Driver" : "Daniel Ricciardo",
      "Country" : "Australia"
    },
    {
      "Driver" : "Kimi Räikkönen",
      "Country" : "Finland"
    }
  ];

}
