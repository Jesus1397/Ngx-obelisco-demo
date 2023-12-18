import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import {
  IMAGE_MEDIA_TYPES,
  MEDIA_INTERFACE,
  MEDIA_INTERFACE_DATA_SOURCE
} from 'src/app/constants/highlighted.constants';
import { PANEL_SMALL_DATA_SOURCE } from 'src/app/constants/panel.constants';

@Component({
  selector: 'app-panel-api',
  templateUrl: './panel-api.component.html',
  styleUrls: ['./panel-api.component.scss']
})
export class PanelApiComponent {
  public columns = COLUMNS;
  public dataSourcePanelSmall = PANEL_SMALL_DATA_SOURCE;
  public interface = MEDIA_INTERFACE;
  public dataSourceInterface = MEDIA_INTERFACE_DATA_SOURCE;
  public mediaTypes = IMAGE_MEDIA_TYPES;
}
