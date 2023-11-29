import { Component } from '@angular/core';
import { COMPONENTS_NAVIGATION } from './constants/components.constants';
import { NavbarRoute } from '@gcba/ngx-obelisco/core/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes: NavbarRoute[] = [
    {
      title: 'Introducción',
      route: 'get-started'
    },
    {
      title: 'Componentes',
      route: 'components'
    }
  ];

  componentRoutes = COMPONENTS_NAVIGATION;

  searchItemsList = this.componentRoutes
    .flatMap((item) => {
      if (item['children']) {
        return item.children.flatMap((navItem) => [
          { title: `${item.title} | ${navItem.title}`, route: navItem.route },
          { title: `${item.title} | ${navItem.title} - Api`, route: `${navItem.route}/api` },
          { title: `${item.title} | ${navItem.title} - Ejemplos`, route: `${navItem.route}/examples` }
        ]);
      } else if (item.route === '/get-started' || item.route === '/components' || item.route === '/') {
        return item;
      } else {
        return [
          { title: item.title, route: item.route },
          { title: `${item.title} - Api`, route: `${item.route}/api` },
          { title: `${item.title} - Ejemplos`, route: `${item.route}/examples` }
        ];
      }
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}
