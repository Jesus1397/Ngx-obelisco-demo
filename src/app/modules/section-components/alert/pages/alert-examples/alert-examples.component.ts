import { Component } from '@angular/core';
import {
  ALERT_EXAMPLE_COLORS,
  ALERT_EXAMPLE_DISMISSIBLE,
  ALERT_EXAMPLE_HIGHLIGHT,
  ALERT_EXAMPLE_HIGHLIGHT_LINK,
  ALERT_EXAMPLE_LISTS
} from 'src/app/constants/alert.constants';

@Component({
  selector: 'app-alert-examples',
  templateUrl: './alert-examples.component.html',
  styleUrls: ['./alert-examples.component.scss']
})
export class AlertExamplesComponent {
  public exampleColors = ALERT_EXAMPLE_COLORS;
  public exampleDismissible = ALERT_EXAMPLE_DISMISSIBLE;
  public exampleHighlight = ALERT_EXAMPLE_HIGHLIGHT;
  public exampleHighlightLink = ALERT_EXAMPLE_HIGHLIGHT_LINK;
  public exampleLists = ALERT_EXAMPLE_LISTS;
}
