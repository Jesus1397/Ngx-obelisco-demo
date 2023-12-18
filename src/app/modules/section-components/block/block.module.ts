import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockRoutingModule } from './block-routing.module';
import { BlockComponent } from './block.component';
import { BlockApiComponent } from './pages/block-api/block-api.component';
import { BlockExamplesComponent } from './pages/block-examples/block-examples.component';

import { ONavModule } from '@gcba/ngx-obelisco/nav';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { OTableComponent } from '@gcba/ngx-obelisco/table';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { OProgressBarComponent } from '@gcba/ngx-obelisco/progress-bar';
import { OBlockModule } from '@gcba/ngx-obelisco/block';
import { OButtonComponent } from '@gcba/ngx-obelisco/button';

@NgModule({
  declarations: [BlockComponent, BlockApiComponent, BlockExamplesComponent],
  imports: [
    CommonModule,
    BlockRoutingModule,
    ONavModule,
    OTableComponent,
    ViewerComponent,
    PrismDirective,
    ClipboardDirective,
    TabsLinkComponent,
    OProgressBarComponent,
    OBlockModule,
    OButtonComponent
  ]
})
export class BlockModule {}
