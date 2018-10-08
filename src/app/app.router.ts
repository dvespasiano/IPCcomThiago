import { Routes, RouterModule } from '@angular/router';
import { TelaHomeComponent } from './tela-home/tela-home.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  // login
  {
    path: 'login',
    component: TelaLoginComponent
  },
  // primeiraTela
  {
    path: '',
    component: TelaLoginComponent
  },
  // home
  {
    path: 'home',
    component: TelaHomeComponent
  },
  // dashboard
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];
export const RoutingModule = RouterModule.forRoot(routes);
