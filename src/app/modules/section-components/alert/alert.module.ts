import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OAlertDirective } from 'ngx-obelisco-example/alert';
import { ONavModule } from 'ngx-obelisco-example/nav';
import { OTableComponent } from 'ngx-obelisco-example/table';
import { AlertRoutingModule } from './alert-routing.module';

import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { AlertComponent } from './alert.component';
import { AlertApiComponent } from './pages/alert-api/alert-api.component';
import { AlertExamplesComponent } from './pages/alert-examples/alert-examples.component';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [AlertComponent, AlertApiComponent, AlertExamplesComponent],
  imports: [
    CommonModule,
    AlertRoutingModule,
    ONavModule,
    OTableComponent,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective,
    OAlertDirective,
    TabsLinkComponent
  ]
})
export class AlertModule {}
