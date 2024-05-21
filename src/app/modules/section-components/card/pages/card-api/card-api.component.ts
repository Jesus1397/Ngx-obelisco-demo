import { Component } from '@angular/core';
import {
  CARD_DATA_SOURCE,
  CARD_BADGE_DATA_SOURCE,
  CARD_BADGES_INTERFACE,
  MEDIAIMAGE_CARDS_DATA_SOURCE,
  MEDIAIMAGE_CARDS_INTERFACE
} from 'src/app/constants/card.constants';
import { BADGE_TYPES } from 'src/app/constants/badge.constants';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-card-api',
  templateUrl: './card-api.component.html',
  styleUrls: ['./card-api.component.scss']
})
export class CardApiComponent {
  public columns = COLUMNS;
  public dataSourceCard = CARD_DATA_SOURCE;
  public cardBadgesInterface = CARD_BADGES_INTERFACE;
  public dataSourceCardBadges = CARD_BADGE_DATA_SOURCE;
  public badgeTypesInterface = BADGE_TYPES;
  public mediaImageInterface = MEDIAIMAGE_CARDS_INTERFACE;
  public mediaImagedataSourceInterface = MEDIAIMAGE_CARDS_DATA_SOURCE;
}
