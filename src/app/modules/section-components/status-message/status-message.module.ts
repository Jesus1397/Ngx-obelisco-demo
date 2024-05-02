import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusMessageRoutingModule } from './status-message-routing.module';
import { StatusMessageComponent } from './status-message.component';
import { StatusMessageApiComponent } from './pages/status-message-api/status-message-api.component';
import { StatusMessageExampleComponent } from './pages/status-message-example/status-message-example.component';
import { ONavModule } from 'ngx-obelisco-example/nav';
import { OTableModule } from 'ngx-obelisco-example/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { OButtonModule } from 'ngx-obelisco-example/button';
import { OStatusMessageModule } from 'ngx-obelisco-example/status-message';

@NgModule({
  declarations: [StatusMessageComponent, StatusMessageApiComponent, StatusMessageExampleComponent],
  imports: [
    CommonModule,
    StatusMessageRoutingModule,
    OStatusMessageModule,
    ONavModule,
    OTableModule,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective,
    TabsLinkComponent,
    OButtonModule
  ]
})
export class StatusMessageModule {}
