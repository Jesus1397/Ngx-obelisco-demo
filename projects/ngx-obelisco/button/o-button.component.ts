import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonTypes, Sizes } from 'ngx-obelisco-example/core/models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'o-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './o-button.component.html',
  styleUrls: ['./o-button.component.scss']
})
export class OButtonComponent {
  @Input() public type: ButtonTypes = 'primary';
  @Input() public isOutline?: boolean = false;
  @Input() public text?: string;
  @Input() public size?: Sizes = 'md';
  @Input() public isExpandable: boolean = false;
  @Input() public icon?: string;
  @Input() public ariaLabel?: string;
  @Input() public spinner?: boolean = false;
  @Input() public iconPositionRight?: boolean = false;
  @Input() public spinnerPositionRight?: boolean = false;
  @Input() public route!: string;
  @Input() public link?: string;
  @Input() public target?: string;
  @Input() public download?: string;
  @Input() public rel?: string;
  @Input() public isDisabled?: boolean;
  @Input() public dataTarget?: string;
  @Input() public dataToggle?: string;
  @Input() public dataDismiss?: string;
  @Input() public customClasses: string = '';

  getSpinnerType(): string {
    const spinnerTypeMappings = {
      primary: 'dark',
      link: 'info',
      danger: 'danger',
      success: 'success',
      secondary: 'secondary'
    };

    if ((this.type === 'secondary' || this.type === 'danger' || this.type === 'success') && !this.isOutline) {
      return 'light';
    }
    return spinnerTypeMappings[this.type];
  }
}
