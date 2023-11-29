import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import { PANEL_DATA_SOURCE } from 'src/app/constants/panel.constants';

@Component({
  selector: 'app-panel-api',
  templateUrl: './panel-api.component.html',
  styleUrls: ['./panel-api.component.scss']
})
export class PanelApiComponent {
  public columns = COLUMNS;
  public dataSourcePanel = PANEL_DATA_SOURCE;
  public dataSourcePanelSmall = PANEL_DATA_SOURCE;
}
