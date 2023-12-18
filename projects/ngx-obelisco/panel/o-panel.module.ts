import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DefaultImageDirective } from '@gcba/ngx-obelisco/directives';
import { OPanelSmallComponent } from './o-panel-small/o-panel-small.component';

@NgModule({
  declarations: [OPanelSmallComponent],
  imports: [CommonModule, DefaultImageDirective],
  exports: [OPanelSmallComponent]
})
export class OPanelModule {}
