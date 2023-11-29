import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { PanelExamplesComponent } from './pages/panel-examples/panel-examples.component';
import { PanelApiComponent } from './pages/panel-api/panel-api.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { ONavModule } from '@gcba/ngx-obelisco/nav';
import { OTableComponent } from '@gcba/ngx-obelisco/table';
import { OPanelModule } from '@gcba/ngx-obelisco/panel';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [PanelComponent, PanelExamplesComponent, PanelApiComponent],
  imports: [
    CommonModule,
    PanelRoutingModule,
    ONavModule,
    ViewerComponent,
    OPanelModule,
    ClipboardDirective,
    PrismDirective,
    OTableComponent,
    TabsLinkComponent
  ]
})
export class PanelModule {}
