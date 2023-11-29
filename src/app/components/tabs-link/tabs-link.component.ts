import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tabs-link',
  standalone: true,
  templateUrl: './tabs-link.component.html',
  styleUrls: ['./tabs-link.component.scss'],
  imports: [CommonModule, RouterModule]
})
export class TabsLinkComponent {
  @Input() routes: any;
}
