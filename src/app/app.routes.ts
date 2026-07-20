import { Routes } from '@angular/router';
import { Test } from './test/test';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { SipCalculator } from './sip-calculator/sip-calculator';
import { DashBoard } from './dash-board/dash-board';
export const routes: Routes = [
    { path: "test", component: Test },
    { path: "contact", component: Contact },
    { path: "about", component: About },
    { path: "home", component: Home },
    { path: "sip-calculator", component: SipCalculator },
    { path: "dash-board", component: DashBoard },
    { path: "", redirectTo: "/home", pathMatch: "full" }
];
