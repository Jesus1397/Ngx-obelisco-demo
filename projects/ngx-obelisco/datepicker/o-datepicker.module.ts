import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ODatepickerComponent } from './o-datepicker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { OButtonComponent } from '@gcba/ngx-obelisco/button';

@NgModule({
  imports: [CommonModule, FormsModule, NgbModule, OButtonComponent],
  declarations: [ODatepickerComponent],
  exports: [ODatepickerComponent],
  bootstrap: [ODatepickerComponent]
})
export class ODatepickerModule {}
