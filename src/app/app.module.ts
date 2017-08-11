import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/Http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { UtilityService } from './Services/app.UtilityService';
import { HttpHelperService } from './Services/http-service';
import { RouterCompo2Component } from './router-compo2/router-compo2.component';
import { RouterCompo1Component } from './router-compo1/router-compo1.component';

import { appRoute } from './app.routes';
import { RouterModule } from '@angular/router';
import { RouterCompo3Component } from './router-compo3/router-compo3.component';
import { Route11Component } from './route1-1/route1-1.component';
import { emptyCompo } from "./app.emptyCompo";
import { ParentComponent } from './app.parent';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component'
import { CanActivateTest } from "./app.loginAuth";

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Child1Component,
    RouterCompo2Component,
    RouterCompo1Component,
    RouterCompo3Component,
    Route11Component,
    emptyCompo,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [UtilityService, HttpHelperService ,CanActivateTest],
  bootstrap: [AppComponent]
})
export class AppModule { }
