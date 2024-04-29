import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ODefaultImageDirective } from 'ngx-obelisco-example/directives';

import { OCardComponent } from './o-card/o-card.component';

@NgModule({
  declarations: [OCardComponent],
  imports: [CommonModule, RouterModule, ODefaultImageDirective],
  exports: [OCardComponent]
})
export class OCardModule {}
