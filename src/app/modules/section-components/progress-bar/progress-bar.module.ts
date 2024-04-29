import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OProgressBarComponent } from 'ngx-obelisco-example/progress-bar';
import { ONavModule } from 'ngx-obelisco-example/nav';
import { OTableComponent } from 'ngx-obelisco-example/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';

import { ProgressBarApiComponent } from './pages/progress-bar-api/progress-bar-api.component';
import { ProgressBarDemoComponent } from './pages/progress-bar-examples/demo/progress-bar-demo.component';
import { ProgressBarExamplesComponent } from './pages/progress-bar-examples/progress-bar-examples.component';
import { ProgressBarRoutingModule } from './progress-bar-routing.module';
import { ProgressBarComponent } from './progress-bar.component';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { OButtonComponent } from 'ngx-obelisco-example/button';

@NgModule({
  declarations: [ProgressBarComponent, ProgressBarApiComponent, ProgressBarExamplesComponent, ProgressBarDemoComponent],
  imports: [
    CommonModule,
    ProgressBarRoutingModule,
    ONavModule,
    OTableComponent,
    OProgressBarComponent,
    ViewerComponent,
    PrismDirective,
    ClipboardDirective,
    TabsLinkComponent,
    OButtonComponent
  ]
})
export class ProgressBarModule {}
