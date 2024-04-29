import { MediaGallery } from 'ngx-obelisco-example/core/models';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ODefaultImageDirective } from 'ngx-obelisco-example/directives';

@Component({
  selector: 'o-gallery',
  standalone: true,
  imports: [CommonModule, ODefaultImageDirective],
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
