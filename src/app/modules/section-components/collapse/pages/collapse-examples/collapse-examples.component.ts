import { Component } from '@angular/core';
import {
  COLLAPSE_EXAMPLE_HTML,
  COLLAPSE_ICON_EXAMPLE_HTML,
  COLLAPSE_INFO_EXAMPLE_HTML,
  COLLAPSE_LABEL_EXAMPLE_HTML,
  COLLAPSE_LIST_EXAMPLE_HTML,
  COLLAPSE_MULTIPLE_EXAMPLE_HTML,
  COLLAPSE_WHITE_EXAMPLE_HTML
} from 'src/app/constants/collapse.constants';

@Component({
  selector: 'app-collapse-examples',
  templateUrl: './collapse-examples.component.html',
  styleUrls: ['./collapse-examples.component.scss']
})
export class CollapseExamplesComponent {
  collapseUniqueHtml = COLLAPSE_EXAMPLE_HTML;
  collapseMultipleHtml = COLLAPSE_MULTIPLE_EXAMPLE_HTML;
  collapseInfoExampleHtml = COLLAPSE_INFO_EXAMPLE_HTML;
  collapseIconExampleHtml = COLLAPSE_ICON_EXAMPLE_HTML;
  collapseLabelExampleHtml = COLLAPSE_LABEL_EXAMPLE_HTML;
  collapseListExampleHtml = COLLAPSE_LIST_EXAMPLE_HTML;
  collapseWhiteHtml = COLLAPSE_WHITE_EXAMPLE_HTML;
}
