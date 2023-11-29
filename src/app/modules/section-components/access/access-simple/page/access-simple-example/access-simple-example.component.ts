import { Component } from '@angular/core';
import {
  ACCESS_SIMPLE_DESCRIPTION_HTML,
  ACCESS_SIMPLE_ICON_HTML,
  ACCESS_SIMPLE_SIZES_HTML,
  ACCESS_SIMPLE_TITLE_HTML
} from 'src/app/constants/access.constants';

@Component({
  selector: 'app-access-simple-example',
  templateUrl: './access-simple-example.component.html',
  styleUrls: ['./access-simple-example.component.scss']
})
export class AccessSimpleExampleComponent {
  public exampleAccessTitleHtml = ACCESS_SIMPLE_TITLE_HTML;
  public exampleAccessDescriptionHtml = ACCESS_SIMPLE_DESCRIPTION_HTML;
  public exampleAccessIconHtml = ACCESS_SIMPLE_ICON_HTML;
  public exampleAccessSizesHtml = ACCESS_SIMPLE_SIZES_HTML;
}
