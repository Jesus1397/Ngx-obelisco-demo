import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';
import { NavbarExamplesComponent } from './pages/navbar-examples/navbar-examples.component';
import { NavbarApiComponent } from './pages/navbar-api/navbar-api.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { OTableComponent } from '@gcba/ngx-obelisco/table';
import { ONavModule } from '@gcba/ngx-obelisco/nav';
import { ONavbarModule } from '@gcba/ngx-obelisco/navbar';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [NavbarComponent, NavbarExamplesComponent, NavbarApiComponent],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    ONavModule,
    OTableComponent,
    ONavbarModule,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective,
    TabsLinkComponent
  ]
})
export class NavbarModule {}
