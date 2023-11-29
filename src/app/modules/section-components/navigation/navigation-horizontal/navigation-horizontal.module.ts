import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationHorizontalRoutingModule } from './navigation-horizontal-routing.module';
import { NavigationHorizontalComponent } from './navigation-horizontal.component';
import { NavigationHorizontalApiComponent } from './pages/navigation-horizontal-api/navigation-horizontal-api.component';
import { NavigationHorizontalExamplesComponent } from './pages/navigation-horizontal-examples/navigation-horizontal-examples.component';
import { ONavModule } from '@gcba/ngx-obelisco/nav';
import { OTableComponent } from '@gcba/ngx-obelisco/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [
    NavigationHorizontalComponent,
    NavigationHorizontalApiComponent,
    NavigationHorizontalExamplesComponent
  ],
  imports: [
    CommonModule,
    NavigationHorizontalRoutingModule,
    ONavModule,
    OTableComponent,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective,
    TabsLinkComponent
  ]
})
export class NavigationHorizontalModule {}
