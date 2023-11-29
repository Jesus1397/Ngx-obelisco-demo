import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownNavigationRoutingModule } from './dropdown-navigation-routing.module';
import { DropdownNavigationComponent } from './dropdown-navigation.component';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { DropdownNavigationExamplesComponent } from './pages/dropdown-navigation-examples/dropdown-navigation-examples.component';
import { DropdownNavigationApiComponent } from './pages/dropdown-navigation-api/dropdown-navigation-api.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ODropdownModule } from '@gcba/ngx-obelisco/dropdown';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { OTableComponent } from '@gcba/ngx-obelisco/table';

@NgModule({
  declarations: [DropdownNavigationComponent, DropdownNavigationExamplesComponent, DropdownNavigationApiComponent],
  imports: [
    CommonModule,
    DropdownNavigationRoutingModule,
    TabsLinkComponent,
    ViewerComponent,
    ODropdownModule,
    PrismDirective,
    OTableComponent
  ]
})
export class DropdownNavigationModule {}
