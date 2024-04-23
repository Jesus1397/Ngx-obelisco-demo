import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ODatepickerModule } from '@gcba/ngx-obelisco/datepicker';
import { OButtonComponent } from '@gcba/ngx-obelisco/button';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, PrismDirective, ODatepickerModule, OButtonComponent]
})
export class HomeModule {}
