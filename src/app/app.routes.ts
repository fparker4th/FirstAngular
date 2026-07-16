import { Routes } from '@angular/router';
import { Test } from './test/test';
import { Home } from './home/home';

export const routes: Routes = [
    { path: "test", component: Test },
    { path: "home", component: Home },
    { path: "", redirectTo: "/test", pathMatch: "full" }
];
