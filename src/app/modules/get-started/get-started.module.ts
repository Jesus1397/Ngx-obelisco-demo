import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighlightJsModule } from 'ngx-highlight-js';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { GetStartedComponent } from './get-started.component';
import { OCardModule } from 'ngx-obelisco-example/card';
import { OButtonModule } from 'ngx-obelisco-example/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GetStartedComponent],
  imports: [CommonModule, HighlightJsModule, ClipboardDirective, OCardModule, OButtonModule, RouterModule]
})
export class GetStartedModule {}
