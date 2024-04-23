import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatepickerApiComponent } from './pages/datepicker-api/datepicker-api.component';
import { DatepickerExamplesComponent } from './pages/datepicker-examples/datepicker-examples.component';

const routes: Routes = [
  { path: 'api', component: DatepickerApiComponent },
  { path: 'examples', component: DatepickerExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatepickerRoutingModule {}
