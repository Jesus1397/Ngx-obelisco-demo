import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchApiComponent } from './pages/search-api/search-api.component';
import { SearchExamplesComponent } from './pages/search-examples/search-examples.component';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { ONavModule } from 'ngx-obelisco-example/nav';
import { OTableModule } from 'ngx-obelisco-example/table';
import { OSearchModule } from 'ngx-obelisco-example/search';

@NgModule({
  declarations: [SearchComponent, SearchApiComponent, SearchExamplesComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ONavModule,
    OTableModule,
    ViewerComponent,
    PrismDirective,
    ClipboardDirective,
    TabsLinkComponent,
    OSearchModule
  ]
})
export class SearchModule {}
