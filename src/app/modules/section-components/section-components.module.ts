import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponentsRoutingModule } from './section-components-routing.module';
import { OCardModule } from '@gcba/ngx-obelisco/card';
import { ONavModule } from '@gcba/ngx-obelisco/nav';

import { SectionComponentsComponent } from './section-components.component';

@NgModule({
  declarations: [SectionComponentsComponent],
  imports: [CommonModule, SectionComponentsRoutingModule, ONavModule, OCardModule]
})
export class SectionComponentsModule {}
