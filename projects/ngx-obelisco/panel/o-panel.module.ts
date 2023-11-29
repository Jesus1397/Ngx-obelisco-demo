import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DefaultImageDirective } from '@gcba/ngx-obelisco/directives';
import { OPanelSmallComponent } from './o-panel-small/o-panel-small.component';
import { OPanelComponent } from './o-panel/o-panel.component';

@NgModule({
  declarations: [OPanelComponent, OPanelSmallComponent],
  imports: [CommonModule, DefaultImageDirective],
  exports: [OPanelComponent, OPanelSmallComponent]
})
export class OPanelModule {}
