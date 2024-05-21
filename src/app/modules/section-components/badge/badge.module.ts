import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeApiComponent } from './pages/badge-api/badge-api.component';
import { BadgeExamplesComponent } from './pages/badge-examples/badge-examples.component';
import { BadgeRoutingModule } from './badge-routing.module';
import { BadgeComponent } from './badge.component';

import { ONavModule } from 'ngx-obelisco-example/nav';
import { OBadgeModule } from 'ngx-obelisco-example/badge';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { OTableModule } from 'ngx-obelisco-example/table';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { OButtonModule } from 'ngx-obelisco-example/button';

@NgModule({
  declarations: [BadgeApiComponent, BadgeExamplesComponent, BadgeComponent],
  imports: [
    CommonModule,
    BadgeRoutingModule,
    ONavModule,
    OBadgeModule,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective,
    OTableModule,
    TabsLinkComponent,
    OButtonModule
  ]
})
export class BadgeModule {}
