import { Component } from '@angular/core';
import {
  CARD_EVENT_EXAMPLE_HTML,
  CARD_EVENT_SIMPLE_EXAMPLE_HTML,
  CARD_NOTICE_EXAMPLE_HTML,
  CARD_NOTICE_EXAMPLE_TS,
  CARD_TAGS,
  CARD_WITHOUT_CONTAINER_EXAMPLE_HTML,
  CARD_WITH_CONTAINER_EXAMPLE_HTML,
  CARD_WITH_CONTAINER_IMG_ICON_EXAMPLE_HTML
} from 'src/app/constants/card.constants';

@Component({
  selector: 'app-card-examples',
  templateUrl: './card-examples.component.html',
  styleUrls: ['./card-examples.component.scss']
})
export class CardExamplesComponent {
  public cardWithoutContainerHtml = CARD_WITHOUT_CONTAINER_EXAMPLE_HTML;
  public cardWithContainerHtml = CARD_WITH_CONTAINER_EXAMPLE_HTML;
  public cardWithContainerImgIconHtml = CARD_WITH_CONTAINER_IMG_ICON_EXAMPLE_HTML;
  public cardNoticeHtml = CARD_NOTICE_EXAMPLE_HTML;
  public cardNoticeTs = CARD_NOTICE_EXAMPLE_TS;
  public cardEventSimpleHtml = CARD_EVENT_SIMPLE_EXAMPLE_HTML;
  public cardEventHtml = CARD_EVENT_EXAMPLE_HTML;
  public cardTags = CARD_TAGS;
}
