import { Component } from '@angular/core';
import { BANNER_DATA_SOURCE } from 'src/app/constants/banner.constants';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-banner-api',
  templateUrl: './banner-api.component.html',
  styleUrls: ['./banner-api.component.scss']
})
export class BannerApiComponent {
  public dataSource = BANNER_DATA_SOURCE;
  public columns = COLUMNS;
}
