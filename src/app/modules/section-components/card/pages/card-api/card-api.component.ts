import { Component } from '@angular/core';
import {
  CARD_DATA_SOURCE,
  CARD_TAGS_DATA_SOURCE,
  CARD_TAGS_INTERFACE,
  MEDIAIMAGE_CARDS_DATA_SOURCE,
  MEDIAIMAGE_CARDS_INTERFACE,
  TAG_TYPES_INTERFACE
} from 'src/app/constants/card.constants';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-card-api',
  templateUrl: './card-api.component.html',
  styleUrls: ['./card-api.component.scss']
})
export class CardApiComponent {
  public columns = COLUMNS;
  public dataSourceCard = CARD_DATA_SOURCE;
  public cardTagsInterface = CARD_TAGS_INTERFACE;
  public dataSourceCardTags = CARD_TAGS_DATA_SOURCE;
  public tagTypesInterface = TAG_TYPES_INTERFACE;
  public mediaImageInterface = MEDIAIMAGE_CARDS_INTERFACE;
  public mediaImagedataSourceInterface = MEDIAIMAGE_CARDS_DATA_SOURCE;
}
