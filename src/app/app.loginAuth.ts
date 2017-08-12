import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UtilityService } from "./Services/app.UtilityService";


@Injectable()
export class CanActivateTest implements CanActivate {

  constructor(private _route:Router ,private _UtilityService:UtilityService) {}

  canActivate() {
        if( this._UtilityService.getLocalStorageValue('currentCredential') !== null)
           return true;
        else 
           this._route.navigate(['login']);
  }
}