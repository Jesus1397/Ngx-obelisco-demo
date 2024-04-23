import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import {
  MAP_DATA_SOURCE,
  MEDIAIFRAME_MAP_INTERFACE,
  MEDIAIFRAME_MAP_DATA_SOURCE
} from 'src/app/constants/map.constants';

@Component({
  selector: 'app-map-api',
  templateUrl: './map-api.component.html',
  styleUrls: ['./map-api.component.scss']
})
export class MapApiComponent {
  public columns = COLUMNS;
  public map = MAP_DATA_SOURCE;
  public interface = MEDIAIFRAME_MAP_INTERFACE;
  public dataSourceInterface = MEDIAIFRAME_MAP_DATA_SOURCE;
}
