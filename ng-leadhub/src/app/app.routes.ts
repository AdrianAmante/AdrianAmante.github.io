import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AgencysummaryComponent } from './agencysummary/agencysummary.component';
import { PartnersummaryComponent } from './partnersummary/partnersummary.component';

export const router: Routes = [
    { path: '', redirectTo: 'agencysummary', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'agencysummary', component: AgencysummaryComponent },
    { path: 'partnersummary', component: PartnersummaryComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

