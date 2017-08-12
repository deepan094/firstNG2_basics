import { Component, OnInit } from '@angular/core';
import { UtilityService } from "../Services/app.UtilityService";
import { Router } from "@angular/router";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUp_username: any;
  signUp_password: any;

  constructor(private _UtilityService:UtilityService, private _route:Router) { }

  signUpbtnClick(){
    if(this.signUp_username !== undefined){
    this._UtilityService.setLocalStorageValue('intialData', {'name':this.signUp_username ,'password':this.signUp_password});
    }
    this._route.navigate(['login']);
  }

  ngOnInit() {

  }

}
