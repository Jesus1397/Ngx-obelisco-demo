import { CommonModule } from '@angular/common';
import {
  OnInit,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren,
  Renderer2
} from '@angular/core';
import { Column } from '@gcba/ngx-obelisco/core/models';

@Component({
  selector: 'o-table',
  templateUrl: './o-table.component.html',
  styleUrls: ['./o-table.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class OTableComponent implements OnInit, AfterViewInit {
  public isValidateComponent: boolean = false;

  @Input() public columns: Column[] = [];
  @Input() public dataSource: any[] = [];
  @Input() public isBordered: boolean = false;
  @Input() public isStriped: boolean = false;
  @Input() public isHover: boolean = false;
  @Input() public isSelectable: boolean = false;
  @Input() public isScrollable: boolean = false;
  @Input() public customClasses: string = '';

  @Output() public dataSelectedChange = new EventEmitter<any>();

  private inputCheckArr: ElementRef[] = [];
  private DataSelectedArr: any[] = [];

  @ViewChildren('checkbox') public checkbox!: QueryList<ElementRef>;

  constructor(private readonly renderer: Renderer2) {}

  public ngOnInit(): void {
    this.componentValidations();
  }

  public ngAfterViewInit(): void {
    this.checkbox.map((e) => {
      this.inputCheckArr.push(e.nativeElement);
    });
  }

  private componentValidations(): void {
    this.isValidateComponent = this.columns.length > 0 && this.dataSource.length > 0;

    if (!this.isValidateComponent) {
      throw new Error('The columns and dataSource must not be empty');
    }

    this.columns.map((e) => {
      if (e.key === '' || e.value === '') {
        this.isValidateComponent = false;
        throw new Error('The columns must not have null values');
      }
    });

    this.columns.map((e) => (e.value = e.value.trim()));

    this.columns = this.columns.map((e) => {
      e.value = e.value.charAt(0).toUpperCase() + e.value.slice(1).toLowerCase();
      return e;
    });

    this.columns.map((e) => {
      if (e.value.match(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*$/) && e.key.match(/^[a-zA-Z ]*$/)) {
        this.isValidateComponent = true;
        return e;
      } else {
        this.isValidateComponent = false;
        throw new Error(
          'The columns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents'
        );
      }
    });
  }

  public allSelected($event: any): void {
    if (!$event.checked) {
      this.checkbox.map((e) => this.renderer.setProperty(e.nativeElement, 'checked', false));
      this.DataSelectedArr = [];
    } else {
      this.checkbox.map((e) => this.renderer.setProperty(e.nativeElement, 'checked', true));
      this.DataSelectedArr = this.dataSource;
    }

    this.dataSelectedChange.emit(this.DataSelectedArr);
  }

  public selectedRow($event: any): void {
    const index = this.inputCheckArr.indexOf($event);
    if ($event.checked) {
      this.DataSelectedArr.push(this.dataSource[index]);
    } else {
      this.DataSelectedArr = this.DataSelectedArr.filter((_, i) => i !== index);
    }
    this.dataSelectedChange.emit(this.DataSelectedArr);
  }
}
