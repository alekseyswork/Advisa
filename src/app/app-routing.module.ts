import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListforecastsComponent } from './components/listforecasts/listforecasts.component';
import { AuthenticationComponent } from './components/auth/authentication.component';
import { AUTH_ROUTES } from './components/auth/auth.routes';


const routes: Routes = [
  {
    path: '',
    component: ListforecastsComponent, pathMatch: 'full'
  },

  { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
