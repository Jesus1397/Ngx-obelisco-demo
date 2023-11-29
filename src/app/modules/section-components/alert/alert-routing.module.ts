import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlertApiComponent } from './pages/alert-api/alert-api.component';
import { AlertExamplesComponent } from './pages/alert-examples/alert-examples.component';

const routes: Routes = [
  { path: 'api', component: AlertApiComponent },
  { path: 'examples', component: AlertExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertRoutingModule {}
