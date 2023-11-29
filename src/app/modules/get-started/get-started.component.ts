import { Component } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent {
  public iconImport = `
    "styles": [
      "src/styles.scss",
      "node_modules/boxicons/css/boxicons.min.css"
    ],
  `;
  public tipographyImport = `
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap" rel="stylesheet"></link>
  `;
  public stylesImport = `
    "styles": [
      "src/styles.scss",
      "node_modules/@gcba/ngx-obelisco/scss/obelisco.scss"
    ]
  `;
}
