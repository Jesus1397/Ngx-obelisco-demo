import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusMessageRoutingModule } from './status-message-routing.module';
import { StatusMessageComponent } from './status-message.component';
import { OStatusMessageComponent } from '@gcba/ngx-obelisco/status-message';
import { StatusMessageApiComponent } from './pages/status-message-api/status-message-api.component';
import { StatusMessageExampleComponent } from './pages/status-message-example/status-message-example.component';
import { ONavModule } from '@gcba/ngx-obelisco/nav';
import { OTableComponent } from '@gcba/ngx-obelisco/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { OButtonComponent } from '@gcba/ngx-obelisco/button';

@NgModule({
  declarations: [StatusMessageComponent, StatusMessageApiComponent, StatusMessageExampleComponent],
  imports: [
    CommonModule,
    StatusMessageRoutingModule,
    OStatusMessageComponent,
    ONavModule,
    OTableComponent,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective,
    TabsLinkComponent,
    OButtonComponent
  ]
})
export class StatusMessageModule {}
