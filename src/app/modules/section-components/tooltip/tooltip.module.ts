import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipRoutingModule } from './tooltip-routing.module';
import { TooltipComponent } from './tooltip.component';
import { ONavModule } from 'ngx-obelisco-example/nav';
import { TooltipApiComponent } from './pages/tooltip-api/tooltip-api.component';
import { TooltipExamplesComponent } from './pages/tooltip-examples/tooltip-examples.component';
import { OTableComponent } from 'ngx-obelisco-example/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { OTooltipModule } from 'ngx-obelisco-example/tooltip';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { OButtonComponent } from 'ngx-obelisco-example/button';

@NgModule({
  declarations: [TooltipComponent, TooltipApiComponent, TooltipExamplesComponent],
  imports: [
    CommonModule,
    TooltipRoutingModule,
    ONavModule,
    OTableComponent,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective,
    OTooltipModule,
    TabsLinkComponent,
    OButtonComponent
  ]
})
export class TooltipModule {}
