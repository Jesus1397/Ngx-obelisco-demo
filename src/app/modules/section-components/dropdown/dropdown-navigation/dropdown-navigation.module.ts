import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownNavigationRoutingModule } from './dropdown-navigation-routing.module';
import { DropdownNavigationComponent } from './dropdown-navigation.component';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { DropdownNavigationExamplesComponent } from './pages/dropdown-navigation-examples/dropdown-navigation-examples.component';
import { DropdownNavigationApiComponent } from './pages/dropdown-navigation-api/dropdown-navigation-api.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ODropdownModule } from 'ngx-obelisco-example/dropdown';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { OTableModule } from 'ngx-obelisco-example/table';

@NgModule({
  declarations: [DropdownNavigationComponent, DropdownNavigationExamplesComponent, DropdownNavigationApiComponent],
  imports: [
    CommonModule,
    DropdownNavigationRoutingModule,
    TabsLinkComponent,
    ViewerComponent,
    ODropdownModule,
    PrismDirective,
    OTableModule
  ]
})
export class DropdownNavigationModule {}
