import { Routes } from '@angular/router';
import { RouterCompo1Component } from './router-compo1/router-compo1.component';
import { RouterCompo2Component } from './router-compo2/router-compo2.component'; 

export const appRoute : Routes = [
    {
        path:'router1',
        component:RouterCompo1Component
    },
    {
        path:'router2',
        component:RouterCompo2Component
    }
]; 