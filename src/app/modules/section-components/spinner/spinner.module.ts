import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OSpinnerModule } from 'ngx-obelisco-example/spinner';
import { ONavModule } from 'ngx-obelisco-example/nav';
import { OTableModule } from 'ngx-obelisco-example/table';
import { SpinnerRoutingModule } from './spinner.routing.module';

import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { SpinnerComponent } from './spinner.component';
import { SpinnerApiComponent } from './pages/spinner-api/spinner-api.component';
import { SpinnerExamplesComponent } from './pages/spinner-examples/spinner-examples.component';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [SpinnerComponent, SpinnerApiComponent, SpinnerExamplesComponent],
  imports: [
    CommonModule,
    SpinnerRoutingModule,
    ONavModule,
    OTableModule,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective,
    OSpinnerModule,
    TabsLinkComponent
  ]
})
export class SpinnerModule {}
