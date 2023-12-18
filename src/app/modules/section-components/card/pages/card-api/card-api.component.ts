import { Component } from '@angular/core';
import {
  CARD_HORIZONTAL_DATA_SOURCE,
  CARD_TAGS_DATA_SOURCE,
  CARD_TAGS_INTERFACE,
  CARD_VERTICAL_DATA_SOURCE,
  TAG_TYPES_INTERFACE
} from 'src/app/constants/card.constants';
import { COLUMNS } from 'src/app/constants/components.constants';
import {
  IMAGE_MEDIA_TYPES,
  MEDIA_INTERFACE,
  MEDIA_INTERFACE_DATA_SOURCE
} from 'src/app/constants/highlighted.constants';

@Component({
  selector: 'app-card-api',
  templateUrl: './card-api.component.html',
  styleUrls: ['./card-api.component.scss']
})
export class CardApiComponent {
  public columns = COLUMNS;
  public dataSourceCardHorizontal = CARD_HORIZONTAL_DATA_SOURCE;
  public dataSourceCardVertical = CARD_VERTICAL_DATA_SOURCE;
  public cardTagsInterface = CARD_TAGS_INTERFACE;
  public dataSourceCardTags = CARD_TAGS_DATA_SOURCE;
  public tagTypesInterface = TAG_TYPES_INTERFACE;
  public interface = MEDIA_INTERFACE;
  public dataSourceInterface = MEDIA_INTERFACE_DATA_SOURCE;
  public mediaTypes = IMAGE_MEDIA_TYPES;
}
