import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';
import { ONavModule } from 'ngx-obelisco-example/nav';
import { CardApiComponent } from './pages/card-api/card-api.component';
import { CardExamplesComponent } from './pages/card-examples/card-examples.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { OCardModule } from 'ngx-obelisco-example/card';
import { OTableModule } from 'ngx-obelisco-example/table';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [CardComponent, CardApiComponent, CardExamplesComponent],
  imports: [
    CommonModule,
    CardRoutingModule,
    ONavModule,
    ViewerComponent,
    OCardModule,
    ClipboardDirective,
    PrismDirective,
    OTableModule,
    TabsLinkComponent
  ]
})
export class CardModule {}
