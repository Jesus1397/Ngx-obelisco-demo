import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import { MODAL_DATA_SOURCE } from 'src/app/constants/modal.constants';

@Component({
  selector: 'app-modal-api',
  templateUrl: './modal-api.component.html',
  styleUrls: ['./modal-api.component.scss']
})
export class ModalApiComponent {
  public dataSource = MODAL_DATA_SOURCE;
  public columns = COLUMNS;
}
