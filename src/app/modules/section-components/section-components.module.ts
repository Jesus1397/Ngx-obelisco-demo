import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponentsRoutingModule } from './section-components-routing.module';
import { OCardModule } from 'ngx-obelisco-example/card';
import { ONavModule } from 'ngx-obelisco-example/nav';

import { SectionComponentsComponent } from './section-components.component';
import { DefaultImageComponent } from './default-image/default-image.component';
import { TabsLinkComponent } from '../../components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [SectionComponentsComponent, DefaultImageComponent],
  imports: [CommonModule, SectionComponentsRoutingModule, ONavModule, OCardModule, TabsLinkComponent]
})
export class SectionComponentsModule {}
