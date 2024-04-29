import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OBreadcrumbComponent } from 'ngx-obelisco-example/breadcrumb';
import { ONavModule } from 'ngx-obelisco-example/nav';
import { OTableComponent } from 'ngx-obelisco-example/table';

import { BreadcrumbRoutingModule } from './breadcrumb-routing.module';
import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbApiComponent } from './pages/breadcrumb-api/breadcrumb-api.component';
import { BreadcrumbExamplesComponent } from './pages/breadcrumb-examples/breadcrumb-examples.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [BreadcrumbComponent, BreadcrumbApiComponent, BreadcrumbExamplesComponent],
  imports: [
    CommonModule,
    BreadcrumbRoutingModule,
    ONavModule,
    ViewerComponent,
    OBreadcrumbComponent,
    ClipboardDirective,
    PrismDirective,
    OTableComponent,
    TabsLinkComponent
  ]
})
export class BreadcrumbModule {}
