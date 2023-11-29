import { Component, Input } from '@angular/core';
import { Sizes, Step } from '@gcba/ngx-obelisco/core/models';

@Component({
  selector: 'o-list-step',
  templateUrl: './o-list-step.component.html',
  styleUrls: ['./o-list-step.component.scss']
})
export class OListStepComponent {
  @Input() steps: Step[] = [];
  @Input() isStepLight: boolean = false;
  @Input() isStepNumber: boolean = false;
  @Input() size!: Sizes;

  isTextArray(i: number): boolean {
    return Array.isArray(this.steps[i].description);
  }

  textArray(i: number): string[] {
    const description = this.steps[i].description;
    return Array.isArray(description) ? description : [description];
  }
}
