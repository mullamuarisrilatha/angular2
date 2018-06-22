﻿import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }     from './home/index';
import { LoginComponent }    from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard }         from './guards/index';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
