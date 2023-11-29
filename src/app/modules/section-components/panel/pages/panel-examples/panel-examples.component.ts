import { Component } from '@angular/core';
import {
  PANEL_WITHOUT_BG,
  PANEL_WITH_BG,
  PANEL_WITH_VIDEO,
  PANEL_VERTICAL,
  PANEL_SMALL_HORIZONTAL,
  PANEL_SMALL_ITEMS_HORIZANTAL,
  PANEL_SMALL_ITEMS_VERTICAL,
  PANEL_SMALL_VERTICAL,
  PANEL_SMALL_WITH_BG,
  PANEL_SMALL_LARGE
} from 'src/app/constants/panel.constants';

@Component({
  selector: 'app-panel-examples',
  templateUrl: './panel-examples.component.html',
  styleUrls: ['./panel-examples.component.scss']
})
export class PanelExamplesComponent {
  public exampleWithoutBg = PANEL_WITHOUT_BG;
  public exampleWithBg = PANEL_WITH_BG;
  public exampleWithVideo = PANEL_WITH_VIDEO;
  public exampleVertical = PANEL_VERTICAL;

  public exampleSmallHorizontal = PANEL_SMALL_HORIZONTAL;
  public exampleSmallVertical = PANEL_SMALL_VERTICAL;
  public exampleSmallLarge = PANEL_SMALL_LARGE;
  public exampleSmallWithBg = PANEL_SMALL_WITH_BG;
  public exampleSmallItemsVertical = PANEL_SMALL_ITEMS_VERTICAL;
  public exampleSmallItemsHorizontal = PANEL_SMALL_ITEMS_HORIZANTAL;
}
