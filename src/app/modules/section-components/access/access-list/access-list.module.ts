import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OAccessModule } from 'ngx-obelisco-example/access';
import { OAlertDirective } from 'ngx-obelisco-example/alert';
import { ONavModule } from 'ngx-obelisco-example/nav';
import { OTableComponent } from 'ngx-obelisco-example/table';
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
