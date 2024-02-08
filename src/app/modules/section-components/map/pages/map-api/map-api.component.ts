import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import {
  HIGHLIGHTED_TYPES,
  IMAGE_MEDIA_TYPES,
  MEDIA_INTERFACE,
  MEDIA_INTERFACE_DATA_SOURCE
} from 'src/app/constants/highlighted.constants';
import { MAP_DATA_SOURCE } from 'src/app/constants/map.constants';

@Component({
  selector: 'app-map-api',
  templateUrl: './map-api.component.html',
  styleUrls: ['./map-api.component.scss']
})
export class MapApiComponent {
  public columns = COLUMNS;
  public map = MAP_DATA_SOURCE;
  public types = HIGHLIGHTED_TYPES;
  public interface = MEDIA_INTERFACE;
  public dataSourceInterface = MEDIA_INTERFACE_DATA_SOURCE;
  public mediaTypes = IMAGE_MEDIA_TYPES;
}
