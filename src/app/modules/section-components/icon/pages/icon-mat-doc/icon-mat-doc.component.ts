import { Component } from '@angular/core';
import { EnumMaterialIcons } from 'ngx-obelisco-example/core/models';

@Component({
  selector: 'app-icon-mat-doc',
  templateUrl: './icon-mat-doc.component.html',
  styleUrls: ['./icon-mat-doc.component.scss']
})
export class IconMatDocComponent {
  constructor() {}
  public matIcon = EnumMaterialIcons;
  public getArrayFromObject(obj: { [key: string]: string }): string[] {
    return Object.values(obj);
  }

  public arrayMaterial = this.getArrayFromObject(this.matIcon);
}
