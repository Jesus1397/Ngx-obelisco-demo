import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerRoutingModule } from './datepicker-routing.module';
import { DatepickerComponent } from './datepicker.component';
import { DatepickerExamplesComponent } from './pages/datepicker-examples/datepicker-examples.component';
import { DatepickerApiComponent } from './pages/datepicker-api/datepicker-api.component';
import { ODatepickerModule } from 'ngx-obelisco-example/datepicker';
import { ONavModule } from 'ngx-obelisco-example/nav';
import { OTableComponent } from 'ngx-obelisco-example/table';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';

@NgModule({
  declarations: [DatepickerComponent, DatepickerExamplesComponent, DatepickerApiComponent],
  imports: [
    CommonModule,
    DatepickerRoutingModule,
    ONavModule,
    OTableComponent,
    ViewerComponent,
    PrismDirective,
    ClipboardDirective,
    TabsLinkComponent,
    ODatepickerModule
  ]
})
export class DatepickerModule {}
