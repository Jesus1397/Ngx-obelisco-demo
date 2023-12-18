import { Component } from '@angular/core';
import { BLOCK_DATA_SOURCE } from 'src/app/constants/block.constants';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-block-api',
  templateUrl: './block-api.component.html',
  styleUrls: ['./block-api.component.scss']
})
export class BlockApiComponent {
  public columns = COLUMNS;
  public dataSource = BLOCK_DATA_SOURCE;
}
