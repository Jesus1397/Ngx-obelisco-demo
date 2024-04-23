import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-content-examples',
  templateUrl: './custom-content-examples.component.html',
  styleUrls: ['./custom-content-examples.component.scss']
})
export class CustomContentExamplesComponent {
  public oCustomContentHTML = `
  <o-block [isBgLight]="true">
    <ng-container *oCustomContent>
      <p class="mb-1">Título personalizado</p>
      <div class="d-flex justify-content-between font-weight-bold">
        <span>Total:</span>
        <span class="h3 mb-0">$1000</span>
      </div>
      <o-button [isExpandable]="true" link="#"></o-button>
      <hr />
      <p>Texto extendido personalizado de bloque de trámite.</p>
      <o-button [isOutline]="true" type="secondary" [isExpandable]="true" link="#"></o-button>
    </ng-container>
  </o-block>
  `;
}
