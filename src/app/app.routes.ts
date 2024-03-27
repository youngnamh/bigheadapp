import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RedirectComponent } from './components/redirect/redirect.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'auth', component: AuthPageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'exchange_token', component: RedirectComponent },
];
