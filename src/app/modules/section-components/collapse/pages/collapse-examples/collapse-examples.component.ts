import { Component } from '@angular/core';
import {
  COLLAPSE_ARRAY,
  COLLAPSE_CAPTION_DESCRIPTION,
  COLLAPSE_CAPTION_DESCRIPTION_EXAMPLE_TS,
  COLLAPSE_EXAMPLE_HTML,
  COLLAPSE_EXAMPLE_TS,
  COLLAPSE_ICON_ARRAY,
  COLLAPSE_ICON_EXAMPLE_TS,
  COLLAPSE_INFORMATION,
  COLLAPSE_INFO_EXAMPLE_TS,
  COLLAPSE_LIST,
  COLLAPSE_LIST_EXAMPLE_TS,
  COLLAPSE_MULTIPLE_EXAMPLE_HTML,
  COLLAPSE_MULTIPLE_EXAMPLE_TS,
  COLLAPSE_WHITE_EXAMPLE_HTML
} from 'src/app/constants/collapse.constants';

@Component({
  selector: 'app-collapse-examples',
  templateUrl: './collapse-examples.component.html',
  styleUrls: ['./collapse-examples.component.scss']
})
export class CollapseExamplesComponent {
  collapseList = COLLAPSE_ARRAY;
  collapseListIcon = COLLAPSE_ICON_ARRAY;
  collapseListCaptionDescription = COLLAPSE_CAPTION_DESCRIPTION;
  collapseListInfo = COLLAPSE_INFORMATION;
  collapseListSelectable = COLLAPSE_LIST;

  collapseUniqueHtml = COLLAPSE_EXAMPLE_HTML;
  collapseMultipleHtml = COLLAPSE_MULTIPLE_EXAMPLE_HTML;
  collapseWhiteHtml = COLLAPSE_WHITE_EXAMPLE_HTML;

  collapseUniqueTs = COLLAPSE_EXAMPLE_TS;
  collapseMultipleTs = COLLAPSE_MULTIPLE_EXAMPLE_TS;
  collapseInfoTs = COLLAPSE_INFO_EXAMPLE_TS;
  collapseIconTs = COLLAPSE_ICON_EXAMPLE_TS;
  collapseCaptionDescriptionTs = COLLAPSE_CAPTION_DESCRIPTION_EXAMPLE_TS;
  collapseListTs = COLLAPSE_LIST_EXAMPLE_TS;
}
