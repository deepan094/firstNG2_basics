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

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    RouterCompo2Component,
    RouterCompo1Component,
    RouterCompo3Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [UtilityService, HttpHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
