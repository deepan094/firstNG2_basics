import { Component, OnInit } from '@angular/core';
import { UtilityService } from "../Services/app.UtilityService";
import { Router } from '@angular/router'


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _UtilityService:UtilityService ,private _Router:Router) { }

  ngOnInit() {
    this._UtilityService.logout();
    this._Router.navigate(['login']);
  }

}
