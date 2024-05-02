import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationVerticalRoutingModule } from './navigation-vertical-routing.module';
import { NavigationVerticalApiComponent } from './pages/navigation-vertical-api/navigation-vertical-api.component';
import { NavigationVerticalExamplesComponent } from './pages/navigation-vertical-examples/navigation-vertical-examples.component';
import { ONavModule } from 'ngx-obelisco-example/nav';
import { OTableModule } from 'ngx-obelisco-example/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { NavigationVerticalComponent } from './navigation-vertical.component';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [NavigationVerticalComponent, NavigationVerticalApiComponent, NavigationVerticalExamplesComponent],
  imports: [
    CommonModule,
    NavigationVerticalRoutingModule,
    ONavModule,
    OTableModule,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective,
    TabsLinkComponent
  ]
})
export class NavigationVerticalModule {}
