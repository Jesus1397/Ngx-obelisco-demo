import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { GetStartedComponent } from './get-started.component';
import { OCardModule } from 'ngx-obelisco-example/card';
import { OButtonModule } from 'ngx-obelisco-example/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GetStartedComponent],
  imports: [CommonModule, PrismDirective, ClipboardDirective, OCardModule, OButtonModule, RouterModule]
})
export class GetStartedModule {}
