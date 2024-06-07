'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [7556],
  {
    9373: (O, g, r) => {
      r.d(g, { n: () => h });
      var c = r(9808),
        a = r(2526),
        x = r(4893);
      let h = (() => {
        class u {}
        return (
          (u.ɵfac = function (C) {
            return new (C || u)();
          }),
          (u.ɵmod = x.oAB({ type: u })),
          (u.ɵinj = x.cJS({ imports: [c.ez, a.Bz] })),
          u
        );
      })();
    },
    139: (O, g, r) => {
      r.d(g, { x: () => y });
      var c = r(4893),
        a = r(9808),
        x = r(2526);
      const h = ['access'];
      function u(l, o) {
        if ((1 & l && c._UZ(0, 'i', 6), 2 & l)) {
          const d = c.oxw();
          c.Q6J('ngClass', d.icon);
        }
      }
      function k(l, o) {
        if ((1 & l && (c.TgZ(0, 'span', 7), c._uU(1), c.qZA()), 2 & l)) {
          const d = c.oxw();
          c.xp6(1), c.Oqu(d.icon);
        }
      }
      function C(l, o) {
        if ((1 & l && (c.TgZ(0, 'span', 8), c._uU(1), c.qZA()), 2 & l)) {
          const d = c.oxw();
          c.xp6(1), c.Oqu(d.title);
        }
      }
      function w(l, o) {
        if (
          (1 & l && (c.TgZ(0, 'div', 9)(1, 'span', 8), c._uU(2), c.qZA(), c.TgZ(3, 'p', 10), c._uU(4), c.qZA()()),
          2 & l)
        ) {
          const d = c.oxw();
          c.xp6(2), c.Oqu(d.title), c.xp6(2), c.Oqu(d.description);
        }
      }
      let y = (() => {
        class l {
          constructor(d) {
            (this.renderer = d), (this.size = 'md'), (this.customClasses = '');
          }
          ngAfterViewInit() {
            this.link && this.renderer.setAttribute(this.access.nativeElement, 'href', this.link);
          }
        }
        return (
          (l.ɵfac = function (d) {
            return new (d || l)(c.Y36(c.Qsj));
          }),
          (l.ɵcmp = c.Xpm({
            type: l,
            selectors: [['o-access']],
            viewQuery: function (d, n) {
              if ((1 & d && c.Gf(h, 5), 2 & d)) {
                let i;
                c.iGM((i = c.CRH())) && (n.access = i.first);
              }
            },
            inputs: {
              icon: 'icon',
              title: 'title',
              description: 'description',
              size: 'size',
              link: 'link',
              route: 'route',
              customClasses: 'customClasses'
            },
            decls: 6,
            vars: 8,
            consts: [
              [1, 'list-group-item', 3, 'routerLink', 'ngClass'],
              ['access', ''],
              [3, 'ngClass', 4, 'ngIf'],
              ['class', 'material-icons-round', 4, 'ngIf'],
              ['class', 'access-title', 4, 'ngIf'],
              ['class', 'access-content', 4, 'ngIf'],
              [3, 'ngClass'],
              [1, 'material-icons-round'],
              [1, 'access-title'],
              [1, 'access-content'],
              [1, 'access-text']
            ],
            template: function (d, n) {
              1 & d &&
                (c.TgZ(0, 'a', 0, 1),
                c.YNc(2, u, 1, 1, 'i', 2),
                c.YNc(3, k, 2, 1, 'span', 3),
                c.YNc(4, C, 2, 1, 'span', 4),
                c.YNc(5, w, 5, 2, 'div', 5),
                c.qZA()),
                2 & d &&
                  (c.ekj('item-sm', 'sm' == n.size),
                  c.Q6J('routerLink', n.route)('ngClass', n.customClasses),
                  c.xp6(2),
                  c.Q6J('ngIf', n.icon && n.icon.includes('bx')),
                  c.xp6(1),
                  c.Q6J('ngIf', n.icon && !n.icon.includes('bx')),
                  c.xp6(1),
                  c.Q6J('ngIf', !n.description),
                  c.xp6(1),
                  c.Q6J('ngIf', n.description));
            },
            dependencies: [a.mk, a.O5, x.yS],
            styles: [
              '.card-deck o-access,   .access-deck o-access,   .card-deck o-highlighted,   .access-deck o-highlighted,   .card-deck o-card,   .access-deck o-card,   .card-deck .card,   .access-deck .card{flex:1 0 35%;margin-top:0}  .card-deck o-access:nth-of-type(n + 3),   .access-deck o-access:nth-of-type(n + 3),   .card-deck o-highlighted:nth-of-type(n + 3),   .access-deck o-highlighted:nth-of-type(n + 3),   .card-deck o-card:nth-of-type(n + 3),   .access-deck o-card:nth-of-type(n + 3),   .card-deck .card:nth-of-type(n + 3),   .access-deck .card:nth-of-type(n + 3){margin-top:30px}  .card-deck o-access,   .access-deck o-access,   .card-deck o-highlighted,   .access-deck o-highlighted,   .card-deck o-card,   .access-deck o-card{margin-right:15px;margin-bottom:0;margin-left:15px}  .card-deck o-access .card,   .access-deck o-access .card,   .card-deck o-access .list-group-item,   .access-deck o-access .list-group-item,   .card-deck o-highlighted .card,   .access-deck o-highlighted .card,   .card-deck o-highlighted .list-group-item,   .access-deck o-highlighted .list-group-item,   .card-deck o-card .card,   .access-deck o-card .card,   .card-deck o-card .list-group-item,   .access-deck o-card .list-group-item{min-width:100%;width:100%;height:100%;margin:0}  .card-deck o-highlighted o-access,   .access-deck o-highlighted o-access{margin:0}@media (min-width: 592px){  .card-deck,   .access-deck{display:flex;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}}@media (max-width: 591.98px){  .card-deck o-access:nth-of-type(2),   .access-deck o-access:nth-of-type(2),   .card-deck o-highlighted:nth-of-type(2),   .access-deck o-highlighted:nth-of-type(2),   .card-deck o-card:nth-of-type(2),   .access-deck o-card:nth-of-type(2),   .card-deck .card:nth-of-type(2),   .access-deck .card:nth-of-type(2){margin-top:30px}}@media (min-width: 752px){  .card-deck:not(.max-cards-2) o-access,   .access-deck:not(.max-cards-2) o-access,   .card-deck:not(.max-cards-2) o-highlighted,   .access-deck:not(.max-cards-2) o-highlighted,   .card-deck:not(.max-cards-2) o-card,   .access-deck:not(.max-cards-2) o-card,   .card-deck:not(.max-cards-2) .card,   .access-deck:not(.max-cards-2) .card,   .card-deck.max-cards-3 o-access,   .max-cards-3.access-deck o-access,   .card-deck.max-cards-3 o-highlighted,   .max-cards-3.access-deck o-highlighted,   .card-deck.max-cards-3 o-card,   .max-cards-3.access-deck o-card,   .card-deck.max-cards-3 .card,   .max-cards-3.access-deck .card{flex:1 0 25%;margin-top:0}  .card-deck:not(.max-cards-2) o-access:nth-of-type(n + 4),   .access-deck:not(.max-cards-2) o-access:nth-of-type(n + 4),   .card-deck:not(.max-cards-2) o-highlighted:nth-of-type(n + 4),   .access-deck:not(.max-cards-2) o-highlighted:nth-of-type(n + 4),   .card-deck:not(.max-cards-2) o-card:nth-of-type(n + 4),   .access-deck:not(.max-cards-2) o-card:nth-of-type(n + 4),   .card-deck:not(.max-cards-2) .card:nth-of-type(n + 4),   .access-deck:not(.max-cards-2) .card:nth-of-type(n + 4),   .card-deck.max-cards-3 o-access:nth-of-type(n + 4),   .max-cards-3.access-deck o-access:nth-of-type(n + 4),   .card-deck.max-cards-3 o-highlighted:nth-of-type(n + 4),   .max-cards-3.access-deck o-highlighted:nth-of-type(n + 4),   .card-deck.max-cards-3 o-card:nth-of-type(n + 4),   .max-cards-3.access-deck o-card:nth-of-type(n + 4),   .card-deck.max-cards-3 .card:nth-of-type(n + 4),   .max-cards-3.access-deck .card:nth-of-type(n + 4){margin-top:30px}}@media (min-width: 976px){  .card-deck:not(.max-cards-2):not(.max-cards-3) o-access,   .access-deck:not(.max-cards-2):not(.max-cards-3) o-access,   .card-deck:not(.max-cards-2):not(.max-cards-3) o-highlighted,   .access-deck:not(.max-cards-2):not(.max-cards-3) o-highlighted,   .card-deck:not(.max-cards-2):not(.max-cards-3) o-card,   .access-deck:not(.max-cards-2):not(.max-cards-3) o-card,   .card-deck:not(.max-cards-2):not(.max-cards-3) .card,   .access-deck:not(.max-cards-2):not(.max-cards-3) .card{flex:1 0 19%;margin-top:0}  .card-deck:not(.max-cards-2):not(.max-cards-3) o-access:nth-of-type(n + 5),   .access-deck:not(.max-cards-2):not(.max-cards-3) o-access:nth-of-type(n + 5),   .card-deck:not(.max-cards-2):not(.max-cards-3) o-highlighted:nth-of-type(n + 5),   .access-deck:not(.max-cards-2):not(.max-cards-3) o-highlighted:nth-of-type(n + 5),   .card-deck:not(.max-cards-2):not(.max-cards-3) o-card:nth-of-type(n + 5),   .access-deck:not(.max-cards-2):not(.max-cards-3) o-card:nth-of-type(n + 5),   .card-deck:not(.max-cards-2):not(.max-cards-3) .card:nth-of-type(n + 5),   .access-deck:not(.max-cards-2):not(.max-cards-3) .card:nth-of-type(n + 5){margin-top:30px}}  .card-deck.max-cards-1 o-access,   .max-cards-1.access-deck o-access,   .card-deck.max-cards-1 o-highlighted,   .max-cards-1.access-deck o-highlighted,   .card-deck.max-cards-1 o-card,   .max-cards-1.access-deck o-card,   .card-deck.max-cards-1 .card,   .max-cards-1.access-deck .card{flex:1 0 55%!important;margin-top:0}  .card-deck.max-cards-1 o-access:nth-of-type(n + 2),   .max-cards-1.access-deck o-access:nth-of-type(n + 2),   .card-deck.max-cards-1 o-highlighted:nth-of-type(n + 2),   .max-cards-1.access-deck o-highlighted:nth-of-type(n + 2),   .card-deck.max-cards-1 o-card:nth-of-type(n + 2),   .max-cards-1.access-deck o-card:nth-of-type(n + 2),   .card-deck.max-cards-1 .card:nth-of-type(n + 2),   .max-cards-1.access-deck .card:nth-of-type(n + 2){margin-top:30px}@media (max-width: 591.98px){  .card-deck.card-column,   .card-column.access-deck,   .access-deck.access-column{width:100%}}  .card-deck.card-column o-access,   .card-column.access-deck o-access,   .access-deck.access-column o-access,   .card-deck.card-column o-highlighted,   .card-column.access-deck o-highlighted,   .access-deck.access-column o-highlighted,   .card-deck.card-column o-card,   .card-column.access-deck o-card,   .access-deck.access-column o-card,   .card-deck.card-column .card,   .card-column.access-deck .card,   .access-deck.access-column .card{max-width:calc(25% - 30px)}@media (max-width: 975.98px){  .card-deck.card-column o-access,   .card-column.access-deck o-access,   .access-deck.access-column o-access,   .card-deck.card-column o-highlighted,   .card-column.access-deck o-highlighted,   .access-deck.access-column o-highlighted,   .card-deck.card-column o-card,   .card-column.access-deck o-card,   .access-deck.access-column o-card,   .card-deck.card-column .card,   .card-column.access-deck .card,   .access-deck.access-column .card{max-width:calc(33.3333333333% - 30px)}}@media (max-width: 751.98px){  .card-deck.card-column o-access,   .card-column.access-deck o-access,   .access-deck.access-column o-access,   .card-deck.card-column o-highlighted,   .card-column.access-deck o-highlighted,   .access-deck.access-column o-highlighted,   .card-deck.card-column o-card,   .card-column.access-deck o-card,   .access-deck.access-column o-card,   .card-deck.card-column .card,   .card-column.access-deck .card,   .access-deck.access-column .card{max-width:calc(50% - 30px)}}@media (max-width: 591.98px){  .card-deck.card-column o-access,   .card-column.access-deck o-access,   .access-deck.access-column o-access,   .card-deck.card-column o-highlighted,   .card-column.access-deck o-highlighted,   .access-deck.access-column o-highlighted,   .card-deck.card-column o-card,   .card-column.access-deck o-card,   .access-deck.access-column o-card,   .card-deck.card-column .card,   .card-column.access-deck .card,   .access-deck.access-column .card{display:flex;width:100%;max-width:328px;height:-moz-fit-content;height:fit-content;margin-right:auto;margin-left:auto}  .card-deck.card-column o-access[ng-reflect-is-horizontal=true],   .card-column.access-deck o-access[ng-reflect-is-horizontal=true],   .access-deck.access-column o-access[ng-reflect-is-horizontal=true],   .card-deck.card-column o-highlighted[ng-reflect-is-horizontal=true],   .card-column.access-deck o-highlighted[ng-reflect-is-horizontal=true],   .access-deck.access-column o-highlighted[ng-reflect-is-horizontal=true],   .card-deck.card-column o-card[ng-reflect-is-horizontal=true],   .card-column.access-deck o-card[ng-reflect-is-horizontal=true],   .access-deck.access-column o-card[ng-reflect-is-horizontal=true],   .card-deck.card-column .card[ng-reflect-is-horizontal=true],   .card-column.access-deck .card[ng-reflect-is-horizontal=true],   .access-deck.access-column .card[ng-reflect-is-horizontal=true]{max-width:100%}}  .card-deck.max-cards-3.card-column o-access,   .max-cards-3.card-column.access-deck o-access,   .max-cards-3.access-deck.access-column o-access,   .card-deck.max-cards-3.card-column o-highlighted,   .max-cards-3.card-column.access-deck o-highlighted,   .max-cards-3.access-deck.access-column o-highlighted,   .card-deck.max-cards-3.card-column o-card,   .max-cards-3.card-column.access-deck o-card,   .max-cards-3.access-deck.access-column o-card,   .card-deck.max-cards-3.card-column .card,   .max-cards-3.card-column.access-deck .card,   .max-cards-3.access-deck.access-column .card{max-width:calc(33.3333333333% - 30px)}@media (max-width: 751.98px){  .card-deck.max-cards-3.card-column o-access,   .max-cards-3.card-column.access-deck o-access,   .max-cards-3.access-deck.access-column o-access,   .card-deck.max-cards-3.card-column o-highlighted,   .max-cards-3.card-column.access-deck o-highlighted,   .max-cards-3.access-deck.access-column o-highlighted,   .card-deck.max-cards-3.card-column o-card,   .max-cards-3.card-column.access-deck o-card,   .max-cards-3.access-deck.access-column o-card,   .card-deck.max-cards-3.card-column .card,   .max-cards-3.card-column.access-deck .card,   .max-cards-3.access-deck.access-column .card{max-width:calc(50% - 30px)}}@media (max-width: 591.98px){  .card-deck.max-cards-3.card-column o-access,   .max-cards-3.card-column.access-deck o-access,   .max-cards-3.access-deck.access-column o-access,   .card-deck.max-cards-3.card-column o-highlighted,   .max-cards-3.card-column.access-deck o-highlighted,   .max-cards-3.access-deck.access-column o-highlighted,   .card-deck.max-cards-3.card-column o-card,   .max-cards-3.card-column.access-deck o-card,   .max-cards-3.access-deck.access-column o-card,   .card-deck.max-cards-3.card-column .card,   .max-cards-3.card-column.access-deck .card,   .max-cards-3.access-deck.access-column .card{max-width:328px}  .card-deck.max-cards-3.card-column o-access[ng-reflect-is-horizontal=true],   .max-cards-3.card-column.access-deck o-access[ng-reflect-is-horizontal=true],   .max-cards-3.access-deck.access-column o-access[ng-reflect-is-horizontal=true],   .card-deck.max-cards-3.card-column o-highlighted[ng-reflect-is-horizontal=true],   .max-cards-3.card-column.access-deck o-highlighted[ng-reflect-is-horizontal=true],   .max-cards-3.access-deck.access-column o-highlighted[ng-reflect-is-horizontal=true],   .card-deck.max-cards-3.card-column o-card[ng-reflect-is-horizontal=true],   .max-cards-3.card-column.access-deck o-card[ng-reflect-is-horizontal=true],   .max-cards-3.access-deck.access-column o-card[ng-reflect-is-horizontal=true],   .card-deck.max-cards-3.card-column .card[ng-reflect-is-horizontal=true],   .max-cards-3.card-column.access-deck .card[ng-reflect-is-horizontal=true],   .max-cards-3.access-deck.access-column .card[ng-reflect-is-horizontal=true]{max-width:100%}}  .card-deck.max-cards-2.card-column o-access,   .max-cards-2.card-column.access-deck o-access,   .max-cards-2.access-deck.access-column o-access,   .card-deck.max-cards-2.card-column o-highlighted,   .max-cards-2.card-column.access-deck o-highlighted,   .max-cards-2.access-deck.access-column o-highlighted,   .card-deck.max-cards-2.card-column o-card,   .max-cards-2.card-column.access-deck o-card,   .max-cards-2.access-deck.access-column o-card,   .card-deck.max-cards-2.card-column .card,   .max-cards-2.card-column.access-deck .card,   .max-cards-2.access-deck.access-column .card{max-width:calc(50% - 30px)}@media (max-width: 591.98px){  .card-deck.max-cards-2.card-column o-access,   .max-cards-2.card-column.access-deck o-access,   .max-cards-2.access-deck.access-column o-access,   .card-deck.max-cards-2.card-column o-highlighted,   .max-cards-2.card-column.access-deck o-highlighted,   .max-cards-2.access-deck.access-column o-highlighted,   .card-deck.max-cards-2.card-column o-card,   .max-cards-2.card-column.access-deck o-card,   .max-cards-2.access-deck.access-column o-card,   .card-deck.max-cards-2.card-column .card,   .max-cards-2.card-column.access-deck .card,   .max-cards-2.access-deck.access-column .card{max-width:328px}  .card-deck.max-cards-2.card-column o-access[ng-reflect-is-horizontal=true],   .max-cards-2.card-column.access-deck o-access[ng-reflect-is-horizontal=true],   .max-cards-2.access-deck.access-column o-access[ng-reflect-is-horizontal=true],   .card-deck.max-cards-2.card-column o-highlighted[ng-reflect-is-horizontal=true],   .max-cards-2.card-column.access-deck o-highlighted[ng-reflect-is-horizontal=true],   .max-cards-2.access-deck.access-column o-highlighted[ng-reflect-is-horizontal=true],   .card-deck.max-cards-2.card-column o-card[ng-reflect-is-horizontal=true],   .max-cards-2.card-column.access-deck o-card[ng-reflect-is-horizontal=true],   .max-cards-2.access-deck.access-column o-card[ng-reflect-is-horizontal=true],   .card-deck.max-cards-2.card-column .card[ng-reflect-is-horizontal=true],   .max-cards-2.card-column.access-deck .card[ng-reflect-is-horizontal=true],   .max-cards-2.access-deck.access-column .card[ng-reflect-is-horizontal=true]{max-width:100%}}  .card-deck.max-cards-1.card-column o-access,   .max-cards-1.card-column.access-deck o-access,   .max-cards-1.access-deck.access-column o-access,   .card-deck.max-cards-1.card-column o-highlighted,   .max-cards-1.card-column.access-deck o-highlighted,   .max-cards-1.access-deck.access-column o-highlighted,   .card-deck.max-cards-1.card-column o-card,   .max-cards-1.card-column.access-deck o-card,   .max-cards-1.access-deck.access-column o-card,   .card-deck.max-cards-1.card-column .card,   .max-cards-1.card-column.access-deck .card,   .max-cards-1.access-deck.access-column .card{max-width:calc(33.3333333333% - 30px)}  .card-deck.max-cards-1.card-column o-access:nth-of-type(-n + 3),   .max-cards-1.card-column.access-deck o-access:nth-of-type(-n + 3),   .max-cards-1.access-deck.access-column o-access:nth-of-type(-n + 3),   .card-deck.max-cards-1.card-column o-highlighted:nth-of-type(-n + 3),   .max-cards-1.card-column.access-deck o-highlighted:nth-of-type(-n + 3),   .max-cards-1.access-deck.access-column o-highlighted:nth-of-type(-n + 3),   .card-deck.max-cards-1.card-column o-card:nth-of-type(-n + 3),   .max-cards-1.card-column.access-deck o-card:nth-of-type(-n + 3),   .max-cards-1.access-deck.access-column o-card:nth-of-type(-n + 3),   .card-deck.max-cards-1.card-column .card:nth-of-type(-n + 3),   .max-cards-1.card-column.access-deck .card:nth-of-type(-n + 3),   .max-cards-1.access-deck.access-column .card:nth-of-type(-n + 3){margin-top:0}@media (max-width: 751.98px){  .card-deck.max-cards-1.card-column o-access,   .max-cards-1.card-column.access-deck o-access,   .max-cards-1.access-deck.access-column o-access,   .card-deck.max-cards-1.card-column o-highlighted,   .max-cards-1.card-column.access-deck o-highlighted,   .max-cards-1.access-deck.access-column o-highlighted,   .card-deck.max-cards-1.card-column o-card,   .max-cards-1.card-column.access-deck o-card,   .max-cards-1.access-deck.access-column o-card,   .card-deck.max-cards-1.card-column .card,   .max-cards-1.card-column.access-deck .card,   .max-cards-1.access-deck.access-column .card{max-width:calc(50% - 30px)}  .card-deck.max-cards-1.card-column o-access:nth-of-type(-n + 3),   .max-cards-1.card-column.access-deck o-access:nth-of-type(-n + 3),   .max-cards-1.access-deck.access-column o-access:nth-of-type(-n + 3),   .card-deck.max-cards-1.card-column o-highlighted:nth-of-type(-n + 3),   .max-cards-1.card-column.access-deck o-highlighted:nth-of-type(-n + 3),   .max-cards-1.access-deck.access-column o-highlighted:nth-of-type(-n + 3),   .card-deck.max-cards-1.card-column o-card:nth-of-type(-n + 3),   .max-cards-1.card-column.access-deck o-card:nth-of-type(-n + 3),   .max-cards-1.access-deck.access-column o-card:nth-of-type(-n + 3),   .card-deck.max-cards-1.card-column .card:nth-of-type(-n + 3),   .max-cards-1.card-column.access-deck .card:nth-of-type(-n + 3),   .max-cards-1.access-deck.access-column .card:nth-of-type(-n + 3){margin-top:30px}}@media (max-width: 591.98px){  .card-deck.max-cards-1.card-column o-access,   .max-cards-1.card-column.access-deck o-access,   .max-cards-1.access-deck.access-column o-access,   .card-deck.max-cards-1.card-column o-highlighted,   .max-cards-1.card-column.access-deck o-highlighted,   .max-cards-1.access-deck.access-column o-highlighted,   .card-deck.max-cards-1.card-column o-card,   .max-cards-1.card-column.access-deck o-card,   .max-cards-1.access-deck.access-column o-card,   .card-deck.max-cards-1.card-column .card,   .max-cards-1.card-column.access-deck .card,   .max-cards-1.access-deck.access-column .card{max-width:100%}}@media (max-width: 751.98px){  .access-deck.max-cards-1 o-access:first-of-type{margin-top:0!important}}@media (max-width: 751.98px){  .access-deck.max-cards-1 .list-group-item{margin-top:0!important}}'
            ]
          })),
          l
        );
      })();
    },
    4883: (O, g, r) => {
      r.d(g, { L: () => _ });
      var c = r(4893),
        a = r(2313),
        x = r(9808);
      const h = ['checkbox'];
      function u(s, m) {
        if (1 & s) {
          const e = c.EpF();
          c.TgZ(0, 'th', 5)(1, 'div', 6)(2, 'input', 7),
            c.NdJ('change', function (p) {
              c.CHM(e);
              const f = c.oxw(2);
              return c.KtG(f.onHeaderCheckboxChange(p));
            }),
            c.qZA(),
            c.TgZ(3, 'label', 8),
            c._uU(4),
            c.qZA()()();
        }
        if (2 & s) {
          const e = c.oxw(2);
          c.Q6J('ngClass', e.checkbox.customClassesTh),
            c.xp6(2),
            c.MGl('id', '', e.id, '-selectAllCheckbox')('name', '', e.id, '-selectAllCheckbox'),
            c.xp6(1),
            c.MGl('for', '', e.id, '-selectAllCheckbox'),
            c.Q6J('ngClass', e.checkbox.customClassesLabel),
            c.xp6(1),
            c.Oqu(e.checkbox.title);
        }
      }
      function k(s, m) {
        if ((1 & s && (c.TgZ(0, 'th', 5), c._uU(1), c.qZA()), 2 & s)) {
          const e = c.oxw(2);
          c.Q6J('ngClass', e.checkbox.customClassesTh), c.xp6(1), c.hij(' ', e.checkbox.title, ' ');
        }
      }
      function C(s, m) {
        if ((1 & s && (c.ynx(0), c.TgZ(1, 'th', 5), c._uU(2), c.qZA(), c.BQk()), 2 & s)) {
          const e = m.$implicit;
          c.xp6(1), c.Q6J('ngClass', e.customClasses), c.xp6(1), c.Oqu(e.value);
        }
      }
      function w(s, m) {
        if (1 & s) {
          const e = c.EpF();
          c.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            c.NdJ('change', function (p) {
              c.CHM(e);
              const f = c.oxw().$implicit,
                b = c.oxw(2);
              return c.KtG(b.onCheckboxChange(f, p));
            }),
            c.qZA(),
            c._UZ(4, 'label', 11),
            c.qZA()();
        }
        if (2 & s) {
          const e = c.oxw().index,
            t = c.oxw(2);
          c.xp6(2),
            c.hYB('id', '', t.id, '-checkbox_', e, '')('name', '', t.id, '-checkbox_', e, ''),
            c.xp6(2),
            c.hYB('for', '', t.id, '-checkbox_', e, '');
        }
      }
      function y(s, m) {
        if ((1 & s && c._UZ(0, 'div', 14), 2 & s)) {
          const e = c.oxw().$implicit,
            t = c.oxw().$implicit,
            p = c.oxw(2);
          c.Q6J('innerHTML', p.sanitizeHTML(t[e.key].data), c.oJD);
        }
      }
      function l(s, m) {
        if ((1 & s && (c.ynx(0), c.TgZ(1, 'td', 12), c.YNc(2, y, 1, 1, 'div', 13), c.qZA(), c.BQk()), 2 & s)) {
          const e = m.$implicit,
            t = c.oxw().$implicit;
          c.xp6(1), c.Q6J('ngClass', t[e.key].customClasses), c.xp6(1), c.Q6J('ngIf', t[e.key].data);
        }
      }
      function o(s, m) {
        if (
          (1 & s && (c.TgZ(0, 'tr'), c.YNc(1, w, 5, 6, 'td', 9), c.YNc(2, l, 3, 2, 'ng-container', 4), c.qZA()), 2 & s)
        ) {
          const e = c.oxw(2);
          c.xp6(1), c.Q6J('ngIf', e.checkbox), c.xp6(1), c.Q6J('ngForOf', e.columns);
        }
      }
      const d = function (s, m) {
        return { 'table-borderless': s, 'table-striped': m };
      };
      function n(s, m) {
        if (
          (1 & s &&
            (c.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            c.YNc(3, u, 5, 6, 'th', 3),
            c.YNc(4, k, 2, 2, 'th', 3),
            c.YNc(5, C, 3, 2, 'ng-container', 4),
            c.qZA()(),
            c.TgZ(6, 'tbody'),
            c.YNc(7, o, 3, 2, 'tr', 4),
            c.qZA()()),
          2 & s)
        ) {
          const e = c.oxw();
          c.Q6J('ngClass', c.WLB(5, d, !e.isBordered, e.isStriped)),
            c.xp6(3),
            c.Q6J('ngIf', 1 == (null == e.checkbox ? null : e.checkbox.isAllSelectable)),
            c.xp6(1),
            c.Q6J('ngIf', 0 == (null == e.checkbox ? null : e.checkbox.isAllSelectable)),
            c.xp6(1),
            c.Q6J('ngForOf', e.columns),
            c.xp6(2),
            c.Q6J('ngForOf', e.dataSource);
        }
      }
      const i = function (s) {
        return { 'responsive-scroll': s };
      };
      let _ = (() => {
        class s {
          constructor(e, t) {
            (this.renderer = e),
              (this.sanitizer = t),
              (this.isValidateComponent = !1),
              (this.id = 'o-table'),
              (this.columns = []),
              (this.dataSource = []),
              (this.isBordered = !1),
              (this.isStriped = !1),
              (this.isScrollable = !1),
              (this.customClasses = ''),
              (this.dataSelectedChange = new c.vpe()),
              (this.inputCheckArr = []),
              (this.dataSelected = []);
          }
          ngOnInit() {
            this.componentValidations();
          }
          ngAfterViewInit() {
            this.checkboxRef.map((e) => {
              this.inputCheckArr.push(e.nativeElement);
            });
          }
          componentValidations() {
            if (
              ((this.isValidateComponent = this.columns.length > 0 && this.dataSource.length > 0),
              !this.isValidateComponent)
            )
              throw new Error('The columns and dataSource must not be empty');
            this.columns.map((e) => {
              if ('' === e.key || '' === e.value)
                throw ((this.isValidateComponent = !1), new Error('The columns must not have null values'));
            }),
              this.columns.map((e) => (e.value = e.value.trim())),
              (this.columns = this.columns.map(
                (e) => ((e.value = e.value.charAt(0).toUpperCase() + e.value.slice(1).toLowerCase()), e)
              )),
              this.columns.map((e) => {
                if (
                  e.value.match(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1 ]*$/) &&
                  e.key.match(/^[a-zA-Z ]*$/)
                )
                  return (this.isValidateComponent = !0), e;
                throw (
                  ((this.isValidateComponent = !1),
                  new Error(
                    'The columns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents'
                  ))
                );
              });
          }
          sanitizeHTML(e) {
            return this.sanitizer.bypassSecurityTrustHtml(e);
          }
          onHeaderCheckboxChange(e) {
            const t = e.target;
            if (t) {
              const p = t.checked;
              this.checkboxRef.toArray().forEach((f) => {
                f.nativeElement.checked = p;
              }),
                (this.dataSelected = p ? [...this.dataSource] : []),
                this.dataSelectedChange.emit(this.dataSelected);
            }
          }
          onCheckboxChange(e, t) {
            if (t && t.target && 'boolean' == typeof t.target.checked) {
              if (t.target.checked) this.dataSelected.push(e);
              else {
                const f = this.dataSelected.findIndex((b) => b === e);
                -1 !== f && this.dataSelected.splice(f, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (s.ɵfac = function (e) {
            return new (e || s)(c.Y36(c.Qsj), c.Y36(a.H7));
          }),
          (s.ɵcmp = c.Xpm({
            type: s,
            selectors: [['o-table']],
            viewQuery: function (e, t) {
              if ((1 & e && c.Gf(h, 5), 2 & e)) {
                let p;
                c.iGM((p = c.CRH())) && (t.checkboxRef = p);
              }
            },
            inputs: {
              id: 'id',
              columns: 'columns',
              dataSource: 'dataSource',
              isBordered: 'isBordered',
              isStriped: 'isStriped',
              isScrollable: 'isScrollable',
              customClasses: 'customClasses',
              checkbox: 'checkbox'
            },
            outputs: { dataSelectedChange: 'dataSelectedChange' },
            decls: 2,
            vars: 6,
            consts: [
              ['tabindex', '0', 3, 'ngClass'],
              ['class', 'table', 3, 'ngClass', 4, 'ngIf'],
              [1, 'table', 3, 'ngClass'],
              ['scope', 'col', 3, 'ngClass', 4, 'ngIf'],
              [4, 'ngFor', 'ngForOf'],
              ['scope', 'col', 3, 'ngClass'],
              [1, 'custom-control', 'custom-checkbox'],
              ['type', 'checkbox', 'value', '', 1, 'custom-control-input', 3, 'id', 'name', 'change'],
              [
                'aria-label',
                'Descripci\xf3n para usuarios de lectores de pantalla',
                1,
                'custom-control-label',
                3,
                'ngClass',
                'for'
              ],
              [4, 'ngIf'],
              ['checkbox', ''],
              [
                'aria-label',
                'Descripci\xf3n para usuarios de lectores de pantalla',
                1,
                'custom-control-label',
                'no-text',
                3,
                'for'
              ],
              [3, 'ngClass'],
              [3, 'innerHTML', 4, 'ngIf'],
              [3, 'innerHTML']
            ],
            template: function (e, t) {
              1 & e && (c.TgZ(0, 'div', 0), c.YNc(1, n, 8, 8, 'table', 1), c.qZA()),
                2 & e &&
                  (c.Tol(t.customClasses),
                  c.Q6J('ngClass', c.VKq(4, i, t.isScrollable)),
                  c.xp6(1),
                  c.Q6J('ngIf', t.isValidateComponent));
            },
            dependencies: [x.mk, x.sg, x.O5]
          })),
          s
        );
      })();
    },
    2089: (O, g, r) => {
      r.d(g, { Z: () => x });
      var c = r(9808),
        a = r(4893);
      let x = (() => {
        class h {}
        return (
          (h.ɵfac = function (k) {
            return new (k || h)();
          }),
          (h.ɵmod = a.oAB({ type: h })),
          (h.ɵinj = a.cJS({ imports: [c.ez] })),
          h
        );
      })();
    },
    4948: (O, g, r) => {
      r.d(g, { B: () => l });
      var c = r(9808),
        a = r(4893);
      function x(o, d) {
        if (1 & o) {
          const n = a.EpF();
          a.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            a.NdJ('click', function () {
              a.CHM(n);
              const _ = a.oxw();
              return a.KtG((_.isWindowHTML = !0));
            }),
            a._uU(4, 'HTML'),
            a.qZA()(),
            a.TgZ(5, 'li', 12)(6, 'a', 14),
            a.NdJ('click', function () {
              a.CHM(n);
              const _ = a.oxw();
              return a.KtG((_.isWindowHTML = !1));
            }),
            a._uU(7, 'TS'),
            a.qZA()()()();
        }
        if (2 & o) {
          const n = a.oxw();
          a.xp6(3), a.ekj('active', n.isWindowHTML), a.xp6(3), a.ekj('active', !n.isWindowHTML);
        }
      }
      function h(o, d) {
        1 & o && (a.ynx(0), a.Hsn(1), a.BQk());
      }
      function u(o, d) {
        1 & o && (a.ynx(0), a.Hsn(1, 1), a.BQk());
      }
      function k(o, d) {
        if ((1 & o && a.YNc(0, u, 2, 0, 'ng-container', 7), 2 & o)) {
          const n = a.oxw(),
            i = a.MAs(16);
          a.Q6J('ngIf', n.isWindowHTML)('ngIfElse', i);
        }
      }
      function C(o, d) {
        1 & o && a.Hsn(0, 2);
      }
      const w = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        y = ['[component]', '[component-html]', '[component-ts]'];
      let l = (() => {
        class o {
          constructor() {
            (this.isNavCode = !1), (this.isOpenCode = !1), (this.isWindowHTML = !0);
          }
          get linkCode() {
            return this.isOpenCode ? 'Ocultar' : 'Mostrar c\xf3digo';
          }
        }
        return (
          (o.ɵfac = function (n) {
            return new (n || o)();
          }),
          (o.ɵcmp = a.Xpm({
            type: o,
            selectors: [['app-viewer']],
            inputs: { title: 'title', isNavCode: 'isNavCode' },
            standalone: !0,
            features: [a.jDz],
            ngContentSelectors: y,
            decls: 17,
            vars: 7,
            consts: [
              [1, 'example-wrapper'],
              [1, 'example-viewer', 'p-3'],
              [1, 'nav', 'flex-row', 'nav-pills'],
              [1, 'nav-item', 'd-flex'],
              [1, 'btn', 'btn-sm', 'btn-link', 3, 'click'],
              [1, 'wrapper'],
              ['class', 'tabs-slider px-0 mb-3', 4, 'ngIf'],
              [4, 'ngIf', 'ngIfElse'],
              ['codeTemplate', ''],
              ['windowTs', ''],
              [1, 'tabs-slider', 'px-0', 'mb-3'],
              [1, 'nav', 'nav-pills', 'tabs', 'fixedWidth'],
              [1, 'nav-item'],
              [1, 'nav-link', 'active', 3, 'click'],
              [1, 'nav-link', 3, 'click']
            ],
            template: function (n, i) {
              if (
                (1 & n &&
                  (a.F$t(w),
                  a.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'h5'),
                  a._uU(3),
                  a.qZA(),
                  a.TgZ(4, 'nav')(5, 'ul', 2)(6, 'li', 3)(7, 'a', 4),
                  a.NdJ('click', function () {
                    return (i.isOpenCode = !i.isOpenCode);
                  }),
                  a.TgZ(8, 'span'),
                  a._uU(9),
                  a.qZA()()()()()(),
                  a.TgZ(10, 'div', 5),
                  a.YNc(11, x, 8, 4, 'nav', 6),
                  a.YNc(12, h, 2, 0, 'ng-container', 7),
                  a.YNc(13, k, 1, 2, 'ng-template', null, 8, a.W1O),
                  a.YNc(15, C, 1, 0, 'ng-template', null, 9, a.W1O),
                  a.qZA()()),
                2 & n)
              ) {
                const _ = a.MAs(14);
                a.xp6(3),
                  a.Oqu(i.title),
                  a.xp6(4),
                  a.ekj('active', i.isOpenCode),
                  a.xp6(2),
                  a.Oqu(i.linkCode),
                  a.xp6(2),
                  a.Q6J('ngIf', i.isOpenCode && i.isNavCode),
                  a.xp6(1),
                  a.Q6J('ngIf', !i.isOpenCode)('ngIfElse', _);
              }
            },
            dependencies: [c.ez, c.O5],
            styles: [
              '[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:8px;padding:16px 24px 0;border:1px solid #cfcfcf;margin-bottom:5rem;width:100%;max-width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{max-width:100%;display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0;width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;max-width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}@media (max-width: 768px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}@media (max-width: 480px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}'
            ]
          })),
          o
        );
      })();
    }
  }
]);
