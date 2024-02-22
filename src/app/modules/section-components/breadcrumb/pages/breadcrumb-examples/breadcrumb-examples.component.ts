import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '@gcba/ngx-obelisco/core/services';
import { BREADCRUMB_EXAMPLE_TS } from 'src/app/constants/breadcrumb.constants';

@Component({
  selector: 'app-breadcrumb-examples',
  templateUrl: './breadcrumb-examples.component.html',
  styleUrls: ['./breadcrumb-examples.component.scss']
})
export class BreadcrumbExamplesComponent implements OnInit {
  public exampleTS = BREADCRUMB_EXAMPLE_TS;
  constructor(private readonly breadcrumb: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumb.breadcrumb$.next({
      routes: [
        { name: 'Inicio', route: '/custom' },
        { name: 'nivel 2', id: '15151' },
        { name: 'nivel 3', route: '/custom-routes' },
        { name: 'Página anterior', id: '525252525', route: '/custom' }
      ],
      defaultRoute: '/url-default'
    });
  }
}
