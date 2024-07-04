import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ONavbarModule } from 'ngx-obelisco-example/navbar/o-navbar.module';
import { HighlightJsModule } from 'ngx-highlight-js';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ONavbarModule, HighlightJsModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
