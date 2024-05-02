import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownSelectionRoutingModule } from './dropdown-selection-routing.module';
import { DropdownSelectionComponent } from './dropdown-selection.component';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { DropdownSelectionApiComponent } from './pages/dropdown-selection-api/dropdown-selection-api.component';
import { DropdownSelectionExamplesComponent } from './pages/dropdown-selection-examples/dropdown-selection-examples.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ODropdownModule } from 'ngx-obelisco-example/dropdown';
import { OTableModule } from 'ngx-obelisco-example/table';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';

@NgModule({
  declarations: [DropdownSelectionComponent, DropdownSelectionApiComponent, DropdownSelectionExamplesComponent],
  imports: [
    CommonModule,
    DropdownSelectionRoutingModule,
    TabsLinkComponent,
    ViewerComponent,
    ODropdownModule,
    OTableModule,
    PrismDirective
  ]
})
export class DropdownSelectionModule {}
