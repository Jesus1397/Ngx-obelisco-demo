import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { DefaultImageDirective } from '@gcba/ngx-obelisco/directives';

import { OCardHorizontalComponent } from './o-card-horizontal/o-card-horizontal.component';
import { OCardVerticalComponent } from './o-card-vertical/o-card-vertical.component';

@NgModule({
  declarations: [OCardHorizontalComponent, OCardVerticalComponent],
  imports: [CommonModule, RouterModule, DefaultImageDirective],
  exports: [OCardHorizontalComponent, OCardVerticalComponent]
})
export class OCardModule {}
