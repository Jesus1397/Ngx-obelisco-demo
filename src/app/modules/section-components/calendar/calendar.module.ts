import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarApiComponent } from './pages/calendar-api/calendar-api.component';
import { CalendarExamplesComponent } from './pages/calendar-examples/calendar-examples.component';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';

import { ONavModule } from '@gcba/ngx-obelisco/nav';
import { OCalendarComponent } from '@gcba/ngx-obelisco/calendar';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { OTableComponent } from '@gcba/ngx-obelisco/table';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { OButtonComponent } from '@gcba/ngx-obelisco/button';

@NgModule({
  declarations: [CalendarApiComponent, CalendarExamplesComponent, CalendarComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    ONavModule,
    OTableComponent,
    ViewerComponent,
    PrismDirective,
    ClipboardDirective,
    TabsLinkComponent,
    OCalendarComponent,
    OButtonComponent
  ]
})
export class CalendarModule {}
