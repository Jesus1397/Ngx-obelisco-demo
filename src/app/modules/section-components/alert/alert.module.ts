import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ONavModule } from 'ngx-obelisco-example/nav';
import { OTableModule } from 'ngx-obelisco-example/table';
import { OAlertModule } from 'ngx-obelisco-example/alert';
import { OCustomContentDirective } from 'ngx-obelisco-example/directives';

import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

import { AlertRoutingModule } from './alert-routing.module';
import { AlertComponent } from './alert.component';
import { AlertApiComponent } from './pages/alert-api/alert-api.component';
import { AlertExamplesComponent } from './pages/alert-examples/alert-examples.component';

@NgModule({
  declarations: [AlertComponent, AlertApiComponent, AlertExamplesComponent],
  imports: [
    CommonModule,
    AlertRoutingModule,
    ONavModule,
    OTableModule,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective,
    TabsLinkComponent,
    OAlertModule,
    OCustomContentDirective
  ]
})
export class AlertModule {}
