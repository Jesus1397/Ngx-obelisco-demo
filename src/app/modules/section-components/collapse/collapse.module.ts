import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseRoutingModule } from './collapse-routing.module';
import { OTableComponent } from '@gcba/ngx-obelisco/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { ONavModule } from '@gcba/ngx-obelisco/nav';
import { CollapseComponent } from './collapse.component';
import { CollapseExamplesComponent } from './pages/collapse-examples/collapse-examples.component';
import { CollapseApiComponent } from './pages/collapse-api/collapse-api.component';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { OCollapseModule } from '@gcba/ngx-obelisco/collapse/o-collapse.module';

@NgModule({
  declarations: [CollapseComponent, CollapseExamplesComponent, CollapseApiComponent],
  imports: [
    CommonModule,
    CollapseRoutingModule,
    ONavModule,
    OTableComponent,
    OCollapseModule,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective,
    TabsLinkComponent
  ]
})
export class CollapseModule {}
