import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ONavModule } from 'ngx-obelisco-example/nav';

import { HighlightedRoutingModule } from './highlighted-routing.module';
import { HighlightedComponent } from './highlighted.component';
import { HighlightedApiComponent } from './pages/highlighted-api/highlighted-api.component';
import { HighlightedExamplesComponent } from './pages/highlighted-examples/highlighted-examples.component';
import { OTableComponent } from 'ngx-obelisco-example/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { OHighlightedModule } from 'ngx-obelisco-example/highlighted/o-highlighted.module';
import { OButtonComponent } from 'ngx-obelisco-example/button';
import { OAccessModule } from 'ngx-obelisco-example/access';

@NgModule({
  declarations: [HighlightedComponent, HighlightedApiComponent, HighlightedExamplesComponent],
  imports: [
    CommonModule,
    HighlightedRoutingModule,
    ONavModule,
    CommonModule,
    OTableComponent,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective,
    TabsLinkComponent,
    OHighlightedModule,
    OButtonComponent,
    OAccessModule
  ]
})
export class HighlightedModule {}
