import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapApiComponent } from './pages/map-api/map-api.component';
import { MapExamplesComponent } from './pages/map-examples/map-examples.component';
import { ONavModule } from 'ngx-obelisco-example/nav';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { OTableComponent } from 'ngx-obelisco-example/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { OButtonComponent } from 'ngx-obelisco-example/button';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { OMapModule } from 'ngx-obelisco-example/map/o-map.module';

@NgModule({
  declarations: [MapComponent, MapApiComponent, MapExamplesComponent],
  imports: [
    CommonModule,
    OMapModule,
    ONavModule,
    OTableComponent,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective,
    TabsLinkComponent,
    OButtonComponent,
    MapRoutingModule
  ]
})
export class MapModule {}
