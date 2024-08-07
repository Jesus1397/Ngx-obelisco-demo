import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponentsRoutingModule } from './section-components-routing.module';

import { SectionComponentsComponent } from './section-components.component';
import { DefaultImageComponent } from './default-image/default-image.component';
import { TabsLinkComponent } from '../../components/tabs-link/tabs-link.component';
import { NgxObeliscoModule } from 'ngx-obelisco-example/ngx-obelisco';

@NgModule({
  declarations: [SectionComponentsComponent, DefaultImageComponent],
  imports: [CommonModule, SectionComponentsRoutingModule, TabsLinkComponent, NgxObeliscoModule]
})
export class SectionComponentsModule {}
