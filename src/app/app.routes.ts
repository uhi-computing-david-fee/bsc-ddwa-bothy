import { Routes } from '@angular/router';
import { Login } from './auth/pages/login/login';
import { Register } from './auth/pages/register/register';
import { Discover } from './discover/pages/discover/discover';

export const routes: Routes = [
    { path: '', component: Discover },
    { path: 'login', component: Login },
    { path: 'register', component: Register }
];
