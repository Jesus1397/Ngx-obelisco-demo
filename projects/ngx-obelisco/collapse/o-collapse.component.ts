import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Collapse, CollapseInputs } from '@gcba/ngx-obelisco/core/models';

@Component({
  selector: 'o-collapse',
  templateUrl: './o-collapse.component.html',
  imports: [CommonModule],
  styleUrls: ['./o-collapse.component.scss'],
  standalone: true
})
export class OCollapseComponent implements OnChanges {
  @Input() public items: Collapse[] = [];
  @Input() public id!: string;
  @Input() public dataParent!: string;
  @Input() public isWhite: boolean = false;
  @Input() public customClasses: string = '';

  @Output() public selectedItemChange: EventEmitter<CollapseInputs> = new EventEmitter<CollapseInputs>();

  isTextArray(i: number): boolean {
    return Array.isArray(this.items[i].content);
  }

  textArray(i: number): string[] {
    const description = this.items[i].content!;
    return Array.isArray(description) ? description : [description];
  }

  public itemInputList: CollapseInputs[] = [];
  public itemInfoList: Collapse[] = [];

  ngOnChanges() {
    this.itemInputList = [];
    this.itemInfoList = [];

    for (const item of this.items) {
      if (item.children && item.children.length > 0) {
        let hasInputChild = false;
        for (const child of item.children) {
          if ('value' in child && child.value !== undefined) {
            this.itemInputList.push(child as CollapseInputs);
            hasInputChild = true;
          }
        }

        if (!hasInputChild) {
          for (const child of item.children) {
            this.itemInfoList.push(child as CollapseInputs);
          }
        }
      }
    }
  }

  public toggleValue(child: CollapseInputs) {
    child.value = true;
    this.selectedItemChange.emit(child);
  }
}
