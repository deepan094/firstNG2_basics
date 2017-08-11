import { Routes } from '@angular/router';
import { RouterCompo1Component } from './router-compo1/router-compo1.component';
import { RouterCompo2Component } from './router-compo2/router-compo2.component'; 
import { RouterCompo3Component } from "./router-compo3/router-compo3.component";
import { Route11Component } from "./route1-1/route1-1.component";
import { emptyCompo } from "./app.emptyCompo";
import { ParentComponent } from './app.parent'
import { SignUpComponent } from './sign-up/sign-up.component'
import { LoginComponent } from './login/login.component'
import { CanActivateTest } from "./app.loginAuth";

export const appRoute : Routes = [
     {
    path: '',
    redirectTo: "login",
    pathMatch: 'full'
  },
{
        path:'login',
        component:LoginComponent
    },
    {
        path:'home',
        component:ParentComponent,
        canActivate:[CanActivateTest]
    },
    {
        path:'signup',
        component:SignUpComponent
    },
    {
        path:'router1',
        component:RouterCompo1Component,
        children:[
        //{
        //    path:'',
        //    component:emptyCompo
        //},
        {
            path:'router/:id',
            component:Route11Component
        }]
    },
    {
        path:'router2',
        component:RouterCompo2Component
    },
    {
        path:'router3',
        component:RouterCompo3Component
    }
]; 