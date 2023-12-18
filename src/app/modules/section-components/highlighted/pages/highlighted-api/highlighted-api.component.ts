import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import {
  HIGHLIGHTED_DATA_SOURCE,
  HIGHLIGHTED_TYPES,
  IMAGE_MEDIA_TYPES,
  MEDIA_INTERFACE,
  MEDIA_INTERFACE_DATA_SOURCE
} from 'src/app/constants/highlighted.constants';

@Component({
  selector: 'app-highlighted-api',
  templateUrl: './highlighted-api.component.html',
  styleUrls: ['./highlighted-api.component.scss']
})
export class HighlightedApiComponent {
  public columns = COLUMNS;
  public highlightedSource = HIGHLIGHTED_DATA_SOURCE;
  public types = HIGHLIGHTED_TYPES;
  public interface = MEDIA_INTERFACE;
  public dataSourceInterface = MEDIA_INTERFACE_DATA_SOURCE;
  public mediaTypes = IMAGE_MEDIA_TYPES;
}
