import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListforecastsComponent } from './components/listforecasts/listforecasts.component';
import { ManageforecastComponent } from './components/manageforecast/manageforecast.component';

const routes: Routes = [
  {
    path: '',
    component: ListforecastsComponent
  },
  {
    path: 'manage',
    component: ManageforecastComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
