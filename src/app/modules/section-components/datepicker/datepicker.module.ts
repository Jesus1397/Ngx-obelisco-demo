import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerRoutingModule } from './datepicker-routing.module';
import { DatepickerComponent } from './datepicker.component';
import { DatepickerExamplesComponent } from './pages/datepicker-examples/datepicker-examples.component';
import { DatepickerApiComponent } from './pages/datepicker-api/datepicker-api.component';
import { ODatepickerModule } from 'ngx-obelisco-example/datepicker';
import { ONavModule } from 'ngx-obelisco-example/nav';
import { OTableModule } from 'ngx-obelisco-example/table';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';

@NgModule({
  declarations: [DatepickerComponent, DatepickerExamplesComponent, DatepickerApiComponent],
  imports: [
    CommonModule,
    DatepickerRoutingModule,
    ONavModule,
    OTableModule,
    ViewerComponent,
    HighlightJsModule,
    ClipboardDirective,
    TabsLinkComponent,
    ODatepickerModule
  ]
})
export class DatepickerModule {}
