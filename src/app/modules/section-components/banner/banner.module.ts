import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerRoutingModule } from './banner-routing.module';
import { BannerComponent } from './banner.component';
import { BannerApiComponent } from './pages/banner-api/banner-api.component';
import { BannerExamplesComponent } from './pages/banner-examples/banner-examples.component';
import { ONavModule } from 'ngx-obelisco-example/nav';
import { OBannerModule } from 'ngx-obelisco-example/banner';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { OTableModule } from 'ngx-obelisco-example/table';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { OButtonModule } from 'ngx-obelisco-example/button';

@NgModule({
  declarations: [BannerComponent, BannerApiComponent, BannerExamplesComponent],
  imports: [
    CommonModule,
    BannerRoutingModule,
    ONavModule,
    OTableModule,
    ViewerComponent,
    PrismDirective,
    ClipboardDirective,
    OBannerModule,
    TabsLinkComponent,
    OButtonModule
  ]
})
export class BannerModule {}
