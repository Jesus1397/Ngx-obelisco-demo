import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusMessageTypes } from '@gcba/ngx-obelisco/core/models';

@Component({
  selector: 'o-status-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './o-status-message.component.html',
  styleUrls: ['./o-status-message.component.scss']
})
export class OStatusMessageComponent {
  @Input() public type: StatusMessageTypes = 'success';
  @Input() public title!: string;
  @Input() public content!: string | string[];
  @Input() public listContent: string[] = [];
  @Input() public customClasses: string = '';

  get isTextArray(): boolean {
    return Array.isArray(this.content);
  }

  get textArray(): string[] {
    return Array.isArray(this.content) ? this.content : [];
  }

  get isList(): boolean {
    return this.listContent.length > 0;
  }
}
