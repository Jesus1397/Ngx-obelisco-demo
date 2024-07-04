import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public exampleComment = `// Instalación con npm
npm install ngx-obelisco-example`;
  public exampleInstall = `npm install ngx-obelisco-example`;
}
