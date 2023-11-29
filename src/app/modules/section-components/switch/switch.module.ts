import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitchRoutingModule } from './switch-routing.module';
import { SwitchComponent } from './switch.component';
import { SwitchApiComponent } from './pages/switch-api/switch-api.component';
import { SwitchExamplesComponent } from './pages/switch-examples/switch-examples.component';
import { OSwitchComponent } from '@gcba/ngx-obelisco/switch';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { OTableComponent } from '@gcba/ngx-obelisco/table';
import { ONavModule } from '@gcba/ngx-obelisco/nav';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [SwitchComponent, SwitchApiComponent, SwitchExamplesComponent],
  imports: [
    CommonModule,
    SwitchRoutingModule,
    ONavModule,
    OTableComponent,
    ViewerComponent,
    PrismDirective,
    ClipboardDirective,
    OSwitchComponent,
    TabsLinkComponent
  ]
})
export class SwitchModule {}
