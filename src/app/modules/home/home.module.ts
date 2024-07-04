import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighlightJsModule } from 'ngx-highlight-js';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ODatepickerModule } from 'ngx-obelisco-example/datepicker';
import { OButtonModule } from 'ngx-obelisco-example/button';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, HighlightJsModule, ODatepickerModule, OButtonModule]
})
export class HomeModule {}
