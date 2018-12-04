import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListforecastsComponent } from './components/listforecasts/listforecasts.component';
import { AuthenticationComponent } from './components/auth/authentication.component';
import { AUTH_ROUTES } from './components/auth/auth.routes';
import { CreateUpdateforecastComponent } from './components/listforecasts/create-updateforecast/create-updateforecast.component';


const routes: Routes = [
  {
    path: '',
    component: ListforecastsComponent, pathMatch: 'full'
  },
  {
    path: 'CreateForecast',
    component: CreateUpdateforecastComponent
  },
  {
    path: 'UpdateForecast',
    component: CreateUpdateforecastComponent
  },
  { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
