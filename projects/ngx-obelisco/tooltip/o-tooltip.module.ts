import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TippyModule, popperVariation, tooltipVariation } from '@ngneat/helipopper';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  declarations: [TooltipDirective],
  imports: [
    CommonModule,
    TippyModule.forRoot({
      variations: {
        tooltip: tooltipVariation,
        popper: popperVariation
      }
    })
  ],
  exports: [TooltipDirective]
})
export class OTooltipModule {}
