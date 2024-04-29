import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonRoutingModule } from './button-routing.module';
import { ButtonComponent } from './button.component';
import { ONavModule } from 'ngx-obelisco-example/nav';
import { ButtonApiComponent } from './pages/button-api/button-api.component';
import { ButtonExamplesComponent } from './pages/button-examples/button-examples.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { OTableComponent } from 'ngx-obelisco-example/table';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { OButtonComponent } from 'ngx-obelisco-example/button';

@NgModule({
  declarations: [ButtonComponent, ButtonApiComponent, ButtonExamplesComponent],
  imports: [
    CommonModule,
    ButtonRoutingModule,
    ONavModule,
    OTableComponent,
    ViewerComponent,
    PrismDirective,
    ClipboardDirective,
    TabsLinkComponent,
    OButtonComponent
  ]
})
export class ButtonModule {}
