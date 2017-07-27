import { Routes } from '@angular/router';
import { RouterCompo1Component } from './router-compo1/router-compo1.component';
import { RouterCompo2Component } from './router-compo2/router-compo2.component'; 
import { RouterCompo3Component } from "./router-compo3/router-compo3.component";

export const appRoute : Routes = [
    {
        path:'router1',
        component:RouterCompo1Component
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