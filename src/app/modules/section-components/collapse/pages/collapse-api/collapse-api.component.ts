import { Component } from '@angular/core';
import {
  COLLAPSE_DATA_SOURCE,
  COLLAPSE_DATA_SOURCE_OUTPUT,
  COLLAPSE_INPUTS_INTERFACE,
  COLLAPSE_INTERFACE,
  COLLAPSE_ITEMS_INTERFACE,
  INTERFACE_COLLAPSE_DATA_SOURCE,
  INTERFACE_COLLAPSE_INPUTS_DATA_SOURCE,
  INTERFACE_COLLAPSE_ITEMS_DATA_SOURCE
} from 'src/app/constants/collapse.constants';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-collapse-api',
  templateUrl: './collapse-api.component.html',
  styleUrls: ['./collapse-api.component.scss']
})
export class CollapseApiComponent {
  public columns = COLUMNS;
  public dataSource = COLLAPSE_DATA_SOURCE;
  public dataSourceOutput = COLLAPSE_DATA_SOURCE_OUTPUT;

  public interfaceCollapse = COLLAPSE_INTERFACE;
  public interfaceCollapseItems = COLLAPSE_ITEMS_INTERFACE;
  public interfaceCollapseInputs = COLLAPSE_INPUTS_INTERFACE;

  public dataSourceCollapse = INTERFACE_COLLAPSE_DATA_SOURCE;
  public dataSourceCollapseItems = INTERFACE_COLLAPSE_ITEMS_DATA_SOURCE;
  public dataSourceCollapseInputs = INTERFACE_COLLAPSE_INPUTS_DATA_SOURCE;
}
