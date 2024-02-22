import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './o-modal.component.html',
  styleUrls: ['./o-modal.component.scss']
})
export class OModalComponent {
  @Input() public id!: string;
  @Input() public dataTarget!: string;
  @Input() public title!: string;
  @Input() public subtitle!: string;
  @Input() public description!: string;
  @Input() public isBordered: boolean = false;
  @Input() public customClasses: string = '';
}
