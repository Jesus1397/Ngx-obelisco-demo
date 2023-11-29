import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OAccessModule } from '@gcba/ngx-obelisco/access';
import { OAlertDirective } from '@gcba/ngx-obelisco/alert';
import { ONavModule } from '@gcba/ngx-obelisco/nav';
import { OTableComponent } from '@gcba/ngx-obelisco/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { AccessListRoutingModule } from './access-list-routing.module';
import { AccessListComponent } from './access-list.component';
import { AccessListApiComponent } from './pages/access-list-api/access-list-api.component';
import { AccessListExampleComponent } from './pages/access-list-example/access-list-example.component';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [AccessListComponent, AccessListApiComponent, AccessListExampleComponent],
  imports: [
    CommonModule,
    AccessListRoutingModule,
    ONavModule,
    OTableComponent,
    PrismDirective,
    ClipboardDirective,
    ViewerComponent,
    OAccessModule,
    OAlertDirective,
    TabsLinkComponent
  ]
})
export class AccessListModule {}
