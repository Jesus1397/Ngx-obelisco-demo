import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OFooterModule } from 'ngx-obelisco-example/footer';
import { ONavModule } from 'ngx-obelisco-example/nav';
import { OTableModule } from 'ngx-obelisco-example/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';
import { FooterApiComponent } from './pages/footer-api/footer-api.component';
import { FooterExamplesComponent } from './pages/footer-examples/footer-examples.component';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { HighlightJsModule } from 'ngx-highlight-js';

@NgModule({
  declarations: [FooterComponent, FooterApiComponent, FooterExamplesComponent],
  imports: [
    CommonModule,
    FooterRoutingModule,
    ONavModule,
    OTableModule,
    OFooterModule,
    ViewerComponent,
    ClipboardDirective,
    HighlightJsModule,
    TabsLinkComponent,
    HighlightJsModule
  ]
})
export class FooterModule {}
