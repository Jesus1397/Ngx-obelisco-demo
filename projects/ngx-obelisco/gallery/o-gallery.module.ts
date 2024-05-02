import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OGalleryComponent } from './o-gallery.component';
import { ODefaultImageDirective } from 'ngx-obelisco-example/directives';

@NgModule({
  declarations: [OGalleryComponent],
  imports: [CommonModule, ODefaultImageDirective],
  exports: [OGalleryComponent]
})
export class OGalleryModule {}
