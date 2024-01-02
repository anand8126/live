import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'login', loadComponent: () => import('./pages/login/login.component')},
    {path:'forget-password', loadComponent:() => import('./pages/forget-password/forget-password.component')},
    {path:"register", loadComponent:() => import('./pages/register/register.component')},
    {path:'home', loadComponent:() => import('./pages/home/home.component')},
    {path:'reset/:token', loadComponent:() => import("./pages/reset/reset.component")}
];
