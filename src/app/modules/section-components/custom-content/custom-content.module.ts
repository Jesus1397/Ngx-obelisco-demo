import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomContentRoutingModule } from './custom-content-routing.module';
import { CustomContentComponent } from './custom-content.component';
import { OTableComponent } from '@gcba/ngx-obelisco/table';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { CustomContentExamplesComponent } from './pages/custom-content-examples/custom-content-examples.component';
import { CustomContentApiComponent } from './pages/custom-content-api/custom-content-api.component';
import { OCustomContentDirective } from '@gcba/ngx-obelisco/directives';
import { OBlockModule } from '@gcba/ngx-obelisco/block';
import { OButtonComponent } from '@gcba/ngx-obelisco/button';

@NgModule({
  declarations: [CustomContentComponent, CustomContentExamplesComponent, CustomContentApiComponent],
  imports: [
    CommonModule,
    CustomContentRoutingModule,
    OTableComponent,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective,
    TabsLinkComponent,
    OCustomContentDirective,
    OBlockModule,
    OButtonComponent
  ]
})
export class CustomContentModule {}
