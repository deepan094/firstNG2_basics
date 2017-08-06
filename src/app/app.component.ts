import { Component } from '@angular/core';
import { UtilityService } from "./Services/app.UtilityService";
import { HttpHelperService } from './Services/http-service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  isShowDrivers = false;
  constructor( 
    private _Router : Router,
    private _UtilityService:UtilityService , 
    private _HttpServiceService:HttpHelperService){
    
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
