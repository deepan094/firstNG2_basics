import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UtilityService } from "../Services/app.UtilityService";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: any;
  passWord: any;

  constructor(private _route:Router ,private _UtilityService:UtilityService) { }

  validateLogin(){
    if(this._UtilityService.getLocalStorageValue('intialData') !== null){
       this._UtilityService.getLocalStorageValue('intialData').forEach(obj => {
        if(obj.name === this.userName && obj.password === this.passWord){ 
          this._UtilityService.setLocalStorageValue('currentCredential',{'name':this.userName , 'password':this.passWord});
          this._route.navigate(['home']);
        }
        else{
          alert('Username || Password is incorrect !');
        }
    });
    }
  }

  signUpRedirect(){
    this._route.navigate(['signup']);
  }

  ngOnInit() {
  }

}
