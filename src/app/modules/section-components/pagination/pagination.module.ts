import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationRoutingModule } from './pagination-routing.module';
import { PaginationComponent } from './pagination.component';
import { PaginationApiComponent } from './pages/pagination-api/pagination-api.component';
import { PaginationExamplesComponent } from './pages/pagination-examples/pagination-examples.component';
import { OPaginationModule } from 'ngx-obelisco-example/pagination';
import { ONavModule } from 'ngx-obelisco-example/nav';
import { OTableComponent } from 'ngx-obelisco-example/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [PaginationComponent, PaginationApiComponent, PaginationExamplesComponent],
  imports: [
    CommonModule,
    PaginationRoutingModule,
    ONavModule,
    OTableComponent,
    ViewerComponent,
    OPaginationModule,
    ClipboardDirective,
    PrismDirective,
    TabsLinkComponent
  ]
})
export class PaginationModule {}
