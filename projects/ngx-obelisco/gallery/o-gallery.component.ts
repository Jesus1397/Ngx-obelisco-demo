import { MediaGallery } from '@gcba/ngx-obelisco/core/models';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DefaultImageDirective } from '@gcba/ngx-obelisco/directives';

@Component({
  selector: 'o-gallery',
  standalone: true,
  imports: [CommonModule, DefaultImageDirective],
  templateUrl: './o-gallery.component.html',
  styleUrls: ['./o-gallery.component.scss']
})
export class OGalleryComponent {
  @Input() public galleryItems: MediaGallery[] = [];
  @Input() public isInteractive: boolean = false;
  @Input() public dataTarget!: string;
  @Input() public customClasses: string = '';
  @Input() public customClassesInteractive: string = '';
}
