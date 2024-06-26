import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ONavModule } from 'ngx-obelisco-example/nav';

import { AccessRoutingModule } from './access-routing.module';
import { AccessComponent } from './access.component';

@NgModule({
  declarations: [AccessComponent],
  imports: [CommonModule, AccessRoutingModule, ONavModule]
})
export class AccessModule {}
