import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Image } from '@gcba/ngx-obelisco/core/models';
import { DefaultImageDirective } from '@gcba/ngx-obelisco/directives';

@Component({
  selector: 'o-gallery',
  standalone: true,
  imports: [CommonModule, DefaultImageDirective],
  templateUrl: './o-gallery.component.html',
  styleUrls: ['./o-gallery.component.scss']
})
export class OGalleryComponent {
  @Input() public galleryItems: Image[] = [];
  @Input() public isInteractive: boolean = false;
  @Input() public dataTarget!: string;
}
