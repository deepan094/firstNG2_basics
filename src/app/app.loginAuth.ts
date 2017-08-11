import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class CanActivateTest implements CanActivate {

  constructor(private _route:Router) {}

  x=0;
  canActivate() {
        if(this.x===1) return true;
        else  this._route.navigate(['login']);
  }
}