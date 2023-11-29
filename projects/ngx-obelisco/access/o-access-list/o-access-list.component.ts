import { AfterViewInit, Component, ElementRef, Input, OnChanges, Renderer2, ViewChild } from '@angular/core';
import { Access, AccessCategory, AccessList } from '@gcba/ngx-obelisco/core/models';

@Component({
  selector: 'o-access-list',
  templateUrl: './o-access-list.component.html',
  styleUrls: ['./o-access-list.component.scss']
})
export class OAccessListComponent implements OnChanges {
  @Input() public items!: AccessList;

  public accessList: Access[] = [];
  public accessCategoryList: AccessCategory[] = [];

  ngOnChanges() {
    if (this.items && this.items.children) {
      this.items.children.forEach((child) => {
        if (this.isAccess(child)) {
          this.accessList.push(child as Access);
        } else if (this.isAccessCategory(child)) {
          this.accessCategoryList.push(child as AccessCategory);
        }
      });
    }
  }

  private isAccess(item: any): item is Access {
    return item.hasOwnProperty('link') || item.hasOwnProperty('route');
  }

  private isAccessCategory(item: any): item is AccessCategory {
    return item.hasOwnProperty('title') && item.hasOwnProperty('children');
  }
}
