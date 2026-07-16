import { Routes } from '@angular/router';
import { Test } from './test/test';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';

export const routes: Routes = [
    { path: "test", component: Test },
    { path: "contact", component: Contact },
    { path: "about", component: About },
    { path: "home", component: Home },
    { path: "", redirectTo: "/test", pathMatch: "full" }
];
