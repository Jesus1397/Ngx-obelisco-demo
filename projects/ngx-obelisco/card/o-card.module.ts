import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { DefaultImageDirective } from '@gcba/ngx-obelisco/directives';

import { OCardComponent } from './o-card/o-card.component';

@NgModule({
  declarations: [OCardComponent],
  imports: [CommonModule, RouterModule, DefaultImageDirective],
  exports: [OCardComponent]
})
export class OCardModule {}
