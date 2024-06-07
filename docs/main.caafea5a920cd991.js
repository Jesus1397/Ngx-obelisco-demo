(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [179],
  {
    4439: (Ge, he, w) => {
      'use strict';
      w.d(he, { U: () => de });
      var a = w(4893),
        i = w(9808),
        L = w(2526);
      function Z(ce, R) {
        1 & ce && a.Hsn(0);
      }
      function P(ce, R) {
        1 & ce && a.GkF(0);
      }
      function se(ce, R) {
        if (
          (1 & ce && (a.ynx(0), a.TgZ(1, 'span', 3), a.YNc(2, P, 1, 0, 'ng-container', 4), a.qZA(), a.BQk()), 2 & ce)
        ) {
          const B = a.oxw(),
            ie = a.MAs(1);
          a.xp6(1),
            a.Q6J(
              'ngClass',
              'badge-' + (B.type ? B.type : 'secondary') + (B.customClasses ? ' ' + B.customClasses : '')
            ),
            a.xp6(1),
            a.Q6J('ngTemplateOutlet', ie);
        }
      }
      function Y(ce, R) {
        1 & ce && a.GkF(0);
      }
      const xe = function (ce) {
        return [ce];
      };
      function ve(ce, R) {
        if ((1 & ce && (a.TgZ(0, 'a', 7), a.YNc(1, Y, 1, 0, 'ng-container', 4), a.qZA()), 2 & ce)) {
          const B = a.oxw(2),
            ie = a.MAs(1);
          a.Q6J('routerLink', a.VKq(3, xe, B.route))(
            'ngClass',
            'badge-' + (B.type ? B.type : 'secondary') + (B.customClasses ? ' ' + B.customClasses : '')
          ),
            a.xp6(1),
            a.Q6J('ngTemplateOutlet', ie);
        }
      }
      function ae(ce, R) {
        1 & ce && a.GkF(0);
      }
      function le(ce, R) {
        if ((1 & ce && (a.TgZ(0, 'a', 3), a.YNc(1, ae, 1, 0, 'ng-container', 4), a.qZA()), 2 & ce)) {
          const B = a.oxw(2),
            ie = a.MAs(1);
          a.Q6J('ngClass', 'badge-' + (B.type ? B.type : 'secondary') + (B.customClasses ? ' ' + B.customClasses : '')),
            a.uIk('href', a.VKq(3, xe, B.link), a.LSH),
            a.xp6(1),
            a.Q6J('ngTemplateOutlet', ie);
        }
      }
      function ge(ce, R) {
        if ((1 & ce && (a.YNc(0, ve, 2, 5, 'a', 5), a.YNc(1, le, 2, 5, 'a', 6)), 2 & ce)) {
          const B = a.oxw();
          a.Q6J('ngIf', B.route), a.xp6(1), a.Q6J('ngIf', B.link);
        }
      }
      const Ne = ['*'];
      let de = (() => {
        class ce {}
        return (
          (ce.ɵfac = function (B) {
            return new (B || ce)();
          }),
          (ce.ɵcmp = a.Xpm({
            type: ce,
            selectors: [['o-badge']],
            inputs: { type: 'type', link: 'link', route: 'route', customClasses: 'customClasses' },
            ngContentSelectors: Ne,
            decls: 5,
            vars: 2,
            consts: [
              ['content', ''],
              [4, 'ngIf', 'ngIfElse'],
              ['badgeLink', ''],
              [1, 'badge', 3, 'ngClass'],
              [4, 'ngTemplateOutlet'],
              ['class', 'badge', 3, 'routerLink', 'ngClass', 4, 'ngIf'],
              ['class', 'badge', 3, 'ngClass', 4, 'ngIf'],
              [1, 'badge', 3, 'routerLink', 'ngClass']
            ],
            template: function (B, ie) {
              if (
                (1 & B &&
                  (a.F$t(),
                  a.YNc(0, Z, 1, 0, 'ng-template', null, 0, a.W1O),
                  a.YNc(2, se, 3, 2, 'ng-container', 1),
                  a.YNc(3, ge, 2, 2, 'ng-template', null, 2, a.W1O)),
                2 & B)
              ) {
                const K = a.MAs(4);
                a.xp6(2), a.Q6J('ngIf', !ie.link && !ie.route)('ngIfElse', K);
              }
            },
            dependencies: [i.mk, i.O5, i.tP, L.yS],
            styles: ['o-badge{margin-right:.5rem}  o-badge .badge{vertical-align:sub;margin-right:0}']
          })),
          ce
        );
      })();
    },
    7259: (Ge, he, w) => {
      'use strict';
      w.d(he, { j: () => X });
      var a = w(4893),
        i = w(1998),
        L = w(9808),
        Z = w(2526),
        P = w(6706),
        se = w(4439);
      const Y = ['info'],
        xe = ['card'],
        ve = function (ne, Re) {
          return [ne, Re];
        };
      function ae(ne, Re) {
        if ((1 & ne && a._UZ(0, 'i', 8), 2 & ne)) {
          const Ce = a.oxw(2);
          a.Q6J('ngClass', a.WLB(1, ve, Ce.icon, Ce.isHorizontal ? 'card-icon-left' : 'card-icon'));
        }
      }
      const le = function (ne) {
        return [ne];
      };
      function ge(ne, Re) {
        if ((1 & ne && (a.TgZ(0, 'span', 9), a._uU(1), a.qZA()), 2 & ne)) {
          const Ce = a.oxw(2);
          a.Q6J('ngClass', a.VKq(2, le, Ce.isHorizontal ? 'card-icon-left' : 'card-icon')), a.xp6(1), a.Oqu(Ce.icon);
        }
      }
      function Ne(ne, Re) {
        if ((1 & ne && (a.YNc(0, ae, 1, 4, 'i', 6), a.YNc(1, ge, 2, 4, 'span', 7)), 2 & ne)) {
          const Ce = a.oxw();
          a.Q6J('ngIf', Ce.icon && Ce.icon.includes('bx')), a.xp6(1), a.Q6J('ngIf', Ce.icon && !Ce.icon.includes('bx'));
        }
      }
      function de(ne, Re) {
        1 & ne && a.GkF(0);
      }
      function ce(ne, Re) {
        if ((1 & ne && (a.ynx(0), a.YNc(1, de, 1, 0, 'ng-container', 10), a.BQk()), 2 & ne)) {
          a.oxw();
          const Ce = a.MAs(1);
          a.xp6(1), a.Q6J('ngTemplateOutlet', Ce);
        }
      }
      function R(ne, Re) {
        if ((1 & ne && a._UZ(0, 'img', 11), 2 & ne)) {
          const Ce = a.oxw();
          a.Q6J(
            'src',
            null == Ce.image ? null : Ce.image.src,
            a.LSH
          )('ngClass', a.VKq(3, le, Ce.isHorizontal || Ce.isThemeCard ? 'card-img-left' : 'card-img-top'))(
            'alt',
            null != Ce.image && Ce.image.alt ? (null == Ce.image ? null : Ce.image.alt) : ' '
          );
        }
      }
      function B(ne, Re) {
        1 & ne && a.GkF(0);
      }
      function ie(ne, Re) {
        if ((1 & ne && (a.ynx(0), a.YNc(1, B, 1, 0, 'ng-container', 10), a.BQk()), 2 & ne)) {
          a.oxw(2);
          const Ce = a.MAs(1);
          a.xp6(1), a.Q6J('ngTemplateOutlet', Ce);
        }
      }
      function K(ne, Re) {
        if ((1 & ne && (a.ynx(0), a.TgZ(1, 'p', 15), a._uU(2), a.qZA(), a.BQk()), 2 & ne)) {
          const Ce = a.oxw(2);
          a.xp6(2), a.Oqu(Ce.headline);
        }
      }
      function be(ne, Re) {
        if ((1 & ne && (a.TgZ(0, 'o-badge', 18), a._uU(1), a.qZA()), 2 & ne)) {
          const Ce = Re.$implicit;
          a.Q6J('type', Ce.type), a.xp6(1), a.Oqu(Ce.content);
        }
      }
      function H(ne, Re) {
        if ((1 & ne && (a.ynx(0), a.TgZ(1, 'div', 16), a.YNc(2, be, 2, 2, 'o-badge', 17), a.qZA(), a.BQk()), 2 & ne)) {
          const Ce = a.oxw(2);
          a.xp6(2), a.Q6J('ngForOf', Ce.cardBadges);
        }
      }
      function J(ne, Re) {
        if ((1 & ne && (a.ynx(0), a.TgZ(1, 'a', 22, 23), a._uU(3), a.qZA(), a.BQk()), 2 & ne)) {
          const Ce = a.oxw(3);
          a.xp6(1),
            a.ekj('card-title-link', !0)('ellipsis-3', Ce.isTitleTruncate),
            a.Q6J('routerLink', Ce.route),
            a.xp6(2),
            a.hij(' ', Ce.title, ' ');
        }
      }
      function te(ne, Re) {
        if ((1 & ne && (a.TgZ(0, 'a', 22, 23), a._uU(2), a.qZA()), 2 & ne)) {
          const Ce = a.oxw(3);
          a.ekj('ellipsis-3', Ce.isTitleTruncate), a.Q6J('routerLink', Ce.route), a.xp6(2), a.Oqu(Ce.title);
        }
      }
      function Ue(ne, Re) {
        if (
          (1 & ne &&
            (a.TgZ(0, 'h3', 19),
            a.YNc(1, J, 4, 6, 'ng-container', 20),
            a.YNc(2, te, 3, 4, 'ng-template', null, 21, a.W1O),
            a.qZA()),
          2 & ne)
        ) {
          const Ce = a.MAs(3),
            Ze = a.oxw(2);
          a.xp6(1), a.Q6J('ngIf', Ze.isBordered)('ngIfElse', Ce);
        }
      }
      function Ae(ne, Re) {
        if ((1 & ne && (a.TgZ(0, 'p', 24), a._uU(1), a.qZA()), 2 & ne)) {
          const Ce = a.oxw(2);
          a.xp6(1), a.Oqu(Ce.description);
        }
      }
      function Oe(ne, Re) {
        1 & ne && (a.TgZ(0, 'div', 25), a.Hsn(1), a.qZA());
      }
      function re(ne, Re) {
        if (
          (1 & ne &&
            (a.ynx(0),
            a.YNc(1, ie, 2, 1, 'ng-container', 2),
            a.YNc(2, K, 3, 1, 'ng-container', 2),
            a.YNc(3, H, 3, 1, 'ng-container', 2),
            a.YNc(4, Ue, 4, 2, 'h3', 12),
            a.YNc(5, Ae, 2, 1, 'p', 13),
            a.YNc(6, Oe, 2, 0, 'div', 14),
            a.BQk()),
          2 & ne)
        ) {
          const Ce = a.oxw();
          a.xp6(1),
            a.Q6J('ngIf', !Ce.isHorizontal),
            a.xp6(1),
            a.Q6J('ngIf', Ce.headline),
            a.xp6(1),
            a.Q6J('ngIf', Ce.cardBadges),
            a.xp6(1),
            a.Q6J('ngIf', Ce.title),
            a.xp6(1),
            a.Q6J('ngIf', Ce.description),
            a.xp6(1),
            a.Q6J('ngIf', Ce.hasInfo);
        }
      }
      function Te(ne, Re) {
        if ((1 & ne && a.GkF(0, 26), 2 & ne)) {
          const Ce = a.oxw();
          a.Q6J('ngTemplateOutlet', Ce.oCustomContent.template);
        }
      }
      const j = function (ne, Re, Ce) {
          return { 'card-horizontal': ne, 'card-simple': Re, unbordered: Ce };
        },
        Fe = ['*'];
      let X = (() => {
        class ne {
          constructor(Ce) {
            (this.renderer = Ce),
              (this.isHorizontal = !1),
              (this.isBordered = !1),
              (this.isThemeCard = !1),
              (this.isTitleTruncate = !1),
              (this.customClasses = ''),
              (this.hasInfo = !1);
          }
          ngAfterViewInit() {
            var Ce, Ze;
            this.link &&
              (null === (Ce = this.card) || void 0 === Ce ? void 0 : Ce.nativeElement) &&
              this.renderer.setAttribute(
                null === (Ze = this.card) || void 0 === Ze ? void 0 : Ze.nativeElement,
                'href',
                this.link
              );
          }
          ngAfterContentInit() {
            this.contentElementRef && (this.hasInfo = !0);
          }
        }
        return (
          (ne.ɵfac = function (Ce) {
            return new (Ce || ne)(a.Y36(a.Qsj));
          }),
          (ne.ɵcmp = a.Xpm({
            type: ne,
            selectors: [['o-card']],
            contentQueries: function (Ce, Ze, G) {
              if ((1 & Ce && (a.Suo(G, Y, 5, a.SBq), a.Suo(G, i.X, 7)), 2 & Ce)) {
                let ee;
                a.iGM((ee = a.CRH())) && (Ze.contentElementRef = ee.first),
                  a.iGM((ee = a.CRH())) && (Ze.oCustomContent = ee.first);
              }
            },
            viewQuery: function (Ce, Ze) {
              if ((1 & Ce && a.Gf(xe, 5, a.SBq), 2 & Ce)) {
                let G;
                a.iGM((G = a.CRH())) && (Ze.card = G.first);
              }
            },
            inputs: {
              isHorizontal: 'isHorizontal',
              isBordered: 'isBordered',
              isThemeCard: 'isThemeCard',
              isTitleTruncate: 'isTitleTruncate',
              title: 'title',
              description: 'description',
              headline: 'headline',
              cardBadges: 'cardBadges',
              link: 'link',
              route: 'route',
              image: 'image',
              icon: 'icon',
              customClasses: 'customClasses'
            },
            ngContentSelectors: Fe,
            decls: 8,
            vars: 11,
            consts: [
              ['cardIcon', ''],
              [1, 'card', 3, 'ngClass'],
              [4, 'ngIf'],
              ['oDefaultImage', '', 3, 'src', 'ngClass', 'alt', 4, 'ngIf'],
              [1, 'card-body'],
              [3, 'ngTemplateOutlet', 4, 'ngIf'],
              [3, 'ngClass', 4, 'ngIf'],
              ['class', 'material-icons-round', 3, 'ngClass', 4, 'ngIf'],
              [3, 'ngClass'],
              [1, 'material-icons-round', 3, 'ngClass'],
              [4, 'ngTemplateOutlet'],
              ['oDefaultImage', '', 3, 'src', 'ngClass', 'alt'],
              ['class', 'card-title', 4, 'ngIf'],
              ['class', 'card-text', 4, 'ngIf'],
              ['class', 'card-info', 4, 'ngIf'],
              [1, 'card-headline'],
              [1, 'card-badges'],
              [3, 'type', 4, 'ngFor', 'ngForOf'],
              [3, 'type'],
              [1, 'card-title'],
              [4, 'ngIf', 'ngIfElse'],
              ['cardUnbordered', ''],
              [3, 'routerLink'],
              ['card', ''],
              [1, 'card-text'],
              [1, 'card-info'],
              [3, 'ngTemplateOutlet']
            ],
            template: function (Ce, Ze) {
              1 & Ce &&
                (a.F$t(),
                a.YNc(0, Ne, 2, 2, 'ng-template', null, 0, a.W1O),
                a.TgZ(2, 'div', 1),
                a.YNc(3, ce, 2, 1, 'ng-container', 2),
                a.YNc(4, R, 1, 5, 'img', 3),
                a.TgZ(5, 'div', 4),
                a.YNc(6, re, 7, 6, 'ng-container', 2),
                a.YNc(7, Te, 1, 1, 'ng-container', 5),
                a.qZA()()),
                2 & Ce &&
                  (a.xp6(2),
                  a.Tol(Ze.customClasses),
                  a.Q6J(
                    'ngClass',
                    Ze.isThemeCard
                      ? 'card-horizontal card-simple card-lg'
                      : a.kEZ(
                          7,
                          j,
                          Ze.isHorizontal && !Ze.isThemeCard,
                          !Ze.isBordered && !Ze.isHorizontal && !Ze.isThemeCard,
                          !Ze.isBordered && Ze.isHorizontal
                        )
                  ),
                  a.xp6(1),
                  a.Q6J('ngIf', Ze.isHorizontal),
                  a.xp6(1),
                  a.Q6J('ngIf', null == Ze.image ? null : Ze.image.src),
                  a.xp6(2),
                  a.Q6J('ngIf', !Ze.oCustomContent),
                  a.xp6(1),
                  a.Q6J('ngIf', Ze.oCustomContent));
            },
            dependencies: [L.mk, L.sg, L.O5, L.tP, Z.yS, P.O, se.U],
            styles: [
              'o-card o-badge{margin-right:.75rem}  o-card o-badge:last-child{margin-right:0}',
              '.card-deck o-access,   .access-deck o-access,   .card-deck o-highlighted,   .access-deck o-highlighted,   .card-deck o-card,   .access-deck o-card,   .card-deck .card,   .access-deck .card{flex:1 0 35%;margin-top:0}  .card-deck o-access:nth-of-type(n + 3),   .access-deck o-access:nth-of-type(n + 3),   .card-deck o-highlighted:nth-of-type(n + 3),   .access-deck o-highlighted:nth-of-type(n + 3),   .card-deck o-card:nth-of-type(n + 3),   .access-deck o-card:nth-of-type(n + 3),   .card-deck .card:nth-of-type(n + 3),   .access-deck .card:nth-of-type(n + 3){margin-top:30px}  .card-deck o-access,   .access-deck o-access,   .card-deck o-highlighted,   .access-deck o-highlighted,   .card-deck o-card,   .access-deck o-card{margin-right:15px;margin-bottom:0;margin-left:15px}  .card-deck o-access .card,   .access-deck o-access .card,   .card-deck o-access .list-group-item,   .access-deck o-access .list-group-item,   .card-deck o-highlighted .card,   .access-deck o-highlighted .card,   .card-deck o-highlighted .list-group-item,   .access-deck o-highlighted .list-group-item,   .card-deck o-card .card,   .access-deck o-card .card,   .card-deck o-card .list-group-item,   .access-deck o-card .list-group-item{min-width:100%;width:100%;height:100%;margin:0}  .card-deck o-highlighted o-access,   .access-deck o-highlighted o-access{margin:0}@media (min-width: 592px){  .card-deck,   .access-deck{display:flex;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}}@media (max-width: 591.98px){  .card-deck o-access:nth-of-type(2),   .access-deck o-access:nth-of-type(2),   .card-deck o-highlighted:nth-of-type(2),   .access-deck o-highlighted:nth-of-type(2),   .card-deck o-card:nth-of-type(2),   .access-deck o-card:nth-of-type(2),   .card-deck .card:nth-of-type(2),   .access-deck .card:nth-of-type(2){margin-top:30px}}@media (min-width: 752px){  .card-deck:not(.max-cards-2) o-access,   .access-deck:not(.max-cards-2) o-access,   .card-deck:not(.max-cards-2) o-highlighted,   .access-deck:not(.max-cards-2) o-highlighted,   .card-deck:not(.max-cards-2) o-card,   .access-deck:not(.max-cards-2) o-card,   .card-deck:not(.max-cards-2) .card,   .access-deck:not(.max-cards-2) .card,   .card-deck.max-cards-3 o-access,   .max-cards-3.access-deck o-access,   .card-deck.max-cards-3 o-highlighted,   .max-cards-3.access-deck o-highlighted,   .card-deck.max-cards-3 o-card,   .max-cards-3.access-deck o-card,   .card-deck.max-cards-3 .card,   .max-cards-3.access-deck .card{flex:1 0 25%;margin-top:0}  .card-deck:not(.max-cards-2) o-access:nth-of-type(n + 4),   .access-deck:not(.max-cards-2) o-access:nth-of-type(n + 4),   .card-deck:not(.max-cards-2) o-highlighted:nth-of-type(n + 4),   .access-deck:not(.max-cards-2) o-highlighted:nth-of-type(n + 4),   .card-deck:not(.max-cards-2) o-card:nth-of-type(n + 4),   .access-deck:not(.max-cards-2) o-card:nth-of-type(n + 4),   .card-deck:not(.max-cards-2) .card:nth-of-type(n + 4),   .access-deck:not(.max-cards-2) .card:nth-of-type(n + 4),   .card-deck.max-cards-3 o-access:nth-of-type(n + 4),   .max-cards-3.access-deck o-access:nth-of-type(n + 4),   .card-deck.max-cards-3 o-highlighted:nth-of-type(n + 4),   .max-cards-3.access-deck o-highlighted:nth-of-type(n + 4),   .card-deck.max-cards-3 o-card:nth-of-type(n + 4),   .max-cards-3.access-deck o-card:nth-of-type(n + 4),   .card-deck.max-cards-3 .card:nth-of-type(n + 4),   .max-cards-3.access-deck .card:nth-of-type(n + 4){margin-top:30px}}@media (min-width: 976px){  .card-deck:not(.max-cards-2):not(.max-cards-3) o-access,   .access-deck:not(.max-cards-2):not(.max-cards-3) o-access,   .card-deck:not(.max-cards-2):not(.max-cards-3) o-highlighted,   .access-deck:not(.max-cards-2):not(.max-cards-3) o-highlighted,   .card-deck:not(.max-cards-2):not(.max-cards-3) o-card,   .access-deck:not(.max-cards-2):not(.max-cards-3) o-card,   .card-deck:not(.max-cards-2):not(.max-cards-3) .card,   .access-deck:not(.max-cards-2):not(.max-cards-3) .card{flex:1 0 19%;margin-top:0}  .card-deck:not(.max-cards-2):not(.max-cards-3) o-access:nth-of-type(n + 5),   .access-deck:not(.max-cards-2):not(.max-cards-3) o-access:nth-of-type(n + 5),   .card-deck:not(.max-cards-2):not(.max-cards-3) o-highlighted:nth-of-type(n + 5),   .access-deck:not(.max-cards-2):not(.max-cards-3) o-highlighted:nth-of-type(n + 5),   .card-deck:not(.max-cards-2):not(.max-cards-3) o-card:nth-of-type(n + 5),   .access-deck:not(.max-cards-2):not(.max-cards-3) o-card:nth-of-type(n + 5),   .card-deck:not(.max-cards-2):not(.max-cards-3) .card:nth-of-type(n + 5),   .access-deck:not(.max-cards-2):not(.max-cards-3) .card:nth-of-type(n + 5){margin-top:30px}}  .card-deck.max-cards-1 o-access,   .max-cards-1.access-deck o-access,   .card-deck.max-cards-1 o-highlighted,   .max-cards-1.access-deck o-highlighted,   .card-deck.max-cards-1 o-card,   .max-cards-1.access-deck o-card,   .card-deck.max-cards-1 .card,   .max-cards-1.access-deck .card{flex:1 0 55%!important;margin-top:0}  .card-deck.max-cards-1 o-access:nth-of-type(n + 2),   .max-cards-1.access-deck o-access:nth-of-type(n + 2),   .card-deck.max-cards-1 o-highlighted:nth-of-type(n + 2),   .max-cards-1.access-deck o-highlighted:nth-of-type(n + 2),   .card-deck.max-cards-1 o-card:nth-of-type(n + 2),   .max-cards-1.access-deck o-card:nth-of-type(n + 2),   .card-deck.max-cards-1 .card:nth-of-type(n + 2),   .max-cards-1.access-deck .card:nth-of-type(n + 2){margin-top:30px}@media (max-width: 591.98px){  .card-deck.card-column,   .card-column.access-deck,   .access-deck.access-column{width:100%}}  .card-deck.card-column o-access,   .card-column.access-deck o-access,   .access-deck.access-column o-access,   .card-deck.card-column o-highlighted,   .card-column.access-deck o-highlighted,   .access-deck.access-column o-highlighted,   .card-deck.card-column o-card,   .card-column.access-deck o-card,   .access-deck.access-column o-card,   .card-deck.card-column .card,   .card-column.access-deck .card,   .access-deck.access-column .card{max-width:calc(25% - 30px)}@media (max-width: 975.98px){  .card-deck.card-column o-access,   .card-column.access-deck o-access,   .access-deck.access-column o-access,   .card-deck.card-column o-highlighted,   .card-column.access-deck o-highlighted,   .access-deck.access-column o-highlighted,   .card-deck.card-column o-card,   .card-column.access-deck o-card,   .access-deck.access-column o-card,   .card-deck.card-column .card,   .card-column.access-deck .card,   .access-deck.access-column .card{max-width:calc(33.3333333333% - 30px)}}@media (max-width: 751.98px){  .card-deck.card-column o-access,   .card-column.access-deck o-access,   .access-deck.access-column o-access,   .card-deck.card-column o-highlighted,   .card-column.access-deck o-highlighted,   .access-deck.access-column o-highlighted,   .card-deck.card-column o-card,   .card-column.access-deck o-card,   .access-deck.access-column o-card,   .card-deck.card-column .card,   .card-column.access-deck .card,   .access-deck.access-column .card{max-width:calc(50% - 30px)}}@media (max-width: 591.98px){  .card-deck.card-column o-access,   .card-column.access-deck o-access,   .access-deck.access-column o-access,   .card-deck.card-column o-highlighted,   .card-column.access-deck o-highlighted,   .access-deck.access-column o-highlighted,   .card-deck.card-column o-card,   .card-column.access-deck o-card,   .access-deck.access-column o-card,   .card-deck.card-column .card,   .card-column.access-deck .card,   .access-deck.access-column .card{display:flex;width:100%;max-width:328px;height:-moz-fit-content;height:fit-content;margin-right:auto;margin-left:auto}  .card-deck.card-column o-access[ng-reflect-is-horizontal=true],   .card-column.access-deck o-access[ng-reflect-is-horizontal=true],   .access-deck.access-column o-access[ng-reflect-is-horizontal=true],   .card-deck.card-column o-highlighted[ng-reflect-is-horizontal=true],   .card-column.access-deck o-highlighted[ng-reflect-is-horizontal=true],   .access-deck.access-column o-highlighted[ng-reflect-is-horizontal=true],   .card-deck.card-column o-card[ng-reflect-is-horizontal=true],   .card-column.access-deck o-card[ng-reflect-is-horizontal=true],   .access-deck.access-column o-card[ng-reflect-is-horizontal=true],   .card-deck.card-column .card[ng-reflect-is-horizontal=true],   .card-column.access-deck .card[ng-reflect-is-horizontal=true],   .access-deck.access-column .card[ng-reflect-is-horizontal=true]{max-width:100%}}  .card-deck.max-cards-3.card-column o-access,   .max-cards-3.card-column.access-deck o-access,   .max-cards-3.access-deck.access-column o-access,   .card-deck.max-cards-3.card-column o-highlighted,   .max-cards-3.card-column.access-deck o-highlighted,   .max-cards-3.access-deck.access-column o-highlighted,   .card-deck.max-cards-3.card-column o-card,   .max-cards-3.card-column.access-deck o-card,   .max-cards-3.access-deck.access-column o-card,   .card-deck.max-cards-3.card-column .card,   .max-cards-3.card-column.access-deck .card,   .max-cards-3.access-deck.access-column .card{max-width:calc(33.3333333333% - 30px)}@media (max-width: 751.98px){  .card-deck.max-cards-3.card-column o-access,   .max-cards-3.card-column.access-deck o-access,   .max-cards-3.access-deck.access-column o-access,   .card-deck.max-cards-3.card-column o-highlighted,   .max-cards-3.card-column.access-deck o-highlighted,   .max-cards-3.access-deck.access-column o-highlighted,   .card-deck.max-cards-3.card-column o-card,   .max-cards-3.card-column.access-deck o-card,   .max-cards-3.access-deck.access-column o-card,   .card-deck.max-cards-3.card-column .card,   .max-cards-3.card-column.access-deck .card,   .max-cards-3.access-deck.access-column .card{max-width:calc(50% - 30px)}}@media (max-width: 591.98px){  .card-deck.max-cards-3.card-column o-access,   .max-cards-3.card-column.access-deck o-access,   .max-cards-3.access-deck.access-column o-access,   .card-deck.max-cards-3.card-column o-highlighted,   .max-cards-3.card-column.access-deck o-highlighted,   .max-cards-3.access-deck.access-column o-highlighted,   .card-deck.max-cards-3.card-column o-card,   .max-cards-3.card-column.access-deck o-card,   .max-cards-3.access-deck.access-column o-card,   .card-deck.max-cards-3.card-column .card,   .max-cards-3.card-column.access-deck .card,   .max-cards-3.access-deck.access-column .card{max-width:328px}  .card-deck.max-cards-3.card-column o-access[ng-reflect-is-horizontal=true],   .max-cards-3.card-column.access-deck o-access[ng-reflect-is-horizontal=true],   .max-cards-3.access-deck.access-column o-access[ng-reflect-is-horizontal=true],   .card-deck.max-cards-3.card-column o-highlighted[ng-reflect-is-horizontal=true],   .max-cards-3.card-column.access-deck o-highlighted[ng-reflect-is-horizontal=true],   .max-cards-3.access-deck.access-column o-highlighted[ng-reflect-is-horizontal=true],   .card-deck.max-cards-3.card-column o-card[ng-reflect-is-horizontal=true],   .max-cards-3.card-column.access-deck o-card[ng-reflect-is-horizontal=true],   .max-cards-3.access-deck.access-column o-card[ng-reflect-is-horizontal=true],   .card-deck.max-cards-3.card-column .card[ng-reflect-is-horizontal=true],   .max-cards-3.card-column.access-deck .card[ng-reflect-is-horizontal=true],   .max-cards-3.access-deck.access-column .card[ng-reflect-is-horizontal=true]{max-width:100%}}  .card-deck.max-cards-2.card-column o-access,   .max-cards-2.card-column.access-deck o-access,   .max-cards-2.access-deck.access-column o-access,   .card-deck.max-cards-2.card-column o-highlighted,   .max-cards-2.card-column.access-deck o-highlighted,   .max-cards-2.access-deck.access-column o-highlighted,   .card-deck.max-cards-2.card-column o-card,   .max-cards-2.card-column.access-deck o-card,   .max-cards-2.access-deck.access-column o-card,   .card-deck.max-cards-2.card-column .card,   .max-cards-2.card-column.access-deck .card,   .max-cards-2.access-deck.access-column .card{max-width:calc(50% - 30px)}@media (max-width: 591.98px){  .card-deck.max-cards-2.card-column o-access,   .max-cards-2.card-column.access-deck o-access,   .max-cards-2.access-deck.access-column o-access,   .card-deck.max-cards-2.card-column o-highlighted,   .max-cards-2.card-column.access-deck o-highlighted,   .max-cards-2.access-deck.access-column o-highlighted,   .card-deck.max-cards-2.card-column o-card,   .max-cards-2.card-column.access-deck o-card,   .max-cards-2.access-deck.access-column o-card,   .card-deck.max-cards-2.card-column .card,   .max-cards-2.card-column.access-deck .card,   .max-cards-2.access-deck.access-column .card{max-width:328px}  .card-deck.max-cards-2.card-column o-access[ng-reflect-is-horizontal=true],   .max-cards-2.card-column.access-deck o-access[ng-reflect-is-horizontal=true],   .max-cards-2.access-deck.access-column o-access[ng-reflect-is-horizontal=true],   .card-deck.max-cards-2.card-column o-highlighted[ng-reflect-is-horizontal=true],   .max-cards-2.card-column.access-deck o-highlighted[ng-reflect-is-horizontal=true],   .max-cards-2.access-deck.access-column o-highlighted[ng-reflect-is-horizontal=true],   .card-deck.max-cards-2.card-column o-card[ng-reflect-is-horizontal=true],   .max-cards-2.card-column.access-deck o-card[ng-reflect-is-horizontal=true],   .max-cards-2.access-deck.access-column o-card[ng-reflect-is-horizontal=true],   .card-deck.max-cards-2.card-column .card[ng-reflect-is-horizontal=true],   .max-cards-2.card-column.access-deck .card[ng-reflect-is-horizontal=true],   .max-cards-2.access-deck.access-column .card[ng-reflect-is-horizontal=true]{max-width:100%}}  .card-deck.max-cards-1.card-column o-access,   .max-cards-1.card-column.access-deck o-access,   .max-cards-1.access-deck.access-column o-access,   .card-deck.max-cards-1.card-column o-highlighted,   .max-cards-1.card-column.access-deck o-highlighted,   .max-cards-1.access-deck.access-column o-highlighted,   .card-deck.max-cards-1.card-column o-card,   .max-cards-1.card-column.access-deck o-card,   .max-cards-1.access-deck.access-column o-card,   .card-deck.max-cards-1.card-column .card,   .max-cards-1.card-column.access-deck .card,   .max-cards-1.access-deck.access-column .card{max-width:calc(33.3333333333% - 30px)}  .card-deck.max-cards-1.card-column o-access:nth-of-type(-n + 3),   .max-cards-1.card-column.access-deck o-access:nth-of-type(-n + 3),   .max-cards-1.access-deck.access-column o-access:nth-of-type(-n + 3),   .card-deck.max-cards-1.card-column o-highlighted:nth-of-type(-n + 3),   .max-cards-1.card-column.access-deck o-highlighted:nth-of-type(-n + 3),   .max-cards-1.access-deck.access-column o-highlighted:nth-of-type(-n + 3),   .card-deck.max-cards-1.card-column o-card:nth-of-type(-n + 3),   .max-cards-1.card-column.access-deck o-card:nth-of-type(-n + 3),   .max-cards-1.access-deck.access-column o-card:nth-of-type(-n + 3),   .card-deck.max-cards-1.card-column .card:nth-of-type(-n + 3),   .max-cards-1.card-column.access-deck .card:nth-of-type(-n + 3),   .max-cards-1.access-deck.access-column .card:nth-of-type(-n + 3){margin-top:0}@media (max-width: 751.98px){  .card-deck.max-cards-1.card-column o-access,   .max-cards-1.card-column.access-deck o-access,   .max-cards-1.access-deck.access-column o-access,   .card-deck.max-cards-1.card-column o-highlighted,   .max-cards-1.card-column.access-deck o-highlighted,   .max-cards-1.access-deck.access-column o-highlighted,   .card-deck.max-cards-1.card-column o-card,   .max-cards-1.card-column.access-deck o-card,   .max-cards-1.access-deck.access-column o-card,   .card-deck.max-cards-1.card-column .card,   .max-cards-1.card-column.access-deck .card,   .max-cards-1.access-deck.access-column .card{max-width:calc(50% - 30px)}  .card-deck.max-cards-1.card-column o-access:nth-of-type(-n + 3),   .max-cards-1.card-column.access-deck o-access:nth-of-type(-n + 3),   .max-cards-1.access-deck.access-column o-access:nth-of-type(-n + 3),   .card-deck.max-cards-1.card-column o-highlighted:nth-of-type(-n + 3),   .max-cards-1.card-column.access-deck o-highlighted:nth-of-type(-n + 3),   .max-cards-1.access-deck.access-column o-highlighted:nth-of-type(-n + 3),   .card-deck.max-cards-1.card-column o-card:nth-of-type(-n + 3),   .max-cards-1.card-column.access-deck o-card:nth-of-type(-n + 3),   .max-cards-1.access-deck.access-column o-card:nth-of-type(-n + 3),   .card-deck.max-cards-1.card-column .card:nth-of-type(-n + 3),   .max-cards-1.card-column.access-deck .card:nth-of-type(-n + 3),   .max-cards-1.access-deck.access-column .card:nth-of-type(-n + 3){margin-top:30px}}@media (max-width: 591.98px){  .card-deck.max-cards-1.card-column o-access,   .max-cards-1.card-column.access-deck o-access,   .max-cards-1.access-deck.access-column o-access,   .card-deck.max-cards-1.card-column o-highlighted,   .max-cards-1.card-column.access-deck o-highlighted,   .max-cards-1.access-deck.access-column o-highlighted,   .card-deck.max-cards-1.card-column o-card,   .max-cards-1.card-column.access-deck o-card,   .max-cards-1.access-deck.access-column o-card,   .card-deck.max-cards-1.card-column .card,   .max-cards-1.card-column.access-deck .card,   .max-cards-1.access-deck.access-column .card{max-width:100%}}@media (max-width: 751.98px){  .access-deck.max-cards-1 o-access:first-of-type{margin-top:0!important}}@media (max-width: 751.98px){  .access-deck.max-cards-1 .list-group-item{margin-top:0!important}}'
            ]
          })),
          ne
        );
      })();
    },
    1998: (Ge, he, w) => {
      'use strict';
      w.d(he, { X: () => i });
      var a = w(4893);
      let i = (() => {
        class L {
          constructor(P) {
            this.template = P;
          }
        }
        return (
          (L.ɵfac = function (P) {
            return new (P || L)(a.Y36(a.Rgc));
          }),
          (L.ɵdir = a.lG2({ type: L, selectors: [['', 'oCustomContent', '']], standalone: !0 })),
          L
        );
      })();
    },
    6706: (Ge, he, w) => {
      'use strict';
      w.d(he, { O: () => L });
      var a = w(4893);
      let L = (() => {
        class Z {
          constructor(se, Y) {
            (this.imgHost = se), (this.renderer = Y);
          }
          handleError() {
            this.renderer.setAttribute(
              this.imgHost.nativeElement,
              'src',
              this.defaultImageUrl ||
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5jomR9foeDrKFgdh_LNV4dCK14fY3DPk-0Q&usqp=CAU'
            );
          }
        }
        return (
          (Z.ɵfac = function (se) {
            return new (se || Z)(a.Y36(a.SBq), a.Y36(a.Qsj));
          }),
          (Z.ɵdir = a.lG2({
            type: Z,
            selectors: [['img', 'oDefaultImage', '']],
            hostBindings: function (se, Y) {
              1 & se &&
                a.NdJ('error', function () {
                  return Y.handleError();
                });
            },
            inputs: { defaultImageUrl: 'defaultImageUrl' },
            standalone: !0
          })),
          Z
        );
      })();
    },
    851: (Ge, he, w) => {
      'use strict';
      w.d(he, { F: () => Oe });
      var a = w(4893),
        i = w(9808),
        L = w(2526);
      function Z(re, Te) {
        if ((1 & re && a._UZ(0, 'i', 0), 2 & re)) {
          const j = a.oxw(3).$implicit;
          a.Q6J('ngClass', j.icon);
        }
      }
      function P(re, Te) {
        if ((1 & re && (a.TgZ(0, 'span', 13), a._uU(1), a.qZA()), 2 & re)) {
          const j = a.oxw(3).$implicit;
          a.xp6(1), a.Oqu(j.icon);
        }
      }
      function se(re, Te) {
        if ((1 & re && (a.ynx(0), a.YNc(1, Z, 1, 1, 'i', 11), a.YNc(2, P, 2, 1, 'span', 12), a.BQk()), 2 & re)) {
          const j = a.oxw(2).$implicit;
          a.xp6(1), a.Q6J('ngIf', j.icon.includes('bx')), a.xp6(1), a.Q6J('ngIf', !j.icon.includes('bx'));
        }
      }
      function Y(re, Te) {
        if (1 & re) {
          const j = a.EpF();
          a.TgZ(0, 'a', 7, 8),
            a.NdJ('click', function () {
              a.CHM(j);
              const X = a.oxw(2);
              return a.KtG(X.scrollToTop());
            }),
            a.TgZ(2, 'div', 9),
            a.YNc(3, se, 3, 2, 'ng-container', 10),
            a.TgZ(4, 'span'),
            a._uU(5),
            a.qZA()()();
        }
        if (2 & re) {
          const j = a.MAs(1),
            Fe = a.oxw().$implicit;
          a.ekj('active-child', j.isActive)('disabled', Fe.isDisabled),
            a.Q6J('routerLink', Fe.route),
            a.xp6(3),
            a.Q6J('ngIf', Fe.icon),
            a.xp6(2),
            a.Oqu(Fe.title);
        }
      }
      function xe(re, Te) {
        if ((1 & re && a._UZ(0, 'i', 0), 2 & re)) {
          const j = a.oxw(3).$implicit;
          a.Q6J('ngClass', j.icon);
        }
      }
      function ve(re, Te) {
        if ((1 & re && (a.TgZ(0, 'span', 13), a._uU(1), a.qZA()), 2 & re)) {
          const j = a.oxw(3).$implicit;
          a.xp6(1), a.Oqu(j.icon);
        }
      }
      function ae(re, Te) {
        if ((1 & re && (a.ynx(0), a.YNc(1, xe, 1, 1, 'i', 11), a.YNc(2, ve, 2, 1, 'span', 12), a.BQk()), 2 & re)) {
          const j = a.oxw(2).$implicit;
          a.xp6(1), a.Q6J('ngIf', j.icon.includes('bx')), a.xp6(1), a.Q6J('ngIf', !j.icon.includes('bx'));
        }
      }
      function le(re, Te) {
        if (1 & re) {
          const j = a.EpF();
          a.TgZ(0, 'a', 14, 15),
            a.NdJ('click', function () {
              a.CHM(j);
              const X = a.oxw(2);
              return a.KtG(X.scrollToTop());
            }),
            a.TgZ(2, 'div', 9),
            a.YNc(3, ae, 3, 2, 'ng-container', 10),
            a.TgZ(4, 'span'),
            a._uU(5),
            a.qZA()()();
        }
        if (2 & re) {
          const j = a.MAs(1),
            Fe = a.oxw().$implicit;
          a.ekj('active', j.isActive)('disabled', Fe.isDisabled),
            a.Q6J('routerLink', Fe.route),
            a.xp6(3),
            a.Q6J('ngIf', Fe.icon),
            a.xp6(2),
            a.Oqu(Fe.title);
        }
      }
      function ge(re, Te) {
        if ((1 & re && a._UZ(0, 'i', 0), 2 & re)) {
          const j = a.oxw(3).$implicit;
          a.Q6J('ngClass', j.icon);
        }
      }
      function Ne(re, Te) {
        if ((1 & re && (a.TgZ(0, 'span', 13), a._uU(1), a.qZA()), 2 & re)) {
          const j = a.oxw(3).$implicit;
          a.xp6(1), a.Oqu(j.icon);
        }
      }
      function de(re, Te) {
        if ((1 & re && (a.ynx(0), a.YNc(1, ge, 1, 1, 'i', 11), a.YNc(2, Ne, 2, 1, 'span', 12), a.BQk()), 2 & re)) {
          const j = a.oxw(2).$implicit;
          a.xp6(1), a.Q6J('ngIf', j.icon.includes('bx')), a.xp6(1), a.Q6J('ngIf', !j.icon.includes('bx'));
        }
      }
      function ce(re, Te) {
        if (1 & re) {
          const j = a.EpF();
          a.TgZ(0, 'a', 7, 15),
            a.NdJ('click', function () {
              a.CHM(j);
              const X = a.oxw(3);
              return a.KtG(X.scrollToTop());
            }),
            a.TgZ(2, 'div', 9),
            a.YNc(3, de, 3, 2, 'ng-container', 10),
            a._UZ(4, 'i', 18),
            a.TgZ(5, 'span'),
            a._uU(6),
            a.qZA()()();
        }
        if (2 & re) {
          const j = a.MAs(1),
            Fe = a.oxw().$implicit,
            X = a.oxw().$implicit;
          a.ekj('active-child', j.isActive)('disabled', X.isDisabled),
            a.Q6J('routerLink', Fe.route),
            a.xp6(3),
            a.Q6J('ngIf', Fe.icon),
            a.xp6(3),
            a.hij('', Fe.title, ' ');
        }
      }
      function R(re, Te) {
        if ((1 & re && a._UZ(0, 'i', 0), 2 & re)) {
          const j = a.oxw(3).$implicit;
          a.Q6J('ngClass', j.icon);
        }
      }
      function B(re, Te) {
        if ((1 & re && (a.TgZ(0, 'span', 13), a._uU(1), a.qZA()), 2 & re)) {
          const j = a.oxw(3).$implicit;
          a.xp6(1), a.Oqu(j.icon);
        }
      }
      function ie(re, Te) {
        if ((1 & re && (a.ynx(0), a.YNc(1, R, 1, 1, 'i', 11), a.YNc(2, B, 2, 1, 'span', 12), a.BQk()), 2 & re)) {
          const j = a.oxw(2).$implicit;
          a.xp6(1), a.Q6J('ngIf', j.icon.includes('bx')), a.xp6(1), a.Q6J('ngIf', !j.icon.includes('bx'));
        }
      }
      function K(re, Te) {
        if (1 & re) {
          const j = a.EpF();
          a.TgZ(0, 'a', 14, 15),
            a.NdJ('click', function () {
              a.CHM(j);
              const X = a.oxw(3);
              return a.KtG(X.scrollToTop());
            }),
            a.TgZ(2, 'div', 9),
            a.YNc(3, ie, 3, 2, 'ng-container', 10),
            a.TgZ(4, 'span'),
            a._uU(5),
            a.qZA()()();
        }
        if (2 & re) {
          const j = a.MAs(1),
            Fe = a.oxw().$implicit,
            X = a.oxw().$implicit;
          a.ekj('active', j.isActive)('disabled', X.isDisabled),
            a.Q6J('routerLink', Fe.route),
            a.xp6(3),
            a.Q6J('ngIf', Fe.icon),
            a.xp6(2),
            a.hij('', Fe.title, ' ');
        }
      }
      function be(re, Te) {
        if ((1 & re && a._UZ(0, 'i', 0), 2 & re)) {
          const j = a.oxw(2).$implicit;
          a.Q6J('ngClass', j.icon);
        }
      }
      function H(re, Te) {
        if ((1 & re && (a.TgZ(0, 'span', 13), a._uU(1), a.qZA()), 2 & re)) {
          const j = a.oxw(2).$implicit;
          a.xp6(1), a.Oqu(j.icon);
        }
      }
      function J(re, Te) {
        if ((1 & re && (a.ynx(0), a.YNc(1, be, 1, 1, 'i', 11), a.YNc(2, H, 2, 1, 'span', 12), a.BQk()), 2 & re)) {
          const j = a.oxw().$implicit;
          a.xp6(1), a.Q6J('ngIf', j.icon.includes('bx')), a.xp6(1), a.Q6J('ngIf', !j.icon.includes('bx'));
        }
      }
      function te(re, Te) {
        if (1 & re) {
          const j = a.EpF();
          a.TgZ(0, 'ul', 16)(1, 'li', 3)(2, 'a', 14, 19),
            a.NdJ('click', function () {
              a.CHM(j);
              const X = a.oxw(3);
              return a.KtG(X.scrollToTop());
            }),
            a.TgZ(4, 'div', 9),
            a.YNc(5, J, 3, 2, 'ng-container', 10),
            a.TgZ(6, 'span'),
            a._uU(7),
            a.qZA()()()()();
        }
        if (2 & re) {
          const j = Te.$implicit,
            Fe = a.MAs(3),
            X = a.oxw(2).$implicit;
          a.xp6(2),
            a.ekj('active', Fe.isActive)('disabled', X.isDisabled),
            a.Q6J('routerLink', j.route),
            a.xp6(3),
            a.Q6J('ngIf', j.icon),
            a.xp6(2),
            a.Oqu(j.title);
        }
      }
      function Ue(re, Te) {
        if (
          (1 & re &&
            (a.TgZ(0, 'ul', 16)(1, 'li', 3),
            a.YNc(2, ce, 7, 7, 'a', 17),
            a.YNc(3, K, 6, 7, 'ng-template', null, 5, a.W1O),
            a.YNc(5, te, 8, 7, 'ul', 6),
            a.qZA()()),
          2 & re)
        ) {
          const j = Te.$implicit,
            Fe = a.MAs(4);
          a.xp6(2),
            a.Q6J('ngIf', j.children && 0 !== (null == j.children ? null : j.children.length))('ngIfElse', Fe),
            a.xp6(3),
            a.Q6J('ngForOf', j.children);
        }
      }
      function Ae(re, Te) {
        if (
          (1 & re &&
            (a.TgZ(0, 'li', 3),
            a.YNc(1, Y, 6, 7, 'a', 4),
            a.YNc(2, le, 6, 7, 'ng-template', null, 5, a.W1O),
            a.YNc(4, Ue, 6, 3, 'ul', 6),
            a.qZA()),
          2 & re)
        ) {
          const j = Te.$implicit,
            Fe = a.MAs(3);
          a.xp6(1),
            a.Q6J('ngIf', j.children && 0 !== (null == j.children ? null : j.children.length))('ngIfElse', Fe),
            a.xp6(3),
            a.Q6J('ngForOf', j.children);
        }
      }
      let Oe = (() => {
        class re {
          constructor() {
            (this.navVertItems = []), (this.customClasses = '');
          }
          scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
        return (
          (re.ɵfac = function (j) {
            return new (j || re)();
          }),
          (re.ɵcmp = a.Xpm({
            type: re,
            selectors: [['o-nav-vertical']],
            inputs: { navVertItems: 'navVertItems', customClasses: 'customClasses' },
            decls: 3,
            vars: 2,
            consts: [
              [3, 'ngClass'],
              [1, 'nav', 'flex-column', 'nav-pills', 'nav-lg'],
              ['class', 'nav-item', 4, 'ngFor', 'ngForOf'],
              [1, 'nav-item'],
              [
                'routerLinkActive',
                'active-child',
                'class',
                'nav-link',
                3,
                'active-child',
                'disabled',
                'routerLink',
                'click',
                4,
                'ngIf',
                'ngIfElse'
              ],
              ['templateChild', ''],
              ['class', 'nav flex-column nav-pills', 4, 'ngFor', 'ngForOf'],
              ['routerLinkActive', 'active-child', 1, 'nav-link', 3, 'routerLink', 'click'],
              ['navLink', 'routerLinkActive'],
              [1, 'nav-icon'],
              [4, 'ngIf'],
              [3, 'ngClass', 4, 'ngIf'],
              ['class', 'material-icons-round', 4, 'ngIf'],
              [1, 'material-icons-round'],
              ['routerLinkActive', 'active', 1, 'nav-link', 3, 'routerLink', 'click'],
              ['navLinkSecondLevel', 'routerLinkActive'],
              [1, 'nav', 'flex-column', 'nav-pills'],
              [
                'class',
                'nav-link',
                'routerLinkActive',
                'active-child',
                3,
                'active-child',
                'routerLink',
                'disabled',
                'click',
                4,
                'ngIf',
                'ngIfElse'
              ],
              [1, 'bx', 'bxs-info-circle'],
              ['navLinkThirdLevel', 'routerLinkActive']
            ],
            template: function (j, Fe) {
              1 & j && (a.TgZ(0, 'nav', 0)(1, 'ul', 1), a.YNc(2, Ae, 5, 3, 'li', 2), a.qZA()()),
                2 & j && (a.Q6J('ngClass', Fe.customClasses), a.xp6(2), a.Q6J('ngForOf', Fe.navVertItems));
            },
            dependencies: [i.mk, i.sg, i.O5, L.yS, L.Od]
          })),
          re
        );
      })();
    },
    5120: (Ge, he, w) => {
      'use strict';
      w.d(he, { $: () => Mn });
      var a = w(1998),
        i = w(4893),
        L = w(2526),
        Z = w(9808),
        P = w(2382);
      const se = ['navbarSearchResponsive'],
        Y = ['searchResults'],
        xe = ['navbarContent'];
      function ve(k, Ie) {
        if ((1 & k && (i.TgZ(0, 'a', 24), i._UZ(1, 'img', 25), i.qZA()), 2 & k)) {
          const I = i.oxw(2);
          i.Q6J('routerLink', I.logo.route),
            i.xp6(1),
            i.Q6J('ngClass', I.logo.customClasses ? I.logo.customClasses : 'header-logo')('src', I.logo.src, i.LSH)(
              'alt',
              I.logo.alt
            )('width', I.logo.width)('height', I.logo.height);
        }
      }
      function ae(k, Ie) {
        1 & k && i.GkF(0);
      }
      function le(k, Ie) {
        if (
          (1 & k &&
            (i.ynx(0),
            i.YNc(1, ve, 2, 6, 'a', 18),
            i.YNc(2, ae, 1, 0, 'ng-container', 19),
            i.GkF(3, 20),
            i.TgZ(4, 'div', 21, 22)(6, 'div', 23),
            i.GkF(7, 20)(8, 20)(9, 20)(10, 20),
            i.qZA(),
            i.GkF(11, 20)(12, 20),
            i.qZA(),
            i.BQk()),
          2 & k)
        ) {
          const I = i.oxw(),
            Me = i.MAs(24),
            ke = i.MAs(30),
            Gt = i.MAs(20),
            Ln = i.MAs(26),
            nr = i.MAs(28),
            Vn = i.MAs(22),
            _t = i.MAs(18);
          i.xp6(1),
            i.Q6J('ngIf', I.logo),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', I.loginClassMobile),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', ke),
            i.xp6(1),
            i.Q6J('id', I.id + 'navbarContent'),
            i.xp6(3),
            i.Q6J('ngTemplateOutlet', Gt),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Ln),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Me),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', nr),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Vn),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', _t);
        }
      }
      function ge(k, Ie) {
        if ((1 & k && (i.ynx(0, 20), i.Hsn(1), i.BQk()), 2 & k)) {
          const I = i.oxw();
          i.Q6J('ngTemplateOutlet', I.oCustomContent.template);
        }
      }
      function Ne(k, Ie) {
        if ((1 & k && i._UZ(0, 'i'), 2 & k)) {
          const I = i.oxw().icon;
          i.Tol(I);
        }
      }
      function de(k, Ie) {
        if ((1 & k && (i.TgZ(0, 'span', 28), i._uU(1), i.qZA()), 2 & k)) {
          const I = i.oxw().icon;
          i.xp6(1), i.Oqu(I);
        }
      }
      function ce(k, Ie) {
        if ((1 & k && (i.YNc(0, Ne, 1, 3, 'i', 26), i.YNc(1, de, 2, 1, 'span', 27)), 2 & k)) {
          const I = Ie.icon;
          i.Q6J('ngIf', I && I.includes('bx')), i.xp6(1), i.Q6J('ngIf', I && !I.includes('bx'));
        }
      }
      function R(k, Ie) {
        if ((1 & k && i._UZ(0, 'i'), 2 & k)) {
          const I = i.oxw().icon;
          i.Tol(I);
        }
      }
      function B(k, Ie) {
        if ((1 & k && (i.TgZ(0, 'span', 28), i._uU(1), i.qZA()), 2 & k)) {
          const I = i.oxw().icon;
          i.xp6(1), i.Oqu(I);
        }
      }
      function ie(k, Ie) {
        1 & k && (i.TgZ(0, 'span', 28), i._uU(1, 'arrow_forward'), i.qZA());
      }
      function K(k, Ie) {
        if (
          (1 & k && (i.YNc(0, R, 1, 3, 'i', 26), i.YNc(1, B, 2, 1, 'span', 27), i.YNc(2, ie, 2, 0, 'span', 27)), 2 & k)
        ) {
          const I = Ie.icon;
          i.Q6J('ngIf', I && I.includes('bx')),
            i.xp6(1),
            i.Q6J('ngIf', I && !I.includes('bx')),
            i.xp6(1),
            i.Q6J('ngIf', !I);
        }
      }
      function be(k, Ie) {
        if ((1 & k && i._UZ(0, 'i'), 2 & k)) {
          const I = i.oxw().icon;
          i.Tol(I);
        }
      }
      function H(k, Ie) {
        if ((1 & k && (i.TgZ(0, 'span', 28), i._uU(1), i.qZA()), 2 & k)) {
          const I = i.oxw().icon;
          i.xp6(1), i.Oqu(I);
        }
      }
      function J(k, Ie) {
        1 & k && (i.TgZ(0, 'span', 30), i._uU(1, ' expand_more '), i.qZA());
      }
      function te(k, Ie) {
        if (
          (1 & k && (i.YNc(0, be, 1, 3, 'i', 26), i.YNc(1, H, 2, 1, 'span', 27), i.YNc(2, J, 2, 0, 'span', 29)), 2 & k)
        ) {
          const I = Ie.icon;
          i.Q6J('ngIf', I && I.includes('bx')),
            i.xp6(1),
            i.Q6J('ngIf', I && !I.includes('bx')),
            i.xp6(1),
            i.Q6J('ngIf', !I);
        }
      }
      function Ue(k, Ie) {
        if ((1 & k && i._UZ(0, 'i'), 2 & k)) {
          const I = i.oxw().icon;
          i.Tol(I);
        }
      }
      function Ae(k, Ie) {
        if ((1 & k && (i.TgZ(0, 'span', 28), i._uU(1), i.qZA()), 2 & k)) {
          const I = i.oxw().icon;
          i.xp6(1), i.Oqu(I);
        }
      }
      function Oe(k, Ie) {
        1 & k && (i.TgZ(0, 'span', 28), i._uU(1, 'person'), i.qZA());
      }
      function re(k, Ie) {
        if (
          (1 & k && (i.YNc(0, Ue, 1, 3, 'i', 26), i.YNc(1, Ae, 2, 1, 'span', 27), i.YNc(2, Oe, 2, 0, 'span', 27)),
          2 & k)
        ) {
          const I = Ie.icon;
          i.Q6J('ngIf', I && I.includes('bx')),
            i.xp6(1),
            i.Q6J('ngIf', I && !I.includes('bx')),
            i.xp6(1),
            i.Q6J('ngIf', !I);
        }
      }
      function Te(k, Ie) {
        if ((1 & k && i._UZ(0, 'i'), 2 & k)) {
          const I = i.oxw().icon;
          i.Tol(I);
        }
      }
      function j(k, Ie) {
        if ((1 & k && (i.TgZ(0, 'span', 28), i._uU(1), i.qZA()), 2 & k)) {
          const I = i.oxw().icon;
          i.xp6(1), i.Oqu(I);
        }
      }
      function Fe(k, Ie) {
        1 & k && (i.TgZ(0, 'span', 28), i._uU(1, 'logout'), i.qZA());
      }
      function X(k, Ie) {
        if (
          (1 & k && (i.YNc(0, Te, 1, 3, 'i', 26), i.YNc(1, j, 2, 1, 'span', 27), i.YNc(2, Fe, 2, 0, 'span', 27)), 2 & k)
        ) {
          const I = Ie.icon;
          i.Q6J('ngIf', I && I.includes('bx')),
            i.xp6(1),
            i.Q6J('ngIf', I && !I.includes('bx')),
            i.xp6(1),
            i.Q6J('ngIf', !I);
        }
      }
      function ne(k, Ie) {
        1 & k && i._UZ(0, 'span', 41);
      }
      function Re(k, Ie) {
        if (1 & k) {
          const I = i.EpF();
          i.TgZ(0, 'a', 39),
            i.NdJ('click', function () {
              i.CHM(I);
              const ke = i.oxw(4);
              return i.KtG(ke.closeDropdownMenu());
            }),
            i.TgZ(1, 'span'),
            i._uU(2),
            i.qZA(),
            i.YNc(3, ne, 1, 0, 'span', 40),
            i.qZA();
        }
        if (2 & k) {
          const I = i.oxw().$implicit;
          i.Q6J('routerLink', I.route), i.xp6(2), i.Oqu(I.title), i.xp6(1), i.Q6J('ngIf', I.isWithNotification);
        }
      }
      function Ce(k, Ie) {
        if (1 & k) {
          const I = i.EpF();
          i.TgZ(0, 'li', 36)(1, 'a', 42),
            i.NdJ('click', function () {
              i.CHM(I);
              const ke = i.oxw(4);
              return i.KtG(ke.closeDropdownMenu());
            }),
            i.TgZ(2, 'div', 43)(3, 'span', 28),
            i._uU(4, 'logout'),
            i.qZA(),
            i.TgZ(5, 'span'),
            i._uU(6, 'Cerrar sesi\xf3n'),
            i.qZA()()()();
        }
        if (2 & k) {
          const I = i.oxw().$implicit;
          i.xp6(1), i.Q6J('routerLink', I.route);
        }
      }
      function Ze(k, Ie) {
        if (
          (1 & k &&
            (i.ynx(0), i.TgZ(1, 'li', 36), i.YNc(2, Re, 4, 3, 'a', 37), i.qZA(), i.YNc(3, Ce, 7, 1, 'li', 38), i.BQk()),
          2 & k)
        ) {
          const I = Ie.$implicit;
          i.xp6(2), i.Q6J('ngIf', !I.isDangerTitle), i.xp6(1), i.Q6J('ngIf', I.isDangerTitle);
        }
      }
      function G(k, Ie) {
        if (
          (1 & k &&
            (i.TgZ(0, 'div', 32)(1, 'nav')(2, 'p', 33),
            i._uU(3),
            i.qZA(),
            i.TgZ(4, 'ul', 34),
            i.YNc(5, Ze, 4, 2, 'ng-container', 35),
            i.qZA()()()),
          2 & k)
        ) {
          const I = i.oxw(2);
          i.xp6(3), i.Oqu(I.routesAccount.title), i.xp6(2), i.Q6J('ngForOf', I.routesAccount.children);
        }
      }
      function ee(k, Ie) {
        if ((1 & k && i.YNc(0, G, 6, 2, 'div', 31), 2 & k)) {
          const I = i.oxw();
          i.Q6J('ngIf', I.routesAccount);
        }
      }
      const q = function (k) {
        return { icon: k };
      };
      function fe(k, Ie) {
        if (
          (1 & k && (i.TgZ(0, 'a', 58), i.GkF(1, 51), i.TgZ(2, 'span', 59), i._uU(3), i.qZA(), i.GkF(4, 51), i.qZA()),
          2 & k)
        ) {
          const I = i.oxw().$implicit;
          i.oxw(5);
          const Me = i.MAs(8);
          i.Q6J('routerLink', I.route),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(6, q, I.iconLeft)),
            i.xp6(2),
            i.Oqu(I.title),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(8, q, I.iconLeft));
        }
      }
      function De(k, Ie) {
        if (
          (1 & k && (i.TgZ(0, 'a', 60), i.GkF(1, 51), i.TgZ(2, 'span', 59), i._uU(3), i.qZA(), i.GkF(4, 51), i.qZA()),
          2 & k)
        ) {
          const I = i.oxw().$implicit;
          i.oxw(5);
          const Me = i.MAs(8),
            ke = i.MAs(10);
          i.Q6J('routerLink', I.route),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(6, q, I.iconLeft)),
            i.xp6(2),
            i.Oqu(I.title),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', ke)('ngTemplateOutletContext', i.VKq(8, q, I.iconLeft));
        }
      }
      function pe(k, Ie) {
        if (
          (1 & k && (i.TgZ(0, 'a', 61), i.GkF(1, 51), i.TgZ(2, 'span', 59), i._uU(3), i.qZA(), i.GkF(4, 51), i.qZA()),
          2 & k)
        ) {
          const I = i.oxw().$implicit;
          i.oxw(5);
          const Me = i.MAs(8);
          i.Q6J('href', I.link, i.LSH),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(6, q, I.iconLeft)),
            i.xp6(2),
            i.Oqu(I.title),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(8, q, I.iconLeft));
        }
      }
      function Je(k, Ie) {
        if (
          (1 & k && (i.TgZ(0, 'a', 62), i.GkF(1, 51), i.TgZ(2, 'span', 59), i._uU(3), i.qZA(), i.GkF(4, 51), i.qZA()),
          2 & k)
        ) {
          const I = i.oxw().$implicit;
          i.oxw(5);
          const Me = i.MAs(8),
            ke = i.MAs(10);
          i.Q6J('href', I.link, i.LSH),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(6, q, I.iconLeft)),
            i.xp6(2),
            i.Oqu(I.title),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', ke)('ngTemplateOutletContext', i.VKq(8, q, I.iconLeft));
        }
      }
      function et(k, Ie) {
        if (
          (1 & k &&
            (i.ynx(0),
            i.YNc(1, fe, 5, 10, 'a', 54),
            i.YNc(2, De, 5, 10, 'a', 55),
            i.YNc(3, pe, 5, 10, 'a', 56),
            i.YNc(4, Je, 5, 10, 'a', 57),
            i.BQk()),
          2 & k)
        ) {
          const I = Ie.$implicit;
          i.xp6(1),
            i.Q6J('ngIf', I.route && !I.isOverviewItem),
            i.xp6(1),
            i.Q6J('ngIf', I.route && I.isOverviewItem),
            i.xp6(1),
            i.Q6J('ngIf', I.link && !I.isOverviewItem),
            i.xp6(1),
            i.Q6J('ngIf', I.link && I.isOverviewItem);
        }
      }
      function Ot(k, Ie) {
        if (
          (1 & k &&
            (i.TgZ(0, 'li', 49)(1, 'button', 50),
            i.GkF(2, 51),
            i.TgZ(3, 'span', 52),
            i._uU(4),
            i.qZA(),
            i.GkF(5, 51),
            i.qZA(),
            i.TgZ(6, 'div', 53),
            i.YNc(7, et, 5, 4, 'ng-container', 35),
            i.qZA()()),
          2 & k)
        ) {
          const I = i.oxw().$implicit;
          i.oxw(3);
          const Me = i.MAs(8),
            ke = i.MAs(12);
          i.xp6(2),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(6, q, I.iconLeft)),
            i.xp6(2),
            i.Oqu(I.title),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', ke)('ngTemplateOutletContext', i.VKq(8, q, I.iconRight)),
            i.xp6(2),
            i.Q6J('ngForOf', I.children);
        }
      }
      function je(k, Ie) {
        if (1 & k) {
          const I = i.EpF();
          i.TgZ(0, 'a', 39),
            i.NdJ('click', function () {
              i.CHM(I);
              const ke = i.oxw(5);
              return i.KtG(ke.closeDropdownMenu());
            }),
            i.GkF(1, 51),
            i.TgZ(2, 'span'),
            i._uU(3),
            i.qZA(),
            i.GkF(4, 51),
            i.qZA();
        }
        if (2 & k) {
          const I = i.oxw(2).$implicit;
          i.oxw(3);
          const Me = i.MAs(8);
          i.Q6J('routerLink', I.route),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(6, q, I.iconLeft)),
            i.xp6(2),
            i.Oqu(I.title),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(8, q, I.iconLeft));
        }
      }
      function He(k, Ie) {
        if (1 & k) {
          const I = i.EpF();
          i.TgZ(0, 'a', 64),
            i.NdJ('click', function () {
              i.CHM(I);
              const ke = i.oxw(5);
              return i.KtG(ke.closeDropdownMenu());
            }),
            i.GkF(1, 51),
            i.TgZ(2, 'span'),
            i._uU(3),
            i.qZA(),
            i.GkF(4, 51),
            i.qZA();
        }
        if (2 & k) {
          const I = i.oxw(2).$implicit;
          i.oxw(3);
          const Me = i.MAs(8);
          i.Q6J('href', I.link, i.LSH),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(6, q, I.iconLeft)),
            i.xp6(2),
            i.Oqu(I.title),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(8, q, I.iconLeft));
        }
      }
      function Ct(k, Ie) {
        if (
          (1 & k && (i.TgZ(0, 'li', 36), i.YNc(1, je, 5, 10, 'a', 37), i.YNc(2, He, 5, 10, 'a', 63), i.qZA()), 2 & k)
        ) {
          const I = i.oxw().$implicit;
          i.xp6(1), i.Q6J('ngIf', I.route), i.xp6(1), i.Q6J('ngIf', I.link);
        }
      }
      function xt(k, Ie) {
        if ((1 & k && (i.ynx(0), i.YNc(1, Ot, 8, 10, 'li', 48), i.YNc(2, Ct, 3, 2, 'li', 38), i.BQk()), 2 & k)) {
          const I = Ie.$implicit;
          i.xp6(1), i.Q6J('ngIf', I.children), i.xp6(1), i.Q6J('ngIf', !I.children);
        }
      }
      function Ut(k, Ie) {
        if (
          (1 & k &&
            (i.TgZ(0, 'div', 45)(1, 'nav')(2, 'p', 46),
            i._uU(3, 'Secciones'),
            i.qZA(),
            i.TgZ(4, 'ul', 47),
            i.YNc(5, xt, 3, 2, 'ng-container', 35),
            i.qZA()()()),
          2 & k)
        ) {
          const I = i.oxw(2);
          i.xp6(5), i.Q6J('ngForOf', I.routes);
        }
      }
      function Jt(k, Ie) {
        if ((1 & k && i.YNc(0, Ut, 6, 1, 'div', 44), 2 & k)) {
          const I = i.oxw();
          i.Q6J('ngIf', I.routes);
        }
      }
      function Kt(k, Ie) {
        if (1 & k) {
          const I = i.EpF();
          i.TgZ(0, 'a', 39),
            i.NdJ('click', function () {
              i.CHM(I);
              const ke = i.oxw(5);
              return i.KtG(ke.closeDropdownMenu());
            }),
            i.GkF(1, 51),
            i.TgZ(2, 'span'),
            i._uU(3),
            i.qZA(),
            i.GkF(4, 51),
            i.qZA();
        }
        if (2 & k) {
          const I = i.oxw(2).$implicit;
          i.oxw(3);
          const Me = i.MAs(8);
          i.Q6J('routerLink', I.route),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(6, q, I.iconLeft)),
            i.xp6(2),
            i.Oqu(I.title),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(8, q, I.iconRight));
        }
      }
      function Nt(k, Ie) {
        if (1 & k) {
          const I = i.EpF();
          i.TgZ(0, 'a', 64),
            i.NdJ('click', function () {
              i.CHM(I);
              const ke = i.oxw(5);
              return i.KtG(ke.closeDropdownMenu());
            }),
            i.GkF(1, 51),
            i.TgZ(2, 'span'),
            i._uU(3),
            i.qZA(),
            i.GkF(4, 51),
            i.qZA();
        }
        if (2 & k) {
          const I = i.oxw(2).$implicit;
          i.oxw(3);
          const Me = i.MAs(8);
          i.Q6J('href', I.link, i.LSH),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(6, q, I.iconLeft)),
            i.xp6(2),
            i.Oqu(I.title),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(8, q, I.iconRight));
        }
      }
      function un(k, Ie) {
        if (
          (1 & k && (i.TgZ(0, 'li', 36), i.YNc(1, Kt, 5, 10, 'a', 37), i.YNc(2, Nt, 5, 10, 'a', 63), i.qZA()), 2 & k)
        ) {
          const I = i.oxw().$implicit;
          i.xp6(1), i.Q6J('ngIf', I.route), i.xp6(1), i.Q6J('ngIf', I.link);
        }
      }
      function Bt(k, Ie) {
        if (
          (1 & k && (i.TgZ(0, 'a', 58), i.GkF(1, 51), i.TgZ(2, 'span', 59), i._uU(3), i.qZA(), i.GkF(4, 51), i.qZA()),
          2 & k)
        ) {
          const I = i.oxw().$implicit;
          i.oxw(5);
          const Me = i.MAs(8);
          i.Q6J('routerLink', I.route),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(6, q, I.iconLeft)),
            i.xp6(2),
            i.Oqu(I.title),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(8, q, I.iconLeft));
        }
      }
      function Cn(k, Ie) {
        if (
          (1 & k && (i.TgZ(0, 'a', 60), i.GkF(1, 51), i.TgZ(2, 'span', 59), i._uU(3), i.qZA(), i.GkF(4, 51), i.qZA()),
          2 & k)
        ) {
          const I = i.oxw().$implicit;
          i.oxw(5);
          const Me = i.MAs(8),
            ke = i.MAs(10);
          i.Q6J('routerLink', I.route),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(6, q, I.iconLeft)),
            i.xp6(2),
            i.Oqu(I.title),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', ke)('ngTemplateOutletContext', i.VKq(8, q, I.iconLeft));
        }
      }
      function Dn(k, Ie) {
        if (
          (1 & k && (i.TgZ(0, 'a', 61), i.GkF(1, 51), i.TgZ(2, 'span', 59), i._uU(3), i.qZA(), i.GkF(4, 51), i.qZA()),
          2 & k)
        ) {
          const I = i.oxw().$implicit;
          i.oxw(5);
          const Me = i.MAs(8);
          i.Q6J('href', I.link, i.LSH),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(6, q, I.iconLeft)),
            i.xp6(2),
            i.Oqu(I.title),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(8, q, I.iconLeft));
        }
      }
      function vt(k, Ie) {
        if (
          (1 & k && (i.TgZ(0, 'a', 62), i.GkF(1, 51), i.TgZ(2, 'span', 59), i._uU(3), i.qZA(), i.GkF(4, 51), i.qZA()),
          2 & k)
        ) {
          const I = i.oxw().$implicit;
          i.oxw(5);
          const Me = i.MAs(8),
            ke = i.MAs(10);
          i.Q6J('href', I.link, i.LSH),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(6, q, I.iconLeft)),
            i.xp6(2),
            i.Oqu(I.title),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', ke)('ngTemplateOutletContext', i.VKq(8, q, I.iconLeft));
        }
      }
      function Qe(k, Ie) {
        if (
          (1 & k &&
            (i.ynx(0),
            i.YNc(1, Bt, 5, 10, 'a', 54),
            i.YNc(2, Cn, 5, 10, 'a', 55),
            i.YNc(3, Dn, 5, 10, 'a', 56),
            i.YNc(4, vt, 5, 10, 'a', 57),
            i.BQk()),
          2 & k)
        ) {
          const I = Ie.$implicit;
          i.xp6(1),
            i.Q6J('ngIf', I.route && !I.isOverviewItem),
            i.xp6(1),
            i.Q6J('ngIf', I.route && I.isOverviewItem),
            i.xp6(1),
            i.Q6J('ngIf', I.link && !I.isOverviewItem),
            i.xp6(1),
            i.Q6J('ngIf', I.link && I.isOverviewItem);
        }
      }
      function lr(k, Ie) {
        if (
          (1 & k &&
            (i.TgZ(0, 'li', 49)(1, 'button', 50),
            i.GkF(2, 51),
            i.TgZ(3, 'span', 52),
            i._uU(4),
            i.qZA(),
            i.GkF(5, 51),
            i.qZA(),
            i.TgZ(6, 'div', 53),
            i.YNc(7, Qe, 5, 4, 'ng-container', 35),
            i.qZA()()),
          2 & k)
        ) {
          const I = i.oxw().$implicit;
          i.oxw(3);
          const Me = i.MAs(8),
            ke = i.MAs(12);
          i.xp6(2),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(6, q, I.iconLeft)),
            i.xp6(2),
            i.Oqu(I.title),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', ke)('ngTemplateOutletContext', i.VKq(8, q, I.iconRight)),
            i.xp6(2),
            i.Q6J('ngForOf', I.children);
        }
      }
      function er(k, Ie) {
        if ((1 & k && (i.ynx(0), i.YNc(1, un, 3, 2, 'li', 38), i.YNc(2, lr, 8, 10, 'li', 48), i.BQk()), 2 & k)) {
          const I = Ie.$implicit;
          i.xp6(1), i.Q6J('ngIf', !I.children), i.xp6(1), i.Q6J('ngIf', I.children);
        }
      }
      function qt(k, Ie) {
        if (
          (1 & k &&
            (i.TgZ(0, 'div', 66)(1, 'nav')(2, 'p', 46),
            i._uU(3, 'Secciones'),
            i.qZA(),
            i.TgZ(4, 'ul', 47),
            i.YNc(5, er, 3, 2, 'ng-container', 35),
            i.qZA()()()),
          2 & k)
        ) {
          const I = i.oxw(2);
          i.xp6(5), i.Q6J('ngForOf', I.routesExtended);
        }
      }
      function St(k, Ie) {
        if ((1 & k && i.YNc(0, qt, 6, 1, 'div', 65), 2 & k)) {
          const I = i.oxw();
          i.Q6J('ngIf', I.routesExtended);
        }
      }
      function Xe(k, Ie) {
        if (
          (1 & k &&
            (i.TgZ(0, 'div')(1, 'a', 67),
            i.GkF(2, 51),
            i.TgZ(3, 'span', 68),
            i._uU(4),
            i.qZA(),
            i.GkF(5, 51),
            i.qZA()()),
          2 & k)
        ) {
          const I = i.oxw(2).classMobile,
            Me = i.oxw(),
            ke = i.MAs(14),
            Gt = i.MAs(8);
          i.Gre('navbar-login', I, ''),
            i.xp6(1),
            i.Q6J('routerLink', Me.routesLogin.route),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', ke)('ngTemplateOutletContext', i.VKq(9, q, Me.routesLogin.iconLeft)),
            i.xp6(2),
            i.Oqu(Me.routesLogin.title),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Gt)('ngTemplateOutletContext', i.VKq(11, q, Me.routesLogin.iconRight));
        }
      }
      function tt(k, Ie) {
        if ((1 & k && (i.ynx(0), i.YNc(1, Xe, 6, 13, 'div', 26), i.BQk()), 2 & k)) {
          const I = i.oxw(2);
          i.xp6(1), i.Q6J('ngIf', !I.routesAccount);
        }
      }
      function en(k, Ie) {
        if ((1 & k && i.YNc(0, tt, 2, 1, 'ng-container', 3), 2 & k)) {
          const I = i.oxw();
          i.Q6J('ngIf', I.routesLogin);
        }
      }
      function Pn(k, Ie) {
        if (1 & k) {
          const I = i.EpF();
          i.TgZ(0, 'div', 80),
            i.NdJ('click', function () {
              const Gt = i.CHM(I).$implicit,
                Ln = i.oxw(4);
              return i.KtG(Ln.goTo(Gt));
            }),
            i._uU(1),
            i.qZA();
        }
        if (2 & k) {
          const I = Ie.$implicit,
            Me = Ie.index,
            ke = i.oxw(4);
          i.ekj('selected-search-item', Me === ke.selectedIndex)(
            'first-search-item',
            Me === ke.selectedIndex && !ke.isHover
          ),
            i.xp6(1),
            i.hij(' ', I.title, ' ');
        }
      }
      function $t(k, Ie) {
        if ((1 & k && (i.ynx(0), i.YNc(1, Pn, 2, 5, 'div', 79), i.BQk()), 2 & k)) {
          const I = i.oxw(3);
          i.xp6(1), i.Q6J('ngForOf', I.filteredResults);
        }
      }
      function tn(k, Ie) {
        1 & k && (i.TgZ(0, 'div', 81), i._uU(1, 'No se encontraron resultados\u{1f622}.'), i.qZA());
      }
      function gt(k, Ie) {
        if (1 & k) {
          const I = i.EpF();
          i.TgZ(0, 'div', 70)(1, 'form', 71)(2, 'div', 72)(3, 'label', 73),
            i._uU(4, 'Buscador'),
            i.qZA(),
            i.TgZ(5, 'input', 74),
            i.NdJ('ngModelChange', function (ke) {
              i.CHM(I);
              const Gt = i.oxw(2);
              return i.KtG((Gt.term = ke));
            })('input', function () {
              i.CHM(I);
              const ke = i.oxw(2);
              return i.KtG(ke.search());
            })('keydown.enter', function () {
              i.CHM(I);
              const ke = i.oxw(2);
              return i.KtG(ke.onEnter());
            })('keydown.ArrowUp', function () {
              i.CHM(I);
              const ke = i.oxw(2);
              return i.KtG(ke.onUp());
            })('keydown.ArrowDown', function () {
              i.CHM(I);
              const ke = i.oxw(2);
              return i.KtG(ke.onDown());
            }),
            i.qZA(),
            i.TgZ(6, 'button', 75),
            i.NdJ('click', function () {
              i.CHM(I);
              const ke = i.oxw(2);
              return i.KtG(ke.resetSearch());
            }),
            i.qZA(),
            i.TgZ(7, 'button', 76),
            i.NdJ('click', function () {
              i.CHM(I);
              const ke = i.oxw(2);
              return i.KtG(ke.onEnter());
            })('keydown.enter', function () {
              i.CHM(I);
              const ke = i.oxw(2);
              return i.KtG(ke.onEnter());
            }),
            i.qZA()()(),
            i.TgZ(8, 'div', 77),
            i.NdJ('mouseenter', function () {
              i.CHM(I);
              const ke = i.oxw(2);
              return i.KtG(ke.onMouseEnter());
            })('mouseleave', function () {
              i.CHM(I);
              const ke = i.oxw(2);
              return i.KtG(ke.onMouseLeave());
            }),
            i.YNc(9, $t, 2, 1, 'ng-container', 3),
            i.YNc(10, tn, 2, 0, 'div', 78),
            i.qZA()();
        }
        if (2 & k) {
          const I = i.oxw(2);
          i.xp6(5),
            i.Q6J('placeholder', I.placeholder)('ngModel', I.term),
            i.xp6(4),
            i.Q6J('ngIf', I.filteredResults.length > 0),
            i.xp6(1),
            i.Q6J('ngIf', I.noResults);
        }
      }
      function Tn(k, Ie) {
        if ((1 & k && i.YNc(0, gt, 11, 4, 'div', 69), 2 & k)) {
          const I = i.oxw();
          i.Q6J('ngIf', I.searchbarItems);
        }
      }
      function Ye(k, Ie) {
        1 & k && i._UZ(0, 'span', 41);
      }
      function bn(k, Ie) {
        if (
          (1 & k &&
            (i.TgZ(0, 'a', 58),
            i.GkF(1, 51),
            i.TgZ(2, 'span', 59),
            i._uU(3),
            i.qZA(),
            i.GkF(4, 51),
            i.YNc(5, Ye, 1, 0, 'span', 40),
            i.qZA()),
          2 & k)
        ) {
          const I = i.oxw().$implicit;
          i.oxw(3);
          const Me = i.MAs(8);
          i.Q6J('routerLink', I.route),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(7, q, I.iconLeft)),
            i.xp6(2),
            i.Oqu(I.title),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(9, q, I.iconRight)),
            i.xp6(1),
            i.Q6J('ngIf', I.isWithNotification);
        }
      }
      function Ke(k, Ie) {
        if (
          (1 & k &&
            (i.TgZ(0, 'a', 87),
            i.GkF(1, 51),
            i.TgZ(2, 'span', 59),
            i._uU(3, 'Cerrar sesi\xf3n'),
            i.qZA(),
            i.GkF(4, 51),
            i.qZA()),
          2 & k)
        ) {
          const I = i.oxw().$implicit;
          i.oxw(3);
          const Me = i.MAs(8),
            ke = i.MAs(16);
          i.Q6J('routerLink', I.route),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(5, q, I.iconLeft)),
            i.xp6(3),
            i.Q6J('ngTemplateOutlet', ke)('ngTemplateOutletContext', i.VKq(7, q, I.iconLeft));
        }
      }
      function wn(k, Ie) {
        if ((1 & k && (i.ynx(0), i.YNc(1, bn, 6, 11, 'a', 54), i.YNc(2, Ke, 5, 9, 'a', 86), i.BQk()), 2 & k)) {
          const I = Ie.$implicit;
          i.xp6(1), i.Q6J('ngIf', !I.isDangerTitle), i.xp6(1), i.Q6J('ngIf', I.isDangerTitle);
        }
      }
      function kn(k, Ie) {
        if (
          (1 & k &&
            (i.TgZ(0, 'div', 83)(1, 'div', 49)(2, 'button', 84),
            i.GkF(3, 51),
            i.TgZ(4, 'span', 52),
            i._uU(5),
            i.qZA(),
            i.GkF(6, 51),
            i.qZA(),
            i.TgZ(7, 'div', 85),
            i.YNc(8, wn, 3, 2, 'ng-container', 35),
            i.qZA()()()),
          2 & k)
        ) {
          const I = i.oxw(2),
            Me = i.MAs(14),
            ke = i.MAs(8);
          i.xp6(3),
            i.Q6J('ngTemplateOutlet', Me)('ngTemplateOutletContext', i.VKq(6, q, I.routesAccount.iconLeft)),
            i.xp6(2),
            i.Oqu(I.routesAccount.title),
            i.xp6(1),
            i.Q6J('ngTemplateOutlet', ke)('ngTemplateOutletContext', i.VKq(8, q, I.routesAccount.iconLeft)),
            i.xp6(2),
            i.Q6J('ngForOf', I.routesAccount.children);
        }
      }
      function tr(k, Ie) {
        if ((1 & k && i.YNc(0, kn, 9, 10, 'div', 82), 2 & k)) {
          const I = i.oxw();
          i.Q6J('ngIf', I.routesAccount);
        }
      }
      function Rn(k, Ie) {
        if (1 & k) {
          const I = i.EpF();
          i.TgZ(0, 'button', 89),
            i.NdJ('click', function () {
              i.CHM(I);
              const ke = i.oxw(2);
              return i.KtG(ke.toggleMenu());
            }),
            i.qZA();
        }
        if (2 & k) {
          const I = i.oxw(2);
          i.uIk('data-target', '#' + I.id + 'navbarContent')('aria-controls', I.id + 'navbarContent')(
            'aria-expanded',
            I.isMenuExpanded ? 'true' : 'false'
          );
        }
      }
      function En(k, Ie) {
        if ((1 & k && i.YNc(0, Rn, 1, 3, 'button', 88), 2 & k)) {
          const I = i.oxw();
          i.Q6J('ngIf', I.routes || I.routesExtended);
        }
      }
      const xn = ['*'];
      let Mn = (() => {
        class k {
          constructor(I, Me, ke) {
            (this.router = I),
              (this.elementRef = Me),
              (this.renderer = ke),
              (this.id = 'ONavbar'),
              (this.logo = {
                route: '/',
                src: 'https://buenosaires.gob.ar/assets/img/logos/LogoBA.svg',
                alt: 'Gobierno de la Ciudad de Buenos Aires - Inicio'
              }),
              (this.isRouteExact = !1),
              (this.customClasses = ''),
              (this.maxLengthResults = 10),
              (this.placeholder = 'Buscar...'),
              (this.term = ''),
              (this.isHover = !1),
              (this.noResults = !1),
              (this.filteredResults = []),
              (this.selectedIndex = 0),
              (this.isMenuExpanded = !1),
              (this.loginClassMobile = { classMobile: '-mobile' }),
              (this.clickOutsideListener = () => {});
          }
          ngOnInit() {
            this.clickOutsideListener = this.renderer.listen('document', 'click', (I) => {
              this.elementRef.nativeElement.contains(I.target) || this.resetSearch();
            });
          }
          ngAfterViewInit() {
            this.navbarSearchResponsive &&
              new ResizeObserver((Me) => {
                for (const ke of Me) {
                  const Gt = ke.contentRect.width - 2;
                  this.searchResults &&
                    (this.renderer.setStyle(this.searchResults.nativeElement, 'width', `${Gt}px`),
                    this.renderer.setStyle(this.searchResults.nativeElement, 'max-width', `${Gt}px`));
                }
              }).observe(this.navbarSearchResponsive.nativeElement);
          }
          search() {
            '' === this.term
              ? this.resetSearch()
              : ((this.filteredResults = this.searchbarItems
                  .filter((I) => I.title.toLowerCase().includes(this.term.toLowerCase()))
                  .slice(0, this.maxLengthResults)),
                (this.noResults = 0 === this.filteredResults.length));
          }
          resetSearch() {
            (this.term = ''),
              (this.isHover = !1),
              (this.noResults = !1),
              (this.filteredResults = []),
              (this.selectedIndex = 0);
          }
          goTo(I) {
            this.router.navigate([I.route]), this.resetSearch(), this.closeDropdownMenu();
          }
          onEnter() {
            this.filteredResults.length > 0 &&
              (this.goTo(this.filteredResults[this.selectedIndex]), this.closeDropdownMenu());
          }
          onUp() {
            this.selectedIndex > 0 && (this.selectedIndex--, (this.isHover = !1));
          }
          onDown() {
            this.selectedIndex < this.filteredResults.length && (this.selectedIndex++, (this.isHover = !1));
          }
          onMouseEnter() {
            this.isHover = !0;
          }
          onMouseLeave() {
            this.isHover = !1;
          }
          scrollToContent() {
            if (this.idMain) {
              const I = document.getElementById(this.idMain);
              I && I.scrollIntoView({ behavior: 'smooth' });
            }
          }
          ngOnDestroy() {
            this.clickOutsideListener && this.clickOutsideListener();
          }
          closeDropdownMenu() {
            this.navbarContent &&
              (this.navbarContent.nativeElement.classList.remove('show'), (this.isMenuExpanded = !1));
          }
          onClick(I) {
            const Me = I.target;
            Me && Me.classList.contains('header-backdrop') && this.closeDropdownMenu();
          }
          toggleMenu() {
            this.isMenuExpanded = !this.isMenuExpanded;
          }
        }
        return (
          (k.ɵfac = function (I) {
            return new (I || k)(i.Y36(L.F0), i.Y36(i.SBq), i.Y36(i.Qsj));
          }),
          (k.ɵcmp = i.Xpm({
            type: k,
            selectors: [['o-navbar']],
            contentQueries: function (I, Me, ke) {
              if ((1 & I && i.Suo(ke, a.X, 7), 2 & I)) {
                let Gt;
                i.iGM((Gt = i.CRH())) && (Me.oCustomContent = Gt.first);
              }
            },
            viewQuery: function (I, Me) {
              if ((1 & I && (i.Gf(se, 5), i.Gf(Y, 5), i.Gf(xe, 5)), 2 & I)) {
                let ke;
                i.iGM((ke = i.CRH())) && (Me.navbarSearchResponsive = ke.first),
                  i.iGM((ke = i.CRH())) && (Me.searchResults = ke.first),
                  i.iGM((ke = i.CRH())) && (Me.navbarContent = ke.first);
              }
            },
            hostBindings: function (I, Me) {
              1 & I &&
                i.NdJ(
                  'click',
                  function (Gt) {
                    return Me.onClick(Gt);
                  },
                  !1,
                  i.evT
                );
            },
            inputs: {
              id: 'id',
              logo: 'logo',
              isRouteExact: 'isRouteExact',
              routes: 'routes',
              routesExtended: 'routesExtended',
              routesAccount: 'routesAccount',
              routesLogin: 'routesLogin',
              idMain: 'idMain',
              customClasses: 'customClasses',
              searchbarItems: 'searchbarItems',
              maxLengthResults: 'maxLengthResults',
              placeholder: 'placeholder'
            },
            ngContentSelectors: xn,
            decls: 31,
            vars: 3,
            consts: [
              ['role', 'banner', 1, 'navbar', 'navbar-light', 'navbar-expand-lg', 3, 'ngClass'],
              ['href', 'javascript:void(0)', 1, 'skip-to-main-content-link', 3, 'click'],
              [1, 'container', 'header-container'],
              [4, 'ngIf'],
              [3, 'ngTemplateOutlet', 4, 'ngIf'],
              [1, 'header-backdrop'],
              ['iconTemplate', ''],
              ['iconTemplateLink', ''],
              ['iconTemplateDropdown', ''],
              ['iconTemplateAccount', ''],
              ['iconTemplateLogout', ''],
              ['accountButtonMobile', ''],
              ['sections', ''],
              ['sectionsExtended', ''],
              ['loginButton', ''],
              ['searchBar', ''],
              ['accountButtonDesktop', ''],
              ['menuButton', ''],
              ['class', 'navbar-brand', 3, 'routerLink', 4, 'ngIf'],
              [4, 'ngTemplateOutlet', 'ngTemplateOutletContext'],
              [3, 'ngTemplateOutlet'],
              [1, 'collapse', 'navbar-collapse', 3, 'id'],
              ['navbarContent', ''],
              [1, 'navbar-content'],
              [1, 'navbar-brand', 3, 'routerLink'],
              [3, 'ngClass', 'src', 'alt', 'width', 'height'],
              [3, 'class', 4, 'ngIf'],
              ['class', 'material-icons-round', 4, 'ngIf'],
              [1, 'material-icons-round'],
              ['class', 'material-icons-round btn-dropdown-icon', 4, 'ngIf'],
              [1, 'material-icons-round', 'btn-dropdown-icon'],
              ['class', 'navbar-user-mobile', 4, 'ngIf'],
              [1, 'navbar-user-mobile'],
              [1, 'navbar-user-mobile-title'],
              [1, 'nav', 'flex-column', 'nav-pills', 'nav-user'],
              [4, 'ngFor', 'ngForOf'],
              [1, 'nav-item'],
              ['class', 'nav-link nav-link-lg', 3, 'routerLink', 'click', 4, 'ngIf'],
              ['class', 'nav-item', 4, 'ngIf'],
              [1, 'nav-link', 'nav-link-lg', 3, 'routerLink', 'click'],
              ['class', 'item-notifications', 4, 'ngIf'],
              [1, 'item-notifications'],
              [1, 'nav-link', 'nav-link-danger', 'nav-link-lg', 3, 'routerLink', 'click'],
              [1, 'nav-icon'],
              ['class', 'navbar-sections', 4, 'ngIf'],
              [1, 'navbar-sections'],
              [1, 'navbar-sections-title'],
              [1, 'nav', 'nav-pills', 'nav-sections'],
              ['class', 'dropdown', 4, 'ngIf'],
              [1, 'dropdown'],
              [
                'type',
                'button',
                'data-toggle',
                'dropdown',
                'aria-haspopup',
                'true',
                'aria-expanded',
                'false',
                1,
                'btn',
                'btn-dropdown',
                'btn-dropdown-lg',
                'dropdown-toggle'
              ],
              [3, 'ngTemplateOutlet', 'ngTemplateOutletContext'],
              [1, 'btn-dropdown-text'],
              [1, 'dropdown-menu'],
              ['class', 'dropdown-item', 3, 'routerLink', 4, 'ngIf'],
              ['class', 'dropdown-item item-link', 3, 'routerLink', 4, 'ngIf'],
              ['class', 'dropdown-item', 'target', '_blank', 3, 'href', 4, 'ngIf'],
              ['class', 'dropdown-item item-link', 'target', '_blank', 3, 'href', 4, 'ngIf'],
              [1, 'dropdown-item', 3, 'routerLink'],
              [1, 'item-text'],
              [1, 'dropdown-item', 'item-link', 3, 'routerLink'],
              ['target', '_blank', 1, 'dropdown-item', 3, 'href'],
              ['target', '_blank', 1, 'dropdown-item', 'item-link', 3, 'href'],
              ['class', 'nav-link nav-link-lg', 3, 'href', 'click', 4, 'ngIf'],
              [1, 'nav-link', 'nav-link-lg', 3, 'href', 'click'],
              ['class', 'navbar-content-extended', 4, 'ngIf'],
              [1, 'navbar-content-extended'],
              ['target', '_blank', 1, 'btn', 'btn-lg', 'btn-icon', 'btn-outline-link', 3, 'routerLink'],
              [1, 'btn-text'],
              ['class', 'navbar-search', 4, 'ngIf'],
              [1, 'navbar-search'],
              [1, 'form-search'],
              [1, 'form-group'],
              ['for', 'search-input', 1, 'sr-only'],
              [
                'type',
                'search',
                'id',
                'search-input',
                'name',
                'name',
                'aria-label',
                'Ingrese su b\xfasqueda',
                1,
                'form-control',
                'input-search',
                3,
                'placeholder',
                'ngModel',
                'ngModelChange',
                'input',
                'keydown.enter',
                'keydown.ArrowUp',
                'keydown.ArrowDown'
              ],
              ['type', 'reset', 'aria-label', 'Borrar', 1, 'reset', 3, 'click'],
              ['type', 'submit', 'aria-label', 'Buscar', 1, 'submit-search', 3, 'click', 'keydown.enter'],
              [1, 'search-results', 3, 'mouseenter', 'mouseleave'],
              ['class', 'no-results', 4, 'ngIf'],
              ['class', 'search-item', 3, 'selected-search-item', 'first-search-item', 'click', 4, 'ngFor', 'ngForOf'],
              [1, 'search-item', 3, 'click'],
              [1, 'no-results'],
              ['class', 'navbar-user', 4, 'ngIf'],
              [1, 'navbar-user'],
              [
                'type',
                'button',
                'data-toggle',
                'dropdown',
                'aria-haspopup',
                'true',
                'aria-expanded',
                'false',
                1,
                'btn',
                'btn-dropdown',
                'btn-dropdown-lg',
                'btn-dropdown-border',
                'dropdown-toggle'
              ],
              [1, 'dropdown-menu', 'dropdown-menu-right'],
              ['class', 'dropdown-item item-danger', 3, 'routerLink', 4, 'ngIf'],
              [1, 'dropdown-item', 'item-danger', 3, 'routerLink'],
              [
                'class',
                'navbar-toggler',
                'type',
                'button',
                'data-toggle',
                'collapse',
                'aria-label',
                'Men\xfa',
                3,
                'click',
                4,
                'ngIf'
              ],
              ['type', 'button', 'data-toggle', 'collapse', 'aria-label', 'Men\xfa', 1, 'navbar-toggler', 3, 'click']
            ],
            template: function (I, Me) {
              1 & I &&
                (i.F$t(),
                i.TgZ(0, 'header', 0)(1, 'a', 1),
                i.NdJ('click', function () {
                  return Me.scrollToContent();
                }),
                i._uU(2, ' Ir al contenido principal '),
                i.qZA(),
                i.TgZ(3, 'div', 2),
                i.YNc(4, le, 13, 11, 'ng-container', 3),
                i.YNc(5, ge, 2, 1, 'ng-container', 4),
                i.qZA(),
                i._UZ(6, 'div', 5),
                i.qZA(),
                i.YNc(7, ce, 2, 2, 'ng-template', null, 6, i.W1O),
                i.YNc(9, K, 3, 3, 'ng-template', null, 7, i.W1O),
                i.YNc(11, te, 3, 3, 'ng-template', null, 8, i.W1O),
                i.YNc(13, re, 3, 3, 'ng-template', null, 9, i.W1O),
                i.YNc(15, X, 3, 3, 'ng-template', null, 10, i.W1O),
                i.YNc(17, ee, 1, 1, 'ng-template', null, 11, i.W1O),
                i.YNc(19, Jt, 1, 1, 'ng-template', null, 12, i.W1O),
                i.YNc(21, St, 1, 1, 'ng-template', null, 13, i.W1O),
                i.YNc(23, en, 1, 1, 'ng-template', null, 14, i.W1O),
                i.YNc(25, Tn, 1, 1, 'ng-template', null, 15, i.W1O),
                i.YNc(27, tr, 1, 1, 'ng-template', null, 16, i.W1O),
                i.YNc(29, En, 1, 1, 'ng-template', null, 17, i.W1O)),
                2 & I &&
                  (i.Q6J('ngClass', Me.customClasses),
                  i.xp6(4),
                  i.Q6J('ngIf', !Me.oCustomContent),
                  i.xp6(1),
                  i.Q6J('ngIf', Me.oCustomContent));
            },
            dependencies: [Z.mk, Z.sg, Z.O5, Z.tP, L.yS, P._Y, P.Fj, P.JJ, P.JL, P.On, P.F],
            styles: [
              '.navbar-search[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:0px}.navbar-search[_ngcontent-%COMP%]   .input-search[_ngcontent-%COMP%]{text-transform:capitalize}.navbar-search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]{z-index:999;margin-top:52px;margin-left:6px;max-width:20.5rem;width:20.5rem;position:absolute;background-color:#f3f6f9;border-bottom-left-radius:8px;border-bottom-right-radius:8px}.navbar-search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-item[_ngcontent-%COMP%]{padding:.5rem 1rem}.navbar-search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-item[_ngcontent-%COMP%]:hover{cursor:pointer;color:#007bc7}.navbar-search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%]{padding:.5rem 1rem}.navbar-search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .first-search-item[_ngcontent-%COMP%], .navbar-search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .selected-search-item[_ngcontent-%COMP%]{color:#007bc7}@media (max-width: 975px){.navbar-search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]{width:94%;max-width:94%;margin-left:0;left:50%;transform:translate(-50%)}}@media (max-width: 615px){.navbar-search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]{width:90%;max-width:90%}}@media (max-width: 425px){.navbar-search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]{width:86%;max-width:86%}}'
            ]
          })),
          k
        );
      })();
    },
    6831: (Ge, he, w) => {
      'use strict';
      w.d(he, { n: () => P });
      var a = w(9808),
        i = w(2526),
        L = w(2382),
        Z = w(4893);
      let P = (() => {
        class se {}
        return (
          (se.ɵfac = function (xe) {
            return new (xe || se)();
          }),
          (se.ɵmod = Z.oAB({ type: se })),
          (se.ɵinj = Z.cJS({ imports: [a.ez, i.Bz, L.u5] })),
          se
        );
      })();
    },
    5570: (Ge, he, w) => {
      'use strict';
      w.d(he, { HB: () => L, L0: () => Z, k: () => i, zH: () => a, zf: () => P });
      var a = (() => {
        return (
          ((Y = a || (a = {})).access = 'Accesos'),
          (Y.accessSimple = 'Accesos'),
          (Y.accessList = 'Lista de accesos'),
          (Y.alert = 'Alerta'),
          (Y.breadcrumb = 'Miga de pan'),
          (Y.card = 'Tarjetas'),
          (Y.footer = 'Footer'),
          (Y.progressBar = 'Barra de progreso'),
          (Y.collapse = 'Colapsable'),
          (Y.map = 'Mapa'),
          (Y.modal = 'Modal'),
          (Y.pagination = 'Paginaci\xf3n'),
          (Y.table = 'Tabla'),
          (Y.navigation = 'Navegaci\xf3n horizontal'),
          (Y.navigationHorizontal = 'Navegaci\xf3n horizontal'),
          (Y.navigationVertical = 'Navegaci\xf3n vertical'),
          (Y.tabs = 'Pesta\xf1as'),
          (Y.gallery = 'Galer\xeda'),
          (Y.panel = 'Panel'),
          (Y.panelSmall = 'Panel Chico'),
          (Y.stepsForm = 'Pasos de un formulario'),
          (Y.dropdown = 'Desplegables de navegaci\xf3n'),
          (Y.dropdownNavigation = 'Desplegables de navegaci\xf3n'),
          (Y.dropdownSelection = 'Desplegables de selecci\xf3n'),
          (Y.statusMessage = 'Mensaje de estado'),
          (Y.spinner = 'Spinner'),
          (Y.tooltip = 'Tooltip'),
          (Y.navbar = 'Header'),
          (Y.switch = 'Switch'),
          (Y.list = 'Lista de pasos'),
          (Y.listStep = 'Lista de pasos'),
          (Y.banner = 'Banner'),
          (Y.button = 'Bot\xf3n'),
          (Y.highlighted = 'Destacado'),
          (Y.block = 'Bloque de tr\xe1mite'),
          (Y.search = 'Buscador'),
          (Y.customContent = 'Contenido personalizable'),
          (Y.defaultImage = 'Imagen por defecto'),
          (Y.badge = 'Etiqueta'),
          (Y.calendar = 'Calendario'),
          a
        );
        var Y;
      })();
      const i = [
          {
            title: 'Accesos',
            image: { src: 'assets/component-cards/Accesos.svg' },
            route: '/components/access',
            children: [
              { title: 'Simple', route: '/components/access/access-simple' },
              { title: 'Lista de accesos', route: '/components/access/access-list' }
            ]
          },
          { title: 'Alerta', image: { src: 'assets/component-cards/Alerta.svg' }, route: '/components/alert' },
          {
            title: 'Miga de pan',
            image: { src: 'assets/component-cards/MigasDePan.svg' },
            route: '/components/breadcrumb'
          },
          { title: 'Tarjetas', image: { src: 'assets/component-cards/Tarjetas.svg' }, route: '/components/card' },
          { title: 'Footer', image: { src: 'assets/component-cards/Footer.svg' }, route: '/components/footer' },
          { title: 'Banner', image: { src: 'assets/component-cards/banner.jpg' }, route: '/components/banner' },
          {
            title: 'Barra de progreso',
            image: { src: 'assets/component-cards/BarraDeProgreso.svg' },
            route: '/components/progress-bar'
          },
          { title: 'Bot\xf3n', image: { src: 'assets/component-cards/boton.jpg' }, route: '/components/button' },
          {
            title: 'Colapsable',
            image: { src: 'assets/component-cards/Colapsables.svg' },
            route: '/components/collapse'
          },
          { title: 'Mapa', image: { src: 'assets/component-cards/mapa.jpg' }, route: '/components/map' },
          { title: 'Modal', image: { src: 'assets/component-cards/Modal.svg' }, route: '/components/modal' },
          {
            title: 'Paginaci\xf3n',
            image: { src: 'assets/component-cards/Paginado.svg' },
            route: '/components/pagination'
          },
          { title: 'Tabla', image: { src: 'assets/component-cards/Tabla.svg' }, route: '/components/table' },
          { title: 'Galer\xeda', image: { src: 'assets/component-cards/Galeria.svg' }, route: '/components/gallery' },
          {
            title: 'Navegaci\xf3n',
            route: '/components/navigation',
            image: { src: 'assets/component-cards/Navegacion.svg' },
            children: [
              { title: 'Horizontal', route: '/components/navigation/navigation-horizontal' },
              { title: 'Vertical', route: '/components/navigation/navigation-vertical' },
              { title: 'Pesta\xf1as', route: '/components/navigation/tabs' }
            ]
          },
          { title: 'Panel', image: { src: 'assets/component-cards/' }, route: '/components/panel' },
          {
            title: 'Pasos de un formulario',
            image: { src: 'assets/component-cards/PasosDeUnFormulario.svg' },
            route: '/components/steps-form'
          },
          {
            title: 'Desplegables',
            image: { src: 'assets/component-cards/Desplegable.svg' },
            route: '/components/dropdown',
            children: [
              { title: 'De navegaci\xf3n', route: '/components/dropdown/dropdown-navigation' },
              { title: 'De selecci\xf3n', route: '/components/dropdown/dropdown-selection' }
            ]
          },
          {
            title: 'Mensaje de estado',
            image: { src: 'assets/component-cards/MensajeDeEstado.svg' },
            route: '/components/status-message'
          },
          { title: 'Spinner', image: { src: 'assets/component-cards/Spinner.svg' }, route: '/components/spinner' },
          { title: 'Tooltip', image: { src: 'assets/component-cards/Tooltip.svg' }, route: '/components/tooltip' },
          { title: 'Header', image: { src: 'assets/component-cards/header.jpg' }, route: '/components/navbar' },
          { title: 'Switch', image: { src: 'assets/component-cards/Switch.svg' }, route: '/components/switch' },
          {
            title: 'Listas',
            image: { src: 'assets/component-cards/BarraDeEstado.svg' },
            route: '/components/list',
            children: [{ title: 'De pasos', route: '/components/list/step-list' }]
          },
          { title: 'Destacado', image: { src: 'assets/component-cards/Panel.svg' }, route: '/components/highlighted' },
          {
            title: 'Bloque de tr\xe1mite',
            image: { src: 'assets/component-cards/bloque.jpg' },
            route: '/components/block'
          },
          { title: 'Buscador', image: { src: 'assets/component-cards/buscador.jpg' }, route: '/components/search' },
          { title: 'Calendario', image: { src: 'assets/component-cards/Calendar.svg' }, route: '/components/calendar' },
          { title: 'Etiqueta', image: { src: 'assets/component-cards/' }, route: '/components/badge' }
        ],
        L = [
          {
            title: 'Contenido personalizable',
            image: { src: 'assets/component-cards/' },
            route: '/components/custom-content'
          },
          { title: 'Imagen por defecto', image: { src: 'assets/component-cards/' }, route: '/components/default-image' }
        ],
        Z = [
          { key: 'name', value: 'Nombre' },
          { key: 'description', value: 'Descripci\xf3n' }
        ],
        P = '\n  type Sizes = "sm" | "md" | "lg";\n';
      i.sort(function (Y, xe) {
        return Y.title.localeCompare(xe.title);
      });
    },
    2171: (Ge, he, w) => {
      'use strict';
      w.d(he, { y: () => i });
      var a = w(4893);
      let i = (() => {
        class L {
          constructor(P, se) {
            (this.host = P), (this.renderer = se);
          }
          ngAfterViewInit() {
            if (navigator.clipboard) {
              const P = this.host.nativeElement.closest('pre').querySelector('button');
              this.renderer.listen(P, 'click', this.clipboard);
            }
          }
          clipboard(P) {
            const se = P.target,
              Y = null == se ? void 0 : se.parentElement,
              xe = null == Y ? void 0 : Y.querySelector('code');
            navigator.clipboard.writeText(null == xe ? void 0 : xe.innerText),
              (se.innerText = 'Copiado!'),
              setTimeout(() => {
                se.innerText = 'Copiar';
              }, 1e3);
          }
        }
        return (
          (L.ɵfac = function (P) {
            return new (P || L)(a.Y36(a.SBq), a.Y36(a.Qsj));
          }),
          (L.ɵdir = a.lG2({ type: L, selectors: [['', 'appClipboard', '']], standalone: !0 })),
          L
        );
      })();
    },
    6434: (Ge, he, w) => {
      'use strict';
      w.d(he, { y: () => Z });
      var a = w(5083),
        L = w(4893);
      let Z = (() => {
        class P {
          constructor(Y, xe) {
            (this.host = Y), (this.renderer = xe), (this.language = 'javascript');
          }
          ngAfterViewInit() {
            const ve = (0, a.highlight)(
              this.code || this.host.nativeElement.innerText,
              a.languages[this.language],
              this.language
            );
            this.renderer.setProperty(this.host.nativeElement, 'innerHTML', ve);
          }
        }
        return (
          (P.ɵfac = function (Y) {
            return new (Y || P)(L.Y36(L.SBq), L.Y36(L.Qsj));
          }),
          (P.ɵdir = L.lG2({
            type: P,
            selectors: [['', 'appPrism', '']],
            inputs: { code: 'code', language: 'language' },
            standalone: !0
          })),
          P
        );
      })();
    },
    7985: (Ge, he, w) => {
      'use strict';
      var a = w(2313),
        i = w(4893),
        L = w(9808),
        Z = w(2526),
        P = w(6434),
        se = w(2171),
        Y = w(7259);
      const xe = function (j) {
        return { 'current-section': j };
      };
      let ve = (() => {
        class j {
          constructor() {
            (this.ngxObelisco = '\n  npm install ngx-obelisco-example\n  '),
              (this.boxicons = '\n  npm install boxicons\n  '),
              (this.materialIcons = '\n  npm install material-icons@latest\n  '),
              (this.boxiconsCDN =
                '\n  <link\n    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"\n    rel="stylesheet"\n  />\n  '),
              (this.materialIconsCDN =
                '\n  <link\n    href="https://fonts.googleapis.com/icon?\n      family=Material+Icons+Round"\n    rel="stylesheet"\n  />\n  '),
              (this.typography =
                '\n  <link\n    href="https://fonts.googleapis.com/css2?\n      family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"\n    rel="stylesheet"\n  />\n\n  <link\n    href="https://fonts.googleapis.com/css2?\n      family=Nunito:wght@300;400;600;700&display=swap"\n    rel="stylesheet"\n  />\n  '),
              (this.js =
                '\n  <script\n    src="https://cdn.jsdelivr.net/npm/jquery@3.5.1\n          /dist/jquery.slim.min.js"\n    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/\n          zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"\n    crossorigin="anonymous"\n  ><script/>\n\n  <script\n    src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2\n          /dist/js/bootstrap.bundle.min.js"\n    integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/\n          2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"\n    crossorigin="anonymous"\n  ><script/>\n  '),
              (this.iconImport =
                '\n  "styles": [\n    "src/styles.scss",\n    "node_modules/boxicons/css/boxicons.min.css"\n  ],'),
              (this.stylesImport =
                '\n  "styles": [\n    "src/styles.scss",\n    "node_modules/ngx-obelisco-example/scss/obelisco.scss"\n  ]'),
              (this.currentSection = 'section1');
          }
          onScroll(X) {
            const ne = window.scrollY;
            document.querySelectorAll('.section-intro').forEach((Ce) => {
              Ce.offsetTop <= ne && Ce.offsetTop + Ce.offsetHeight > ne && (this.currentSection = Ce.id);
            });
          }
          scrollTo(X) {
            var ne;
            null === (ne = document.querySelector('#' + X)) ||
              void 0 === ne ||
              ne.scrollIntoView({ behavior: 'smooth', block: 'start' }),
              (this.currentSection = X);
          }
        }
        return (
          (j.ɵfac = function (X) {
            return new (X || j)();
          }),
          (j.ɵcmp = i.Xpm({
            type: j,
            selectors: [['app-get-started']],
            hostBindings: function (X, ne) {
              1 & X &&
                i.NdJ(
                  'scroll',
                  function (Ce) {
                    return ne.onScroll(Ce);
                  },
                  !1,
                  i.Jf7
                );
            },
            decls: 218,
            vars: 30,
            consts: [
              [1, 'container', 'py-5'],
              [1, 'row', 'flex-row-reverse'],
              [1, 'col-12', 'col-lg-4', 'position-relative'],
              [1, 'intro-menu', 'd-none', 'd-lg-block'],
              [1, 'intro-menu__title'],
              [1, 'navegaci\xf3n-indice'],
              [1, 'section-item', 3, 'ngClass', 'click'],
              [1, 'col-lg-8', 'col-12'],
              [1, 'lead', 'mb-0'],
              ['id', 'section1', 1, 'mb-3', 'pt-5', 'section-intro'],
              [1, 'h3'],
              [1, 'card-deck', 'max-cards-1', 'mt-4'],
              [
                'title',
                'Storybook',
                'description',
                'Herramienta donde est\xe1 disponibilizada la construcci\xf3n HTML y clases utilizadas de los componentes de Obelisco.',
                'link',
                'https://gcba.github.io/Obelisco/',
                'icon',
                'bx bx-code-alt',
                3,
                'isHorizontal',
                'isBordered'
              ],
              [
                'title',
                'Sistema y est\xe1ndares',
                'description',
                'Caracter\xedsticas que deben cumplir los desarrollos digitales para el Gobierno de la Ciudad de Buenos Aires impulsados por la Agencia de Sistemas de Informaci\xf3n.',
                'link',
                'https://gcba.github.io/estandares/componentes/acceso/',
                'icon',
                'bx bx-notepad',
                3,
                'isHorizontal',
                'isBordered'
              ],
              ['id', 'section2', 1, 'mb-3', 'pt-5', 'section-intro'],
              ['href', 'https://www.npmjs.com/package/ngx-obelisco-example', 'target', '_blank', 'rel', 'noreferrer'],
              ['appClipboard', '', 'component-html', '', 1, 'code'],
              [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
              ['appPrism', '', 'language', 'html'],
              [1, 'mx-0', 'mb-0'],
              [
                'href',
                'https://asijira-confluence.buenosaires.gob.ar/display/ASI/Versiones++y+Herramientas+aceptadas+por+la+ASI',
                'target',
                '_blank',
                'rel',
                'noreferrer'
              ],
              ['id', 'section3', 1, 'mb-3', 'pt-5', 'section-intro'],
              [1, 'mt-4'],
              ['appPrism', ''],
              [1, 'mt-5'],
              ['id', 'section4', 1, 'mb-3', 'pt-5', 'section-intro'],
              ['id', 'section5', 1, 'mb-3', 'pt-5', 'section-intro'],
              [
                'href',
                'https://getbootstrap.com/docs/4.6/getting-started/introduction/#js',
                'target',
                '_blank',
                'rel',
                'noreferrer'
              ],
              ['id', 'section6', 1, 'mb-3', 'pt-5', 'section-intro', 'pb-5', 'mb-5'],
              [1, 'mb-3'],
              [1, 'font-weight-semibold'],
              [
                'href',
                'https://github.com/gcba/ngx-obelisco/blob/main/CONTRIBUTING.md',
                'target',
                '_blank',
                'rel',
                'noreferrer'
              ]
            ],
            template: function (X, ne) {
              1 & X &&
                (i.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'div', 2)(3, 'div', 3)(4, 'strong', 4),
                i._uU(5, 'En esta p\xe1gina'),
                i.qZA(),
                i._UZ(6, 'hr'),
                i.TgZ(7, 'nav', 5)(8, 'button', 6),
                i.NdJ('click', function () {
                  return ne.scrollTo('section1');
                }),
                i._uU(9, ' Sistema de Dise\xf1o Obelisco '),
                i.qZA(),
                i.TgZ(10, 'button', 6),
                i.NdJ('click', function () {
                  return ne.scrollTo('section2');
                }),
                i._uU(11, ' Uso '),
                i.qZA(),
                i.TgZ(12, 'button', 6),
                i.NdJ('click', function () {
                  return ne.scrollTo('section3');
                }),
                i._uU(13, ' Iconograf\xeda '),
                i.qZA(),
                i.TgZ(14, 'button', 6),
                i.NdJ('click', function () {
                  return ne.scrollTo('section4');
                }),
                i._uU(15, ' Tipograf\xeda '),
                i.qZA(),
                i.TgZ(16, 'button', 6),
                i.NdJ('click', function () {
                  return ne.scrollTo('section5');
                }),
                i._uU(17, ' Javascript '),
                i.qZA(),
                i.TgZ(18, 'button', 6),
                i.NdJ('click', function () {
                  return ne.scrollTo('section6');
                }),
                i._uU(19, ' Mantenimiento y colaboraci\xf3n '),
                i.qZA()()()(),
                i.TgZ(20, 'div', 7)(21, 'section')(22, 'h1'),
                i._uU(23, 'Introducci\xf3n'),
                i.qZA(),
                i._UZ(24, 'br'),
                i.TgZ(25, 'p', 8),
                i._uU(
                  26,
                  ' NgxObelisco es una libreria de Angular basado en el sistema de dise\xf1o Obelisco y en componentes para los productos digitales de la ciudad de Buenos Aires. '
                ),
                i.qZA()(),
                i.TgZ(27, 'section', 9)(28, 'h2', 10),
                i._uU(29, 'Sistema de Dise\xf1o Obelisco'),
                i.qZA(),
                i._UZ(30, 'hr'),
                i.TgZ(31, 'p'),
                i._uU(
                  32,
                  ' Es el sistema de dise\xf1o para productos digitales del Gobierno de la Ciudad de Buenos Aires; una gu\xeda de recursos y herramientas creada para los ciudadanos/as. '
                ),
                i.qZA(),
                i.TgZ(33, 'p'),
                i._uU(
                  34,
                  ' Obelisco busca brindar soluciones de dise\xf1o tanto a \xe1reas internas como externas de Gobierno, poniendo el foco en la accesibilidad y los est\xe1ndares de usabilidad para lograr una experiencia ideal para las personas usuarias. '
                ),
                i.qZA(),
                i.TgZ(35, 'div', 11),
                i._UZ(36, 'o-card', 12)(37, 'o-card', 13),
                i.qZA()(),
                i.TgZ(38, 'section', 14)(39, 'h2'),
                i._uU(40, 'C\xf3mo usar NgxObelisco'),
                i.qZA(),
                i._UZ(41, 'hr'),
                i.TgZ(42, 'p'),
                i._uU(43, ' NgxObelisco se distribuye por medio del '),
                i.TgZ(44, 'a', 15),
                i._uU(45, 'paquete publicado en npm'),
                i.qZA(),
                i._uU(
                  46,
                  '. Es recomendable usar este sistema para definir la versi\xf3n a usar y poder actualizarla f\xe1cilmente. '
                ),
                i.qZA(),
                i.TgZ(47, 'div')(48, 'h3'),
                i._uU(49, 'Instalaci\xf3n'),
                i.qZA(),
                i.TgZ(50, 'p'),
                i._uU(51, 'Para instalarlo en un proyecto que ya usa npm, hay que ejecutar:'),
                i.qZA(),
                i.TgZ(52, 'pre', 16),
                i._uU(53, '            '),
                i.TgZ(54, 'button', 17),
                i._uU(55, 'Copiar'),
                i.qZA(),
                i._uU(56, '\n            '),
                i.TgZ(57, 'code', 18),
                i._uU(58),
                i.qZA(),
                i._uU(59, '\n          '),
                i.qZA()(),
                i._UZ(60, 'br'),
                i.TgZ(61, 'div')(62, 'h3'),
                i._uU(63, 'Requerimientos'),
                i.qZA(),
                i.TgZ(64, 'p')(65, 'strong'),
                i._uU(66, 'Node.js'),
                i.qZA(),
                i._uU(
                  67,
                  ': Se recomienda utilizar la versi\xf3n ^14.15.0 || ^16.10.0 Puedes verificar tu versi\xf3n actual ejecutando `node -v` en tu terminal. '
                ),
                i.qZA(),
                i.TgZ(68, 'p')(69, 'strong'),
                i._uU(70, 'Angular'),
                i.qZA(),
                i._uU(
                  71,
                  ': Este proyecto requiere Angular 14. Aseg\xfarate de tener Angular 14.X.X instalado globalmente o especificado en tu proyecto. '
                ),
                i.qZA()(),
                i.TgZ(72, 'div')(73, 'blockquote', 19)(74, 'p')(75, 'strong'),
                i._uU(76, 'Importante'),
                i.qZA(),
                i._UZ(77, 'br'),
                i._uU(78, ' Revis\xe1 las '),
                i.TgZ(79, 'a', 20),
                i._uU(80, 'versiones y herramientas aceptadas'),
                i.qZA(),
                i._uU(81, ' por la '),
                i.TgZ(82, 'strong'),
                i._uU(83, 'Agencia de Seguridad Inform\xe1tica (ASI)'),
                i.qZA(),
                i._uU(84, ' del Gobierno de la Ciudad antes de elegir una versi\xf3n de estas dependencias. '),
                i.qZA()()()(),
                i.TgZ(85, 'section', 21)(86, 'h2'),
                i._uU(87, 'Iconograf\xeda'),
                i.qZA(),
                i._UZ(88, 'hr'),
                i.TgZ(89, 'div', 22)(90, 'h3'),
                i._uU(91, 'Boxicons'),
                i.qZA(),
                i.TgZ(92, 'p'),
                i._uU(93, ' Obelisco utiliza la librer\xeda de '),
                i.TgZ(94, 'strong'),
                i._uU(95, 'Boxicons'),
                i.qZA(),
                i._uU(96, ' que se puede instalar de las siguientes maneras: '),
                i.qZA(),
                i.TgZ(97, 'p'),
                i._uU(98, 'Utilizando el paquete npm:'),
                i.qZA(),
                i.TgZ(99, 'pre', 16),
                i._uU(100, '            '),
                i.TgZ(101, 'button', 17),
                i._uU(102, 'Copiar'),
                i.qZA(),
                i._uU(103, '\n            '),
                i.TgZ(104, 'code', 18),
                i._uU(105),
                i.qZA(),
                i._uU(106, '\n          '),
                i.qZA(),
                i.TgZ(107, 'p'),
                i._uU(108, 'Importando en el archivo angular.json de la siguiente manera:'),
                i.qZA(),
                i.TgZ(109, 'pre', 16),
                i._uU(110, '            '),
                i.TgZ(111, 'button', 17),
                i._uU(112, 'Copiar'),
                i.qZA(),
                i._uU(113, '\n            '),
                i.TgZ(114, 'code', 23),
                i._uU(115),
                i.qZA(),
                i._uU(116, '\n          '),
                i.qZA(),
                i.TgZ(117, 'p'),
                i._uU(118, 'Para utilizarlas con su CDN podemos hacerlo de la siguiente forma:'),
                i.qZA(),
                i.TgZ(119, 'pre', 16),
                i._uU(120, '            '),
                i.TgZ(121, 'button', 17),
                i._uU(122, 'Copiar'),
                i.qZA(),
                i._uU(123, '\n            '),
                i.TgZ(124, 'code', 18),
                i._uU(125),
                i.qZA(),
                i._uU(126, '\n          '),
                i.qZA()(),
                i.TgZ(127, 'div', 24)(128, 'h3'),
                i._uU(129, 'Material Icons Rounded'),
                i.qZA(),
                i.TgZ(130, 'p'),
                i._uU(131, ' Obelisco utiliza la librer\xeda de '),
                i.TgZ(132, 'strong'),
                i._uU(133, 'Material Icons Rounded'),
                i.qZA(),
                i._uU(134, ' que se puede instalar de las siguientes maneras: '),
                i.qZA(),
                i.TgZ(135, 'p'),
                i._uU(136, 'Utilizando el paquete npm:'),
                i.qZA(),
                i.TgZ(137, 'pre', 16),
                i._uU(138, '            '),
                i.TgZ(139, 'button', 17),
                i._uU(140, 'Copiar'),
                i.qZA(),
                i._uU(141, '\n            '),
                i.TgZ(142, 'code', 18),
                i._uU(143),
                i.qZA(),
                i._uU(144, '\n          '),
                i.qZA(),
                i.TgZ(145, 'p'),
                i._uU(146, 'Para utilizarlas con su CDN podemos hacerlo de la siguiente forma:'),
                i.qZA(),
                i.TgZ(147, 'pre', 16),
                i._uU(148, '            '),
                i.TgZ(149, 'button', 17),
                i._uU(150, 'Copiar'),
                i.qZA(),
                i._uU(151, '\n            '),
                i.TgZ(152, 'code', 18),
                i._uU(153),
                i.qZA(),
                i._uU(154, '\n          '),
                i.qZA()()(),
                i.TgZ(155, 'section', 25)(156, 'h2'),
                i._uU(157, 'Tipograf\xeda'),
                i.qZA(),
                i._UZ(158, 'hr'),
                i.TgZ(159, 'p'),
                i._uU(160, ' Obelisco requiere las tipograf\xedas '),
                i.TgZ(161, 'strong'),
                i._uU(162, 'Nunito'),
                i.qZA(),
                i._uU(163, ' y '),
                i.TgZ(164, 'strong'),
                i._uU(165, 'Open sans'),
                i.qZA(),
                i._uU(
                  166,
                  ' disponibles en google fonts, para utilizarlas con su CDN podemos hacerlo de la siguiente forma: '
                ),
                i.qZA(),
                i.TgZ(167, 'pre', 16),
                i._uU(168, '          '),
                i.TgZ(169, 'button', 17),
                i._uU(170, 'Copiar'),
                i.qZA(),
                i._uU(171, '\n          '),
                i.TgZ(172, 'code', 18),
                i._uU(173),
                i.qZA(),
                i._uU(174, '\n        '),
                i.qZA()(),
                i.TgZ(175, 'section', 26)(176, 'h2'),
                i._uU(177, 'Javascript'),
                i.qZA(),
                i._UZ(178, 'hr'),
                i.TgZ(179, 'p'),
                i._uU(180, ' Como NgxObelisco est\xe1 construido sobre Obelisco y Bootstrap 4, '),
                i.TgZ(181, 'a', 27),
                i._uU(182, 'debemos tener esas dependencias'),
                i.qZA(),
                i._uU(183, '. '),
                i.qZA(),
                i.TgZ(184, 'pre', 16),
                i._uU(185, '          '),
                i.TgZ(186, 'button', 17),
                i._uU(187, 'Copiar'),
                i.qZA(),
                i._uU(188, '\n          '),
                i.TgZ(189, 'code', 18),
                i._uU(190),
                i.qZA(),
                i._uU(191, '\n        '),
                i.qZA()(),
                i.TgZ(192, 'section', 28)(193, 'h2'),
                i._uU(194, 'Mantenimiento y colaboraci\xf3n'),
                i.qZA(),
                i._UZ(195, 'hr'),
                i.TgZ(196, 'p'),
                i._uU(
                  197,
                  ' El mantenimiento y desarrollo de Obelisco lo hace el equipo de la Direcci\xf3n General de Canales Digitales, pero lo utilizan tanto equipos de gobierno como proveedores externos. '
                ),
                i.qZA(),
                i.TgZ(198, 'p'),
                i._uU(
                  199,
                  ' Para agilizar y hacer m\xe1s transparente el proceso, cualquier persona puede contribuir con alguna de estas acciones: '
                ),
                i.qZA(),
                i.TgZ(200, 'ol')(201, 'li', 29)(202, 'span', 30),
                i._uU(203, 'Pedir un caso de uso nuevo:'),
                i.qZA(),
                i._uU(
                  204,
                  ' Si est\xe1s trabajando con NgxObelisco y ten\xe9s un caso de uso que no est\xe1 contemplado, o ninguno de los componentes que existen se adapta bien a la necesidad. '
                ),
                i.qZA(),
                i.TgZ(205, 'li', 29)(206, 'span', 30),
                i._uU(207, 'Reportar un error o mejora t\xe9cnica: '),
                i.qZA(),
                i._uU(
                  208,
                  ' Si encontr\xe1s un error en alguno de los componentes o alguna mejora que impacte en la usabilidad, accesibilidad o rendimiento. '
                ),
                i.qZA(),
                i.TgZ(209, 'li', 29)(210, 'span', 30),
                i._uU(211, 'Aportar con c\xf3digo: '),
                i.qZA(),
                i._uU(
                  212,
                  ' Si pediste un caso nuevo o reportaste un error y quer\xe9s colaborar con el c\xf3digo, explic\xe1 en el issue que vas a estar trabajando en eso. '
                ),
                i.qZA()(),
                i.TgZ(213, 'p'),
                i._uU(214, ' Para m\xe1s detalles, consult\xe1 nuestra gu\xeda '),
                i.TgZ(215, 'a', 31),
                i._uU(216, 'Contribuir con NgxObelisco'),
                i.qZA(),
                i._uU(217, '. '),
                i.qZA()()()()()),
                2 & X &&
                  (i.xp6(8),
                  i.Q6J('ngClass', i.VKq(18, xe, 'section1' === ne.currentSection)),
                  i.xp6(2),
                  i.Q6J('ngClass', i.VKq(20, xe, 'section2' === ne.currentSection)),
                  i.xp6(2),
                  i.Q6J('ngClass', i.VKq(22, xe, 'section3' === ne.currentSection)),
                  i.xp6(2),
                  i.Q6J('ngClass', i.VKq(24, xe, 'section4' === ne.currentSection)),
                  i.xp6(2),
                  i.Q6J('ngClass', i.VKq(26, xe, 'section5' === ne.currentSection)),
                  i.xp6(2),
                  i.Q6J('ngClass', i.VKq(28, xe, 'section6' === ne.currentSection)),
                  i.xp6(18),
                  i.Q6J('isHorizontal', !0)('isBordered', !0),
                  i.xp6(1),
                  i.Q6J('isHorizontal', !0)('isBordered', !0),
                  i.xp6(21),
                  i.Oqu(ne.ngxObelisco),
                  i.xp6(47),
                  i.Oqu(ne.boxicons),
                  i.xp6(10),
                  i.Oqu(ne.iconImport),
                  i.xp6(10),
                  i.Oqu(ne.boxiconsCDN),
                  i.xp6(18),
                  i.Oqu(ne.materialIcons),
                  i.xp6(10),
                  i.Oqu(ne.materialIconsCDN),
                  i.xp6(20),
                  i.Oqu(ne.typography),
                  i.xp6(17),
                  i.Oqu(ne.js));
            },
            dependencies: [L.mk, P.y, se.y, Y.j],
            styles: [
              '[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px;height:6px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{border-radius:10px;background:rgba(0,0,0,.1)}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:10px;background:rgba(0,0,0,.2)}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:rgba(150,150,150,.9)}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active{background:rgba(150,150,150,.9)}.intro-menu[_ngcontent-%COMP%]{position:sticky;top:16px;left:0;padding:1rem;border-radius:.5rem;width:100%;font-size:14px;color:#505e70}.intro-menu[_ngcontent-%COMP%]   .intro-menu__title[_ngcontent-%COMP%]{font-family:Nunito,sans-serif;font-size:1rem}.intro-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#505e70;display:block;margin:.5rem 0;width:100%;text-align:left;border:none;background-color:transparent}.intro-menu[_ngcontent-%COMP%]   button.current-section[_ngcontent-%COMP%]{font-weight:700;border-left:2px solid black;padding-left:10px}.font-weight-semibold[_ngcontent-%COMP%]{font-weight:600}'
            ]
          })),
          j
        );
      })();
      var ae = w(7579),
        le = w(2722),
        ge = w(9300),
        Ne = w(5570),
        de = w(851);
      const ce = ['componentTitle'],
        R = ['childComponent'];
      function B(j, Fe) {
        1 & j && (i.ynx(0), i.TgZ(1, 'div', 8, 9), i._UZ(3, 'router-outlet'), i.qZA(), i.BQk());
      }
      const ie = function () {
        return {};
      };
      function K(j, Fe) {
        if ((1 & j && i._UZ(0, 'o-card', 13), 2 & j)) {
          const X = Fe.$implicit;
          i.Q6J('title', X.title)('route', X.route)('image', X.image || i.DdM(4, ie))('isBordered', !0);
        }
      }
      function be(j, Fe) {
        if ((1 & j && (i.TgZ(0, 'div', 10)(1, 'div', 11), i.YNc(2, K, 1, 5, 'o-card', 12), i.qZA()()), 2 & j)) {
          const X = i.oxw();
          i.xp6(2), i.Q6J('ngForOf', X.componentsNavigation);
        }
      }
      const J = [
        {
          path: '',
          loadChildren: () =>
            Promise.all([w.e(5612), w.e(3124), w.e(3992)])
              .then(w.bind(w, 3992))
              .then((j) => j.HomeModule)
        },
        {
          path: 'get-started',
          component: ve,
          loadChildren: () =>
            Promise.all([w.e(8592), w.e(7037)])
              .then(w.bind(w, 7037))
              .then((j) => j.GetStartedModule)
        },
        {
          path: 'components',
          component: (() => {
            class j {
              constructor(X, ne) {
                (this.router = X),
                  (this.renderer = ne),
                  (this.title = 'Componentes'),
                  (this.componentsNavigation = Ne.k),
                  (this.othersNavigation = Ne.HB),
                  (this.isComponentTemplate = !0),
                  (this.onDestroy$ = new ae.x()),
                  this.router.events
                    .pipe(
                      (0, le.R)(this.onDestroy$),
                      (0, ge.h)((Re) => Re instanceof Z.m2)
                    )
                    .subscribe({
                      next: (Re) => {
                        var Ce;
                        const Ze = Re.url.split('/').splice(1);
                        this.scrollToTop();
                        const G = null === (Ce = Ze[2]) || void 0 === Ce ? void 0 : Ce.split('#')[1];
                        if (G) {
                          const ee = document.querySelector(`#${G}`);
                          ee &&
                            (ee.scrollIntoView({ behavior: 'smooth', block: 'start' }),
                            window.scrollBy(0, ee.getBoundingClientRect().top - 120),
                            history.pushState({}, '', Ze[0] + '/' + Ze[1] + '/' + Ze[2].split('#')[0]));
                        }
                        Ze.forEach((ee) => {
                          var q, fe, De;
                          if ('components' !== ee) {
                            this.isComponentTemplate = !1;
                            const Je = ee.replace(/-([a-z])/g, (et) => et[1].toUpperCase());
                            (this.title = null !== (q = Ne.zH[Je]) && void 0 !== q ? q : this.title),
                              this.componentTitle &&
                                this.renderer.removeClass(
                                  null === (fe = this.componentTitle) || void 0 === fe ? void 0 : fe.nativeElement,
                                  'no-scroll'
                                );
                          } else
                            this.componentTitle &&
                              this.renderer.addClass(
                                null === (De = this.componentTitle) || void 0 === De ? void 0 : De.nativeElement,
                                'no-scroll'
                              ),
                              (this.isComponentTemplate = !0),
                              (this.title = 'Componentes');
                        });
                      }
                    });
              }
              ngAfterViewInit() {
                var X;
                'Componentes' === this.componentTitle.nativeElement.textContent &&
                  this.renderer.addClass(
                    null === (X = this.componentTitle) || void 0 === X ? void 0 : X.nativeElement,
                    'no-scroll'
                  );
              }
              onScroll() {
                var X, ne, Re;
                const Ce = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
                  Ze = null === (X = this.childComponent) || void 0 === X ? void 0 : X.nativeElement,
                  G = null == Ze ? void 0 : Ze.querySelector('o-nav-horizontal');
                G &&
                  (Ce > 40 &&
                    (this.renderer.addClass(
                      null === (ne = this.componentTitle) || void 0 === ne ? void 0 : ne.nativeElement,
                      'scroll'
                    ),
                    this.renderer.addClass(G, 'scroll')),
                  Ce < 12 &&
                    (this.renderer.removeClass(
                      null === (Re = this.componentTitle) || void 0 === Re ? void 0 : Re.nativeElement,
                      'scroll'
                    ),
                    this.renderer.removeClass(G, 'scroll')));
              }
              ngOnDestroy() {
                this.onDestroy$.next(), this.onDestroy$.complete();
              }
              scrollToTop() {
                document.querySelector('.component-description-content').scrollTo({ top: 0, behavior: 'smooth' });
              }
            }
            return (
              (j.ɵfac = function (X) {
                return new (X || j)(i.Y36(Z.F0), i.Y36(i.Qsj));
              }),
              (j.ɵcmp = i.Xpm({
                type: j,
                selectors: [['app-section-components']],
                viewQuery: function (X, ne) {
                  if ((1 & X && (i.Gf(ce, 5), i.Gf(R, 5)), 2 & X)) {
                    let Re;
                    i.iGM((Re = i.CRH())) && (ne.componentTitle = Re.first),
                      i.iGM((Re = i.CRH())) && (ne.childComponent = Re.first);
                  }
                },
                hostBindings: function (X, ne) {
                  1 & X &&
                    i.NdJ(
                      'scroll',
                      function (Ce) {
                        return ne.onScroll(Ce);
                      },
                      !1,
                      i.Jf7
                    );
                },
                decls: 12,
                vars: 5,
                consts: [
                  [1, 'section-components'],
                  [1, 'sidebar'],
                  [3, 'navVertItems'],
                  [1, 'component-description-content'],
                  [1, 'title-component'],
                  ['componentTitle', ''],
                  [4, 'ngIf', 'ngIfElse'],
                  ['componentTemplate', ''],
                  [1, 'component-detail'],
                  ['childComponent', ''],
                  [1, 'container', 'mt-5'],
                  [1, 'card-deck', 'max-cards-3', 'card-column'],
                  [3, 'title', 'route', 'image', 'isBordered', 4, 'ngFor', 'ngForOf'],
                  [3, 'title', 'route', 'image', 'isBordered']
                ],
                template: function (X, ne) {
                  if (
                    (1 & X &&
                      (i.TgZ(0, 'section', 0)(1, 'div', 1),
                      i._UZ(2, 'o-nav-vertical', 2)(3, 'br')(4, 'o-nav-vertical', 2),
                      i.qZA(),
                      i.TgZ(5, 'div', 3)(6, 'h2', 4, 5),
                      i._uU(8),
                      i.qZA(),
                      i.YNc(9, B, 4, 0, 'ng-container', 6),
                      i.YNc(10, be, 3, 1, 'ng-template', null, 7, i.W1O),
                      i.qZA()()),
                    2 & X)
                  ) {
                    const Re = i.MAs(11);
                    i.xp6(2),
                      i.Q6J('navVertItems', ne.componentsNavigation),
                      i.xp6(2),
                      i.Q6J('navVertItems', ne.othersNavigation),
                      i.xp6(4),
                      i.Oqu(ne.title),
                      i.xp6(1),
                      i.Q6J('ngIf', !ne.isComponentTemplate)('ngIfElse', Re);
                  }
                },
                dependencies: [L.sg, L.O5, Z.lC, de.F, Y.j],
                styles: [
                  '[_nghost-%COMP%]   .section-components[_ngcontent-%COMP%]{display:flex;overflow:hidden;height:calc(100vh - 80px)}@media (max-width: 768px){[_nghost-%COMP%]   .section-components[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{display:none}}[_nghost-%COMP%]   .section-components[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{width:20%;min-width:300px;max-width:300px;background-color:#f5f5f5;padding:20px 20px 40px;border-right:1px solid #e5e5e5;height:-moz-fit-content;height:fit-content;border-radius:.5rem;height:calc(100vh - 80px);overflow:auto}[_nghost-%COMP%]   .section-components[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px;height:6px}[_nghost-%COMP%]   .section-components[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-track{border-radius:10px;background:rgba(0,0,0,.1)}[_nghost-%COMP%]   .section-components[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:10px;background:rgba(0,0,0,.2)}[_nghost-%COMP%]   .section-components[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:rgba(150,150,150,.9)}[_nghost-%COMP%]   .section-components[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active{background:rgba(150,150,150,.9)}[_nghost-%COMP%]   .section-components[_ngcontent-%COMP%]   .component-description-content[_ngcontent-%COMP%]{width:100%;padding:16px;overflow:auto}[_nghost-%COMP%]   .section-components[_ngcontent-%COMP%]   .component-description-content[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px;height:6px}[_nghost-%COMP%]   .section-components[_ngcontent-%COMP%]   .component-description-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{border-radius:10px;background:rgba(0,0,0,.1)}[_nghost-%COMP%]   .section-components[_ngcontent-%COMP%]   .component-description-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:10px;background:rgba(0,0,0,.2)}[_nghost-%COMP%]   .section-components[_ngcontent-%COMP%]   .component-description-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:rgba(150,150,150,.9)}[_nghost-%COMP%]   .section-components[_ngcontent-%COMP%]   .component-description-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active{background:rgba(150,150,150,.9)}[_nghost-%COMP%]   .section-components[_ngcontent-%COMP%]   .component-description-content[_ngcontent-%COMP%]   .title-component[_ngcontent-%COMP%]{background-color:#fff;width:100%;padding:16px 16px 0;z-index:3}[_nghost-%COMP%]   .section-components[_ngcontent-%COMP%]   .component-description-content[_ngcontent-%COMP%]   .title-component.scroll[_ngcontent-%COMP%]{top:0}[_nghost-%COMP%]   .section-components[_ngcontent-%COMP%]   .component-description-content[_ngcontent-%COMP%]   .title-component.no-scroll[_ngcontent-%COMP%]{position:initial}@media (max-width: 768px){[_nghost-%COMP%]   .section-components[_ngcontent-%COMP%]   .component-description-content[_ngcontent-%COMP%]{width:100%}}@media (max-width: 480px){[_nghost-%COMP%]{padding:32px 16px}[_nghost-%COMP%]   .title-component[_ngcontent-%COMP%]{padding:0!important}}'
                ]
              })),
              j
            );
          })(),
          loadChildren: () =>
            Promise.all([w.e(8592), w.e(7340)])
              .then(w.bind(w, 7340))
              .then((j) => j.SectionComponentsModule)
        },
        { path: '**', pathMatch: 'full', redirectTo: '' }
      ];
      let te = (() => {
        class j {}
        return (
          (j.ɵfac = function (X) {
            return new (X || j)();
          }),
          (j.ɵmod = i.oAB({ type: j })),
          (j.ɵinj = i.cJS({ imports: [Z.Bz.forRoot(J), Z.Bz] })),
          j
        );
      })();
      var Ue = w(5120);
      let Ae = (() => {
        class j {
          constructor() {
            (this.routes = [
              { title: 'Introducci\xf3n', route: 'get-started' },
              { title: 'Componentes', route: 'components' }
            ]),
              (this.componentRoutes = Ne.k),
              (this.searchItemsList = this.componentRoutes
                .flatMap((X) =>
                  X.children
                    ? X.children.flatMap((ne) => [
                        { title: `${X.title} | ${ne.title}`, route: ne.route },
                        { title: `${X.title} | ${ne.title} - Api`, route: `${ne.route}/api` },
                        { title: `${X.title} | ${ne.title} - Ejemplos`, route: `${ne.route}/examples` }
                      ])
                    : '/get-started' === X.route || '/components' === X.route || '/' === X.route
                    ? X
                    : [
                        { title: X.title, route: X.route },
                        { title: `${X.title} - Api`, route: `${X.route}/api` },
                        { title: `${X.title} - Ejemplos`, route: `${X.route}/examples` }
                      ]
                )
                .sort((X, ne) => X.title.localeCompare(ne.title))),
              this.searchItemsList.push({ title: 'Inicio', route: '/home' }),
              this.searchItemsList.push({ title: 'Componentes', route: '/components' }),
              this.searchItemsList.push({ title: 'Comenzar', route: '/get-started' }),
              this.searchItemsList.sort((X, ne) => X.title.localeCompare(ne.title));
          }
        }
        return (
          (j.ɵfac = function (X) {
            return new (X || j)();
          }),
          (j.ɵcmp = i.Xpm({
            type: j,
            selectors: [['app-root']],
            decls: 2,
            vars: 2,
            consts: [['logoRoute', '/', 3, 'routes', 'searchbarItems']],
            template: function (X, ne) {
              1 & X && i._UZ(0, 'o-navbar', 0)(1, 'router-outlet'),
                2 & X && i.Q6J('routes', ne.routes)('searchbarItems', ne.searchItemsList);
            },
            dependencies: [Z.lC, Ue.$]
          })),
          j
        );
      })();
      var Oe = w(6831);
      let re = (() => {
        class j {}
        return (
          (j.ɵfac = function (X) {
            return new (X || j)();
          }),
          (j.ɵmod = i.oAB({ type: j, bootstrap: [Ae] })),
          (j.ɵinj = i.cJS({ providers: [{ provide: L.S$, useClass: L.Do }], imports: [a.b2, te, Oe.n] })),
          j
        );
      })();
      (0, i.G48)(),
        a
          .q6()
          .bootstrapModule(re)
          .catch((j) => console.error(j));
    },
    5083: (Ge) => {
      var w = (function (a) {
        var i = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
          L = 0,
          Z = {},
          P = {
            manual: a.Prism && a.Prism.manual,
            disableWorkerMessageHandler: a.Prism && a.Prism.disableWorkerMessageHandler,
            util: {
              encode: function R(B) {
                return B instanceof se
                  ? new se(B.type, R(B.content), B.alias)
                  : Array.isArray(B)
                  ? B.map(R)
                  : B.replace(/&/g, '&amp;')
                      .replace(/</g, '&lt;')
                      .replace(/\u00a0/g, ' ');
              },
              type: function (R) {
                return Object.prototype.toString.call(R).slice(8, -1);
              },
              objId: function (R) {
                return R.__id || Object.defineProperty(R, '__id', { value: ++L }), R.__id;
              },
              clone: function R(B, ie) {
                var K, be;
                switch (((ie = ie || {}), P.util.type(B))) {
                  case 'Object':
                    if (((be = P.util.objId(B)), ie[be])) return ie[be];
                    for (var H in ((ie[be] = K = {}), B)) B.hasOwnProperty(H) && (K[H] = R(B[H], ie));
                    return K;
                  case 'Array':
                    return (
                      (be = P.util.objId(B)),
                      ie[be]
                        ? ie[be]
                        : ((ie[be] = K = []),
                          B.forEach(function (J, te) {
                            K[te] = R(J, ie);
                          }),
                          K)
                    );
                  default:
                    return B;
                }
              },
              getLanguage: function (R) {
                for (; R; ) {
                  var B = i.exec(R.className);
                  if (B) return B[1].toLowerCase();
                  R = R.parentElement;
                }
                return 'none';
              },
              setLanguage: function (R, B) {
                (R.className = R.className.replace(RegExp(i, 'gi'), '')), R.classList.add('language-' + B);
              },
              currentScript: function () {
                if ('undefined' == typeof document) return null;
                if ('currentScript' in document) return document.currentScript;
                try {
                  throw new Error();
                } catch (K) {
                  var R = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(K.stack) || [])[1];
                  if (R) {
                    var B = document.getElementsByTagName('script');
                    for (var ie in B) if (B[ie].src == R) return B[ie];
                  }
                  return null;
                }
              },
              isActive: function (R, B, ie) {
                for (var K = 'no-' + B; R; ) {
                  var be = R.classList;
                  if (be.contains(B)) return !0;
                  if (be.contains(K)) return !1;
                  R = R.parentElement;
                }
                return !!ie;
              }
            },
            languages: {
              plain: Z,
              plaintext: Z,
              text: Z,
              txt: Z,
              extend: function (R, B) {
                var ie = P.util.clone(P.languages[R]);
                for (var K in B) ie[K] = B[K];
                return ie;
              },
              insertBefore: function (R, B, ie, K) {
                var be = (K = K || P.languages)[R],
                  H = {};
                for (var J in be)
                  if (be.hasOwnProperty(J)) {
                    if (J == B) for (var te in ie) ie.hasOwnProperty(te) && (H[te] = ie[te]);
                    ie.hasOwnProperty(J) || (H[J] = be[J]);
                  }
                var Ue = K[R];
                return (
                  (K[R] = H),
                  P.languages.DFS(P.languages, function (Ae, Oe) {
                    Oe === Ue && Ae != R && (this[Ae] = H);
                  }),
                  H
                );
              },
              DFS: function R(B, ie, K, be) {
                be = be || {};
                var H = P.util.objId;
                for (var J in B)
                  if (B.hasOwnProperty(J)) {
                    ie.call(B, J, B[J], K || J);
                    var te = B[J],
                      Ue = P.util.type(te);
                    'Object' !== Ue || be[H(te)]
                      ? 'Array' === Ue && !be[H(te)] && ((be[H(te)] = !0), R(te, ie, J, be))
                      : ((be[H(te)] = !0), R(te, ie, null, be));
                  }
              }
            },
            plugins: {},
            highlightAll: function (R, B) {
              P.highlightAllUnder(document, R, B);
            },
            highlightAllUnder: function (R, B, ie) {
              var K = {
                callback: ie,
                container: R,
                selector:
                  'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
              };
              P.hooks.run('before-highlightall', K),
                (K.elements = Array.prototype.slice.apply(K.container.querySelectorAll(K.selector))),
                P.hooks.run('before-all-elements-highlight', K);
              for (var H, be = 0; (H = K.elements[be++]); ) P.highlightElement(H, !0 === B, K.callback);
            },
            highlightElement: function (R, B, ie) {
              var K = P.util.getLanguage(R),
                be = P.languages[K];
              P.util.setLanguage(R, K);
              var H = R.parentElement;
              H && 'pre' === H.nodeName.toLowerCase() && P.util.setLanguage(H, K);
              var te = { element: R, language: K, grammar: be, code: R.textContent };
              function Ue(Oe) {
                (te.highlightedCode = Oe),
                  P.hooks.run('before-insert', te),
                  (te.element.innerHTML = te.highlightedCode),
                  P.hooks.run('after-highlight', te),
                  P.hooks.run('complete', te),
                  ie && ie.call(te.element);
              }
              if (
                (P.hooks.run('before-sanity-check', te),
                (H = te.element.parentElement) &&
                  'pre' === H.nodeName.toLowerCase() &&
                  !H.hasAttribute('tabindex') &&
                  H.setAttribute('tabindex', '0'),
                !te.code)
              )
                return P.hooks.run('complete', te), void (ie && ie.call(te.element));
              if ((P.hooks.run('before-highlight', te), te.grammar))
                if (B && a.Worker) {
                  var Ae = new Worker(P.filename);
                  (Ae.onmessage = function (Oe) {
                    Ue(Oe.data);
                  }),
                    Ae.postMessage(JSON.stringify({ language: te.language, code: te.code, immediateClose: !0 }));
                } else Ue(P.highlight(te.code, te.grammar, te.language));
              else Ue(P.util.encode(te.code));
            },
            highlight: function (R, B, ie) {
              var K = { code: R, grammar: B, language: ie };
              if ((P.hooks.run('before-tokenize', K), !K.grammar))
                throw new Error('The language "' + K.language + '" has no grammar.');
              return (
                (K.tokens = P.tokenize(K.code, K.grammar)),
                P.hooks.run('after-tokenize', K),
                se.stringify(P.util.encode(K.tokens), K.language)
              );
            },
            tokenize: function (R, B) {
              var ie = B.rest;
              if (ie) {
                for (var K in ie) B[K] = ie[K];
                delete B.rest;
              }
              var be = new ve();
              return (
                ae(be, be.head, R),
                xe(R, be, B, be.head, 0),
                (function ge(R) {
                  for (var B = [], ie = R.head.next; ie !== R.tail; ) B.push(ie.value), (ie = ie.next);
                  return B;
                })(be)
              );
            },
            hooks: {
              all: {},
              add: function (R, B) {
                var ie = P.hooks.all;
                (ie[R] = ie[R] || []), ie[R].push(B);
              },
              run: function (R, B) {
                var ie = P.hooks.all[R];
                if (ie && ie.length) for (var be, K = 0; (be = ie[K++]); ) be(B);
              }
            },
            Token: se
          };
        function se(R, B, ie, K) {
          (this.type = R), (this.content = B), (this.alias = ie), (this.length = 0 | (K || '').length);
        }
        function Y(R, B, ie, K) {
          R.lastIndex = B;
          var be = R.exec(ie);
          if (be && K && be[1]) {
            var H = be[1].length;
            (be.index += H), (be[0] = be[0].slice(H));
          }
          return be;
        }
        function xe(R, B, ie, K, be, H) {
          for (var J in ie)
            if (ie.hasOwnProperty(J) && ie[J]) {
              var te = ie[J];
              te = Array.isArray(te) ? te : [te];
              for (var Ue = 0; Ue < te.length; ++Ue) {
                if (H && H.cause == J + ',' + Ue) return;
                var Ae = te[Ue],
                  Oe = Ae.inside,
                  re = !!Ae.lookbehind,
                  Te = !!Ae.greedy,
                  j = Ae.alias;
                if (Te && !Ae.pattern.global) {
                  var Fe = Ae.pattern.toString().match(/[imsuy]*$/)[0];
                  Ae.pattern = RegExp(Ae.pattern.source, Fe + 'g');
                }
                for (
                  var X = Ae.pattern || Ae, ne = K.next, Re = be;
                  ne !== B.tail && !(H && Re >= H.reach);
                  Re += ne.value.length, ne = ne.next
                ) {
                  var Ce = ne.value;
                  if (B.length > R.length) return;
                  if (!(Ce instanceof se)) {
                    var G,
                      Ze = 1;
                    if (Te) {
                      if (!(G = Y(X, Re, R, re)) || G.index >= R.length) break;
                      var De = G.index,
                        ee = G.index + G[0].length,
                        q = Re;
                      for (q += ne.value.length; De >= q; ) q += (ne = ne.next).value.length;
                      if (((Re = q -= ne.value.length), ne.value instanceof se)) continue;
                      for (var fe = ne; fe !== B.tail && (q < ee || 'string' == typeof fe.value); fe = fe.next)
                        Ze++, (q += fe.value.length);
                      Ze--, (Ce = R.slice(Re, q)), (G.index -= Re);
                    } else if (!(G = Y(X, 0, Ce, re))) continue;
                    var pe = G[0],
                      Je = Ce.slice(0, (De = G.index)),
                      et = Ce.slice(De + pe.length),
                      Ot = Re + Ce.length;
                    H && Ot > H.reach && (H.reach = Ot);
                    var je = ne.prev;
                    if (
                      (Je && ((je = ae(B, je, Je)), (Re += Je.length)),
                      le(B, je, Ze),
                      (ne = ae(B, je, new se(J, Oe ? P.tokenize(pe, Oe) : pe, j, pe))),
                      et && ae(B, ne, et),
                      Ze > 1)
                    ) {
                      var Ct = { cause: J + ',' + Ue, reach: Ot };
                      xe(R, B, ie, ne.prev, Re, Ct), H && Ct.reach > H.reach && (H.reach = Ct.reach);
                    }
                  }
                }
              }
            }
        }
        function ve() {
          var R = { value: null, prev: null, next: null },
            B = { value: null, prev: R, next: null };
          (R.next = B), (this.head = R), (this.tail = B), (this.length = 0);
        }
        function ae(R, B, ie) {
          var K = B.next,
            be = { value: ie, prev: B, next: K };
          return (B.next = be), (K.prev = be), R.length++, be;
        }
        function le(R, B, ie) {
          for (var K = B.next, be = 0; be < ie && K !== R.tail; be++) K = K.next;
          (B.next = K), (K.prev = B), (R.length -= be);
        }
        if (
          ((a.Prism = P),
          (se.stringify = function R(B, ie) {
            if ('string' == typeof B) return B;
            if (Array.isArray(B)) {
              var K = '';
              return (
                B.forEach(function (Ue) {
                  K += R(Ue, ie);
                }),
                K
              );
            }
            var be = {
                type: B.type,
                content: R(B.content, ie),
                tag: 'span',
                classes: ['token', B.type],
                attributes: {},
                language: ie
              },
              H = B.alias;
            H && (Array.isArray(H) ? Array.prototype.push.apply(be.classes, H) : be.classes.push(H)),
              P.hooks.run('wrap', be);
            var J = '';
            for (var te in be.attributes)
              J += ' ' + te + '="' + (be.attributes[te] || '').replace(/"/g, '&quot;') + '"';
            return '<' + be.tag + ' class="' + be.classes.join(' ') + '"' + J + '>' + be.content + '</' + be.tag + '>';
          }),
          !a.document)
        )
          return (
            a.addEventListener &&
              (P.disableWorkerMessageHandler ||
                a.addEventListener(
                  'message',
                  function (R) {
                    var B = JSON.parse(R.data),
                      ie = B.language,
                      be = B.immediateClose;
                    a.postMessage(P.highlight(B.code, P.languages[ie], ie)), be && a.close();
                  },
                  !1
                )),
            P
          );
        var Ne = P.util.currentScript();
        function de() {
          P.manual || P.highlightAll();
        }
        if ((Ne && ((P.filename = Ne.src), Ne.hasAttribute('data-manual') && (P.manual = !0)), !P.manual)) {
          var ce = document.readyState;
          'loading' === ce || ('interactive' === ce && Ne && Ne.defer)
            ? document.addEventListener('DOMContentLoaded', de)
            : window.requestAnimationFrame
            ? window.requestAnimationFrame(de)
            : window.setTimeout(de, 16);
        }
        return P;
      })(
        'undefined' != typeof window
          ? window
          : 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope
          ? self
          : {}
      );
      Ge.exports && (Ge.exports = w),
        'undefined' != typeof global && (global.Prism = w),
        (w.languages.markup = {
          comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
          prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
          doctype: {
            pattern:
              /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
              'internal-subset': { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null },
              string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
              punctuation: /^<!|>$|[[\]]/,
              'doctype-tag': /^DOCTYPE/i,
              name: /[^\s<>'"]+/
            }
          },
          cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
          tag: {
            pattern:
              /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
              tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } },
              'special-attr': [],
              'attr-value': {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                  punctuation: [
                    { pattern: /^=/, alias: 'attr-equals' },
                    { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }
                  ]
                }
              },
              punctuation: /\/?>/,
              'attr-name': { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } }
            }
          },
          entity: [{ pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' }, /&#x?[\da-f]{1,8};/i]
        }),
        (w.languages.markup.tag.inside['attr-value'].inside.entity = w.languages.markup.entity),
        (w.languages.markup.doctype.inside['internal-subset'].inside = w.languages.markup),
        w.hooks.add('wrap', function (a) {
          'entity' === a.type && (a.attributes.title = a.content.replace(/&amp;/, '&'));
        }),
        Object.defineProperty(w.languages.markup.tag, 'addInlined', {
          value: function (i, L) {
            var Z = {};
            (Z['language-' + L] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: w.languages[L]
            }),
              (Z.cdata = /^<!\[CDATA\[|\]\]>$/i);
            var P = { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: Z } };
            P['language-' + L] = { pattern: /[\s\S]+/, inside: w.languages[L] };
            var se = {};
            (se[i] = {
              pattern: RegExp(
                /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                  /__/g,
                  function () {
                    return i;
                  }
                ),
                'i'
              ),
              lookbehind: !0,
              greedy: !0,
              inside: P
            }),
              w.languages.insertBefore('markup', 'cdata', se);
          }
        }),
        Object.defineProperty(w.languages.markup.tag, 'addAttribute', {
          value: function (a, i) {
            w.languages.markup.tag.inside['special-attr'].push({
              pattern: RegExp(
                /(^|["'\s])/.source + '(?:' + a + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                'i'
              ),
              lookbehind: !0,
              inside: {
                'attr-name': /^[^\s=]+/,
                'attr-value': {
                  pattern: /=[\s\S]+/,
                  inside: {
                    value: {
                      pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                      lookbehind: !0,
                      alias: [i, 'language-' + i],
                      inside: w.languages[i]
                    },
                    punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/]
                  }
                }
              }
            });
          }
        }),
        (w.languages.html = w.languages.markup),
        (w.languages.mathml = w.languages.markup),
        (w.languages.svg = w.languages.markup),
        (w.languages.xml = w.languages.extend('markup', {})),
        (w.languages.ssml = w.languages.xml),
        (w.languages.atom = w.languages.xml),
        (w.languages.rss = w.languages.xml),
        (function (a) {
          var i = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
          (a.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: RegExp(
                '@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + i.source + ')*?' + /(?:;|(?=\s*\{))/.source
              ),
              inside: {
                rule: /^@[\w-]+/,
                'selector-function-argument': {
                  pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: 'selector'
                },
                keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 }
              }
            },
            url: {
              pattern: RegExp('\\burl\\((?:' + i.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp('^' + i.source + '$'), alias: 'url' }
              }
            },
            selector: {
              pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + i.source + ')*(?=\\s*\\{)'),
              lookbehind: !0
            },
            string: { pattern: i, greedy: !0 },
            property: {
              pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
              lookbehind: !0
            },
            important: /!important\b/i,
            function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
            punctuation: /[(){};:,]/
          }),
            (a.languages.css.atrule.inside.rest = a.languages.css);
          var L = a.languages.markup;
          L && (L.tag.addInlined('style', 'css'), L.tag.addAttribute('style', 'css'));
        })(w),
        (w.languages.clike = {
          comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }
          ],
          string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          'class-name': {
            pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ }
          },
          keyword:
            /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
          boolean: /\b(?:false|true)\b/,
          function: /\b\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/
        }),
        (w.languages.javascript = w.languages.extend('clike', {
          'class-name': [
            w.languages.clike['class-name'],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
              lookbehind: !0
            }
          ],
          keyword: [
            { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
            {
              pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0
            }
          ],
          function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number: {
            pattern: RegExp(
              /(^|[^\w$])/.source +
                '(?:' +
                /NaN|Infinity/.source +
                '|' +
                /0[bB][01]+(?:_[01]+)*n?/.source +
                '|' +
                /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                '|' +
                /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                '|' +
                /\d+(?:_\d+)*n/.source +
                '|' +
                /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source +
                ')' +
                /(?![\w$])/.source
            ),
            lookbehind: !0
          },
          operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
        })),
        (w.languages.javascript['class-name'][0].pattern =
          /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
        w.languages.insertBefore('javascript', 'keyword', {
          regex: {
            pattern: RegExp(
              /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
                /\//.source +
                '(?:' +
                /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source +
                '|' +
                /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/
                  .source +
                ')' +
                /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
            ),
            lookbehind: !0,
            greedy: !0,
            inside: {
              'regex-source': {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: 'language-regex',
                inside: w.languages.regex
              },
              'regex-delimiter': /^\/|\/$/,
              'regex-flags': /^[a-z]+$/
            }
          },
          'function-variable': {
            pattern:
              /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: 'function'
          },
          parameter: [
            {
              pattern:
                /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
              lookbehind: !0,
              inside: w.languages.javascript
            },
            {
              pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
              lookbehind: !0,
              inside: w.languages.javascript
            },
            {
              pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: w.languages.javascript
            },
            {
              pattern:
                /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: w.languages.javascript
            }
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
        }),
        w.languages.insertBefore('javascript', 'string', {
          hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
          'template-string': {
            pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: !0,
            inside: {
              'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
              interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: !0,
                inside: {
                  'interpolation-punctuation': { pattern: /^\$\{|\}$/, alias: 'punctuation' },
                  rest: w.languages.javascript
                }
              },
              string: /[\s\S]+/
            }
          },
          'string-property': {
            pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
            lookbehind: !0,
            greedy: !0,
            alias: 'property'
          }
        }),
        w.languages.insertBefore('javascript', 'operator', {
          'literal-property': {
            pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: !0,
            alias: 'property'
          }
        }),
        w.languages.markup &&
          (w.languages.markup.tag.addInlined('script', 'javascript'),
          w.languages.markup.tag.addAttribute(
            /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
              .source,
            'javascript'
          )),
        (w.languages.js = w.languages.javascript),
        (function () {
          if (void 0 !== w && 'undefined' != typeof document) {
            Element.prototype.matches ||
              (Element.prototype.matches =
                Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
            var Z = {
                js: 'javascript',
                py: 'python',
                rb: 'ruby',
                ps1: 'powershell',
                psm1: 'powershell',
                sh: 'bash',
                bat: 'batch',
                h: 'c',
                tex: 'latex'
              },
              P = 'data-src-status',
              se = 'loading',
              Y = 'loaded',
              ve = 'pre[data-src]:not([' + P + '="' + Y + '"]):not([' + P + '="' + se + '"])';
            w.hooks.add('before-highlightall', function (Ne) {
              Ne.selector += ', ' + ve;
            }),
              w.hooks.add('before-sanity-check', function (Ne) {
                var de = Ne.element;
                if (de.matches(ve)) {
                  (Ne.code = ''), de.setAttribute(P, se);
                  var ce = de.appendChild(document.createElement('CODE'));
                  ce.textContent = 'Loading\u2026';
                  var R = de.getAttribute('data-src'),
                    B = Ne.language;
                  if ('none' === B) {
                    var ie = (/\.(\w+)$/.exec(R) || [, 'none'])[1];
                    B = Z[ie] || ie;
                  }
                  w.util.setLanguage(ce, B), w.util.setLanguage(de, B);
                  var K = w.plugins.autoloader;
                  K && K.loadLanguages(B),
                    (function ae(Ne, de, ce) {
                      var R = new XMLHttpRequest();
                      R.open('GET', Ne, !0),
                        (R.onreadystatechange = function () {
                          4 == R.readyState &&
                            (R.status < 400 && R.responseText
                              ? de(R.responseText)
                              : ce(
                                  R.status >= 400
                                    ? (function (Ne, de) {
                                        return '\u2716 Error ' + Ne + ' while fetching file: ' + de;
                                      })(R.status, R.statusText)
                                    : '\u2716 Error: File does not exist or is empty'
                                ));
                        }),
                        R.send(null);
                    })(
                      R,
                      function (be) {
                        de.setAttribute(P, Y);
                        var H = (function le(Ne) {
                          var de = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(Ne || '');
                          if (de) {
                            var ce = Number(de[1]),
                              B = de[3];
                            return de[2] ? (B ? [ce, Number(B)] : [ce, void 0]) : [ce, ce];
                          }
                        })(de.getAttribute('data-range'));
                        if (H) {
                          var J = be.split(/\r\n?|\n/g),
                            te = H[0],
                            Ue = null == H[1] ? J.length : H[1];
                          te < 0 && (te += J.length),
                            (te = Math.max(0, Math.min(te - 1, J.length))),
                            Ue < 0 && (Ue += J.length),
                            (Ue = Math.max(0, Math.min(Ue, J.length))),
                            (be = J.slice(te, Ue).join('\n')),
                            de.hasAttribute('data-start') || de.setAttribute('data-start', String(te + 1));
                        }
                        (ce.textContent = be), w.highlightElement(ce);
                      },
                      function (be) {
                        de.setAttribute(P, 'failed'), (ce.textContent = be);
                      }
                    );
                }
              }),
              (w.plugins.fileHighlight = {
                highlight: function (de) {
                  for (var B, ce = (de || document).querySelectorAll(ve), R = 0; (B = ce[R++]); ) w.highlightElement(B);
                }
              });
            var ge = !1;
            w.fileHighlight = function () {
              ge ||
                (console.warn(
                  'Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.'
                ),
                (ge = !0)),
                w.plugins.fileHighlight.highlight.apply(this, arguments);
            };
          }
        })();
    },
    1135: (Ge, he, w) => {
      'use strict';
      w.d(he, { X: () => i });
      var a = w(7579);
      class i extends a.x {
        constructor(Z) {
          super(), (this._value = Z);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(Z) {
          const P = super._subscribe(Z);
          return !P.closed && Z.next(this._value), P;
        }
        getValue() {
          const { hasError: Z, thrownError: P, _value: se } = this;
          if (Z) throw P;
          return this._throwIfClosed(), se;
        }
        next(Z) {
          super.next((this._value = Z));
        }
      }
    },
    9751: (Ge, he, w) => {
      'use strict';
      w.d(he, { y: () => xe });
      var a = w(930),
        i = w(727),
        L = w(8822),
        Z = w(9635),
        P = w(2416),
        se = w(576),
        Y = w(2806);
      let xe = (() => {
        class ge {
          constructor(de) {
            de && (this._subscribe = de);
          }
          lift(de) {
            const ce = new ge();
            return (ce.source = this), (ce.operator = de), ce;
          }
          subscribe(de, ce, R) {
            const B = (function le(ge) {
              return (
                (ge && ge instanceof a.Lv) ||
                ((function ae(ge) {
                  return ge && (0, se.m)(ge.next) && (0, se.m)(ge.error) && (0, se.m)(ge.complete);
                })(ge) &&
                  (0, i.Nn)(ge))
              );
            })(de)
              ? de
              : new a.Hp(de, ce, R);
            return (
              (0, Y.x)(() => {
                const { operator: ie, source: K } = this;
                B.add(ie ? ie.call(B, K) : K ? this._subscribe(B) : this._trySubscribe(B));
              }),
              B
            );
          }
          _trySubscribe(de) {
            try {
              return this._subscribe(de);
            } catch (ce) {
              de.error(ce);
            }
          }
          forEach(de, ce) {
            return new (ce = ve(ce))((R, B) => {
              const ie = new a.Hp({
                next: (K) => {
                  try {
                    de(K);
                  } catch (be) {
                    B(be), ie.unsubscribe();
                  }
                },
                error: B,
                complete: R
              });
              this.subscribe(ie);
            });
          }
          _subscribe(de) {
            var ce;
            return null === (ce = this.source) || void 0 === ce ? void 0 : ce.subscribe(de);
          }
          [L.L]() {
            return this;
          }
          pipe(...de) {
            return (0, Z.U)(de)(this);
          }
          toPromise(de) {
            return new (de = ve(de))((ce, R) => {
              let B;
              this.subscribe(
                (ie) => (B = ie),
                (ie) => R(ie),
                () => ce(B)
              );
            });
          }
        }
        return (ge.create = (Ne) => new ge(Ne)), ge;
      })();
      function ve(ge) {
        var Ne;
        return null !== (Ne = null != ge ? ge : P.v.Promise) && void 0 !== Ne ? Ne : Promise;
      }
    },
    7579: (Ge, he, w) => {
      'use strict';
      w.d(he, { x: () => Y });
      var a = w(9751),
        i = w(727);
      const Z = (0, w(3888).d)(
        (ve) =>
          function () {
            ve(this), (this.name = 'ObjectUnsubscribedError'), (this.message = 'object unsubscribed');
          }
      );
      var P = w(8737),
        se = w(2806);
      let Y = (() => {
        class ve extends a.y {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(le) {
            const ge = new xe(this, this);
            return (ge.operator = le), ge;
          }
          _throwIfClosed() {
            if (this.closed) throw new Z();
          }
          next(le) {
            (0, se.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers || (this.currentObservers = Array.from(this.observers));
                for (const ge of this.currentObservers) ge.next(le);
              }
            });
          }
          error(le) {
            (0, se.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = le);
                const { observers: ge } = this;
                for (; ge.length; ) ge.shift().error(le);
              }
            });
          }
          complete() {
            (0, se.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: le } = this;
                for (; le.length; ) le.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0), (this.observers = this.currentObservers = null);
          }
          get observed() {
            var le;
            return (null === (le = this.observers) || void 0 === le ? void 0 : le.length) > 0;
          }
          _trySubscribe(le) {
            return this._throwIfClosed(), super._trySubscribe(le);
          }
          _subscribe(le) {
            return this._throwIfClosed(), this._checkFinalizedStatuses(le), this._innerSubscribe(le);
          }
          _innerSubscribe(le) {
            const { hasError: ge, isStopped: Ne, observers: de } = this;
            return ge || Ne
              ? i.Lc
              : ((this.currentObservers = null),
                de.push(le),
                new i.w0(() => {
                  (this.currentObservers = null), (0, P.P)(de, le);
                }));
          }
          _checkFinalizedStatuses(le) {
            const { hasError: ge, thrownError: Ne, isStopped: de } = this;
            ge ? le.error(Ne) : de && le.complete();
          }
          asObservable() {
            const le = new a.y();
            return (le.source = this), le;
          }
        }
        return (ve.create = (ae, le) => new xe(ae, le)), ve;
      })();
      class xe extends Y {
        constructor(ae, le) {
          super(), (this.destination = ae), (this.source = le);
        }
        next(ae) {
          var le, ge;
          null === (ge = null === (le = this.destination) || void 0 === le ? void 0 : le.next) ||
            void 0 === ge ||
            ge.call(le, ae);
        }
        error(ae) {
          var le, ge;
          null === (ge = null === (le = this.destination) || void 0 === le ? void 0 : le.error) ||
            void 0 === ge ||
            ge.call(le, ae);
        }
        complete() {
          var ae, le;
          null === (le = null === (ae = this.destination) || void 0 === ae ? void 0 : ae.complete) ||
            void 0 === le ||
            le.call(ae);
        }
        _subscribe(ae) {
          var le, ge;
          return null !== (ge = null === (le = this.source) || void 0 === le ? void 0 : le.subscribe(ae)) &&
            void 0 !== ge
            ? ge
            : i.Lc;
        }
      }
    },
    930: (Ge, he, w) => {
      'use strict';
      w.d(he, { Hp: () => R, Lv: () => ge });
      var a = w(576),
        i = w(727),
        L = w(2416),
        Z = w(7849),
        P = w(5032);
      const se = ve('C', void 0, void 0);
      function ve(H, J, te) {
        return { kind: H, value: J, error: te };
      }
      var ae = w(3410),
        le = w(2806);
      class ge extends i.w0 {
        constructor(J) {
          super(),
            (this.isStopped = !1),
            J ? ((this.destination = J), (0, i.Nn)(J) && J.add(this)) : (this.destination = be);
        }
        static create(J, te, Ue) {
          return new R(J, te, Ue);
        }
        next(J) {
          this.isStopped
            ? K(
                (function xe(H) {
                  return ve('N', H, void 0);
                })(J),
                this
              )
            : this._next(J);
        }
        error(J) {
          this.isStopped
            ? K(
                (function Y(H) {
                  return ve('E', void 0, H);
                })(J),
                this
              )
            : ((this.isStopped = !0), this._error(J));
        }
        complete() {
          this.isStopped ? K(se, this) : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe(), (this.destination = null));
        }
        _next(J) {
          this.destination.next(J);
        }
        _error(J) {
          try {
            this.destination.error(J);
          } finally {
            this.unsubscribe();
          }
        }
        _complete() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }
      }
      const Ne = Function.prototype.bind;
      function de(H, J) {
        return Ne.call(H, J);
      }
      class ce {
        constructor(J) {
          this.partialObserver = J;
        }
        next(J) {
          const { partialObserver: te } = this;
          if (te.next)
            try {
              te.next(J);
            } catch (Ue) {
              B(Ue);
            }
        }
        error(J) {
          const { partialObserver: te } = this;
          if (te.error)
            try {
              te.error(J);
            } catch (Ue) {
              B(Ue);
            }
          else B(J);
        }
        complete() {
          const { partialObserver: J } = this;
          if (J.complete)
            try {
              J.complete();
            } catch (te) {
              B(te);
            }
        }
      }
      class R extends ge {
        constructor(J, te, Ue) {
          let Ae;
          if ((super(), (0, a.m)(J) || !J))
            Ae = { next: null != J ? J : void 0, error: null != te ? te : void 0, complete: null != Ue ? Ue : void 0 };
          else {
            let Oe;
            this && L.v.useDeprecatedNextContext
              ? ((Oe = Object.create(J)),
                (Oe.unsubscribe = () => this.unsubscribe()),
                (Ae = {
                  next: J.next && de(J.next, Oe),
                  error: J.error && de(J.error, Oe),
                  complete: J.complete && de(J.complete, Oe)
                }))
              : (Ae = J);
          }
          this.destination = new ce(Ae);
        }
      }
      function B(H) {
        L.v.useDeprecatedSynchronousErrorHandling ? (0, le.O)(H) : (0, Z.h)(H);
      }
      function K(H, J) {
        const { onStoppedNotification: te } = L.v;
        te && ae.z.setTimeout(() => te(H, J));
      }
      const be = {
        closed: !0,
        next: P.Z,
        error: function ie(H) {
          throw H;
        },
        complete: P.Z
      };
    },
    727: (Ge, he, w) => {
      'use strict';
      w.d(he, { Lc: () => se, w0: () => P, Nn: () => Y });
      var a = w(576);
      const L = (0, w(3888).d)(
        (ve) =>
          function (le) {
            ve(this),
              (this.message = le
                ? `${le.length} errors occurred during unsubscription:\n${le
                    .map((ge, Ne) => `${Ne + 1}) ${ge.toString()}`)
                    .join('\n  ')}`
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = le);
          }
      );
      var Z = w(8737);
      class P {
        constructor(ae) {
          (this.initialTeardown = ae), (this.closed = !1), (this._parentage = null), (this._finalizers = null);
        }
        unsubscribe() {
          let ae;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: le } = this;
            if (le)
              if (((this._parentage = null), Array.isArray(le))) for (const de of le) de.remove(this);
              else le.remove(this);
            const { initialTeardown: ge } = this;
            if ((0, a.m)(ge))
              try {
                ge();
              } catch (de) {
                ae = de instanceof L ? de.errors : [de];
              }
            const { _finalizers: Ne } = this;
            if (Ne) {
              this._finalizers = null;
              for (const de of Ne)
                try {
                  xe(de);
                } catch (ce) {
                  (ae = null != ae ? ae : []), ce instanceof L ? (ae = [...ae, ...ce.errors]) : ae.push(ce);
                }
            }
            if (ae) throw new L(ae);
          }
        }
        add(ae) {
          var le;
          if (ae && ae !== this)
            if (this.closed) xe(ae);
            else {
              if (ae instanceof P) {
                if (ae.closed || ae._hasParent(this)) return;
                ae._addParent(this);
              }
              (this._finalizers = null !== (le = this._finalizers) && void 0 !== le ? le : []).push(ae);
            }
        }
        _hasParent(ae) {
          const { _parentage: le } = this;
          return le === ae || (Array.isArray(le) && le.includes(ae));
        }
        _addParent(ae) {
          const { _parentage: le } = this;
          this._parentage = Array.isArray(le) ? (le.push(ae), le) : le ? [le, ae] : ae;
        }
        _removeParent(ae) {
          const { _parentage: le } = this;
          le === ae ? (this._parentage = null) : Array.isArray(le) && (0, Z.P)(le, ae);
        }
        remove(ae) {
          const { _finalizers: le } = this;
          le && (0, Z.P)(le, ae), ae instanceof P && ae._removeParent(this);
        }
      }
      P.EMPTY = (() => {
        const ve = new P();
        return (ve.closed = !0), ve;
      })();
      const se = P.EMPTY;
      function Y(ve) {
        return (
          ve instanceof P ||
          (ve && 'closed' in ve && (0, a.m)(ve.remove) && (0, a.m)(ve.add) && (0, a.m)(ve.unsubscribe))
        );
      }
      function xe(ve) {
        (0, a.m)(ve) ? ve() : ve.unsubscribe();
      }
    },
    2416: (Ge, he, w) => {
      'use strict';
      w.d(he, { v: () => a });
      const a = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1
      };
    },
    9841: (Ge, he, w) => {
      'use strict';
      w.d(he, { a: () => ae });
      var a = w(9751),
        i = w(4742),
        L = w(2076),
        Z = w(4671),
        P = w(3268),
        se = w(3269),
        Y = w(1810),
        xe = w(5403),
        ve = w(9672);
      function ae(...Ne) {
        const de = (0, se.yG)(Ne),
          ce = (0, se.jO)(Ne),
          { args: R, keys: B } = (0, i.D)(Ne);
        if (0 === R.length) return (0, L.D)([], de);
        const ie = new a.y(
          (function le(Ne, de, ce = Z.y) {
            return (R) => {
              ge(
                de,
                () => {
                  const { length: B } = Ne,
                    ie = new Array(B);
                  let K = B,
                    be = B;
                  for (let H = 0; H < B; H++)
                    ge(
                      de,
                      () => {
                        const J = (0, L.D)(Ne[H], de);
                        let te = !1;
                        J.subscribe(
                          (0, xe.x)(
                            R,
                            (Ue) => {
                              (ie[H] = Ue), te || ((te = !0), be--), be || R.next(ce(ie.slice()));
                            },
                            () => {
                              --K || R.complete();
                            }
                          )
                        );
                      },
                      R
                    );
                },
                R
              );
            };
          })(R, de, B ? (K) => (0, Y.n)(B, K) : Z.y)
        );
        return ce ? ie.pipe((0, P.Z)(ce)) : ie;
      }
      function ge(Ne, de, ce) {
        Ne ? (0, ve.f)(ce, Ne, de) : de();
      }
    },
    7272: (Ge, he, w) => {
      'use strict';
      w.d(he, { z: () => P });
      var a = w(8189),
        L = w(3269),
        Z = w(2076);
      function P(...se) {
        return (function i() {
          return (0, a.J)(1);
        })()((0, Z.D)(se, (0, L.yG)(se)));
      }
    },
    515: (Ge, he, w) => {
      'use strict';
      w.d(he, { E: () => i });
      const i = new (w(9751).y)((P) => P.complete());
    },
    2076: (Ge, he, w) => {
      'use strict';
      w.d(he, { D: () => Ue });
      var a = w(8421),
        i = w(9672),
        L = w(4482),
        Z = w(5403);
      function P(Ae, Oe = 0) {
        return (0, L.e)((re, Te) => {
          re.subscribe(
            (0, Z.x)(
              Te,
              (j) => (0, i.f)(Te, Ae, () => Te.next(j), Oe),
              () => (0, i.f)(Te, Ae, () => Te.complete(), Oe),
              (j) => (0, i.f)(Te, Ae, () => Te.error(j), Oe)
            )
          );
        });
      }
      function se(Ae, Oe = 0) {
        return (0, L.e)((re, Te) => {
          Te.add(Ae.schedule(() => re.subscribe(Te), Oe));
        });
      }
      var ve = w(9751),
        le = w(2202),
        ge = w(576);
      function de(Ae, Oe) {
        if (!Ae) throw new Error('Iterable cannot be null');
        return new ve.y((re) => {
          (0, i.f)(re, Oe, () => {
            const Te = Ae[Symbol.asyncIterator]();
            (0, i.f)(
              re,
              Oe,
              () => {
                Te.next().then((j) => {
                  j.done ? re.complete() : re.next(j.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      var ce = w(3670),
        R = w(8239),
        B = w(1144),
        ie = w(6495),
        K = w(2206),
        be = w(4532),
        H = w(3260);
      function Ue(Ae, Oe) {
        return Oe
          ? (function te(Ae, Oe) {
              if (null != Ae) {
                if ((0, ce.c)(Ae))
                  return (function Y(Ae, Oe) {
                    return (0, a.Xf)(Ae).pipe(se(Oe), P(Oe));
                  })(Ae, Oe);
                if ((0, B.z)(Ae))
                  return (function ae(Ae, Oe) {
                    return new ve.y((re) => {
                      let Te = 0;
                      return Oe.schedule(function () {
                        Te === Ae.length ? re.complete() : (re.next(Ae[Te++]), re.closed || this.schedule());
                      });
                    });
                  })(Ae, Oe);
                if ((0, R.t)(Ae))
                  return (function xe(Ae, Oe) {
                    return (0, a.Xf)(Ae).pipe(se(Oe), P(Oe));
                  })(Ae, Oe);
                if ((0, K.D)(Ae)) return de(Ae, Oe);
                if ((0, ie.T)(Ae))
                  return (function Ne(Ae, Oe) {
                    return new ve.y((re) => {
                      let Te;
                      return (
                        (0, i.f)(re, Oe, () => {
                          (Te = Ae[le.h]()),
                            (0, i.f)(
                              re,
                              Oe,
                              () => {
                                let j, Fe;
                                try {
                                  ({ value: j, done: Fe } = Te.next());
                                } catch (X) {
                                  return void re.error(X);
                                }
                                Fe ? re.complete() : re.next(j);
                              },
                              0,
                              !0
                            );
                        }),
                        () => (0, ge.m)(null == Te ? void 0 : Te.return) && Te.return()
                      );
                    });
                  })(Ae, Oe);
                if ((0, H.L)(Ae))
                  return (function J(Ae, Oe) {
                    return de((0, H.Q)(Ae), Oe);
                  })(Ae, Oe);
              }
              throw (0, be.z)(Ae);
            })(Ae, Oe)
          : (0, a.Xf)(Ae);
      }
    },
    8421: (Ge, he, w) => {
      'use strict';
      w.d(he, { Xf: () => Ne });
      var a = w(7582),
        i = w(1144),
        L = w(8239),
        Z = w(9751),
        P = w(3670),
        se = w(2206),
        Y = w(4532),
        xe = w(6495),
        ve = w(3260),
        ae = w(576),
        le = w(7849),
        ge = w(8822);
      function Ne(H) {
        if (H instanceof Z.y) return H;
        if (null != H) {
          if ((0, P.c)(H))
            return (function de(H) {
              return new Z.y((J) => {
                const te = H[ge.L]();
                if ((0, ae.m)(te.subscribe)) return te.subscribe(J);
                throw new TypeError('Provided object does not correctly implement Symbol.observable');
              });
            })(H);
          if ((0, i.z)(H))
            return (function ce(H) {
              return new Z.y((J) => {
                for (let te = 0; te < H.length && !J.closed; te++) J.next(H[te]);
                J.complete();
              });
            })(H);
          if ((0, L.t)(H))
            return (function R(H) {
              return new Z.y((J) => {
                H.then(
                  (te) => {
                    J.closed || (J.next(te), J.complete());
                  },
                  (te) => J.error(te)
                ).then(null, le.h);
              });
            })(H);
          if ((0, se.D)(H)) return ie(H);
          if ((0, xe.T)(H))
            return (function B(H) {
              return new Z.y((J) => {
                for (const te of H) if ((J.next(te), J.closed)) return;
                J.complete();
              });
            })(H);
          if ((0, ve.L)(H))
            return (function K(H) {
              return ie((0, ve.Q)(H));
            })(H);
        }
        throw (0, Y.z)(H);
      }
      function ie(H) {
        return new Z.y((J) => {
          (function be(H, J) {
            var te, Ue, Ae, Oe;
            return (0, a.mG)(this, void 0, void 0, function* () {
              try {
                for (te = (0, a.KL)(H); !(Ue = yield te.next()).done; ) if ((J.next(Ue.value), J.closed)) return;
              } catch (re) {
                Ae = { error: re };
              } finally {
                try {
                  Ue && !Ue.done && (Oe = te.return) && (yield Oe.call(te));
                } finally {
                  if (Ae) throw Ae.error;
                }
              }
              J.complete();
            });
          })(H, J).catch((te) => J.error(te));
        });
      }
    },
    6451: (Ge, he, w) => {
      'use strict';
      w.d(he, { T: () => se });
      var a = w(8189),
        i = w(8421),
        L = w(515),
        Z = w(3269),
        P = w(2076);
      function se(...Y) {
        const xe = (0, Z.yG)(Y),
          ve = (0, Z._6)(Y, 1 / 0),
          ae = Y;
        return ae.length ? (1 === ae.length ? (0, i.Xf)(ae[0]) : (0, a.J)(ve)((0, P.D)(ae, xe))) : L.E;
      }
    },
    9646: (Ge, he, w) => {
      'use strict';
      w.d(he, { of: () => L });
      var a = w(3269),
        i = w(2076);
      function L(...Z) {
        const P = (0, a.yG)(Z);
        return (0, i.D)(Z, P);
      }
    },
    5403: (Ge, he, w) => {
      'use strict';
      w.d(he, { x: () => i });
      var a = w(930);
      function i(Z, P, se, Y, xe) {
        return new L(Z, P, se, Y, xe);
      }
      class L extends a.Lv {
        constructor(P, se, Y, xe, ve, ae) {
          super(P),
            (this.onFinalize = ve),
            (this.shouldUnsubscribe = ae),
            (this._next = se
              ? function (le) {
                  try {
                    se(le);
                  } catch (ge) {
                    P.error(ge);
                  }
                }
              : super._next),
            (this._error = xe
              ? function (le) {
                  try {
                    xe(le);
                  } catch (ge) {
                    P.error(ge);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = Y
              ? function () {
                  try {
                    Y();
                  } catch (le) {
                    P.error(le);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var P;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: se } = this;
            super.unsubscribe(), !se && (null === (P = this.onFinalize) || void 0 === P || P.call(this));
          }
        }
      }
    },
    9300: (Ge, he, w) => {
      'use strict';
      w.d(he, { h: () => L });
      var a = w(4482),
        i = w(5403);
      function L(Z, P) {
        return (0, a.e)((se, Y) => {
          let xe = 0;
          se.subscribe((0, i.x)(Y, (ve) => Z.call(P, ve, xe++) && Y.next(ve)));
        });
      }
    },
    4004: (Ge, he, w) => {
      'use strict';
      w.d(he, { U: () => L });
      var a = w(4482),
        i = w(5403);
      function L(Z, P) {
        return (0, a.e)((se, Y) => {
          let xe = 0;
          se.subscribe(
            (0, i.x)(Y, (ve) => {
              Y.next(Z.call(P, ve, xe++));
            })
          );
        });
      }
    },
    9718: (Ge, he, w) => {
      'use strict';
      w.d(he, { h: () => i });
      var a = w(4004);
      function i(L) {
        return (0, a.U)(() => L);
      }
    },
    8189: (Ge, he, w) => {
      'use strict';
      w.d(he, { J: () => L });
      var a = w(5577),
        i = w(4671);
      function L(Z = 1 / 0) {
        return (0, a.z)(i.y, Z);
      }
    },
    5577: (Ge, he, w) => {
      'use strict';
      w.d(he, { z: () => xe });
      var a = w(4004),
        i = w(8421),
        L = w(4482),
        Z = w(9672),
        P = w(5403),
        Y = w(576);
      function xe(ve, ae, le = 1 / 0) {
        return (0, Y.m)(ae)
          ? xe((ge, Ne) => (0, a.U)((de, ce) => ae(ge, de, Ne, ce))((0, i.Xf)(ve(ge, Ne))), le)
          : ('number' == typeof ae && (le = ae),
            (0, L.e)((ge, Ne) =>
              (function se(ve, ae, le, ge, Ne, de, ce, R) {
                const B = [];
                let ie = 0,
                  K = 0,
                  be = !1;
                const H = () => {
                    be && !B.length && !ie && ae.complete();
                  },
                  J = (Ue) => (ie < ge ? te(Ue) : B.push(Ue)),
                  te = (Ue) => {
                    de && ae.next(Ue), ie++;
                    let Ae = !1;
                    (0, i.Xf)(le(Ue, K++)).subscribe(
                      (0, P.x)(
                        ae,
                        (Oe) => {
                          null == Ne || Ne(Oe), de ? J(Oe) : ae.next(Oe);
                        },
                        () => {
                          Ae = !0;
                        },
                        void 0,
                        () => {
                          if (Ae)
                            try {
                              for (ie--; B.length && ie < ge; ) {
                                const Oe = B.shift();
                                ce ? (0, Z.f)(ae, ce, () => te(Oe)) : te(Oe);
                              }
                              H();
                            } catch (Oe) {
                              ae.error(Oe);
                            }
                        }
                      )
                    );
                  };
                return (
                  ve.subscribe(
                    (0, P.x)(ae, J, () => {
                      (be = !0), H();
                    })
                  ),
                  () => {
                    null == R || R();
                  }
                );
              })(ge, Ne, ve, le)
            ));
      }
    },
    8675: (Ge, he, w) => {
      'use strict';
      w.d(he, { O: () => Z });
      var a = w(7272),
        i = w(3269),
        L = w(4482);
      function Z(...P) {
        const se = (0, i.yG)(P);
        return (0, L.e)((Y, xe) => {
          (se ? (0, a.z)(P, Y, se) : (0, a.z)(P, Y)).subscribe(xe);
        });
      }
    },
    3900: (Ge, he, w) => {
      'use strict';
      w.d(he, { w: () => Z });
      var a = w(8421),
        i = w(4482),
        L = w(5403);
      function Z(P, se) {
        return (0, i.e)((Y, xe) => {
          let ve = null,
            ae = 0,
            le = !1;
          const ge = () => le && !ve && xe.complete();
          Y.subscribe(
            (0, L.x)(
              xe,
              (Ne) => {
                null == ve || ve.unsubscribe();
                let de = 0;
                const ce = ae++;
                (0, a.Xf)(P(Ne, ce)).subscribe(
                  (ve = (0, L.x)(
                    xe,
                    (R) => xe.next(se ? se(Ne, R, ce, de++) : R),
                    () => {
                      (ve = null), ge();
                    }
                  ))
                );
              },
              () => {
                (le = !0), ge();
              }
            )
          );
        });
      }
    },
    5698: (Ge, he, w) => {
      'use strict';
      w.d(he, { q: () => Z });
      var a = w(515),
        i = w(4482),
        L = w(5403);
      function Z(P) {
        return P <= 0
          ? () => a.E
          : (0, i.e)((se, Y) => {
              let xe = 0;
              se.subscribe(
                (0, L.x)(Y, (ve) => {
                  ++xe <= P && (Y.next(ve), P <= xe && Y.complete());
                })
              );
            });
      }
    },
    2722: (Ge, he, w) => {
      'use strict';
      w.d(he, { R: () => P });
      var a = w(4482),
        i = w(5403),
        L = w(8421),
        Z = w(5032);
      function P(se) {
        return (0, a.e)((Y, xe) => {
          (0, L.Xf)(se).subscribe((0, i.x)(xe, () => xe.complete(), Z.Z)), !xe.closed && Y.subscribe(xe);
        });
      }
    },
    8505: (Ge, he, w) => {
      'use strict';
      w.d(he, { b: () => P });
      var a = w(576),
        i = w(4482),
        L = w(5403),
        Z = w(4671);
      function P(se, Y, xe) {
        const ve = (0, a.m)(se) || Y || xe ? { next: se, error: Y, complete: xe } : se;
        return ve
          ? (0, i.e)((ae, le) => {
              var ge;
              null === (ge = ve.subscribe) || void 0 === ge || ge.call(ve);
              let Ne = !0;
              ae.subscribe(
                (0, L.x)(
                  le,
                  (de) => {
                    var ce;
                    null === (ce = ve.next) || void 0 === ce || ce.call(ve, de), le.next(de);
                  },
                  () => {
                    var de;
                    (Ne = !1), null === (de = ve.complete) || void 0 === de || de.call(ve), le.complete();
                  },
                  (de) => {
                    var ce;
                    (Ne = !1), null === (ce = ve.error) || void 0 === ce || ce.call(ve, de), le.error(de);
                  },
                  () => {
                    var de, ce;
                    Ne && (null === (de = ve.unsubscribe) || void 0 === de || de.call(ve)),
                      null === (ce = ve.finalize) || void 0 === ce || ce.call(ve);
                  }
                )
              );
            })
          : Z.y;
      }
    },
    3410: (Ge, he, w) => {
      'use strict';
      w.d(he, { z: () => a });
      const a = {
        setTimeout(i, L, ...Z) {
          const { delegate: P } = a;
          return null != P && P.setTimeout ? P.setTimeout(i, L, ...Z) : setTimeout(i, L, ...Z);
        },
        clearTimeout(i) {
          const { delegate: L } = a;
          return ((null == L ? void 0 : L.clearTimeout) || clearTimeout)(i);
        },
        delegate: void 0
      };
    },
    2202: (Ge, he, w) => {
      'use strict';
      w.d(he, { h: () => i });
      const i = (function a() {
        return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
      })();
    },
    8822: (Ge, he, w) => {
      'use strict';
      w.d(he, { L: () => a });
      const a = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
    },
    3269: (Ge, he, w) => {
      'use strict';
      w.d(he, { _6: () => se, jO: () => Z, yG: () => P });
      var a = w(576),
        i = w(3532);
      function L(Y) {
        return Y[Y.length - 1];
      }
      function Z(Y) {
        return (0, a.m)(L(Y)) ? Y.pop() : void 0;
      }
      function P(Y) {
        return (0, i.K)(L(Y)) ? Y.pop() : void 0;
      }
      function se(Y, xe) {
        return 'number' == typeof L(Y) ? Y.pop() : xe;
      }
    },
    4742: (Ge, he, w) => {
      'use strict';
      w.d(he, { D: () => P });
      const { isArray: a } = Array,
        { getPrototypeOf: i, prototype: L, keys: Z } = Object;
      function P(Y) {
        if (1 === Y.length) {
          const xe = Y[0];
          if (a(xe)) return { args: xe, keys: null };
          if (
            (function se(Y) {
              return Y && 'object' == typeof Y && i(Y) === L;
            })(xe)
          ) {
            const ve = Z(xe);
            return { args: ve.map((ae) => xe[ae]), keys: ve };
          }
        }
        return { args: Y, keys: null };
      }
    },
    8737: (Ge, he, w) => {
      'use strict';
      function a(i, L) {
        if (i) {
          const Z = i.indexOf(L);
          0 <= Z && i.splice(Z, 1);
        }
      }
      w.d(he, { P: () => a });
    },
    3888: (Ge, he, w) => {
      'use strict';
      function a(i) {
        const Z = i((P) => {
          Error.call(P), (P.stack = new Error().stack);
        });
        return (Z.prototype = Object.create(Error.prototype)), (Z.prototype.constructor = Z), Z;
      }
      w.d(he, { d: () => a });
    },
    1810: (Ge, he, w) => {
      'use strict';
      function a(i, L) {
        return i.reduce((Z, P, se) => ((Z[P] = L[se]), Z), {});
      }
      w.d(he, { n: () => a });
    },
    2806: (Ge, he, w) => {
      'use strict';
      w.d(he, { O: () => Z, x: () => L });
      var a = w(2416);
      let i = null;
      function L(P) {
        if (a.v.useDeprecatedSynchronousErrorHandling) {
          const se = !i;
          if ((se && (i = { errorThrown: !1, error: null }), P(), se)) {
            const { errorThrown: Y, error: xe } = i;
            if (((i = null), Y)) throw xe;
          }
        } else P();
      }
      function Z(P) {
        a.v.useDeprecatedSynchronousErrorHandling && i && ((i.errorThrown = !0), (i.error = P));
      }
    },
    9672: (Ge, he, w) => {
      'use strict';
      function a(i, L, Z, P = 0, se = !1) {
        const Y = L.schedule(function () {
          Z(), se ? i.add(this.schedule(null, P)) : this.unsubscribe();
        }, P);
        if ((i.add(Y), !se)) return Y;
      }
      w.d(he, { f: () => a });
    },
    4671: (Ge, he, w) => {
      'use strict';
      function a(i) {
        return i;
      }
      w.d(he, { y: () => a });
    },
    1144: (Ge, he, w) => {
      'use strict';
      w.d(he, { z: () => a });
      const a = (i) => i && 'number' == typeof i.length && 'function' != typeof i;
    },
    2206: (Ge, he, w) => {
      'use strict';
      w.d(he, { D: () => i });
      var a = w(576);
      function i(L) {
        return Symbol.asyncIterator && (0, a.m)(null == L ? void 0 : L[Symbol.asyncIterator]);
      }
    },
    576: (Ge, he, w) => {
      'use strict';
      function a(i) {
        return 'function' == typeof i;
      }
      w.d(he, { m: () => a });
    },
    3670: (Ge, he, w) => {
      'use strict';
      w.d(he, { c: () => L });
      var a = w(8822),
        i = w(576);
      function L(Z) {
        return (0, i.m)(Z[a.L]);
      }
    },
    6495: (Ge, he, w) => {
      'use strict';
      w.d(he, { T: () => L });
      var a = w(2202),
        i = w(576);
      function L(Z) {
        return (0, i.m)(null == Z ? void 0 : Z[a.h]);
      }
    },
    8239: (Ge, he, w) => {
      'use strict';
      w.d(he, { t: () => i });
      var a = w(576);
      function i(L) {
        return (0, a.m)(null == L ? void 0 : L.then);
      }
    },
    3260: (Ge, he, w) => {
      'use strict';
      w.d(he, { L: () => Z, Q: () => L });
      var a = w(7582),
        i = w(576);
      function L(P) {
        return (0, a.FC)(this, arguments, function* () {
          const Y = P.getReader();
          try {
            for (;;) {
              const { value: xe, done: ve } = yield (0, a.qq)(Y.read());
              if (ve) return yield (0, a.qq)(void 0);
              yield yield (0, a.qq)(xe);
            }
          } finally {
            Y.releaseLock();
          }
        });
      }
      function Z(P) {
        return (0, i.m)(null == P ? void 0 : P.getReader);
      }
    },
    3532: (Ge, he, w) => {
      'use strict';
      w.d(he, { K: () => i });
      var a = w(576);
      function i(L) {
        return L && (0, a.m)(L.schedule);
      }
    },
    4482: (Ge, he, w) => {
      'use strict';
      w.d(he, { A: () => i, e: () => L });
      var a = w(576);
      function i(Z) {
        return (0, a.m)(null == Z ? void 0 : Z.lift);
      }
      function L(Z) {
        return (P) => {
          if (i(P))
            return P.lift(function (se) {
              try {
                return Z(se, this);
              } catch (Y) {
                this.error(Y);
              }
            });
          throw new TypeError('Unable to lift unknown Observable type');
        };
      }
    },
    3268: (Ge, he, w) => {
      'use strict';
      w.d(he, { Z: () => Z });
      var a = w(4004);
      const { isArray: i } = Array;
      function Z(P) {
        return (0, a.U)((se) =>
          (function L(P, se) {
            return i(se) ? P(...se) : P(se);
          })(P, se)
        );
      }
    },
    5032: (Ge, he, w) => {
      'use strict';
      function a() {}
      w.d(he, { Z: () => a });
    },
    9635: (Ge, he, w) => {
      'use strict';
      w.d(he, { U: () => L, z: () => i });
      var a = w(4671);
      function i(...Z) {
        return L(Z);
      }
      function L(Z) {
        return 0 === Z.length
          ? a.y
          : 1 === Z.length
          ? Z[0]
          : function (se) {
              return Z.reduce((Y, xe) => xe(Y), se);
            };
      }
    },
    7849: (Ge, he, w) => {
      'use strict';
      w.d(he, { h: () => L });
      var a = w(2416),
        i = w(3410);
      function L(Z) {
        i.z.setTimeout(() => {
          const { onUnhandledError: P } = a.v;
          if (!P) throw Z;
          P(Z);
        });
      }
    },
    4532: (Ge, he, w) => {
      'use strict';
      function a(i) {
        return new TypeError(
          `You provided ${
            null !== i && 'object' == typeof i ? 'an invalid object' : `'${i}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
        );
      }
      w.d(he, { z: () => a });
    },
    9808: (Ge, he, w) => {
      'use strict';
      w.d(he, {
        Do: () => be,
        EM: () => or,
        HT: () => P,
        JF: () => fi,
        JJ: () => Er,
        K0: () => Y,
        Mn: () => Ze,
        Mx: () => Bn,
        NF: () => Fr,
        O5: () => An,
        PC: () => Wr,
        S$: () => B,
        Tn: () => j,
        UT: () => G,
        V_: () => ae,
        Ye: () => H,
        b0: () => K,
        bD: () => Bo,
        ez: () => Mr,
        mk: () => lt,
        p6: () => en,
        q: () => L,
        rS: () => Vo,
        sg: () => Vt,
        tP: () => Sn,
        w_: () => se,
        x: () => Te
      });
      var a = w(4893);
      let i = null;
      function L() {
        return i;
      }
      function P(p) {
        i || (i = p);
      }
      class se {}
      const Y = new a.OlP('DocumentToken');
      let xe = (() => {
        class p {
          historyGo(_) {
            throw new Error('Not implemented');
          }
        }
        return (
          (p.ɵfac = function (_) {
            return new (_ || p)();
          }),
          (p.ɵprov = a.Yz7({
            token: p,
            factory: function () {
              return (function ve() {
                return (0, a.LFG)(le);
              })();
            },
            providedIn: 'platform'
          })),
          p
        );
      })();
      const ae = new a.OlP('Location Initialized');
      let le = (() => {
        class p extends xe {
          constructor(_) {
            super(), (this._doc = _), this._init();
          }
          _init() {
            (this.location = window.location), (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return L().getBaseHref(this._doc);
          }
          onPopState(_) {
            const x = L().getGlobalEventTarget(this._doc, 'window');
            return x.addEventListener('popstate', _, !1), () => x.removeEventListener('popstate', _);
          }
          onHashChange(_) {
            const x = L().getGlobalEventTarget(this._doc, 'window');
            return x.addEventListener('hashchange', _, !1), () => x.removeEventListener('hashchange', _);
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(_) {
            this.location.pathname = _;
          }
          pushState(_, x, F) {
            ge() ? this._history.pushState(_, x, F) : (this.location.hash = F);
          }
          replaceState(_, x, F) {
            ge() ? this._history.replaceState(_, x, F) : (this.location.hash = F);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          historyGo(_ = 0) {
            this._history.go(_);
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (p.ɵfac = function (_) {
            return new (_ || p)(a.LFG(Y));
          }),
          (p.ɵprov = a.Yz7({
            token: p,
            factory: function () {
              return (function Ne() {
                return new le((0, a.LFG)(Y));
              })();
            },
            providedIn: 'platform'
          })),
          p
        );
      })();
      function ge() {
        return !!window.history.pushState;
      }
      function de(p, b) {
        if (0 == p.length) return b;
        if (0 == b.length) return p;
        let _ = 0;
        return (
          p.endsWith('/') && _++, b.startsWith('/') && _++, 2 == _ ? p + b.substring(1) : 1 == _ ? p + b : p + '/' + b
        );
      }
      function ce(p) {
        const b = p.match(/#|\?|$/),
          _ = (b && b.index) || p.length;
        return p.slice(0, _ - ('/' === p[_ - 1] ? 1 : 0)) + p.slice(_);
      }
      function R(p) {
        return p && '?' !== p[0] ? '?' + p : p;
      }
      let B = (() => {
        class p {
          historyGo(_) {
            throw new Error('Not implemented');
          }
        }
        return (
          (p.ɵfac = function (_) {
            return new (_ || p)();
          }),
          (p.ɵprov = a.Yz7({
            token: p,
            factory: function () {
              return (0, a.f3M)(K);
            },
            providedIn: 'root'
          })),
          p
        );
      })();
      const ie = new a.OlP('appBaseHref');
      let K = (() => {
          class p extends B {
            constructor(_, x) {
              var F, oe, _e;
              super(),
                (this._platformLocation = _),
                (this._removeListenerFns = []),
                (this._baseHref =
                  null !==
                    (_e =
                      null !== (F = null != x ? x : this._platformLocation.getBaseHrefFromDOM()) && void 0 !== F
                        ? F
                        : null === (oe = (0, a.f3M)(Y).location) || void 0 === oe
                        ? void 0
                        : oe.origin) && void 0 !== _e
                    ? _e
                    : '');
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; ) this._removeListenerFns.pop()();
            }
            onPopState(_) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(_),
                this._platformLocation.onHashChange(_)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(_) {
              return de(this._baseHref, _);
            }
            path(_ = !1) {
              const x = this._platformLocation.pathname + R(this._platformLocation.search),
                F = this._platformLocation.hash;
              return F && _ ? `${x}${F}` : x;
            }
            pushState(_, x, F, oe) {
              const _e = this.prepareExternalUrl(F + R(oe));
              this._platformLocation.pushState(_, x, _e);
            }
            replaceState(_, x, F, oe) {
              const _e = this.prepareExternalUrl(F + R(oe));
              this._platformLocation.replaceState(_, x, _e);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(_ = 0) {
              var x, F;
              null === (F = (x = this._platformLocation).historyGo) || void 0 === F || F.call(x, _);
            }
          }
          return (
            (p.ɵfac = function (_) {
              return new (_ || p)(a.LFG(xe), a.LFG(ie, 8));
            }),
            (p.ɵprov = a.Yz7({ token: p, factory: p.ɵfac, providedIn: 'root' })),
            p
          );
        })(),
        be = (() => {
          class p extends B {
            constructor(_, x) {
              super(),
                (this._platformLocation = _),
                (this._baseHref = ''),
                (this._removeListenerFns = []),
                null != x && (this._baseHref = x);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; ) this._removeListenerFns.pop()();
            }
            onPopState(_) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(_),
                this._platformLocation.onHashChange(_)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(_ = !1) {
              let x = this._platformLocation.hash;
              return null == x && (x = '#'), x.length > 0 ? x.substring(1) : x;
            }
            prepareExternalUrl(_) {
              const x = de(this._baseHref, _);
              return x.length > 0 ? '#' + x : x;
            }
            pushState(_, x, F, oe) {
              let _e = this.prepareExternalUrl(F + R(oe));
              0 == _e.length && (_e = this._platformLocation.pathname), this._platformLocation.pushState(_, x, _e);
            }
            replaceState(_, x, F, oe) {
              let _e = this.prepareExternalUrl(F + R(oe));
              0 == _e.length && (_e = this._platformLocation.pathname), this._platformLocation.replaceState(_, x, _e);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(_ = 0) {
              var x, F;
              null === (F = (x = this._platformLocation).historyGo) || void 0 === F || F.call(x, _);
            }
          }
          return (
            (p.ɵfac = function (_) {
              return new (_ || p)(a.LFG(xe), a.LFG(ie, 8));
            }),
            (p.ɵprov = a.Yz7({ token: p, factory: p.ɵfac })),
            p
          );
        })(),
        H = (() => {
          class p {
            constructor(_) {
              (this._subject = new a.vpe()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = _);
              const x = this._locationStrategy.getBaseHref();
              (this._baseHref = ce(Ue(x))),
                this._locationStrategy.onPopState((F) => {
                  this._subject.emit({ url: this.path(!0), pop: !0, state: F.state, type: F.type });
                });
            }
            ngOnDestroy() {
              var _;
              null === (_ = this._urlChangeSubscription) || void 0 === _ || _.unsubscribe(),
                (this._urlChangeListeners = []);
            }
            path(_ = !1) {
              return this.normalize(this._locationStrategy.path(_));
            }
            getState() {
              return this._locationStrategy.getState();
            }
            isCurrentPathEqualTo(_, x = '') {
              return this.path() == this.normalize(_ + R(x));
            }
            normalize(_) {
              return p.stripTrailingSlash(
                (function te(p, b) {
                  return p && b.startsWith(p) ? b.substring(p.length) : b;
                })(this._baseHref, Ue(_))
              );
            }
            prepareExternalUrl(_) {
              return _ && '/' !== _[0] && (_ = '/' + _), this._locationStrategy.prepareExternalUrl(_);
            }
            go(_, x = '', F = null) {
              this._locationStrategy.pushState(F, '', _, x),
                this._notifyUrlChangeListeners(this.prepareExternalUrl(_ + R(x)), F);
            }
            replaceState(_, x = '', F = null) {
              this._locationStrategy.replaceState(F, '', _, x),
                this._notifyUrlChangeListeners(this.prepareExternalUrl(_ + R(x)), F);
            }
            forward() {
              this._locationStrategy.forward();
            }
            back() {
              this._locationStrategy.back();
            }
            historyGo(_ = 0) {
              var x, F;
              null === (F = (x = this._locationStrategy).historyGo) || void 0 === F || F.call(x, _);
            }
            onUrlChange(_) {
              return (
                this._urlChangeListeners.push(_),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((x) => {
                    this._notifyUrlChangeListeners(x.url, x.state);
                  })),
                () => {
                  var x;
                  const F = this._urlChangeListeners.indexOf(_);
                  this._urlChangeListeners.splice(F, 1),
                    0 === this._urlChangeListeners.length &&
                      (null === (x = this._urlChangeSubscription) || void 0 === x || x.unsubscribe(),
                      (this._urlChangeSubscription = null));
                }
              );
            }
            _notifyUrlChangeListeners(_ = '', x) {
              this._urlChangeListeners.forEach((F) => F(_, x));
            }
            subscribe(_, x, F) {
              return this._subject.subscribe({ next: _, error: x, complete: F });
            }
          }
          return (
            (p.normalizeQueryParams = R),
            (p.joinWithSlash = de),
            (p.stripTrailingSlash = ce),
            (p.ɵfac = function (_) {
              return new (_ || p)(a.LFG(B));
            }),
            (p.ɵprov = a.Yz7({
              token: p,
              factory: function () {
                return (function J() {
                  return new H((0, a.LFG)(B));
                })();
              },
              providedIn: 'root'
            })),
            p
          );
        })();
      function Ue(p) {
        return p.replace(/\/index.html$/, '');
      }
      var Oe = (() => (
          ((Oe = Oe || {})[(Oe.Decimal = 0)] = 'Decimal'),
          (Oe[(Oe.Percent = 1)] = 'Percent'),
          (Oe[(Oe.Currency = 2)] = 'Currency'),
          (Oe[(Oe.Scientific = 3)] = 'Scientific'),
          Oe
        ))(),
        Te = (() => (((Te = Te || {})[(Te.Format = 0)] = 'Format'), (Te[(Te.Standalone = 1)] = 'Standalone'), Te))(),
        j = (() => (
          ((j = j || {})[(j.Narrow = 0)] = 'Narrow'),
          (j[(j.Abbreviated = 1)] = 'Abbreviated'),
          (j[(j.Wide = 2)] = 'Wide'),
          (j[(j.Short = 3)] = 'Short'),
          j
        ))(),
        Fe = (() => (
          ((Fe = Fe || {})[(Fe.Short = 0)] = 'Short'),
          (Fe[(Fe.Medium = 1)] = 'Medium'),
          (Fe[(Fe.Long = 2)] = 'Long'),
          (Fe[(Fe.Full = 3)] = 'Full'),
          Fe
        ))(),
        X = (() => (
          ((X = X || {})[(X.Decimal = 0)] = 'Decimal'),
          (X[(X.Group = 1)] = 'Group'),
          (X[(X.List = 2)] = 'List'),
          (X[(X.PercentSign = 3)] = 'PercentSign'),
          (X[(X.PlusSign = 4)] = 'PlusSign'),
          (X[(X.MinusSign = 5)] = 'MinusSign'),
          (X[(X.Exponential = 6)] = 'Exponential'),
          (X[(X.SuperscriptingExponent = 7)] = 'SuperscriptingExponent'),
          (X[(X.PerMille = 8)] = 'PerMille'),
          (X[(X.Infinity = 9)] = 'Infinity'),
          (X[(X.NaN = 10)] = 'NaN'),
          (X[(X.TimeSeparator = 11)] = 'TimeSeparator'),
          (X[(X.CurrencyDecimal = 12)] = 'CurrencyDecimal'),
          (X[(X.CurrencyGroup = 13)] = 'CurrencyGroup'),
          X
        ))();
      function Ze(p, b, _) {
        const x = (0, a.cg1)(p),
          oe = Bt([x[a.wAp.DaysFormat], x[a.wAp.DaysStandalone]], b);
        return Bt(oe, _);
      }
      function G(p, b, _) {
        const x = (0, a.cg1)(p),
          oe = Bt([x[a.wAp.MonthsFormat], x[a.wAp.MonthsStandalone]], b);
        return Bt(oe, _);
      }
      function De(p, b) {
        return Bt((0, a.cg1)(p)[a.wAp.DateFormat], b);
      }
      function pe(p, b) {
        return Bt((0, a.cg1)(p)[a.wAp.TimeFormat], b);
      }
      function Je(p, b) {
        return Bt((0, a.cg1)(p)[a.wAp.DateTimeFormat], b);
      }
      function et(p, b) {
        const _ = (0, a.cg1)(p),
          x = _[a.wAp.NumberSymbols][b];
        if (void 0 === x) {
          if (b === X.CurrencyDecimal) return _[a.wAp.NumberSymbols][X.Decimal];
          if (b === X.CurrencyGroup) return _[a.wAp.NumberSymbols][X.Group];
        }
        return x;
      }
      function Jt(p) {
        if (!p[a.wAp.ExtraData])
          throw new Error(
            `Missing extra locale data for the locale "${
              p[a.wAp.LocaleId]
            }". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`
          );
      }
      function Bt(p, b) {
        for (let _ = b; _ > -1; _--) if (void 0 !== p[_]) return p[_];
        throw new Error('Locale data API: locale data undefined');
      }
      function Cn(p) {
        const [b, _] = p.split(':');
        return { hours: +b, minutes: +_ };
      }
      const lr =
          /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
        er = {},
        qt =
          /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
      var St = (() => (
          ((St = St || {})[(St.Short = 0)] = 'Short'),
          (St[(St.ShortGMT = 1)] = 'ShortGMT'),
          (St[(St.Long = 2)] = 'Long'),
          (St[(St.Extended = 3)] = 'Extended'),
          St
        ))(),
        Xe = (() => (
          ((Xe = Xe || {})[(Xe.FullYear = 0)] = 'FullYear'),
          (Xe[(Xe.Month = 1)] = 'Month'),
          (Xe[(Xe.Date = 2)] = 'Date'),
          (Xe[(Xe.Hours = 3)] = 'Hours'),
          (Xe[(Xe.Minutes = 4)] = 'Minutes'),
          (Xe[(Xe.Seconds = 5)] = 'Seconds'),
          (Xe[(Xe.FractionalSeconds = 6)] = 'FractionalSeconds'),
          (Xe[(Xe.Day = 7)] = 'Day'),
          Xe
        ))(),
        tt = (() => (
          ((tt = tt || {})[(tt.DayPeriods = 0)] = 'DayPeriods'),
          (tt[(tt.Days = 1)] = 'Days'),
          (tt[(tt.Months = 2)] = 'Months'),
          (tt[(tt.Eras = 3)] = 'Eras'),
          tt
        ))();
      function en(p, b, _, x) {
        let F = (function Ln(p) {
          if (Vn(p)) return p;
          if ('number' == typeof p && !isNaN(p)) return new Date(p);
          if ('string' == typeof p) {
            if (((p = p.trim()), /^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(p))) {
              const [F, oe = 1, _e = 1] = p.split('-').map((ze) => +ze);
              return Pn(F, oe - 1, _e);
            }
            const _ = parseFloat(p);
            if (!isNaN(p - _)) return new Date(_);
            let x;
            if ((x = p.match(lr)))
              return (function nr(p) {
                const b = new Date(0);
                let _ = 0,
                  x = 0;
                const F = p[8] ? b.setUTCFullYear : b.setFullYear,
                  oe = p[8] ? b.setUTCHours : b.setHours;
                p[9] && ((_ = Number(p[9] + p[10])), (x = Number(p[9] + p[11]))),
                  F.call(b, Number(p[1]), Number(p[2]) - 1, Number(p[3]));
                const _e = Number(p[4] || 0) - _,
                  ze = Number(p[5] || 0) - x,
                  bt = Number(p[6] || 0),
                  wt = Math.floor(1e3 * parseFloat('0.' + (p[7] || 0)));
                return oe.call(b, _e, ze, bt, wt), b;
              })(x);
          }
          const b = new Date(p);
          if (!Vn(b)) throw new Error(`Unable to convert "${p}" into a date`);
          return b;
        })(p);
        b = $t(_, b) || b;
        let ze,
          _e = [];
        for (; b; ) {
          if (((ze = qt.exec(b)), !ze)) {
            _e.push(b);
            break;
          }
          {
            _e = _e.concat(ze.slice(1));
            const Et = _e.pop();
            if (!Et) break;
            b = Et;
          }
        }
        let bt = F.getTimezoneOffset();
        x &&
          ((bt = Me(x, bt)),
          (F = (function Gt(p, b, _) {
            const x = _ ? -1 : 1,
              F = p.getTimezoneOffset();
            return (function ke(p, b) {
              return (p = new Date(p.getTime())).setMinutes(p.getMinutes() + b), p;
            })(p, x * (Me(b, F) - F));
          })(F, x, !0)));
        let wt = '';
        return (
          _e.forEach((Et) => {
            const yt = (function I(p) {
              if (Ie[p]) return Ie[p];
              let b;
              switch (p) {
                case 'G':
                case 'GG':
                case 'GGG':
                  b = Ke(tt.Eras, j.Abbreviated);
                  break;
                case 'GGGG':
                  b = Ke(tt.Eras, j.Wide);
                  break;
                case 'GGGGG':
                  b = Ke(tt.Eras, j.Narrow);
                  break;
                case 'y':
                  b = Ye(Xe.FullYear, 1, 0, !1, !0);
                  break;
                case 'yy':
                  b = Ye(Xe.FullYear, 2, 0, !0, !0);
                  break;
                case 'yyy':
                  b = Ye(Xe.FullYear, 3, 0, !1, !0);
                  break;
                case 'yyyy':
                  b = Ye(Xe.FullYear, 4, 0, !1, !0);
                  break;
                case 'Y':
                  b = k(1);
                  break;
                case 'YY':
                  b = k(2, !0);
                  break;
                case 'YYY':
                  b = k(3);
                  break;
                case 'YYYY':
                  b = k(4);
                  break;
                case 'M':
                case 'L':
                  b = Ye(Xe.Month, 1, 1);
                  break;
                case 'MM':
                case 'LL':
                  b = Ye(Xe.Month, 2, 1);
                  break;
                case 'MMM':
                  b = Ke(tt.Months, j.Abbreviated);
                  break;
                case 'MMMM':
                  b = Ke(tt.Months, j.Wide);
                  break;
                case 'MMMMM':
                  b = Ke(tt.Months, j.Narrow);
                  break;
                case 'LLL':
                  b = Ke(tt.Months, j.Abbreviated, Te.Standalone);
                  break;
                case 'LLLL':
                  b = Ke(tt.Months, j.Wide, Te.Standalone);
                  break;
                case 'LLLLL':
                  b = Ke(tt.Months, j.Narrow, Te.Standalone);
                  break;
                case 'w':
                  b = Mn(1);
                  break;
                case 'ww':
                  b = Mn(2);
                  break;
                case 'W':
                  b = Mn(1, !0);
                  break;
                case 'd':
                  b = Ye(Xe.Date, 1);
                  break;
                case 'dd':
                  b = Ye(Xe.Date, 2);
                  break;
                case 'c':
                case 'cc':
                  b = Ye(Xe.Day, 1);
                  break;
                case 'ccc':
                  b = Ke(tt.Days, j.Abbreviated, Te.Standalone);
                  break;
                case 'cccc':
                  b = Ke(tt.Days, j.Wide, Te.Standalone);
                  break;
                case 'ccccc':
                  b = Ke(tt.Days, j.Narrow, Te.Standalone);
                  break;
                case 'cccccc':
                  b = Ke(tt.Days, j.Short, Te.Standalone);
                  break;
                case 'E':
                case 'EE':
                case 'EEE':
                  b = Ke(tt.Days, j.Abbreviated);
                  break;
                case 'EEEE':
                  b = Ke(tt.Days, j.Wide);
                  break;
                case 'EEEEE':
                  b = Ke(tt.Days, j.Narrow);
                  break;
                case 'EEEEEE':
                  b = Ke(tt.Days, j.Short);
                  break;
                case 'a':
                case 'aa':
                case 'aaa':
                  b = Ke(tt.DayPeriods, j.Abbreviated);
                  break;
                case 'aaaa':
                  b = Ke(tt.DayPeriods, j.Wide);
                  break;
                case 'aaaaa':
                  b = Ke(tt.DayPeriods, j.Narrow);
                  break;
                case 'b':
                case 'bb':
                case 'bbb':
                  b = Ke(tt.DayPeriods, j.Abbreviated, Te.Standalone, !0);
                  break;
                case 'bbbb':
                  b = Ke(tt.DayPeriods, j.Wide, Te.Standalone, !0);
                  break;
                case 'bbbbb':
                  b = Ke(tt.DayPeriods, j.Narrow, Te.Standalone, !0);
                  break;
                case 'B':
                case 'BB':
                case 'BBB':
                  b = Ke(tt.DayPeriods, j.Abbreviated, Te.Format, !0);
                  break;
                case 'BBBB':
                  b = Ke(tt.DayPeriods, j.Wide, Te.Format, !0);
                  break;
                case 'BBBBB':
                  b = Ke(tt.DayPeriods, j.Narrow, Te.Format, !0);
                  break;
                case 'h':
                  b = Ye(Xe.Hours, 1, -12);
                  break;
                case 'hh':
                  b = Ye(Xe.Hours, 2, -12);
                  break;
                case 'H':
                  b = Ye(Xe.Hours, 1);
                  break;
                case 'HH':
                  b = Ye(Xe.Hours, 2);
                  break;
                case 'm':
                  b = Ye(Xe.Minutes, 1);
                  break;
                case 'mm':
                  b = Ye(Xe.Minutes, 2);
                  break;
                case 's':
                  b = Ye(Xe.Seconds, 1);
                  break;
                case 'ss':
                  b = Ye(Xe.Seconds, 2);
                  break;
                case 'S':
                  b = Ye(Xe.FractionalSeconds, 1);
                  break;
                case 'SS':
                  b = Ye(Xe.FractionalSeconds, 2);
                  break;
                case 'SSS':
                  b = Ye(Xe.FractionalSeconds, 3);
                  break;
                case 'Z':
                case 'ZZ':
                case 'ZZZ':
                  b = kn(St.Short);
                  break;
                case 'ZZZZZ':
                  b = kn(St.Extended);
                  break;
                case 'O':
                case 'OO':
                case 'OOO':
                case 'z':
                case 'zz':
                case 'zzz':
                  b = kn(St.ShortGMT);
                  break;
                case 'OOOO':
                case 'ZZZZ':
                case 'zzzz':
                  b = kn(St.Long);
                  break;
                default:
                  return null;
              }
              return (Ie[p] = b), b;
            })(Et);
            wt += yt ? yt(F, _, bt) : "''" === Et ? "'" : Et.replace(/(^'|'$)/g, '').replace(/''/g, "'");
          }),
          wt
        );
      }
      function Pn(p, b, _) {
        const x = new Date(0);
        return x.setFullYear(p, b, _), x.setHours(0, 0, 0), x;
      }
      function $t(p, b) {
        const _ = (function Re(p) {
          return (0, a.cg1)(p)[a.wAp.LocaleId];
        })(p);
        if (((er[_] = er[_] || {}), er[_][b])) return er[_][b];
        let x = '';
        switch (b) {
          case 'shortDate':
            x = De(p, Fe.Short);
            break;
          case 'mediumDate':
            x = De(p, Fe.Medium);
            break;
          case 'longDate':
            x = De(p, Fe.Long);
            break;
          case 'fullDate':
            x = De(p, Fe.Full);
            break;
          case 'shortTime':
            x = pe(p, Fe.Short);
            break;
          case 'mediumTime':
            x = pe(p, Fe.Medium);
            break;
          case 'longTime':
            x = pe(p, Fe.Long);
            break;
          case 'fullTime':
            x = pe(p, Fe.Full);
            break;
          case 'short':
            const F = $t(p, 'shortTime'),
              oe = $t(p, 'shortDate');
            x = tn(Je(p, Fe.Short), [F, oe]);
            break;
          case 'medium':
            const _e = $t(p, 'mediumTime'),
              ze = $t(p, 'mediumDate');
            x = tn(Je(p, Fe.Medium), [_e, ze]);
            break;
          case 'long':
            const bt = $t(p, 'longTime'),
              wt = $t(p, 'longDate');
            x = tn(Je(p, Fe.Long), [bt, wt]);
            break;
          case 'full':
            const Et = $t(p, 'fullTime'),
              yt = $t(p, 'fullDate');
            x = tn(Je(p, Fe.Full), [Et, yt]);
        }
        return x && (er[_][b] = x), x;
      }
      function tn(p, b) {
        return (
          b &&
            (p = p.replace(/\{([^}]+)}/g, function (_, x) {
              return null != b && x in b ? b[x] : _;
            })),
          p
        );
      }
      function gt(p, b, _ = '-', x, F) {
        let oe = '';
        (p < 0 || (F && p <= 0)) && (F ? (p = 1 - p) : ((p = -p), (oe = _)));
        let _e = String(p);
        for (; _e.length < b; ) _e = '0' + _e;
        return x && (_e = _e.slice(_e.length - b)), oe + _e;
      }
      function Ye(p, b, _ = 0, x = !1, F = !1) {
        return function (oe, _e) {
          let ze = (function bn(p, b) {
            switch (p) {
              case Xe.FullYear:
                return b.getFullYear();
              case Xe.Month:
                return b.getMonth();
              case Xe.Date:
                return b.getDate();
              case Xe.Hours:
                return b.getHours();
              case Xe.Minutes:
                return b.getMinutes();
              case Xe.Seconds:
                return b.getSeconds();
              case Xe.FractionalSeconds:
                return b.getMilliseconds();
              case Xe.Day:
                return b.getDay();
              default:
                throw new Error(`Unknown DateType value "${p}".`);
            }
          })(p, oe);
          if (((_ > 0 || ze > -_) && (ze += _), p === Xe.Hours)) 0 === ze && -12 === _ && (ze = 12);
          else if (p === Xe.FractionalSeconds)
            return (function Tn(p, b) {
              return gt(p, 3).substring(0, b);
            })(ze, b);
          const bt = et(_e, X.MinusSign);
          return gt(ze, b, bt, x, F);
        };
      }
      function Ke(p, b, _ = Te.Format, x = !1) {
        return function (F, oe) {
          return (function wn(p, b, _, x, F, oe) {
            switch (_) {
              case tt.Months:
                return G(b, F, x)[p.getMonth()];
              case tt.Days:
                return Ze(b, F, x)[p.getDay()];
              case tt.DayPeriods:
                const _e = p.getHours(),
                  ze = p.getMinutes();
                if (oe) {
                  const wt = (function Kt(p) {
                      const b = (0, a.cg1)(p);
                      return (
                        Jt(b),
                        (b[a.wAp.ExtraData][2] || []).map((x) => ('string' == typeof x ? Cn(x) : [Cn(x[0]), Cn(x[1])]))
                      );
                    })(b),
                    Et = (function Nt(p, b, _) {
                      const x = (0, a.cg1)(p);
                      Jt(x);
                      const oe = Bt([x[a.wAp.ExtraData][0], x[a.wAp.ExtraData][1]], b) || [];
                      return Bt(oe, _) || [];
                    })(b, F, x),
                    yt = wt.findIndex((zt) => {
                      if (Array.isArray(zt)) {
                        const [Dt, rn] = zt,
                          Nn = _e >= Dt.hours && ze >= Dt.minutes,
                          Qn = _e < rn.hours || (_e === rn.hours && ze < rn.minutes);
                        if (Dt.hours < rn.hours) {
                          if (Nn && Qn) return !0;
                        } else if (Nn || Qn) return !0;
                      } else if (zt.hours === _e && zt.minutes === ze) return !0;
                      return !1;
                    });
                  if (-1 !== yt) return Et[yt];
                }
                return (function Ce(p, b, _) {
                  const x = (0, a.cg1)(p),
                    oe = Bt([x[a.wAp.DayPeriodsFormat], x[a.wAp.DayPeriodsStandalone]], b);
                  return Bt(oe, _);
                })(b, F, x)[_e < 12 ? 0 : 1];
              case tt.Eras:
                return (function ee(p, b) {
                  return Bt((0, a.cg1)(p)[a.wAp.Eras], b);
                })(b, x)[p.getFullYear() <= 0 ? 0 : 1];
              default:
                throw new Error(`unexpected translation type ${_}`);
            }
          })(F, oe, p, b, _, x);
        };
      }
      function kn(p) {
        return function (b, _, x) {
          const F = -1 * x,
            oe = et(_, X.MinusSign),
            _e = F > 0 ? Math.floor(F / 60) : Math.ceil(F / 60);
          switch (p) {
            case St.Short:
              return (F >= 0 ? '+' : '') + gt(_e, 2, oe) + gt(Math.abs(F % 60), 2, oe);
            case St.ShortGMT:
              return 'GMT' + (F >= 0 ? '+' : '') + gt(_e, 1, oe);
            case St.Long:
              return 'GMT' + (F >= 0 ? '+' : '') + gt(_e, 2, oe) + ':' + gt(Math.abs(F % 60), 2, oe);
            case St.Extended:
              return 0 === x ? 'Z' : (F >= 0 ? '+' : '') + gt(_e, 2, oe) + ':' + gt(Math.abs(F % 60), 2, oe);
            default:
              throw new Error(`Unknown zone width "${p}"`);
          }
        };
      }
      function xn(p) {
        return Pn(p.getFullYear(), p.getMonth(), p.getDate() + (4 - p.getDay()));
      }
      function Mn(p, b = !1) {
        return function (_, x) {
          let F;
          if (b) {
            const oe = new Date(_.getFullYear(), _.getMonth(), 1).getDay() - 1,
              _e = _.getDate();
            F = 1 + Math.floor((_e + oe) / 7);
          } else {
            const oe = xn(_),
              _e = (function En(p) {
                const b = Pn(p, 0, 1).getDay();
                return Pn(p, 0, 1 + (b <= 4 ? 4 : 11) - b);
              })(oe.getFullYear()),
              ze = oe.getTime() - _e.getTime();
            F = 1 + Math.round(ze / 6048e5);
          }
          return gt(F, p, et(x, X.MinusSign));
        };
      }
      function k(p, b = !1) {
        return function (_, x) {
          return gt(xn(_).getFullYear(), p, et(x, X.MinusSign), b);
        };
      }
      const Ie = {};
      function Me(p, b) {
        p = p.replace(/:/g, '');
        const _ = Date.parse('Jan 01, 1970 00:00:00 ' + p) / 6e4;
        return isNaN(_) ? b : _;
      }
      function Vn(p) {
        return p instanceof Date && !isNaN(p.valueOf());
      }
      const _t = /^(\d+)?\.((\d+)(-(\d+))?)?$/,
        $ = '.',
        U = '0';
      function fn(p) {
        const b = parseInt(p);
        if (isNaN(b)) throw new Error('Invalid integer literal when parsing ' + p);
        return b;
      }
      function Bn(p, b) {
        b = encodeURIComponent(b);
        for (const _ of p.split(';')) {
          const x = _.indexOf('='),
            [F, oe] = -1 == x ? [_, ''] : [_.slice(0, x), _.slice(x + 1)];
          if (F.trim() === b) return decodeURIComponent(oe);
        }
        return null;
      }
      let lt = (() => {
        class p {
          constructor(_, x, F, oe) {
            (this._iterableDiffers = _),
              (this._keyValueDiffers = x),
              (this._ngEl = F),
              (this._renderer = oe),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._initialClasses = []),
              (this._rawClass = null);
          }
          set klass(_) {
            this._removeClasses(this._initialClasses),
              (this._initialClasses = 'string' == typeof _ ? _.split(/\s+/) : []),
              this._applyClasses(this._initialClasses),
              this._applyClasses(this._rawClass);
          }
          set ngClass(_) {
            this._removeClasses(this._rawClass),
              this._applyClasses(this._initialClasses),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._rawClass = 'string' == typeof _ ? _.split(/\s+/) : _),
              this._rawClass &&
                ((0, a.sIi)(this._rawClass)
                  ? (this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create())
                  : (this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create()));
          }
          ngDoCheck() {
            if (this._iterableDiffer) {
              const _ = this._iterableDiffer.diff(this._rawClass);
              _ && this._applyIterableChanges(_);
            } else if (this._keyValueDiffer) {
              const _ = this._keyValueDiffer.diff(this._rawClass);
              _ && this._applyKeyValueChanges(_);
            }
          }
          _applyKeyValueChanges(_) {
            _.forEachAddedItem((x) => this._toggleClass(x.key, x.currentValue)),
              _.forEachChangedItem((x) => this._toggleClass(x.key, x.currentValue)),
              _.forEachRemovedItem((x) => {
                x.previousValue && this._toggleClass(x.key, !1);
              });
          }
          _applyIterableChanges(_) {
            _.forEachAddedItem((x) => {
              if ('string' != typeof x.item)
                throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${(0, a.AaK)(x.item)}`);
              this._toggleClass(x.item, !0);
            }),
              _.forEachRemovedItem((x) => this._toggleClass(x.item, !1));
          }
          _applyClasses(_) {
            _ &&
              (Array.isArray(_) || _ instanceof Set
                ? _.forEach((x) => this._toggleClass(x, !0))
                : Object.keys(_).forEach((x) => this._toggleClass(x, !!_[x])));
          }
          _removeClasses(_) {
            _ &&
              (Array.isArray(_) || _ instanceof Set
                ? _.forEach((x) => this._toggleClass(x, !1))
                : Object.keys(_).forEach((x) => this._toggleClass(x, !1)));
          }
          _toggleClass(_, x) {
            (_ = _.trim()) &&
              _.split(/\s+/g).forEach((F) => {
                x
                  ? this._renderer.addClass(this._ngEl.nativeElement, F)
                  : this._renderer.removeClass(this._ngEl.nativeElement, F);
              });
          }
        }
        return (
          (p.ɵfac = function (_) {
            return new (_ || p)(a.Y36(a.ZZ4), a.Y36(a.aQg), a.Y36(a.SBq), a.Y36(a.Qsj));
          }),
          (p.ɵdir = a.lG2({
            type: p,
            selectors: [['', 'ngClass', '']],
            inputs: { klass: ['class', 'klass'], ngClass: 'ngClass' },
            standalone: !0
          })),
          p
        );
      })();
      class Hn {
        constructor(b, _, x, F) {
          (this.$implicit = b), (this.ngForOf = _), (this.index = x), (this.count = F);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let Vt = (() => {
        class p {
          constructor(_, x, F) {
            (this._viewContainer = _),
              (this._template = x),
              (this._differs = F),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(_) {
            (this._ngForOf = _), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(_) {
            this._trackByFn = _;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(_) {
            _ && (this._template = _);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const _ = this._ngForOf;
              !this._differ && _ && (this._differ = this._differs.find(_).create(this.ngForTrackBy));
            }
            if (this._differ) {
              const _ = this._differ.diff(this._ngForOf);
              _ && this._applyChanges(_);
            }
          }
          _applyChanges(_) {
            const x = this._viewContainer;
            _.forEachOperation((F, oe, _e) => {
              if (null == F.previousIndex)
                x.createEmbeddedView(this._template, new Hn(F.item, this._ngForOf, -1, -1), null === _e ? void 0 : _e);
              else if (null == _e) x.remove(null === oe ? void 0 : oe);
              else if (null !== oe) {
                const ze = x.get(oe);
                x.move(ze, _e), Cr(ze, F);
              }
            });
            for (let F = 0, oe = x.length; F < oe; F++) {
              const ze = x.get(F).context;
              (ze.index = F), (ze.count = oe), (ze.ngForOf = this._ngForOf);
            }
            _.forEachIdentityChange((F) => {
              Cr(x.get(F.currentIndex), F);
            });
          }
          static ngTemplateContextGuard(_, x) {
            return !0;
          }
        }
        return (
          (p.ɵfac = function (_) {
            return new (_ || p)(a.Y36(a.s_b), a.Y36(a.Rgc), a.Y36(a.ZZ4));
          }),
          (p.ɵdir = a.lG2({
            type: p,
            selectors: [['', 'ngFor', '', 'ngForOf', '']],
            inputs: { ngForOf: 'ngForOf', ngForTrackBy: 'ngForTrackBy', ngForTemplate: 'ngForTemplate' },
            standalone: !0
          })),
          p
        );
      })();
      function Cr(p, b) {
        p.context.$implicit = b.item;
      }
      let An = (() => {
        class p {
          constructor(_, x) {
            (this._viewContainer = _),
              (this._context = new In()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = x);
          }
          set ngIf(_) {
            (this._context.$implicit = this._context.ngIf = _), this._updateView();
          }
          set ngIfThen(_) {
            dr('ngIfThen', _), (this._thenTemplateRef = _), (this._thenViewRef = null), this._updateView();
          }
          set ngIfElse(_) {
            dr('ngIfElse', _), (this._elseTemplateRef = _), (this._elseViewRef = null), this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context)))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)));
          }
          static ngTemplateContextGuard(_, x) {
            return !0;
          }
        }
        return (
          (p.ɵfac = function (_) {
            return new (_ || p)(a.Y36(a.s_b), a.Y36(a.Rgc));
          }),
          (p.ɵdir = a.lG2({
            type: p,
            selectors: [['', 'ngIf', '']],
            inputs: { ngIf: 'ngIf', ngIfThen: 'ngIfThen', ngIfElse: 'ngIfElse' },
            standalone: !0
          })),
          p
        );
      })();
      class In {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function dr(p, b) {
        if (b && !b.createEmbeddedView) throw new Error(`${p} must be a TemplateRef, but received '${(0, a.AaK)(b)}'.`);
      }
      let Wr = (() => {
          class p {
            constructor(_, x, F) {
              (this._ngEl = _),
                (this._differs = x),
                (this._renderer = F),
                (this._ngStyle = null),
                (this._differ = null);
            }
            set ngStyle(_) {
              (this._ngStyle = _), !this._differ && _ && (this._differ = this._differs.find(_).create());
            }
            ngDoCheck() {
              if (this._differ) {
                const _ = this._differ.diff(this._ngStyle);
                _ && this._applyChanges(_);
              }
            }
            _setStyle(_, x) {
              const [F, oe] = _.split('.'),
                _e = -1 === F.indexOf('-') ? void 0 : a.JOm.DashCase;
              null != x
                ? this._renderer.setStyle(this._ngEl.nativeElement, F, oe ? `${x}${oe}` : x, _e)
                : this._renderer.removeStyle(this._ngEl.nativeElement, F, _e);
            }
            _applyChanges(_) {
              _.forEachRemovedItem((x) => this._setStyle(x.key, null)),
                _.forEachAddedItem((x) => this._setStyle(x.key, x.currentValue)),
                _.forEachChangedItem((x) => this._setStyle(x.key, x.currentValue));
            }
          }
          return (
            (p.ɵfac = function (_) {
              return new (_ || p)(a.Y36(a.SBq), a.Y36(a.aQg), a.Y36(a.Qsj));
            }),
            (p.ɵdir = a.lG2({
              type: p,
              selectors: [['', 'ngStyle', '']],
              inputs: { ngStyle: 'ngStyle' },
              standalone: !0
            })),
            p
          );
        })(),
        Sn = (() => {
          class p {
            constructor(_) {
              (this._viewContainerRef = _),
                (this._viewRef = null),
                (this.ngTemplateOutletContext = null),
                (this.ngTemplateOutlet = null),
                (this.ngTemplateOutletInjector = null);
            }
            ngOnChanges(_) {
              if (_.ngTemplateOutlet || _.ngTemplateOutletInjector) {
                const x = this._viewContainerRef;
                if ((this._viewRef && x.remove(x.indexOf(this._viewRef)), this.ngTemplateOutlet)) {
                  const { ngTemplateOutlet: F, ngTemplateOutletContext: oe, ngTemplateOutletInjector: _e } = this;
                  this._viewRef = x.createEmbeddedView(F, oe, _e ? { injector: _e } : void 0);
                } else this._viewRef = null;
              } else
                this._viewRef &&
                  _.ngTemplateOutletContext &&
                  this.ngTemplateOutletContext &&
                  (this._viewRef.context = this.ngTemplateOutletContext);
            }
          }
          return (
            (p.ɵfac = function (_) {
              return new (_ || p)(a.Y36(a.s_b));
            }),
            (p.ɵdir = a.lG2({
              type: p,
              selectors: [['', 'ngTemplateOutlet', '']],
              inputs: {
                ngTemplateOutletContext: 'ngTemplateOutletContext',
                ngTemplateOutlet: 'ngTemplateOutlet',
                ngTemplateOutletInjector: 'ngTemplateOutletInjector'
              },
              standalone: !0,
              features: [a.TTD]
            })),
            p
          );
        })();
      function $n(p, b) {
        return new a.vHH(2100, !1);
      }
      const ii =
        /(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g;
      let Vo = (() => {
          class p {
            transform(_) {
              if (null == _) return null;
              if ('string' != typeof _) throw $n();
              return _.replace(ii, (x) => x[0].toUpperCase() + x.slice(1).toLowerCase());
            }
          }
          return (
            (p.ɵfac = function (_) {
              return new (_ || p)();
            }),
            (p.ɵpipe = a.Yjl({ name: 'titlecase', type: p, pure: !0, standalone: !0 })),
            p
          );
        })(),
        Er = (() => {
          class p {
            constructor(_) {
              this._locale = _;
            }
            transform(_, x, F) {
              if (
                !(function Gn(p) {
                  return !(null == p || '' === p || p != p);
                })(_)
              )
                return null;
              F = F || this._locale;
              try {
                return (function dn(p, b, _) {
                  return (function Tt(p, b, _, x, F, oe, _e = !1) {
                    let ze = '',
                      bt = !1;
                    if (isFinite(p)) {
                      let wt = (function kt(p) {
                        let x,
                          F,
                          oe,
                          _e,
                          ze,
                          b = Math.abs(p) + '',
                          _ = 0;
                        for (
                          (F = b.indexOf($)) > -1 && (b = b.replace($, '')),
                            (oe = b.search(/e/i)) > 0
                              ? (F < 0 && (F = oe), (F += +b.slice(oe + 1)), (b = b.substring(0, oe)))
                              : F < 0 && (F = b.length),
                            oe = 0;
                          b.charAt(oe) === U;
                          oe++
                        );
                        if (oe === (ze = b.length)) (x = [0]), (F = 1);
                        else {
                          for (ze--; b.charAt(ze) === U; ) ze--;
                          for (F -= oe, x = [], _e = 0; oe <= ze; oe++, _e++) x[_e] = Number(b.charAt(oe));
                        }
                        return (
                          F > 22 && ((x = x.splice(0, 21)), (_ = F - 1), (F = 1)),
                          { digits: x, exponent: _, integerLen: F }
                        );
                      })(p);
                      _e &&
                        (wt = (function at(p) {
                          if (0 === p.digits[0]) return p;
                          const b = p.digits.length - p.integerLen;
                          return (
                            p.exponent
                              ? (p.exponent += 2)
                              : (0 === b ? p.digits.push(0, 0) : 1 === b && p.digits.push(0), (p.integerLen += 2)),
                            p
                          );
                        })(wt));
                      let Et = b.minInt,
                        yt = b.minFrac,
                        zt = b.maxFrac;
                      if (oe) {
                        const Vr = oe.match(_t);
                        if (null === Vr) throw new Error(`${oe} is not a valid digit info`);
                        const Eo = Vr[1],
                          Qo = Vr[3],
                          xo = Vr[5];
                        null != Eo && (Et = fn(Eo)),
                          null != Qo && (yt = fn(Qo)),
                          null != xo ? (zt = fn(xo)) : null != Qo && yt > zt && (zt = yt);
                      }
                      !(function Xt(p, b, _) {
                        if (b > _)
                          throw new Error(
                            `The minimum number of digits after fraction (${b}) is higher than the maximum (${_}).`
                          );
                        let x = p.digits,
                          F = x.length - p.integerLen;
                        const oe = Math.min(Math.max(b, F), _);
                        let _e = oe + p.integerLen,
                          ze = x[_e];
                        if (_e > 0) {
                          x.splice(Math.max(p.integerLen, _e));
                          for (let yt = _e; yt < x.length; yt++) x[yt] = 0;
                        } else {
                          (F = Math.max(0, F)), (p.integerLen = 1), (x.length = Math.max(1, (_e = oe + 1))), (x[0] = 0);
                          for (let yt = 1; yt < _e; yt++) x[yt] = 0;
                        }
                        if (ze >= 5)
                          if (_e - 1 < 0) {
                            for (let yt = 0; yt > _e; yt--) x.unshift(0), p.integerLen++;
                            x.unshift(1), p.integerLen++;
                          } else x[_e - 1]++;
                        for (; F < Math.max(0, oe); F++) x.push(0);
                        let bt = 0 !== oe;
                        const wt = b + p.integerLen,
                          Et = x.reduceRight(function (yt, zt, Dt, rn) {
                            return (
                              (rn[Dt] = (zt += yt) < 10 ? zt : zt - 10),
                              bt && (0 === rn[Dt] && Dt >= wt ? rn.pop() : (bt = !1)),
                              zt >= 10 ? 1 : 0
                            );
                          }, 0);
                        Et && (x.unshift(Et), p.integerLen++);
                      })(wt, yt, zt);
                      let Dt = wt.digits,
                        rn = wt.integerLen;
                      const Nn = wt.exponent;
                      let Qn = [];
                      for (bt = Dt.every((Vr) => !Vr); rn < Et; rn++) Dt.unshift(0);
                      for (; rn < 0; rn++) Dt.unshift(0);
                      rn > 0 ? (Qn = Dt.splice(rn, Dt.length)) : ((Qn = Dt), (Dt = [0]));
                      const ar = [];
                      for (
                        Dt.length >= b.lgSize && ar.unshift(Dt.splice(-b.lgSize, Dt.length).join(''));
                        Dt.length > b.gSize;

                      )
                        ar.unshift(Dt.splice(-b.gSize, Dt.length).join(''));
                      Dt.length && ar.unshift(Dt.join('')),
                        (ze = ar.join(et(_, x))),
                        Qn.length && (ze += et(_, F) + Qn.join('')),
                        Nn && (ze += et(_, X.Exponential) + '+' + Nn);
                    } else ze = et(_, X.Infinity);
                    return (ze = p < 0 && !bt ? b.negPre + ze + b.negSuf : b.posPre + ze + b.posSuf), ze;
                  })(
                    p,
                    (function Le(p, b = '-') {
                      const _ = {
                          minInt: 1,
                          minFrac: 0,
                          maxFrac: 0,
                          posPre: '',
                          posSuf: '',
                          negPre: '',
                          negSuf: '',
                          gSize: 0,
                          lgSize: 0
                        },
                        x = p.split(';'),
                        F = x[0],
                        oe = x[1],
                        _e =
                          -1 !== F.indexOf($)
                            ? F.split($)
                            : [F.substring(0, F.lastIndexOf(U) + 1), F.substring(F.lastIndexOf(U) + 1)],
                        ze = _e[0],
                        bt = _e[1] || '';
                      _.posPre = ze.substring(0, ze.indexOf('#'));
                      for (let Et = 0; Et < bt.length; Et++) {
                        const yt = bt.charAt(Et);
                        yt === U
                          ? (_.minFrac = _.maxFrac = Et + 1)
                          : '#' === yt
                          ? (_.maxFrac = Et + 1)
                          : (_.posSuf += yt);
                      }
                      const wt = ze.split(',');
                      if (
                        ((_.gSize = wt[1] ? wt[1].length : 0),
                        (_.lgSize = wt[2] || wt[1] ? (wt[2] || wt[1]).length : 0),
                        oe)
                      ) {
                        const Et = F.length - _.posPre.length - _.posSuf.length,
                          yt = oe.indexOf('#');
                        (_.negPre = oe.substring(0, yt).replace(/'/g, '')),
                          (_.negSuf = oe.slice(yt + Et).replace(/'/g, ''));
                      } else (_.negPre = b + _.posPre), (_.negSuf = _.posSuf);
                      return _;
                    })(
                      (function Ot(p, b) {
                        return (0, a.cg1)(p)[a.wAp.NumberFormats][b];
                      })(b, Oe.Decimal),
                      et(b, X.MinusSign)
                    ),
                    b,
                    X.Group,
                    X.Decimal,
                    _
                  );
                })(
                  (function fr(p) {
                    if ('string' == typeof p && !isNaN(Number(p) - parseFloat(p))) return Number(p);
                    if ('number' != typeof p) throw new Error(`${p} is not a number`);
                    return p;
                  })(_),
                  F,
                  x
                );
              } catch (oe) {
                throw $n();
              }
            }
          }
          return (
            (p.ɵfac = function (_) {
              return new (_ || p)(a.Y36(a.soG, 16));
            }),
            (p.ɵpipe = a.Yjl({ name: 'number', type: p, pure: !0, standalone: !0 })),
            p
          );
        })();
      let Mr = (() => {
        class p {}
        return (
          (p.ɵfac = function (_) {
            return new (_ || p)();
          }),
          (p.ɵmod = a.oAB({ type: p })),
          (p.ɵinj = a.cJS({})),
          p
        );
      })();
      const Bo = 'browser';
      function Fr(p) {
        return p === Bo;
      }
      let or = (() => {
        class p {}
        return (
          (p.ɵprov = (0, a.Yz7)({ token: p, providedIn: 'root', factory: () => new eo((0, a.LFG)(Y), window) })), p
        );
      })();
      class eo {
        constructor(b, _) {
          (this.document = b), (this.window = _), (this.offset = () => [0, 0]);
        }
        setOffset(b) {
          this.offset = Array.isArray(b) ? () => b : b;
        }
        getScrollPosition() {
          return this.supportsScrolling() ? [this.window.pageXOffset, this.window.pageYOffset] : [0, 0];
        }
        scrollToPosition(b) {
          this.supportsScrolling() && this.window.scrollTo(b[0], b[1]);
        }
        scrollToAnchor(b) {
          if (!this.supportsScrolling()) return;
          const _ = (function Ht(p, b) {
            const _ = p.getElementById(b) || p.getElementsByName(b)[0];
            if (_) return _;
            if ('function' == typeof p.createTreeWalker && p.body && (p.body.createShadowRoot || p.body.attachShadow)) {
              const x = p.createTreeWalker(p.body, NodeFilter.SHOW_ELEMENT);
              let F = x.currentNode;
              for (; F; ) {
                const oe = F.shadowRoot;
                if (oe) {
                  const _e = oe.getElementById(b) || oe.querySelector(`[name="${b}"]`);
                  if (_e) return _e;
                }
                F = x.nextNode();
              }
            }
            return null;
          })(this.document, b);
          _ && (this.scrollToElement(_), _.focus());
        }
        setHistoryScrollRestoration(b) {
          if (this.supportScrollRestoration()) {
            const _ = this.window.history;
            _ && _.scrollRestoration && (_.scrollRestoration = b);
          }
        }
        scrollToElement(b) {
          const _ = b.getBoundingClientRect(),
            x = _.left + this.window.pageXOffset,
            F = _.top + this.window.pageYOffset,
            oe = this.offset();
          this.window.scrollTo(x - oe[0], F - oe[1]);
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const b = Ho(this.window.history) || Ho(Object.getPrototypeOf(this.window.history));
            return !(!b || (!b.writable && !b.set));
          } catch (b) {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return !!this.window && !!this.window.scrollTo && 'pageXOffset' in this.window;
          } catch (b) {
            return !1;
          }
        }
      }
      function Ho(p) {
        return Object.getOwnPropertyDescriptor(p, 'scrollRestoration');
      }
      class fi {}
    },
    4893: (Ge, he, w) => {
      'use strict';
      w.d(he, {
        tb: () => Zg,
        AFp: () => Hg,
        ip1: () => jg,
        CZH: () => pc,
        hGG: () => Db,
        z2F: () => mc,
        sBO: () => ib,
        Sil: () => BD,
        _Vd: () => na,
        EJc: () => VD,
        Xts: () => rl,
        SBq: () => ra,
        lqb: () => Si,
        qLn: () => oa,
        vpe: () => uo,
        XFs: () => Qe,
        OlP: () => Pt,
        zs3: () => Ni,
        ZZ4: () => Ru,
        aQg: () => Lu,
        soG: () => gc,
        YKP: () => Gp,
        h0i: () => Ds,
        PXZ: () => XD,
        R0b: () => Sr,
        FiY: () => qs,
        Lbi: () => kD,
        g9A: () => Gg,
        Qsj: () => lv,
        FYo: () => af,
        JOm: () => io,
        q3G: () => ln,
        tp0: () => Ws,
        Rgc: () => _a,
        dDg: () => YD,
        eoX: () => Kg,
        GfV: () => cf,
        s_b: () => dc,
        ifc: () => tn,
        LMc: () => Eb,
        MMx: () => fu,
        Lck: () => FC,
        eFA: () => tm,
        G48: () => ob,
        Gpc: () => ce,
        f3M: () => td,
        _c5: () => Cb,
        c2e: () => RD,
        zSh: () => sl,
        wAp: () => it,
        vHH: () => K,
        lri: () => Qg,
        rWj: () => Jg,
        EiD: () => zd,
        mCW: () => La,
        qzn: () => ts,
        JVY: () => T_,
        pB0: () => N_,
        eBb: () => O_,
        L6k: () => I_,
        LAX: () => S_,
        D6c: () => bb,
        cg1: () => ru,
        kL8: () => pp,
        dqk: () => gt,
        Z0I: () => Ut,
        sIi: () => aa,
        CqO: () => Ch,
        QGY: () => ql,
        QP$: () => U,
        F4k: () => yh,
        RDi: () => D_,
        AaK: () => ge,
        z3N: () => Oo,
        qOj: () => Ul,
        TTD: () => xr,
        _Bn: () => $p,
        jDz: () => zp,
        xp6: () => _f,
        uIk: () => Hl,
        Tol: () => Hh,
        Gre: () => rp,
        ekj: () => Kl,
        Suo: () => _g,
        Xpm: () => k,
        lG2: () => nr,
        Yz7: () => je,
        cJS: () => Ct,
        oAB: () => ke,
        Yjl: () => Vn,
        Y36: () => ss,
        _UZ: () => Zl,
        GkF: () => zl,
        BQk: () => nc,
        ynx: () => tc,
        qZA: () => ec,
        TgZ: () => Xa,
        EpF: () => vh,
        n5z: () => Dc,
        Ikx: () => nu,
        SDv: () => Bp,
        QtT: () => jp,
        pQV: () => su,
        LFG: () => gn,
        $8M: () => Wi,
        $Z: () => Of,
        NdJ: () => Wl,
        CRH: () => vg,
        oxw: () => xh,
        ALo: () => cg,
        lcZ: () => lg,
        Hsn: () => Ah,
        F$t: () => Mh,
        Q6J: () => $l,
        s9C: () => Yl,
        MGl: () => rc,
        hYB: () => Ql,
        DdM: () => Xp,
        VKq: () => eg,
        WLB: () => tg,
        kEZ: () => ng,
        iGM: () => gg,
        MAs: () => _h,
        KtG: () => hi,
        evT: () => uf,
        Jf7: () => lf,
        CHM: () => Rr,
        oJD: () => qd,
        uOi: () => nl,
        LSH: () => tl,
        Udp: () => Jl,
        YNc: () => mh,
        W1O: () => bg,
        _uU: () => Yh,
        Oqu: () => eu,
        hij: () => ic,
        AsE: () => tu,
        Gf: () => mg
      });
      var a = w(7579),
        i = w(727),
        L = w(9751),
        Z = w(6451),
        P = w(8421),
        se = w(930),
        Y = w(4482);
      function ve(e, t, ...n) {
        if (!0 === t) return void e();
        if (!1 === t) return;
        const r = new se.Hp({
          next: () => {
            r.unsubscribe(), e();
          }
        });
        return t(...n).subscribe(r);
      }
      function ae(e) {
        for (let t in e) if (e[t] === ae) return t;
        throw Error('Could not find renamed property on target object.');
      }
      function le(e, t) {
        for (const n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function ge(e) {
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) return '[' + e.map(ge).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return '' + t;
        const n = t.indexOf('\n');
        return -1 === n ? t : t.substring(0, n);
      }
      function Ne(e, t) {
        return null == e || '' === e ? (null === t ? '' : t) : null == t || '' === t ? e : e + ' ' + t;
      }
      const de = ae({ __forward_ref__: ae });
      function ce(e) {
        return (
          (e.__forward_ref__ = ce),
          (e.toString = function () {
            return ge(this());
          }),
          e
        );
      }
      function R(e) {
        return B(e) ? e() : e;
      }
      function B(e) {
        return 'function' == typeof e && e.hasOwnProperty(de) && e.__forward_ref__ === ce;
      }
      class K extends Error {
        constructor(t, n) {
          super(
            (function be(e, t) {
              return `NG0${Math.abs(e)}${t ? ': ' + t.trim() : ''}`;
            })(t, n)
          ),
            (this.code = t);
        }
      }
      function H(e) {
        return 'string' == typeof e ? e : null == e ? '' : String(e);
      }
      function Oe(e, t) {
        throw new K(-201, !1);
      }
      function pe(e, t, n, r) {
        throw new Error(`ASSERTION ERROR: ${e}` + (null == r ? '' : ` [Expected=> ${n} ${r} ${t} <=Actual]`));
      }
      function je(e) {
        return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 };
      }
      function Ct(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function xt(e) {
        return Jt(e, Bt) || Jt(e, Dn);
      }
      function Ut(e) {
        return null !== xt(e);
      }
      function Jt(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function un(e) {
        return e && (e.hasOwnProperty(Cn) || e.hasOwnProperty(vt)) ? e[Cn] : null;
      }
      const Bt = ae({ ɵprov: ae }),
        Cn = ae({ ɵinj: ae }),
        Dn = ae({ ngInjectableDef: ae }),
        vt = ae({ ngInjectorDef: ae });
      var Qe = (() => (
        ((Qe = Qe || {})[(Qe.Default = 0)] = 'Default'),
        (Qe[(Qe.Host = 1)] = 'Host'),
        (Qe[(Qe.Self = 2)] = 'Self'),
        (Qe[(Qe.SkipSelf = 4)] = 'SkipSelf'),
        (Qe[(Qe.Optional = 8)] = 'Optional'),
        Qe
      ))();
      let lr;
      function qt(e) {
        const t = lr;
        return (lr = e), t;
      }
      function St(e, t, n) {
        const r = xt(e);
        return r && 'root' == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & Qe.Optional
          ? null
          : void 0 !== t
          ? t
          : void Oe(ge(e));
      }
      function tt(e) {
        return { toString: e }.toString();
      }
      var en = (() => (((en = en || {})[(en.OnPush = 0)] = 'OnPush'), (en[(en.Default = 1)] = 'Default'), en))(),
        tn = (() => {
          return (
            ((e = tn || (tn = {}))[(e.Emulated = 0)] = 'Emulated'),
            (e[(e.None = 2)] = 'None'),
            (e[(e.ShadowDom = 3)] = 'ShadowDom'),
            tn
          );
          var e;
        })();
      const gt = (() =>
          ('undefined' != typeof globalThis && globalThis) ||
          ('undefined' != typeof global && global) ||
          ('undefined' != typeof window && window) ||
          ('undefined' != typeof self &&
            'undefined' != typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope &&
            self))(),
        bn = {},
        Ke = [],
        wn = ae({ ɵcmp: ae }),
        kn = ae({ ɵdir: ae }),
        tr = ae({ ɵpipe: ae }),
        Rn = ae({ ɵmod: ae }),
        En = ae({ ɵfac: ae }),
        xn = ae({ __NG_ELEMENT_ID__: ae });
      let Mn = 0;
      function k(e) {
        return tt(() => {
          const n = !0 === e.standalone,
            r = {},
            o = {
              type: e.type,
              providersResolver: null,
              decls: e.decls,
              vars: e.vars,
              factory: null,
              template: e.template || null,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              hostBindings: e.hostBindings || null,
              hostVars: e.hostVars || 0,
              hostAttrs: e.hostAttrs || null,
              contentQueries: e.contentQueries || null,
              declaredInputs: r,
              inputs: null,
              outputs: null,
              exportAs: e.exportAs || null,
              onPush: e.changeDetection === en.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              standalone: n,
              dependencies: (n && e.dependencies) || null,
              getStandaloneInjector: null,
              selectors: e.selectors || Ke,
              viewQuery: e.viewQuery || null,
              features: e.features || null,
              data: e.data || {},
              encapsulation: e.encapsulation || tn.Emulated,
              id: 'c' + Mn++,
              styles: e.styles || Ke,
              _: null,
              setInput: null,
              schemas: e.schemas || null,
              tView: null
            },
            s = e.dependencies,
            l = e.features;
          return (
            (o.inputs = Ln(e.inputs, r)),
            (o.outputs = Ln(e.outputs)),
            l && l.forEach((f) => f(o)),
            (o.directiveDefs = s ? () => ('function' == typeof s ? s() : s).map(I).filter(Me) : null),
            (o.pipeDefs = s ? () => ('function' == typeof s ? s() : s).map($).filter(Me) : null),
            o
          );
        });
      }
      function I(e) {
        return _t(e) || jt(e);
      }
      function Me(e) {
        return null !== e;
      }
      function ke(e) {
        return tt(() => ({
          type: e.type,
          bootstrap: e.bootstrap || Ke,
          declarations: e.declarations || Ke,
          imports: e.imports || Ke,
          exports: e.exports || Ke,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null
        }));
      }
      function Ln(e, t) {
        if (null == e) return bn;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            let o = e[r],
              s = o;
            Array.isArray(o) && ((s = o[1]), (o = o[0])), (n[o] = r), t && (t[o] = s);
          }
        return n;
      }
      const nr = k;
      function Vn(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          standalone: !0 === e.standalone,
          onDestroy: e.type.prototype.ngOnDestroy || null
        };
      }
      function _t(e) {
        return e[wn] || null;
      }
      function jt(e) {
        return e[kn] || null;
      }
      function $(e) {
        return e[tr] || null;
      }
      function U(e) {
        const t = _t(e) || jt(e) || $(e);
        return null !== t && t.standalone;
      }
      function S(e, t) {
        const n = e[Rn] || null;
        if (!n && !0 === t) throw new Error(`Type ${ge(e)} does not have '\u0275mod' property.`);
        return n;
      }
      function nn(e) {
        return Array.isArray(e) && 'object' == typeof e[1];
      }
      function On(e) {
        return Array.isArray(e) && !0 === e[1];
      }
      function Nr(e) {
        return 0 != (8 & e.flags);
      }
      function po(e) {
        return 2 == (2 & e.flags);
      }
      function Wr(e) {
        return 1 == (1 & e.flags);
      }
      function Sn(e) {
        return null !== e.template;
      }
      function Es(e) {
        return 0 != (256 & e[2]);
      }
      function Gn(e, t) {
        return e.hasOwnProperty(En) ? e[En] : null;
      }
      class fr {
        constructor(t, n, r) {
          (this.previousValue = t), (this.currentValue = n), (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function xr() {
        return ui;
      }
      function ui(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = Bo), Mr;
      }
      function Mr() {
        const e = Kr(this),
          t = null == e ? void 0 : e.current;
        if (t) {
          const n = e.previous;
          if (n === bn) e.previous = t;
          else for (let r in t) n[r] = t[r];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function Bo(e, t, n, r) {
        const o =
            Kr(e) ||
            (function Xr(e, t) {
              return (e[mo] = t);
            })(e, { previous: bn, current: null }),
          s = o.current || (o.current = {}),
          l = o.previous,
          f = this.declaredInputs[n],
          g = l[f];
        (s[f] = new fr(g && g.currentValue, t, l === bn)), (e[r] = t);
      }
      xr.ngInherit = !0;
      const mo = '__ngSimpleChanges__';
      function Kr(e) {
        return e[mo] || null;
      }
      function Ht(e) {
        for (; Array.isArray(e); ) e = e[0];
        return e;
      }
      function vo(e, t) {
        return Ht(t[e]);
      }
      function hn(e, t) {
        return Ht(t[e.index]);
      }
      function $o(e, t) {
        return e.data[t];
      }
      function sr(e, t) {
        return e[t];
      }
      function sn(e, t) {
        const n = t[e];
        return nn(n) ? n : n[0];
      }
      function to(e) {
        return 64 == (64 & e[2]);
      }
      function Zt(e, t) {
        return null == t ? null : e[t];
      }
      function no(e) {
        e[18] = 0;
      }
      function Ar(e, t) {
        e[5] += t;
        let n = e,
          r = e[3];
        for (; null !== r && ((1 === t && 1 === n[5]) || (-1 === t && 0 === n[5])); ) (r[5] += t), (n = r), (r = r[3]);
      }
      const ot = { lFrame: Ms(null), bindingsEnabled: !0 };
      function pr() {
        return ot.bindingsEnabled;
      }
      function we() {
        return ot.lFrame.lView;
      }
      function pt() {
        return ot.lFrame.tView;
      }
      function Rr(e) {
        return (ot.lFrame.contextLView = e), e[8];
      }
      function hi(e) {
        return (ot.lFrame.contextLView = null), e;
      }
      function Wt() {
        let e = ji();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function ji() {
        return ot.lFrame.currentTNode;
      }
      function ro() {
        const e = ot.lFrame,
          t = e.currentTNode;
        return e.isParent ? t : t.parent;
      }
      function Mt(e, t) {
        const n = ot.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function C() {
        return ot.lFrame.isParent;
      }
      function v() {
        ot.lFrame.isParent = !1;
      }
      function mt() {
        const e = ot.lFrame;
        let t = e.bindingRootIndex;
        return -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t;
      }
      function Yt() {
        return ot.lFrame.bindingIndex;
      }
      function Zn() {
        return ot.lFrame.bindingIndex++;
      }
      function _n(e) {
        const t = ot.lFrame,
          n = t.bindingIndex;
        return (t.bindingIndex = t.bindingIndex + e), n;
      }
      function zo(e) {
        ot.lFrame.inI18n = e;
      }
      function pi(e, t) {
        const n = ot.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), gi(t);
      }
      function gi(e) {
        ot.lFrame.currentDirectiveIndex = e;
      }
      function bo() {
        return ot.lFrame.currentQueryIndex;
      }
      function wo(e) {
        ot.lFrame.currentQueryIndex = e;
      }
      function $i(e) {
        const t = e[1];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[6] : null;
      }
      function qo(e, t, n) {
        if (n & Qe.SkipSelf) {
          let o = t,
            s = e;
          for (
            ;
            !((o = o.parent), null !== o || n & Qe.Host || ((o = $i(s)), null === o || ((s = s[15]), 10 & o.type)));

          );
          if (null === o) return !1;
          (t = o), (e = s);
        }
        const r = (ot.lFrame = _i());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function mi(e) {
        const t = _i(),
          n = e[1];
        (ot.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function _i() {
        const e = ot.lFrame,
          t = null === e ? null : e.child;
        return null === t ? Ms(e) : t;
      }
      function Ms(e) {
        const t = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1
        };
        return null !== e && (e.child = t), t;
      }
      function As() {
        const e = ot.lFrame;
        return (ot.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e;
      }
      const Wo = As;
      function vi() {
        const e = As();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function an() {
        return ot.lFrame.selectedIndex;
      }
      function Tr(e) {
        ot.lFrame.selectedIndex = e;
      }
      function Rt() {
        const e = ot.lFrame;
        return $o(e.tView, e.selectedIndex);
      }
      function oo(e, t) {
        for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
          const s = e.data[n].type.prototype,
            {
              ngAfterContentInit: l,
              ngAfterContentChecked: f,
              ngAfterViewInit: g,
              ngAfterViewChecked: D,
              ngOnDestroy: M
            } = s;
          l && (e.contentHooks || (e.contentHooks = [])).push(-n, l),
            f &&
              ((e.contentHooks || (e.contentHooks = [])).push(n, f),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, f)),
            g && (e.viewHooks || (e.viewHooks = [])).push(-n, g),
            D &&
              ((e.viewHooks || (e.viewHooks = [])).push(n, D),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, D)),
            null != M && (e.destroyHooks || (e.destroyHooks = [])).push(n, M);
        }
      }
      function Ci(e, t, n) {
        Fs(e, t, 3, n);
      }
      function Di(e, t, n, r) {
        (3 & e[2]) === n && Fs(e, t, n, r);
      }
      function Gi(e, t) {
        let n = e[2];
        (3 & n) === t && ((n &= 2047), (n += 1), (e[2] = n));
      }
      function Fs(e, t, n, r) {
        const s = null != r ? r : -1,
          l = t.length - 1;
        let f = 0;
        for (let g = void 0 !== r ? 65535 & e[18] : 0; g < l; g++)
          if ('number' == typeof t[g + 1]) {
            if (((f = t[g]), null != r && f >= r)) break;
          } else
            t[g] < 0 && (e[18] += 65536),
              (f < s || -1 == s) && (ba(e, n, t, g), (e[18] = (4294901760 & e[18]) + g + 2)),
              g++;
      }
      function ba(e, t, n, r) {
        const o = n[r] < 0,
          s = n[r + 1],
          f = e[o ? -n[r] : n[r]];
        if (o) {
          if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t) {
            e[2] += 2048;
            try {
              s.call(f);
            } finally {
            }
          }
        } else
          try {
            s.call(f);
          } finally {
          }
      }
      class Yo {
        constructor(t, n, r) {
          (this.factory = t), (this.resolving = !1), (this.canSeeViewProviders = n), (this.injectImpl = r);
        }
      }
      function ze(e, t, n) {
        let r = 0;
        for (; r < n.length; ) {
          const o = n[r];
          if ('number' == typeof o) {
            if (0 !== o) break;
            r++;
            const s = n[r++],
              l = n[r++],
              f = n[r++];
            e.setAttribute(t, l, f, s);
          } else {
            const s = o,
              l = n[++r];
            wt(s) ? e.setProperty(t, s, l) : e.setAttribute(t, s, l), r++;
          }
        }
        return r;
      }
      function bt(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function wt(e) {
        return 64 === e.charCodeAt(0);
      }
      function Et(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
              const o = t[r];
              'number' == typeof o ? (n = o) : 0 === n || yt(e, n, o, null, -1 === n || 2 === n ? t[++r] : null);
            }
          }
        return e;
      }
      function yt(e, t, n, r, o) {
        let s = 0,
          l = e.length;
        if (-1 === t) l = -1;
        else
          for (; s < e.length; ) {
            const f = e[s++];
            if ('number' == typeof f) {
              if (f === t) {
                l = -1;
                break;
              }
              if (f > t) {
                l = s - 1;
                break;
              }
            }
          }
        for (; s < e.length; ) {
          const f = e[s];
          if ('number' == typeof f) break;
          if (f === n) {
            if (null === r) return void (null !== o && (e[s + 1] = o));
            if (r === e[s + 1]) return void (e[s + 2] = o);
          }
          s++, null !== r && s++, null !== o && s++;
        }
        -1 !== l && (e.splice(l, 0, t), (s = l + 1)),
          e.splice(s++, 0, n),
          null !== r && e.splice(s++, 0, r),
          null !== o && e.splice(s++, 0, o);
      }
      function zt(e) {
        return -1 !== e;
      }
      function Dt(e) {
        return 32767 & e;
      }
      function Nn(e, t) {
        let n = (function rn(e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      let Qn = !0;
      function ar(e) {
        const t = Qn;
        return (Qn = e), t;
      }
      let xo = 0;
      const mr = {};
      function Mo(e, t) {
        const n = Ls(e, t);
        if (-1 !== n) return n;
        const r = t[1];
        r.firstCreatePass && ((e.injectorIndex = t.length), Rs(r.data, e), Rs(t, null), Rs(r.blueprint, null));
        const o = Ao(e, t),
          s = e.injectorIndex;
        if (zt(o)) {
          const l = Dt(o),
            f = Nn(o, t),
            g = f[1].data;
          for (let D = 0; D < 8; D++) t[s + D] = f[l + D] | g[l + D];
        }
        return (t[s + 8] = o), s;
      }
      function Rs(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function Ls(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function Ao(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex) return e.parent.injectorIndex;
        let n = 0,
          r = null,
          o = t;
        for (; null !== o; ) {
          if (((r = qi(o)), null === r)) return -1;
          if ((n++, (o = o[15]), -1 !== r.injectorIndex)) return r.injectorIndex | (n << 16);
        }
        return -1;
      }
      function Zi(e, t, n) {
        !(function ks(e, t, n) {
          let r;
          'string' == typeof n ? (r = n.charCodeAt(0) || 0) : n.hasOwnProperty(xn) && (r = n[xn]),
            null == r && (r = n[xn] = xo++);
          const o = 255 & r;
          t.data[e + (o >> 5)] |= 1 << o;
        })(e, t, n);
      }
      function wa(e, t, n) {
        if (n & Qe.Optional || void 0 !== e) return e;
        Oe();
      }
      function Ea(e, t, n, r) {
        if ((n & Qe.Optional && void 0 === r && (r = null), 0 == (n & (Qe.Self | Qe.Host)))) {
          const o = e[9],
            s = qt(void 0);
          try {
            return o ? o.get(t, r, n & Qe.Optional) : St(t, r, n & Qe.Optional);
          } finally {
            qt(s);
          }
        }
        return wa(r, 0, n);
      }
      function xa(e, t, n, r = Qe.Default, o) {
        if (null !== e) {
          if (1024 & t[2]) {
            const l = (function bc(e, t, n, r, o) {
              let s = e,
                l = t;
              for (; null !== s && null !== l && 1024 & l[2] && !(256 & l[2]); ) {
                const f = Vs(s, l, n, r | Qe.Self, mr);
                if (f !== mr) return f;
                let g = s.parent;
                if (!g) {
                  const D = l[21];
                  if (D) {
                    const M = D.get(n, mr, r);
                    if (M !== mr) return M;
                  }
                  (g = qi(l)), (l = l[15]);
                }
                s = g;
              }
              return o;
            })(e, t, n, r, mr);
            if (l !== mr) return l;
          }
          const s = Vs(e, t, n, r, mr);
          if (s !== mr) return s;
        }
        return Ea(t, n, r, o);
      }
      function Vs(e, t, n, r, o) {
        const s = (function Us(e) {
          if ('string' == typeof e) return e.charCodeAt(0) || 0;
          const t = e.hasOwnProperty(xn) ? e[xn] : void 0;
          return 'number' == typeof t ? (t >= 0 ? 255 & t : Ma) : t;
        })(n);
        if ('function' == typeof s) {
          if (!qo(t, e, r)) return r & Qe.Host ? wa(o, 0, r) : Ea(t, n, r, o);
          try {
            const l = s(r);
            if (null != l || r & Qe.Optional) return l;
            Oe();
          } finally {
            Wo();
          }
        } else if ('number' == typeof s) {
          let l = null,
            f = Ls(e, t),
            g = -1,
            D = r & Qe.Host ? t[16][6] : null;
          for (
            (-1 === f || r & Qe.SkipSelf) &&
            ((g = -1 === f ? Ao(e, t) : t[f + 8]),
            -1 !== g && Bs(r, !1) ? ((l = t[1]), (f = Dt(g)), (t = Nn(g, t))) : (f = -1));
            -1 !== f;

          ) {
            const M = t[1];
            if (bi(s, f, M.data)) {
              const T = pn(f, t, n, l, r, D);
              if (T !== mr) return T;
            }
            (g = t[f + 8]),
              -1 !== g && Bs(r, t[1].data[f + 8] === D) && bi(s, f, t)
                ? ((l = M), (f = Dt(g)), (t = Nn(g, t)))
                : (f = -1);
          }
        }
        return o;
      }
      function pn(e, t, n, r, o, s) {
        const l = t[1],
          f = l.data[e + 8],
          M = zi(f, l, n, null == r ? po(f) && Qn : r != l && 0 != (3 & f.type), o & Qe.Host && s === f);
        return null !== M ? Jo(t, l, M, f) : mr;
      }
      function zi(e, t, n, r, o) {
        const s = e.providerIndexes,
          l = t.data,
          f = 1048575 & s,
          g = e.directiveStart,
          M = s >> 20,
          V = o ? f + M : e.directiveEnd;
        for (let Q = r ? f : f + M; Q < V; Q++) {
          const me = l[Q];
          if ((Q < g && n === me) || (Q >= g && me.type === n)) return Q;
        }
        if (o) {
          const Q = l[g];
          if (Q && Sn(Q) && Q.type === n) return g;
        }
        return null;
      }
      function Jo(e, t, n, r) {
        let o = e[n];
        const s = t.data;
        if (
          (function Ps(e) {
            return e instanceof Yo;
          })(o)
        ) {
          const l = o;
          l.resolving &&
            (function te(e, t) {
              const n = t ? `. Dependency path: ${t.join(' > ')} > ${e}` : '';
              throw new K(-200, `Circular dependency in DI detected for ${e}${n}`);
            })(
              (function J(e) {
                return 'function' == typeof e
                  ? e.name || e.toString()
                  : 'object' == typeof e && null != e && 'function' == typeof e.type
                  ? e.type.name || e.type.toString()
                  : H(e);
              })(s[n])
            );
          const f = ar(l.canSeeViewProviders);
          l.resolving = !0;
          const g = l.injectImpl ? qt(l.injectImpl) : null;
          qo(e, r, Qe.Default);
          try {
            (o = e[n] = l.factory(void 0, s, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function Da(e, t, n) {
                  const { ngOnChanges: r, ngOnInit: o, ngDoCheck: s } = t.type.prototype;
                  if (r) {
                    const l = ui(t);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(e, l),
                      (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, l);
                  }
                  o && (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, o),
                    s &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, s),
                      (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, s));
                })(n, s[n], t);
          } finally {
            null !== g && qt(g), ar(f), (l.resolving = !1), Wo();
          }
        }
        return o;
      }
      function bi(e, t, n) {
        return !!(n[t + (e >> 5)] & (1 << e));
      }
      function Bs(e, t) {
        return !(e & Qe.Self || (e & Qe.Host && t));
      }
      class Ko {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, r) {
          return xa(this._tNode, this._lView, t, r, n);
        }
      }
      function Ma() {
        return new Ko(Wt(), we());
      }
      function Dc(e) {
        return tt(() => {
          const t = e.prototype.constructor,
            n = t[En] || Aa(t),
            r = Object.prototype;
          let o = Object.getPrototypeOf(e.prototype).constructor;
          for (; o && o !== r; ) {
            const s = o[En] || Aa(o);
            if (s && s !== n) return s;
            o = Object.getPrototypeOf(o);
          }
          return (s) => new s();
        });
      }
      function Aa(e) {
        return B(e)
          ? () => {
              const t = Aa(R(e));
              return t && t();
            }
          : Gn(e);
      }
      function qi(e) {
        const t = e[1],
          n = t.type;
        return 2 === n ? t.declTNode : 1 === n ? e[6] : null;
      }
      function Wi(e) {
        return (function Cc(e, t) {
          if ('class' === t) return e.classes;
          if ('style' === t) return e.styles;
          const n = e.attrs;
          if (n) {
            const r = n.length;
            let o = 0;
            for (; o < r; ) {
              const s = n[o];
              if (bt(s)) break;
              if (0 === s) o += 2;
              else if ('number' == typeof s) for (o++; o < r && 'string' == typeof n[o]; ) o++;
              else {
                if (s === t) return n[o + 1];
                o += 2;
              }
            }
          }
          return null;
        })(Wt(), e);
      }
      const wi = '__parameters__';
      function xi(e, t, n) {
        return tt(() => {
          const r = (function Ei(e) {
            return function (...n) {
              if (e) {
                const r = e(...n);
                for (const o in r) this[o] = r[o];
              }
            };
          })(t);
          function o(...s) {
            if (this instanceof o) return r.apply(this, s), this;
            const l = new o(...s);
            return (f.annotation = l), f;
            function f(g, D, M) {
              const T = g.hasOwnProperty(wi) ? g[wi] : Object.defineProperty(g, wi, { value: [] })[wi];
              for (; T.length <= M; ) T.push(null);
              return (T[M] = T[M] || []).push(l), g;
            }
          }
          return (
            n && (o.prototype = Object.create(n.prototype)), (o.prototype.ngMetadataName = e), (o.annotationCls = o), o
          );
        });
      }
      class Pt {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ɵprov = void 0),
            'number' == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ɵprov = je({ token: this, providedIn: n.providedIn || 'root', factory: n.factory }));
        }
        get multi() {
          return this;
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      function Jn(e, t) {
        void 0 === t && (t = e);
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          Array.isArray(r) ? (t === e && (t = e.slice(0, n)), Jn(r, t)) : t !== e && t.push(r);
        }
        return t;
      }
      function Br(e, t) {
        e.forEach((n) => (Array.isArray(n) ? Br(n, t) : t(n)));
      }
      function $s(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function Qi(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function Ji(e, t) {
        const n = [];
        for (let r = 0; r < e; r++) n.push(t);
        return n;
      }
      function O(e, t, n) {
        let r = z(e, t);
        return (
          r >= 0
            ? (e[1 | r] = n)
            : ((r = ~r),
              (function c(e, t, n, r) {
                let o = e.length;
                if (o == t) e.push(n, r);
                else if (1 === o) e.push(r, e[0]), (e[0] = n);
                else {
                  for (o--, e.push(e[o - 1], e[o]); o > t; ) (e[o] = e[o - 2]), o--;
                  (e[t] = n), (e[t + 1] = r);
                }
              })(e, r, t, n)),
          r
        );
      }
      function N(e, t) {
        const n = z(e, t);
        if (n >= 0) return e[1 | n];
      }
      function z(e, t) {
        return (function We(e, t, n) {
          let r = 0,
            o = e.length >> n;
          for (; o !== r; ) {
            const s = r + ((o - r) >> 1),
              l = e[s << n];
            if (t === l) return s << n;
            l > t ? (o = s) : (r = s + 1);
          }
          return ~(o << n);
        })(e, t, 1);
      }
      const Fn = {},
        Gs = '__NG_DI_FLAG__',
        Ia = 'ngTempTokenPath',
        bm = /\n/gm,
        Xu = '__source';
      let Zs;
      function Ki(e) {
        const t = Zs;
        return (Zs = e), t;
      }
      function Em(e, t = Qe.Default) {
        if (void 0 === Zs) throw new K(-203, !1);
        return null === Zs ? St(e, void 0, t) : Zs.get(e, t & Qe.Optional ? null : void 0, t);
      }
      function gn(e, t = Qe.Default) {
        return (
          (function er() {
            return lr;
          })() || Em
        )(R(e), t);
      }
      function td(e, t = Qe.Default) {
        return (
          'number' != typeof t && (t = 0 | (t.optional && 8) | (t.host && 1) | (t.self && 2) | (t.skipSelf && 4)),
          gn(e, t)
        );
      }
      function Tc(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = R(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new K(900, !1);
            let o,
              s = Qe.Default;
            for (let l = 0; l < r.length; l++) {
              const f = r[l],
                g = xm(f);
              'number' == typeof g ? (-1 === g ? (o = f.token) : (s |= g)) : (o = f);
            }
            t.push(gn(o, s));
          } else t.push(gn(r));
        }
        return t;
      }
      function zs(e, t) {
        return (e[Gs] = t), (e.prototype[Gs] = t), e;
      }
      function xm(e) {
        return e[Gs];
      }
      const qs = zs(xi('Optional'), 8),
        Ws = zs(xi('SkipSelf'), 4);
      var io = (() => (
        ((io = io || {})[(io.Important = 1)] = 'Important'), (io[(io.DashCase = 2)] = 'DashCase'), io
      ))();
      const Bm = /^>|^->|<!--|-->|--!>|<!-$/g,
        jm = /(<|>)/;
      const Fc = new Map();
      let $m = 0;
      const kc = '__ngContext__';
      function zn(e, t) {
        nn(t)
          ? ((e[kc] = t[20]),
            (function Zm(e) {
              Fc.set(e[20], e);
            })(t))
          : (e[kc] = t);
      }
      let Rc;
      function Lc(e, t) {
        return Rc(e, t);
      }
      function Ks(e) {
        const t = e[3];
        return On(t) ? t[3] : t;
      }
      function Vc(e) {
        return Dd(e[13]);
      }
      function Uc(e) {
        return Dd(e[4]);
      }
      function Dd(e) {
        for (; null !== e && !On(e); ) e = e[4];
        return e;
      }
      function es(e, t, n, r, o) {
        if (null != r) {
          let s,
            l = !1;
          On(r) ? (s = r) : nn(r) && ((l = !0), (r = r[0]));
          const f = Ht(r);
          0 === e && null !== n
            ? null == o
              ? Ad(t, n, f)
              : Ai(t, n, f, o || null, !0)
            : 1 === e && null !== n
            ? Ai(t, n, f, o || null, !0)
            : 2 === e
            ? zc(t, f, l)
            : 3 === e && t.destroyNode(f),
            null != s &&
              (function m_(e, t, n, r, o) {
                const s = n[7];
                s !== Ht(n) && es(t, e, r, s, o);
                for (let f = 10; f < n.length; f++) {
                  const g = n[f];
                  Xs(g[1], g, e, t, r, s);
                }
              })(t, e, s, n, o);
        }
      }
      function Bc(e, t) {
        return e.createText(t);
      }
      function bd(e, t, n) {
        e.setValue(t, n);
      }
      function o_(e, t) {
        return e.createComment(
          (function hd(e) {
            return e.replace(Bm, (t) => t.replace(jm, '\u200b$1\u200b'));
          })(t)
        );
      }
      function jc(e, t, n) {
        return e.createElement(t, n);
      }
      function wd(e, t) {
        const n = e[9],
          r = n.indexOf(t),
          o = t[3];
        512 & t[2] && ((t[2] &= -513), Ar(o, -1)), n.splice(r, 1);
      }
      function Hc(e, t) {
        if (e.length <= 10) return;
        const n = 10 + t,
          r = e[n];
        if (r) {
          const o = r[17];
          null !== o && o !== e && wd(o, r), t > 0 && (e[n - 1][4] = r[4]);
          const s = Qi(e, 10 + t);
          !(function i_(e, t) {
            Xs(e, t, t[11], 2, null, null), (t[0] = null), (t[6] = null);
          })(r[1], r);
          const l = s[19];
          null !== l && l.detachView(s[1]), (r[3] = null), (r[4] = null), (r[2] &= -65);
        }
        return r;
      }
      function Ed(e, t) {
        if (!(128 & t[2])) {
          const n = t[11];
          n.destroyNode && Xs(e, t, n, 3, null, null),
            (function c_(e) {
              let t = e[13];
              if (!t) return $c(e[1], e);
              for (; t; ) {
                let n = null;
                if (nn(t)) n = t[13];
                else {
                  const r = t[10];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[4] && t !== e; ) nn(t) && $c(t[1], t), (t = t[3]);
                  null === t && (t = e), nn(t) && $c(t[1], t), (n = t && t[4]);
                }
                t = n;
              }
            })(t);
        }
      }
      function $c(e, t) {
        if (!(128 & t[2])) {
          (t[2] &= -65),
            (t[2] |= 128),
            (function f_(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const o = t[n[r]];
                  if (!(o instanceof Yo)) {
                    const s = n[r + 1];
                    if (Array.isArray(s))
                      for (let l = 0; l < s.length; l += 2) {
                        const f = o[s[l]],
                          g = s[l + 1];
                        try {
                          g.call(f);
                        } finally {
                        }
                      }
                    else
                      try {
                        s.call(o);
                      } finally {
                      }
                  }
                }
            })(e, t),
            (function d_(e, t) {
              const n = e.cleanup,
                r = t[7];
              let o = -1;
              if (null !== n)
                for (let s = 0; s < n.length - 1; s += 2)
                  if ('string' == typeof n[s]) {
                    const l = n[s + 1],
                      f = 'function' == typeof l ? l(t) : Ht(t[l]),
                      g = r[(o = n[s + 2])],
                      D = n[s + 3];
                    'boolean' == typeof D
                      ? f.removeEventListener(n[s], g, D)
                      : D >= 0
                      ? r[(o = D)]()
                      : r[(o = -D)].unsubscribe(),
                      (s += 2);
                  } else {
                    const l = r[(o = n[s + 1])];
                    n[s].call(l);
                  }
              if (null !== r) {
                for (let s = o + 1; s < r.length; s++) (0, r[s])();
                t[7] = null;
              }
            })(e, t),
            1 === t[1].type && t[11].destroy();
          const n = t[17];
          if (null !== n && On(t[3])) {
            n !== t[3] && wd(n, t);
            const r = t[19];
            null !== r && r.detachView(e);
          }
          !(function zm(e) {
            Fc.delete(e[20]);
          })(t);
        }
      }
      function xd(e, t, n) {
        return Md(e, t.parent, n);
      }
      function Md(e, t, n) {
        let r = t;
        for (; null !== r && 40 & r.type; ) r = (t = r).parent;
        if (null === r) return n[0];
        if (2 & r.flags) {
          const o = e.data[r.directiveStart].encapsulation;
          if (o === tn.None || o === tn.Emulated) return null;
        }
        return hn(r, n);
      }
      function Ai(e, t, n, r, o) {
        e.insertBefore(t, n, r, o);
      }
      function Ad(e, t, n) {
        e.appendChild(t, n);
      }
      function Td(e, t, n, r, o) {
        null !== r ? Ai(e, t, n, r, o) : Ad(e, t, n);
      }
      function Na(e, t) {
        return e.parentNode(t);
      }
      function Id(e, t, n) {
        return Sd(e, t, n);
      }
      function Od(e, t, n) {
        return 40 & e.type ? hn(e, n) : null;
      }
      let Gc,
        ka,
        Qc,
        Ra,
        Sd = Od;
      function Nd(e, t) {
        (Sd = e), (Gc = t);
      }
      function Fa(e, t, n, r) {
        const o = xd(e, r, t),
          s = t[11],
          f = Id(r.parent || t[6], r, t);
        if (null != o)
          if (Array.isArray(n)) for (let g = 0; g < n.length; g++) Td(s, o, n[g], f, !1);
          else Td(s, o, n, f, !1);
        void 0 !== Gc && Gc(s, r, t, n, o);
      }
      function Pa(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return hn(t, e);
          if (4 & n) return Zc(-1, e[t.index]);
          if (8 & n) {
            const r = t.child;
            if (null !== r) return Pa(e, r);
            {
              const o = e[t.index];
              return On(o) ? Zc(-1, o) : Ht(o);
            }
          }
          if (32 & n) return Lc(t, e)() || Ht(e[t.index]);
          {
            const r = Fd(e, t);
            return null !== r ? (Array.isArray(r) ? r[0] : Pa(Ks(e[16]), r)) : Pa(e, t.next);
          }
        }
        return null;
      }
      function Fd(e, t) {
        return null !== t ? e[16][6].projection[t.projection] : null;
      }
      function Zc(e, t) {
        const n = 10 + e + 1;
        if (n < t.length) {
          const r = t[n],
            o = r[1].firstChild;
          if (null !== o) return Pa(r, o);
        }
        return t[7];
      }
      function zc(e, t, n) {
        const r = Na(e, t);
        r &&
          (function h_(e, t, n, r) {
            e.removeChild(t, n, r);
          })(e, r, t, n);
      }
      function qc(e, t, n, r, o, s, l) {
        for (; null != n; ) {
          const f = r[n.index],
            g = n.type;
          if ((l && 0 === t && (f && zn(Ht(f), r), (n.flags |= 4)), 64 != (64 & n.flags)))
            if (8 & g) qc(e, t, n.child, r, o, s, !1), es(t, e, o, f, s);
            else if (32 & g) {
              const D = Lc(n, r);
              let M;
              for (; (M = D()); ) es(t, e, o, M, s);
              es(t, e, o, f, s);
            } else 16 & g ? Pd(e, t, r, n, o, s) : es(t, e, o, f, s);
          n = l ? n.projectionNext : n.next;
        }
      }
      function Xs(e, t, n, r, o, s) {
        qc(n, r, e.firstChild, t, o, s, !1);
      }
      function Pd(e, t, n, r, o, s) {
        const l = n[16],
          g = l[6].projection[r.projection];
        if (Array.isArray(g)) for (let D = 0; D < g.length; D++) es(t, e, o, g[D], s);
        else qc(e, t, g, l[3], o, s, !0);
      }
      function kd(e, t, n) {
        e.setAttribute(t, 'style', n);
      }
      function Wc(e, t, n) {
        '' === n ? e.removeAttribute(t, 'class') : e.setAttribute(t, 'class', n);
      }
      function Ti(e) {
        var t;
        return (
          (null ===
            (t = (function Yc() {
              if (void 0 === ka && ((ka = null), gt.trustedTypes))
                try {
                  ka = gt.trustedTypes.createPolicy('angular', {
                    createHTML: (e) => e,
                    createScript: (e) => e,
                    createScriptURL: (e) => e
                  });
                } catch (e) {}
              return ka;
            })()) || void 0 === t
            ? void 0
            : t.createHTML(e)) || e
        );
      }
      function D_(e) {
        Qc = e;
      }
      function Rd() {
        return void 0 !== Qc ? Qc : 'undefined' != typeof document ? document : void 0;
      }
      function Jc() {
        if (void 0 === Ra && ((Ra = null), gt.trustedTypes))
          try {
            Ra = gt.trustedTypes.createPolicy('angular#unsafe-bypass', {
              createHTML: (e) => e,
              createScript: (e) => e,
              createScriptURL: (e) => e
            });
          } catch (e) {}
        return Ra;
      }
      function Ld(e) {
        var t;
        return (null === (t = Jc()) || void 0 === t ? void 0 : t.createHTML(e)) || e;
      }
      function Ud(e) {
        var t;
        return (null === (t = Jc()) || void 0 === t ? void 0 : t.createScriptURL(e)) || e;
      }
      class Ii {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`;
        }
      }
      class b_ extends Ii {
        getTypeName() {
          return 'HTML';
        }
      }
      class w_ extends Ii {
        getTypeName() {
          return 'Style';
        }
      }
      class E_ extends Ii {
        getTypeName() {
          return 'Script';
        }
      }
      class x_ extends Ii {
        getTypeName() {
          return 'URL';
        }
      }
      class M_ extends Ii {
        getTypeName() {
          return 'ResourceURL';
        }
      }
      function Oo(e) {
        return e instanceof Ii ? e.changingThisBreaksApplicationSecurity : e;
      }
      function ts(e, t) {
        const n = (function A_(e) {
          return (e instanceof Ii && e.getTypeName()) || null;
        })(e);
        if (null != n && n !== t) {
          if ('ResourceURL' === n && 'URL' === t) return !0;
          throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`);
        }
        return n === t;
      }
      function T_(e) {
        return new b_(e);
      }
      function I_(e) {
        return new w_(e);
      }
      function O_(e) {
        return new E_(e);
      }
      function S_(e) {
        return new x_(e);
      }
      function N_(e) {
        return new M_(e);
      }
      function Bd(e) {
        const t = new P_(e);
        return (function k_() {
          try {
            return !!new window.DOMParser().parseFromString(Ti(''), 'text/html');
          } catch (e) {
            return !1;
          }
        })()
          ? new F_(t)
          : t;
      }
      class F_ {
        constructor(t) {
          this.inertDocumentHelper = t;
        }
        getInertBodyElement(t) {
          t = '<body><remove></remove>' + t;
          try {
            const n = new window.DOMParser().parseFromString(Ti(t), 'text/html').body;
            return null === n ? this.inertDocumentHelper.getInertBodyElement(t) : (n.removeChild(n.firstChild), n);
          } catch (n) {
            return null;
          }
        }
      }
      class P_ {
        constructor(t) {
          if (
            ((this.defaultDoc = t),
            (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument('sanitization-inert')),
            null == this.inertDocument.body)
          ) {
            const n = this.inertDocument.createElement('html');
            this.inertDocument.appendChild(n);
            const r = this.inertDocument.createElement('body');
            n.appendChild(r);
          }
        }
        getInertBodyElement(t) {
          const n = this.inertDocument.createElement('template');
          if ('content' in n) return (n.innerHTML = Ti(t)), n;
          const r = this.inertDocument.createElement('body');
          return (r.innerHTML = Ti(t)), this.defaultDoc.documentMode && this.stripCustomNsAttrs(r), r;
        }
        stripCustomNsAttrs(t) {
          const n = t.attributes;
          for (let o = n.length - 1; 0 < o; o--) {
            const l = n.item(o).name;
            ('xmlns:ns1' === l || 0 === l.indexOf('ns1:')) && t.removeAttribute(l);
          }
          let r = t.firstChild;
          for (; r; ) r.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(r), (r = r.nextSibling);
        }
      }
      const R_ = /^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;
      function La(e) {
        return (e = String(e)).match(R_) ? e : 'unsafe:' + e;
      }
      function So(e) {
        const t = {};
        for (const n of e.split(',')) t[n] = !0;
        return t;
      }
      function ea(...e) {
        const t = {};
        for (const n of e) for (const r in n) n.hasOwnProperty(r) && (t[r] = !0);
        return t;
      }
      const jd = So('area,br,col,hr,img,wbr'),
        Hd = So('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        $d = So('rp,rt'),
        Kc = ea(
          jd,
          ea(
            Hd,
            So(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
            )
          ),
          ea(
            $d,
            So(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
            )
          ),
          ea($d, Hd)
        ),
        Xc = So('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        Gd = ea(
          Xc,
          So(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
          ),
          So(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
          )
        ),
        L_ = So('script,style,template');
      class V_ {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(t) {
          let n = t.firstChild,
            r = !0;
          for (; n; )
            if (
              (n.nodeType === Node.ELEMENT_NODE
                ? (r = this.startElement(n))
                : n.nodeType === Node.TEXT_NODE
                ? this.chars(n.nodeValue)
                : (this.sanitizedSomething = !0),
              r && n.firstChild)
            )
              n = n.firstChild;
            else
              for (; n; ) {
                n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
                let o = this.checkClobberedElement(n, n.nextSibling);
                if (o) {
                  n = o;
                  break;
                }
                n = this.checkClobberedElement(n, n.parentNode);
              }
          return this.buf.join('');
        }
        startElement(t) {
          const n = t.nodeName.toLowerCase();
          if (!Kc.hasOwnProperty(n)) return (this.sanitizedSomething = !0), !L_.hasOwnProperty(n);
          this.buf.push('<'), this.buf.push(n);
          const r = t.attributes;
          for (let o = 0; o < r.length; o++) {
            const s = r.item(o),
              l = s.name,
              f = l.toLowerCase();
            if (!Gd.hasOwnProperty(f)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let g = s.value;
            Xc[f] && (g = La(g)), this.buf.push(' ', l, '="', Zd(g), '"');
          }
          return this.buf.push('>'), !0;
        }
        endElement(t) {
          const n = t.nodeName.toLowerCase();
          Kc.hasOwnProperty(n) && !jd.hasOwnProperty(n) && (this.buf.push('</'), this.buf.push(n), this.buf.push('>'));
        }
        chars(t) {
          this.buf.push(Zd(t));
        }
        checkClobberedElement(t, n) {
          if (
            n &&
            (t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`);
          return n;
        }
      }
      const U_ = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        B_ = /([^\#-~ |!])/g;
      function Zd(e) {
        return e
          .replace(/&/g, '&amp;')
          .replace(U_, function (t) {
            return '&#' + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ';';
          })
          .replace(B_, function (t) {
            return '&#' + t.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      let Va;
      function zd(e, t) {
        let n = null;
        try {
          Va = Va || Bd(e);
          let r = t ? String(t) : '';
          n = Va.getInertBodyElement(r);
          let o = 5,
            s = r;
          do {
            if (0 === o) throw new Error('Failed to sanitize html because the input is unstable');
            o--, (r = s), (s = n.innerHTML), (n = Va.getInertBodyElement(r));
          } while (r !== s);
          return Ti(new V_().sanitizeChildren(el(n) || n));
        } finally {
          if (n) {
            const r = el(n) || n;
            for (; r.firstChild; ) r.removeChild(r.firstChild);
          }
        }
      }
      function el(e) {
        return 'content' in e &&
          (function j_(e) {
            return e.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === e.nodeName;
          })(e)
          ? e.content
          : null;
      }
      var ln = (() => (
        ((ln = ln || {})[(ln.NONE = 0)] = 'NONE'),
        (ln[(ln.HTML = 1)] = 'HTML'),
        (ln[(ln.STYLE = 2)] = 'STYLE'),
        (ln[(ln.SCRIPT = 3)] = 'SCRIPT'),
        (ln[(ln.URL = 4)] = 'URL'),
        (ln[(ln.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
        ln
      ))();
      function qd(e) {
        const t = ta();
        return t ? Ld(t.sanitize(ln.HTML, e) || '') : ts(e, 'HTML') ? Ld(Oo(e)) : zd(Rd(), H(e));
      }
      function tl(e) {
        const t = ta();
        return t ? t.sanitize(ln.URL, e) || '' : ts(e, 'URL') ? Oo(e) : La(H(e));
      }
      function nl(e) {
        const t = ta();
        if (t) return Ud(t.sanitize(ln.RESOURCE_URL, e) || '');
        if (ts(e, 'ResourceURL')) return Ud(Oo(e));
        throw new K(904, !1);
      }
      function ta() {
        const e = we();
        return e && e[12];
      }
      const rl = new Pt('ENVIRONMENT_INITIALIZER'),
        Wd = new Pt('INJECTOR', -1),
        Yd = new Pt('INJECTOR_DEF_TYPES');
      class Qd {
        get(t, n = Fn) {
          if (n === Fn) {
            const r = new Error(`NullInjectorError: No provider for ${ge(t)}!`);
            throw ((r.name = 'NullInjectorError'), r);
          }
          return n;
        }
      }
      function W_(...e) {
        return { ɵproviders: Jd(0, e) };
      }
      function Jd(e, ...t) {
        const n = [],
          r = new Set();
        let o;
        return (
          Br(t, (s) => {
            const l = s;
            ol(l, n, [], r) && (o || (o = []), o.push(l));
          }),
          void 0 !== o && Kd(o, n),
          n
        );
      }
      function Kd(e, t) {
        for (let n = 0; n < e.length; n++) {
          const { providers: o } = e[n];
          Br(o, (s) => {
            t.push(s);
          });
        }
      }
      function ol(e, t, n, r) {
        if (!(e = R(e))) return !1;
        let o = null,
          s = un(e);
        const l = !s && _t(e);
        if (s || l) {
          if (l && !l.standalone) return !1;
          o = e;
        } else {
          const g = e.ngModule;
          if (((s = un(g)), !s)) return !1;
          o = g;
        }
        const f = r.has(o);
        if (l) {
          if (f) return !1;
          if ((r.add(o), l.dependencies)) {
            const g = 'function' == typeof l.dependencies ? l.dependencies() : l.dependencies;
            for (const D of g) ol(D, t, n, r);
          }
        } else {
          if (!s) return !1;
          {
            if (null != s.imports && !f) {
              let D;
              r.add(o);
              try {
                Br(s.imports, (M) => {
                  ol(M, t, n, r) && (D || (D = []), D.push(M));
                });
              } finally {
              }
              void 0 !== D && Kd(D, t);
            }
            if (!f) {
              const D = Gn(o) || (() => new o());
              t.push(
                { provide: o, useFactory: D, deps: Ke },
                { provide: Yd, useValue: o, multi: !0 },
                { provide: rl, useValue: () => gn(o), multi: !0 }
              );
            }
            const g = s.providers;
            null == g ||
              f ||
              Br(g, (M) => {
                t.push(M);
              });
          }
        }
        return o !== e && void 0 !== e.providers;
      }
      const Y_ = ae({ provide: String, useValue: ae });
      function il(e) {
        return null !== e && 'object' == typeof e && Y_ in e;
      }
      function Oi(e) {
        return 'function' == typeof e;
      }
      const sl = new Pt('Set Injector scope.'),
        Ua = {},
        J_ = {};
      let al;
      function Ba() {
        return void 0 === al && (al = new Qd()), al;
      }
      class Si {}
      class tf extends Si {
        constructor(t, n, r, o) {
          super(),
            (this.parent = n),
            (this.source = r),
            (this.scopes = o),
            (this.records = new Map()),
            (this._ngOnDestroyHooks = new Set()),
            (this._onDestroyHooks = []),
            (this._destroyed = !1),
            ll(t, (l) => this.processProvider(l)),
            this.records.set(Wd, ns(void 0, this)),
            o.has('environment') && this.records.set(Si, ns(void 0, this));
          const s = this.records.get(sl);
          null != s && 'string' == typeof s.value && this.scopes.add(s.value),
            (this.injectorDefTypes = new Set(this.get(Yd.multi, Ke, Qe.Self)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            for (const t of this._ngOnDestroyHooks) t.ngOnDestroy();
            for (const t of this._onDestroyHooks) t();
          } finally {
            this.records.clear(),
              this._ngOnDestroyHooks.clear(),
              this.injectorDefTypes.clear(),
              (this._onDestroyHooks.length = 0);
          }
        }
        onDestroy(t) {
          this._onDestroyHooks.push(t);
        }
        runInContext(t) {
          this.assertNotDestroyed();
          const n = Ki(this),
            r = qt(void 0);
          try {
            return t();
          } finally {
            Ki(n), qt(r);
          }
        }
        get(t, n = Fn, r = Qe.Default) {
          this.assertNotDestroyed();
          const o = Ki(this),
            s = qt(void 0);
          try {
            if (!(r & Qe.SkipSelf)) {
              let f = this.records.get(t);
              if (void 0 === f) {
                const g =
                  (function nv(e) {
                    return 'function' == typeof e || ('object' == typeof e && e instanceof Pt);
                  })(t) && xt(t);
                (f = g && this.injectableDefInScope(g) ? ns(cl(t), Ua) : null), this.records.set(t, f);
              }
              if (null != f) return this.hydrate(t, f);
            }
            return (r & Qe.Self ? Ba() : this.parent).get(t, (n = r & Qe.Optional && n === Fn ? null : n));
          } catch (l) {
            if ('NullInjectorError' === l.name) {
              if (((l[Ia] = l[Ia] || []).unshift(ge(t)), o)) throw l;
              return (function Mm(e, t, n, r) {
                const o = e[Ia];
                throw (
                  (t[Xu] && o.unshift(t[Xu]),
                  (e.message = (function Am(e, t, n, r = null) {
                    e = e && '\n' === e.charAt(0) && '\u0275' == e.charAt(1) ? e.slice(2) : e;
                    let o = ge(t);
                    if (Array.isArray(t)) o = t.map(ge).join(' -> ');
                    else if ('object' == typeof t) {
                      let s = [];
                      for (let l in t)
                        if (t.hasOwnProperty(l)) {
                          let f = t[l];
                          s.push(l + ':' + ('string' == typeof f ? JSON.stringify(f) : ge(f)));
                        }
                      o = `{${s.join(', ')}}`;
                    }
                    return `${n}${r ? '(' + r + ')' : ''}[${o}]: ${e.replace(bm, '\n  ')}`;
                  })('\n' + e.message, o, n, r)),
                  (e.ngTokenPath = o),
                  (e[Ia] = null),
                  e)
                );
              })(l, t, 'R3InjectorError', this.source);
            }
            throw l;
          } finally {
            qt(s), Ki(o);
          }
        }
        resolveInjectorInitializers() {
          const t = Ki(this),
            n = qt(void 0);
          try {
            const r = this.get(rl.multi, Ke, Qe.Self);
            for (const o of r) o();
          } finally {
            Ki(t), qt(n);
          }
        }
        toString() {
          const t = [],
            n = this.records;
          for (const r of n.keys()) t.push(ge(r));
          return `R3Injector[${t.join(', ')}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new K(205, !1);
        }
        processProvider(t) {
          let n = Oi((t = R(t))) ? t : R(t && t.provide);
          const r = (function X_(e) {
            return il(e) ? ns(void 0, e.useValue) : ns(nf(e), Ua);
          })(t);
          if (Oi(t) || !0 !== t.multi) this.records.get(n);
          else {
            let o = this.records.get(n);
            o || ((o = ns(void 0, Ua, !0)), (o.factory = () => Tc(o.multi)), this.records.set(n, o)),
              (n = t),
              o.multi.push(t);
          }
          this.records.set(n, r);
        }
        hydrate(t, n) {
          return (
            n.value === Ua && ((n.value = J_), (n.value = n.factory())),
            'object' == typeof n.value &&
              n.value &&
              (function tv(e) {
                return null !== e && 'object' == typeof e && 'function' == typeof e.ngOnDestroy;
              })(n.value) &&
              this._ngOnDestroyHooks.add(n.value),
            n.value
          );
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const n = R(t.providedIn);
          return 'string' == typeof n ? 'any' === n || this.scopes.has(n) : this.injectorDefTypes.has(n);
        }
      }
      function cl(e) {
        const t = xt(e),
          n = null !== t ? t.factory : Gn(e);
        if (null !== n) return n;
        if (e instanceof Pt) throw new K(204, !1);
        if (e instanceof Function)
          return (function K_(e) {
            const t = e.length;
            if (t > 0) throw (Ji(t, '?'), new K(204, !1));
            const n = (function Kt(e) {
              const t = e && (e[Bt] || e[Dn]);
              if (t) {
                const n = (function Nt(e) {
                  if (e.hasOwnProperty('name')) return e.name;
                  const t = ('' + e).match(/^function\s*([^\s(]+)/);
                  return null === t ? '' : t[1];
                })(e);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`
                  ),
                  t
                );
              }
              return null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new K(204, !1);
      }
      function nf(e, t, n) {
        let r;
        if (Oi(e)) {
          const o = R(e);
          return Gn(o) || cl(o);
        }
        if (il(e)) r = () => R(e.useValue);
        else if (
          (function ef(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          r = () => e.useFactory(...Tc(e.deps || []));
        else if (
          (function Xd(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          r = () => gn(R(e.useExisting));
        else {
          const o = R(e && (e.useClass || e.provide));
          if (
            !(function ev(e) {
              return !!e.deps;
            })(e)
          )
            return Gn(o) || cl(o);
          r = () => new o(...Tc(e.deps));
        }
        return r;
      }
      function ns(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function rv(e) {
        return !!e.ɵproviders;
      }
      function ll(e, t) {
        for (const n of e) Array.isArray(n) ? ll(n, t) : rv(n) ? ll(n.ɵproviders, t) : t(n);
      }
      class rf {}
      class sv {
        resolveComponentFactory(t) {
          throw (function iv(e) {
            const t = Error(`No component factory found for ${ge(e)}. Did you add it to @NgModule.entryComponents?`);
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      let na = (() => {
        class e {}
        return (e.NULL = new sv()), e;
      })();
      function av() {
        return rs(Wt(), we());
      }
      function rs(e, t) {
        return new ra(hn(e, t));
      }
      let ra = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
        }
        return (e.__NG_ELEMENT_ID__ = av), e;
      })();
      function cv(e) {
        return e instanceof ra ? e.nativeElement : e;
      }
      class af {}
      let lv = (() => {
          class e {}
          return (
            (e.__NG_ELEMENT_ID__ = () =>
              (function uv() {
                const e = we(),
                  n = sn(Wt().index, e);
                return (nn(n) ? n : e)[11];
              })()),
            e
          );
        })(),
        dv = (() => {
          class e {}
          return (e.ɵprov = je({ token: e, providedIn: 'root', factory: () => null })), e;
        })();
      class cf {
        constructor(t) {
          (this.full = t),
            (this.major = t.split('.')[0]),
            (this.minor = t.split('.')[1]),
            (this.patch = t.split('.').slice(2).join('.'));
        }
      }
      const fv = new cf('14.3.0'),
        ul = {};
      function fl(e) {
        return e.ngOriginalError;
      }
      class oa {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t);
          this._console.error('ERROR', t), n && this._console.error('ORIGINAL ERROR', n);
        }
        _findOriginalError(t) {
          let n = t && fl(t);
          for (; n && fl(n); ) n = fl(n);
          return n || null;
        }
      }
      function lf(e) {
        return e.ownerDocument.defaultView;
      }
      function uf(e) {
        return e.ownerDocument;
      }
      function No(e) {
        return e instanceof Function ? e() : e;
      }
      function ff(e, t, n) {
        let r = e.length;
        for (;;) {
          const o = e.indexOf(t, n);
          if (-1 === o) return o;
          if (0 === o || e.charCodeAt(o - 1) <= 32) {
            const s = t.length;
            if (o + s === r || e.charCodeAt(o + s) <= 32) return o;
          }
          n = o + 1;
        }
      }
      const hf = 'ng-template';
      function Dv(e, t, n) {
        let r = 0;
        for (; r < e.length; ) {
          let o = e[r++];
          if (n && 'class' === o) {
            if (((o = e[r]), -1 !== ff(o.toLowerCase(), t, 0))) return !0;
          } else if (1 === o) {
            for (; r < e.length && 'string' == typeof (o = e[r++]); ) if (o.toLowerCase() === t) return !0;
            return !1;
          }
        }
        return !1;
      }
      function pf(e) {
        return 4 === e.type && e.value !== hf;
      }
      function bv(e, t, n) {
        return t === (4 !== e.type || n ? e.value : hf);
      }
      function wv(e, t, n) {
        let r = 4;
        const o = e.attrs || [],
          s = (function Mv(e) {
            for (let t = 0; t < e.length; t++) if (bt(e[t])) return t;
            return e.length;
          })(o);
        let l = !1;
        for (let f = 0; f < t.length; f++) {
          const g = t[f];
          if ('number' != typeof g) {
            if (!l)
              if (4 & r) {
                if (((r = 2 | (1 & r)), ('' !== g && !bv(e, g, n)) || ('' === g && 1 === t.length))) {
                  if (jr(r)) return !1;
                  l = !0;
                }
              } else {
                const D = 8 & r ? g : t[++f];
                if (8 & r && null !== e.attrs) {
                  if (!Dv(e.attrs, D, n)) {
                    if (jr(r)) return !1;
                    l = !0;
                  }
                  continue;
                }
                const T = Ev(8 & r ? 'class' : g, o, pf(e), n);
                if (-1 === T) {
                  if (jr(r)) return !1;
                  l = !0;
                  continue;
                }
                if ('' !== D) {
                  let V;
                  V = T > s ? '' : o[T + 1].toLowerCase();
                  const Q = 8 & r ? V : null;
                  if ((Q && -1 !== ff(Q, D, 0)) || (2 & r && D !== V)) {
                    if (jr(r)) return !1;
                    l = !0;
                  }
                }
              }
          } else {
            if (!l && !jr(r) && !jr(g)) return !1;
            if (l && jr(g)) continue;
            (l = !1), (r = g | (1 & r));
          }
        }
        return jr(r) || l;
      }
      function jr(e) {
        return 0 == (1 & e);
      }
      function Ev(e, t, n, r) {
        if (null === t) return -1;
        let o = 0;
        if (r || !n) {
          let s = !1;
          for (; o < t.length; ) {
            const l = t[o];
            if (l === e) return o;
            if (3 === l || 6 === l) s = !0;
            else {
              if (1 === l || 2 === l) {
                let f = t[++o];
                for (; 'string' == typeof f; ) f = t[++o];
                continue;
              }
              if (4 === l) break;
              if (0 === l) {
                o += 4;
                continue;
              }
            }
            o += s ? 1 : 2;
          }
          return -1;
        }
        return (function Av(e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const r = e[n];
              if ('number' == typeof r) return -1;
              if (r === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function gf(e, t, n = !1) {
        for (let r = 0; r < t.length; r++) if (wv(e, t[r], n)) return !0;
        return !1;
      }
      function Tv(e, t) {
        e: for (let n = 0; n < t.length; n++) {
          const r = t[n];
          if (e.length === r.length) {
            for (let o = 0; o < e.length; o++) if (e[o] !== r[o]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function mf(e, t) {
        return e ? ':not(' + t.trim() + ')' : t;
      }
      function Iv(e) {
        let t = e[0],
          n = 1,
          r = 2,
          o = '',
          s = !1;
        for (; n < e.length; ) {
          let l = e[n];
          if ('string' == typeof l)
            if (2 & r) {
              const f = e[++n];
              o += '[' + l + (f.length > 0 ? '="' + f + '"' : '') + ']';
            } else 8 & r ? (o += '.' + l) : 4 & r && (o += ' ' + l);
          else '' !== o && !jr(l) && ((t += mf(s, o)), (o = '')), (r = l), (s = s || !jr(r));
          n++;
        }
        return '' !== o && (t += mf(s, o)), t;
      }
      const ft = {};
      function _f(e) {
        vf(pt(), we(), an() + e, !1);
      }
      function vf(e, t, n, r) {
        if (!r)
          if (3 == (3 & t[2])) {
            const s = e.preOrderCheckHooks;
            null !== s && Ci(t, s, n);
          } else {
            const s = e.preOrderHooks;
            null !== s && Di(t, s, 0, n);
          }
        Tr(n);
      }
      function bf(e, t = null, n = null, r) {
        const o = wf(e, t, n, r);
        return o.resolveInjectorInitializers(), o;
      }
      function wf(e, t = null, n = null, r, o = new Set()) {
        const s = [n || Ke, W_(e)];
        return (r = r || ('object' == typeof e ? void 0 : ge(e))), new tf(s, t || Ba(), r || null, o);
      }
      let Ni = (() => {
        class e {
          static create(n, r) {
            var o;
            if (Array.isArray(n)) return bf({ name: '' }, r, n, '');
            {
              const s = null !== (o = n.name) && void 0 !== o ? o : '';
              return bf({ name: s }, n.parent, n.providers, s);
            }
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = Fn),
          (e.NULL = new Qd()),
          (e.ɵprov = je({ token: e, providedIn: 'any', factory: () => gn(Wd) })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function ss(e, t = Qe.Default) {
        const n = we();
        return null === n ? gn(e, t) : xa(Wt(), n, R(e), t);
      }
      function Of() {
        throw new Error('invalid');
      }
      function Ha(e, t) {
        return (e << 17) | (t << 2);
      }
      function Hr(e) {
        return (e >> 17) & 32767;
      }
      function _l(e) {
        return 2 | e;
      }
      function Fo(e) {
        return (131068 & e) >> 2;
      }
      function vl(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function yl(e) {
        return 1 | e;
      }
      function jf(e, t) {
        const n = e.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const o = n[r],
              s = n[r + 1];
            if (-1 !== s) {
              const l = e.data[s];
              wo(o), l.contentQueries(2, t[s], s);
            }
          }
      }
      function Za(e, t, n, r, o, s, l, f, g, D, M) {
        const T = t.blueprint.slice();
        return (
          (T[0] = o),
          (T[2] = 76 | r),
          (null !== M || (e && 1024 & e[2])) && (T[2] |= 1024),
          no(T),
          (T[3] = T[15] = e),
          (T[8] = n),
          (T[10] = l || (e && e[10])),
          (T[11] = f || (e && e[11])),
          (T[12] = g || (e && e[12]) || null),
          (T[9] = D || (e && e[9]) || null),
          (T[6] = s),
          (T[20] = (function Gm() {
            return $m++;
          })()),
          (T[21] = M),
          (T[16] = 2 == t.type ? e[16] : T),
          T
        );
      }
      function as(e, t, n, r, o) {
        let s = e.data[t];
        if (null === s)
          (s = Al(e, t, n, r, o)),
            (function Co() {
              return ot.lFrame.inI18n;
            })() && (s.flags |= 64);
        else if (64 & s.type) {
          (s.type = n), (s.value = r), (s.attrs = o);
          const l = ro();
          s.injectorIndex = null === l ? -1 : l.injectorIndex;
        }
        return Mt(s, !0), s;
      }
      function Al(e, t, n, r, o) {
        const s = ji(),
          l = C(),
          g = (e.data[t] = (function dy(e, t, n, r, o, s) {
            return {
              type: n,
              index: r,
              insertBeforeIndex: null,
              injectorIndex: t ? t.injectorIndex : -1,
              directiveStart: -1,
              directiveEnd: -1,
              directiveStylingLast: -1,
              propertyBindings: null,
              flags: 0,
              providerIndexes: 0,
              value: o,
              attrs: s,
              mergedAttrs: null,
              localNames: null,
              initialInputs: void 0,
              inputs: null,
              outputs: null,
              tViews: null,
              next: null,
              projectionNext: null,
              child: null,
              parent: t,
              projection: null,
              styles: null,
              stylesWithoutHost: null,
              residualStyles: void 0,
              classes: null,
              classesWithoutHost: null,
              residualClasses: void 0,
              classBindings: 0,
              styleBindings: 0
            };
          })(0, l ? s : s && s.parent, n, t, r, o));
        return (
          null === e.firstChild && (e.firstChild = g),
          null !== s && (l ? null == s.child && null !== g.parent && (s.child = g) : null === s.next && (s.next = g)),
          g
        );
      }
      function cs(e, t, n, r) {
        if (0 === n) return -1;
        const o = t.length;
        for (let s = 0; s < n; s++) t.push(r), e.blueprint.push(r), e.data.push(null);
        return o;
      }
      function Tl(e, t, n) {
        mi(t);
        try {
          const r = e.viewQuery;
          null !== r && Rl(1, r, n);
          const o = e.template;
          null !== o && Hf(e, t, o, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && jf(e, t),
            e.staticViewQueries && Rl(2, e.viewQuery, n);
          const s = e.components;
          null !== s &&
            (function cy(e, t) {
              for (let n = 0; n < t.length; n++) Ay(e, t[n]);
            })(t, s);
        } catch (r) {
          throw (e.firstCreatePass && ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)), r);
        } finally {
          (t[2] &= -5), vi();
        }
      }
      function za(e, t, n, r) {
        const o = t[2];
        if (128 != (128 & o)) {
          mi(t);
          try {
            no(t),
              (function gr(e) {
                return (ot.lFrame.bindingIndex = e);
              })(e.bindingStartIndex),
              null !== n && Hf(e, t, n, 2, r);
            const l = 3 == (3 & o);
            if (l) {
              const D = e.preOrderCheckHooks;
              null !== D && Ci(t, D, null);
            } else {
              const D = e.preOrderHooks;
              null !== D && Di(t, D, 0, null), Gi(t, 0);
            }
            if (
              ((function xy(e) {
                for (let t = Vc(e); null !== t; t = Uc(t)) {
                  if (!t[2]) continue;
                  const n = t[9];
                  for (let r = 0; r < n.length; r++) {
                    const o = n[r],
                      s = o[3];
                    0 == (512 & o[2]) && Ar(s, 1), (o[2] |= 512);
                  }
                }
              })(t),
              (function Ey(e) {
                for (let t = Vc(e); null !== t; t = Uc(t))
                  for (let n = 10; n < t.length; n++) {
                    const r = t[n],
                      o = r[1];
                    to(r) && za(o, r, o.template, r[8]);
                  }
              })(t),
              null !== e.contentQueries && jf(e, t),
              l)
            ) {
              const D = e.contentCheckHooks;
              null !== D && Ci(t, D);
            } else {
              const D = e.contentHooks;
              null !== D && Di(t, D, 1), Gi(t, 1);
            }
            !(function sy(e, t) {
              const n = e.hostBindingOpCodes;
              if (null !== n)
                try {
                  for (let r = 0; r < n.length; r++) {
                    const o = n[r];
                    if (o < 0) Tr(~o);
                    else {
                      const s = o,
                        l = n[++r],
                        f = n[++r];
                      pi(l, s), f(2, t[s]);
                    }
                  }
                } finally {
                  Tr(-1);
                }
            })(e, t);
            const f = e.components;
            null !== f &&
              (function ay(e, t) {
                for (let n = 0; n < t.length; n++) My(e, t[n]);
              })(t, f);
            const g = e.viewQuery;
            if ((null !== g && Rl(2, g, r), l)) {
              const D = e.viewCheckHooks;
              null !== D && Ci(t, D);
            } else {
              const D = e.viewHooks;
              null !== D && Di(t, D, 2), Gi(t, 2);
            }
            !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
              (t[2] &= -41),
              512 & t[2] && ((t[2] &= -513), Ar(t[3], -1));
          } finally {
            vi();
          }
        }
      }
      function Hf(e, t, n, r, o) {
        const s = an(),
          l = 2 & r;
        try {
          Tr(-1), l && t.length > 22 && vf(e, t, 22, !1), n(r, o);
        } finally {
          Tr(s);
        }
      }
      function $f(e, t, n) {
        if (Nr(t)) {
          const o = t.directiveEnd;
          for (let s = t.directiveStart; s < o; s++) {
            const l = e.data[s];
            l.contentQueries && l.contentQueries(1, n[s], s);
          }
        }
      }
      function Il(e, t, n) {
        !pr() ||
          ((function my(e, t, n, r) {
            const o = n.directiveStart,
              s = n.directiveEnd;
            e.firstCreatePass || Mo(n, t), zn(r, t);
            const l = n.initialInputs;
            for (let f = o; f < s; f++) {
              const g = e.data[f],
                D = Sn(g);
              D && Dy(t, n, g);
              const M = Jo(t, e, f, n);
              zn(M, t), null !== l && by(0, f - o, M, g, 0, l), D && (sn(n.index, t)[8] = M);
            }
          })(e, t, n, hn(n, t)),
          128 == (128 & n.flags) &&
            (function _y(e, t, n) {
              const r = n.directiveStart,
                o = n.directiveEnd,
                s = n.index,
                l = (function Do() {
                  return ot.lFrame.currentDirectiveIndex;
                })();
              try {
                Tr(s);
                for (let f = r; f < o; f++) {
                  const g = e.data[f],
                    D = t[f];
                  gi(f), (null !== g.hostBindings || 0 !== g.hostVars || null !== g.hostAttrs) && Qf(g, D);
                }
              } finally {
                Tr(-1), gi(l);
              }
            })(e, t, n));
      }
      function Ol(e, t, n = hn) {
        const r = t.localNames;
        if (null !== r) {
          let o = t.index + 1;
          for (let s = 0; s < r.length; s += 2) {
            const l = r[s + 1],
              f = -1 === l ? n(t, e) : e[l];
            e[o++] = f;
          }
        }
      }
      function Gf(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = Sl(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts
            ))
          : t;
      }
      function Sl(e, t, n, r, o, s, l, f, g, D) {
        const M = 22 + r,
          T = M + o,
          V = (function ly(e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : ft);
            return n;
          })(M, T),
          Q = 'function' == typeof D ? D() : D;
        return (V[1] = {
          type: e,
          blueprint: V,
          template: n,
          queries: null,
          viewQuery: f,
          declTNode: t,
          data: V.slice().fill(null, M),
          bindingStartIndex: M,
          expandoStartIndex: T,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: 'function' == typeof s ? s() : s,
          pipeRegistry: 'function' == typeof l ? l() : l,
          firstChild: null,
          schemas: g,
          consts: Q,
          incompleteFirstPass: !1
        });
      }
      function Zf(e, t, n, r) {
        const o = th(t);
        null === n ? o.push(r) : (o.push(n), e.firstCreatePass && nh(e).push(r, o.length - 1));
      }
      function zf(e, t, n) {
        for (let r in e)
          if (e.hasOwnProperty(r)) {
            const o = e[r];
            (n = null === n ? {} : n).hasOwnProperty(r) ? n[r].push(t, o) : (n[r] = [t, o]);
          }
        return n;
      }
      function qf(e, t) {
        const r = t.directiveEnd,
          o = e.data,
          s = t.attrs,
          l = [];
        let f = null,
          g = null;
        for (let D = t.directiveStart; D < r; D++) {
          const M = o[D],
            T = M.inputs,
            V = null === s || pf(t) ? null : wy(T, s);
          l.push(V), (f = zf(T, D, f)), (g = zf(M.outputs, D, g));
        }
        null !== f && (f.hasOwnProperty('class') && (t.flags |= 16), f.hasOwnProperty('style') && (t.flags |= 32)),
          (t.initialInputs = l),
          (t.inputs = f),
          (t.outputs = g);
      }
      function yr(e, t, n, r, o, s, l, f) {
        const g = hn(t, n);
        let M,
          D = t.inputs;
        !f && null != D && (M = D[r])
          ? (Ll(e, n, M, r, o), po(t) && Wf(n, t.index))
          : 3 & t.type &&
            ((r = (function fy(e) {
              return 'class' === e
                ? 'className'
                : 'for' === e
                ? 'htmlFor'
                : 'formaction' === e
                ? 'formAction'
                : 'innerHtml' === e
                ? 'innerHTML'
                : 'readonly' === e
                ? 'readOnly'
                : 'tabindex' === e
                ? 'tabIndex'
                : e;
            })(r)),
            (o = null != l ? l(o, t.value || '', r) : o),
            s.setProperty(g, r, o));
      }
      function Wf(e, t) {
        const n = sn(t, e);
        16 & n[2] || (n[2] |= 32);
      }
      function Nl(e, t, n, r) {
        let o = !1;
        if (pr()) {
          const s = (function vy(e, t, n) {
              const r = e.directiveRegistry;
              let o = null;
              if (r)
                for (let s = 0; s < r.length; s++) {
                  const l = r[s];
                  gf(n, l.selectors, !1) &&
                    (o || (o = []), Zi(Mo(n, t), e, l.type), Sn(l) ? (Jf(e, n), o.unshift(l)) : o.push(l));
                }
              return o;
            })(e, t, n),
            l = null === r ? null : { '': -1 };
          if (null !== s) {
            (o = !0), Kf(n, e.data.length, s.length);
            for (let M = 0; M < s.length; M++) {
              const T = s[M];
              T.providersResolver && T.providersResolver(T);
            }
            let f = !1,
              g = !1,
              D = cs(e, t, s.length, null);
            for (let M = 0; M < s.length; M++) {
              const T = s[M];
              (n.mergedAttrs = Et(n.mergedAttrs, T.hostAttrs)),
                Xf(e, n, t, D, T),
                Cy(D, T, l),
                null !== T.contentQueries && (n.flags |= 8),
                (null !== T.hostBindings || null !== T.hostAttrs || 0 !== T.hostVars) && (n.flags |= 128);
              const V = T.type.prototype;
              !f &&
                (V.ngOnChanges || V.ngOnInit || V.ngDoCheck) &&
                ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index), (f = !0)),
                !g &&
                  (V.ngOnChanges || V.ngDoCheck) &&
                  ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(n.index), (g = !0)),
                D++;
            }
            qf(e, n);
          }
          l &&
            (function yy(e, t, n) {
              if (t) {
                const r = (e.localNames = []);
                for (let o = 0; o < t.length; o += 2) {
                  const s = n[t[o + 1]];
                  if (null == s) throw new K(-301, !1);
                  r.push(t[o], s);
                }
              }
            })(n, r, l);
        }
        return (n.mergedAttrs = Et(n.mergedAttrs, n.attrs)), o;
      }
      function Yf(e, t, n, r, o, s) {
        const l = s.hostBindings;
        if (l) {
          let f = e.hostBindingOpCodes;
          null === f && (f = e.hostBindingOpCodes = []);
          const g = ~t.index;
          (function gy(e) {
            let t = e.length;
            for (; t > 0; ) {
              const n = e[--t];
              if ('number' == typeof n && n < 0) return n;
            }
            return 0;
          })(f) != g && f.push(g),
            f.push(r, o, l);
        }
      }
      function Qf(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function Jf(e, t) {
        (t.flags |= 2), (e.components || (e.components = [])).push(t.index);
      }
      function Cy(e, t, n) {
        if (n) {
          if (t.exportAs) for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          Sn(t) && (n[''] = e);
        }
      }
      function Kf(e, t, n) {
        (e.flags |= 1), (e.directiveStart = t), (e.directiveEnd = t + n), (e.providerIndexes = t);
      }
      function Xf(e, t, n, r, o) {
        e.data[r] = o;
        const s = o.factory || (o.factory = Gn(o.type)),
          l = new Yo(s, Sn(o), ss);
        (e.blueprint[r] = l), (n[r] = l), Yf(e, t, 0, r, cs(e, n, o.hostVars, ft), o);
      }
      function Dy(e, t, n) {
        const r = hn(t, e),
          o = Gf(n),
          s = e[10],
          l = qa(e, Za(e, o, null, n.onPush ? 32 : 16, r, t, s, s.createRenderer(r, n), null, null, null));
        e[t.index] = l;
      }
      function Fl(e, t, n, r, o, s, l) {
        if (null == s) e.removeAttribute(t, o, n);
        else {
          const f = null == l ? H(s) : l(s, r || '', o);
          e.setAttribute(t, o, f, n);
        }
      }
      function by(e, t, n, r, o, s) {
        const l = s[t];
        if (null !== l) {
          const f = r.setInput;
          for (let g = 0; g < l.length; ) {
            const D = l[g++],
              M = l[g++],
              T = l[g++];
            null !== f ? r.setInput(n, T, D, M) : (n[M] = T);
          }
        }
      }
      function wy(e, t) {
        let n = null,
          r = 0;
        for (; r < t.length; ) {
          const o = t[r];
          if (0 !== o)
            if (5 !== o) {
              if ('number' == typeof o) break;
              e.hasOwnProperty(o) && (null === n && (n = []), n.push(o, e[o], t[r + 1])), (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function eh(e, t, n, r) {
        return new Array(e, !0, !1, t, null, 0, r, n, null, null);
      }
      function My(e, t) {
        const n = sn(t, e);
        if (to(n)) {
          const r = n[1];
          48 & n[2] ? za(r, n, r.template, n[8]) : n[5] > 0 && Pl(n);
        }
      }
      function Pl(e) {
        for (let r = Vc(e); null !== r; r = Uc(r))
          for (let o = 10; o < r.length; o++) {
            const s = r[o];
            if (to(s))
              if (512 & s[2]) {
                const l = s[1];
                za(l, s, l.template, s[8]);
              } else s[5] > 0 && Pl(s);
          }
        const n = e[1].components;
        if (null !== n)
          for (let r = 0; r < n.length; r++) {
            const o = sn(n[r], e);
            to(o) && o[5] > 0 && Pl(o);
          }
      }
      function Ay(e, t) {
        const n = sn(t, e),
          r = n[1];
        (function Ty(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n]);
        })(r, n),
          Tl(r, n, n[8]);
      }
      function qa(e, t) {
        return e[13] ? (e[14][4] = t) : (e[13] = t), (e[14] = t), t;
      }
      function kl(e) {
        for (; e; ) {
          e[2] |= 32;
          const t = Ks(e);
          if (Es(e) && !t) return e;
          e = t;
        }
        return null;
      }
      function Wa(e, t, n, r = !0) {
        const o = t[10];
        o.begin && o.begin();
        try {
          za(e, t, e.template, n);
        } catch (l) {
          throw (r && oh(t, l), l);
        } finally {
          o.end && o.end();
        }
      }
      function Rl(e, t, n) {
        wo(0), t(e, n);
      }
      function th(e) {
        return e[7] || (e[7] = []);
      }
      function nh(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function oh(e, t) {
        const n = e[9],
          r = n ? n.get(oa, null) : null;
        r && r.handleError(t);
      }
      function Ll(e, t, n, r, o) {
        for (let s = 0; s < n.length; ) {
          const l = n[s++],
            f = n[s++],
            g = t[l],
            D = e.data[l];
          null !== D.setInput ? D.setInput(g, o, r, f) : (g[f] = o);
        }
      }
      function Po(e, t, n) {
        const r = vo(t, e);
        bd(e[11], r, n);
      }
      function Ya(e, t, n) {
        let r = n ? e.styles : null,
          o = n ? e.classes : null,
          s = 0;
        if (null !== t)
          for (let l = 0; l < t.length; l++) {
            const f = t[l];
            'number' == typeof f ? (s = f) : 1 == s ? (o = Ne(o, f)) : 2 == s && (r = Ne(r, f + ': ' + t[++l] + ';'));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r), n ? (e.classes = o) : (e.classesWithoutHost = o);
      }
      function Qa(e, t, n, r, o = !1) {
        for (; null !== n; ) {
          const s = t[n.index];
          if ((null !== s && r.push(Ht(s)), On(s)))
            for (let f = 10; f < s.length; f++) {
              const g = s[f],
                D = g[1].firstChild;
              null !== D && Qa(g[1], g, D, r);
            }
          const l = n.type;
          if (8 & l) Qa(e, t, n.child, r);
          else if (32 & l) {
            const f = Lc(n, t);
            let g;
            for (; (g = f()); ) r.push(g);
          } else if (16 & l) {
            const f = Fd(t, n);
            if (Array.isArray(f)) r.push(...f);
            else {
              const g = Ks(t[16]);
              Qa(g[1], g, f, r, !0);
            }
          }
          n = o ? n.projectionNext : n.next;
        }
        return r;
      }
      class ia {
        constructor(t, n) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get rootNodes() {
          const t = this._lView,
            n = t[1];
          return Qa(n, t, n.firstChild, []);
        }
        get context() {
          return this._lView[8];
        }
        set context(t) {
          this._lView[8] = t;
        }
        get destroyed() {
          return 128 == (128 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[3];
            if (On(t)) {
              const n = t[8],
                r = n ? n.indexOf(this) : -1;
              r > -1 && (Hc(t, r), Qi(n, r));
            }
            this._attachedToViewContainer = !1;
          }
          Ed(this._lView[1], this._lView);
        }
        onDestroy(t) {
          Zf(this._lView[1], this._lView, null, t);
        }
        markForCheck() {
          kl(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -65;
        }
        reattach() {
          this._lView[2] |= 64;
        }
        detectChanges() {
          Wa(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new K(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function a_(e, t) {
              Xs(e, t, t[11], 2, null, null);
            })(this._lView[1], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new K(902, !1);
          this._appRef = t;
        }
      }
      class Iy extends ia {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          const t = this._view;
          Wa(t[1], t, t[8], !1);
        }
        checkNoChanges() {}
        get context() {
          return null;
        }
      }
      class Vl extends na {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = _t(t);
          return new sa(n, this.ngModule);
        }
      }
      function ih(e) {
        const t = [];
        for (let n in e) e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      class Sy {
        constructor(t, n) {
          (this.injector = t), (this.parentInjector = n);
        }
        get(t, n, r) {
          const o = this.injector.get(t, ul, r);
          return o !== ul || n === ul ? o : this.parentInjector.get(t, n, r);
        }
      }
      class sa extends rf {
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = (function Ov(e) {
              return e.map(Iv).join(',');
            })(t.selectors)),
            (this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : []),
            (this.isBoundToModule = !!n);
        }
        get inputs() {
          return ih(this.componentDef.inputs);
        }
        get outputs() {
          return ih(this.componentDef.outputs);
        }
        create(t, n, r, o) {
          let s = (o = o || this.ngModule) instanceof Si ? o : null == o ? void 0 : o.injector;
          s &&
            null !== this.componentDef.getStandaloneInjector &&
            (s = this.componentDef.getStandaloneInjector(s) || s);
          const l = s ? new Sy(t, s) : t,
            f = l.get(af, null);
          if (null === f) throw new K(407, !1);
          const g = l.get(dv, null),
            D = f.createRenderer(null, this.componentDef),
            M = this.componentDef.selectors[0][0] || 'div',
            T = r
              ? (function uy(e, t, n) {
                  return e.selectRootElement(t, n === tn.ShadowDom);
                })(D, r, this.componentDef.encapsulation)
              : jc(
                  D,
                  M,
                  (function Oy(e) {
                    const t = e.toLowerCase();
                    return 'svg' === t ? 'svg' : 'math' === t ? 'math' : null;
                  })(M)
                ),
            V = this.componentDef.onPush ? 288 : 272,
            Q = Sl(0, null, null, 1, 0, null, null, null, null, null),
            me = Za(null, Q, null, V, null, null, f, D, g, l, null);
          let Se, Ve;
          mi(me);
          try {
            const qe = (function Py(e, t, n, r, o, s) {
              const l = n[1];
              n[22] = e;
              const g = as(l, 22, 2, '#host', null),
                D = (g.mergedAttrs = t.hostAttrs);
              null !== D &&
                (Ya(g, D, !0),
                null !== e &&
                  (ze(o, e, D), null !== g.classes && Wc(o, e, g.classes), null !== g.styles && kd(o, e, g.styles)));
              const M = r.createRenderer(e, t),
                T = Za(n, Gf(t), null, t.onPush ? 32 : 16, n[22], g, r, M, s || null, null, null);
              return (
                l.firstCreatePass && (Zi(Mo(g, n), l, t.type), Jf(l, g), Kf(g, n.length, 1)), qa(n, T), (n[22] = T)
              );
            })(T, this.componentDef, me, f, D);
            if (T)
              if (r) ze(D, T, ['ng-version', fv.full]);
              else {
                const { attrs: rt, classes: Ee } = (function Sv(e) {
                  const t = [],
                    n = [];
                  let r = 1,
                    o = 2;
                  for (; r < e.length; ) {
                    let s = e[r];
                    if ('string' == typeof s) 2 === o ? '' !== s && t.push(s, e[++r]) : 8 === o && n.push(s);
                    else {
                      if (!jr(o)) break;
                      o = s;
                    }
                    r++;
                  }
                  return { attrs: t, classes: n };
                })(this.componentDef.selectors[0]);
                rt && ze(D, T, rt), Ee && Ee.length > 0 && Wc(D, T, Ee.join(' '));
              }
            if (((Ve = $o(Q, 22)), void 0 !== n)) {
              const rt = (Ve.projection = []);
              for (let Ee = 0; Ee < this.ngContentSelectors.length; Ee++) {
                const ct = n[Ee];
                rt.push(null != ct ? Array.from(ct) : null);
              }
            }
            (Se = (function ky(e, t, n, r) {
              const o = n[1],
                s = (function py(e, t, n) {
                  const r = Wt();
                  e.firstCreatePass &&
                    (n.providersResolver && n.providersResolver(n), Xf(e, r, t, cs(e, t, 1, null), n), qf(e, r));
                  const o = Jo(t, e, r.directiveStart, r);
                  zn(o, t);
                  const s = hn(r, t);
                  return s && zn(s, t), o;
                })(o, n, t);
              if (((e[8] = n[8] = s), null !== r)) for (const f of r) f(s, t);
              if (t.contentQueries) {
                const f = Wt();
                t.contentQueries(1, s, f.directiveStart);
              }
              const l = Wt();
              return (
                !o.firstCreatePass ||
                  (null === t.hostBindings && null === t.hostAttrs) ||
                  (Tr(l.index), Yf(n[1], l, 0, l.directiveStart, l.directiveEnd, t), Qf(t, s)),
                s
              );
            })(qe, this.componentDef, me, [Ry])),
              Tl(Q, me, null);
          } finally {
            vi();
          }
          return new Fy(this.componentType, Se, rs(Ve, me), me, Ve);
        }
      }
      class Fy extends class ov {} {
        constructor(t, n, r, o, s) {
          super(),
            (this.location = r),
            (this._rootLView = o),
            (this._tNode = s),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef = new Iy(o)),
            (this.componentType = t);
        }
        setInput(t, n) {
          const r = this._tNode.inputs;
          let o;
          if (null !== r && (o = r[t])) {
            const s = this._rootLView;
            Ll(s[1], s, o, t, n), Wf(s, this._tNode.index);
          }
        }
        get injector() {
          return new Ko(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      function Ry() {
        const e = Wt();
        oo(we()[1], e);
      }
      function Ul(e) {
        let t = (function sh(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const r = [e];
        for (; t; ) {
          let o;
          if (Sn(e)) o = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new K(903, !1);
            o = t.ɵdir;
          }
          if (o) {
            if (n) {
              r.push(o);
              const l = e;
              (l.inputs = Bl(e.inputs)), (l.declaredInputs = Bl(e.declaredInputs)), (l.outputs = Bl(e.outputs));
              const f = o.hostBindings;
              f && By(e, f);
              const g = o.viewQuery,
                D = o.contentQueries;
              if (
                (g && Vy(e, g),
                D && Uy(e, D),
                le(e.inputs, o.inputs),
                le(e.declaredInputs, o.declaredInputs),
                le(e.outputs, o.outputs),
                Sn(o) && o.data.animation)
              ) {
                const M = e.data;
                M.animation = (M.animation || []).concat(o.data.animation);
              }
            }
            const s = o.features;
            if (s)
              for (let l = 0; l < s.length; l++) {
                const f = s[l];
                f && f.ngInherit && f(e), f === Ul && (n = !1);
              }
          }
          t = Object.getPrototypeOf(t);
        }
        !(function Ly(e) {
          let t = 0,
            n = null;
          for (let r = e.length - 1; r >= 0; r--) {
            const o = e[r];
            (o.hostVars = t += o.hostVars), (o.hostAttrs = Et(o.hostAttrs, (n = Et(n, o.hostAttrs))));
          }
        })(r);
      }
      function Bl(e) {
        return e === bn ? {} : e === Ke ? [] : e;
      }
      function Vy(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      function Uy(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (r, o, s) => {
              t(r, o, s), n(r, o, s);
            }
          : t;
      }
      function By(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      let Ja = null;
      function Fi() {
        if (!Ja) {
          const e = gt.Symbol;
          if (e && e.iterator) Ja = e.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let n = 0; n < t.length; ++n) {
              const r = t[n];
              'entries' !== r && 'size' !== r && Map.prototype[r] === Map.prototype.entries && (Ja = r);
            }
          }
        }
        return Ja;
      }
      function aa(e) {
        return !!jl(e) && (Array.isArray(e) || (!(e instanceof Map) && Fi() in e));
      }
      function jl(e) {
        return null !== e && ('function' == typeof e || 'object' == typeof e);
      }
      function ao(e, t, n) {
        return (e[t] = n);
      }
      function qn(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function Pi(e, t, n, r) {
        const o = qn(e, t, n);
        return qn(e, t + 1, r) || o;
      }
      function Hl(e, t, n, r) {
        const o = we();
        return (
          qn(o, Zn(), t) &&
            (pt(),
            (function so(e, t, n, r, o, s) {
              const l = hn(e, t);
              Fl(t[11], l, s, e.value, n, r, o);
            })(Rt(), o, e, t, n, r)),
          Hl
        );
      }
      function us(e, t, n, r) {
        return qn(e, Zn(), n) ? t + H(n) + r : ft;
      }
      function ds(e, t, n, r, o, s) {
        const f = Pi(e, Yt(), n, o);
        return _n(2), f ? t + H(n) + r + H(o) + s : ft;
      }
      function mh(e, t, n, r, o, s, l, f) {
        const g = we(),
          D = pt(),
          M = e + 22,
          T = D.firstCreatePass
            ? (function Wy(e, t, n, r, o, s, l, f, g) {
                const D = t.consts,
                  M = as(t, e, 4, l || null, Zt(D, f));
                Nl(t, n, M, Zt(D, g)), oo(t, M);
                const T = (M.tViews = Sl(2, M, r, o, s, t.directiveRegistry, t.pipeRegistry, null, t.schemas, D));
                return null !== t.queries && (t.queries.template(t, M), (T.queries = t.queries.embeddedTView(M))), M;
              })(M, D, g, t, n, r, o, s, l)
            : D.data[M];
        Mt(T, !1);
        const V = g[11].createComment('');
        Fa(D, g, V, T), zn(V, g), qa(g, (g[M] = eh(V, g, V, T))), Wr(T) && Il(D, g, T), null != l && Ol(g, T, f);
      }
      function _h(e) {
        return sr(
          (function A() {
            return ot.lFrame.contextLView;
          })(),
          22 + e
        );
      }
      function $l(e, t, n) {
        const r = we();
        return qn(r, Zn(), t) && yr(pt(), Rt(), r, e, t, r[11], n, !1), $l;
      }
      function Gl(e, t, n, r, o) {
        const l = o ? 'class' : 'style';
        Ll(e, n, t.inputs[l], l, r);
      }
      function Xa(e, t, n, r) {
        const o = we(),
          s = pt(),
          l = 22 + e,
          f = o[11],
          g = (o[l] = jc(
            f,
            t,
            (function Ns() {
              return ot.lFrame.currentNamespace;
            })()
          )),
          D = s.firstCreatePass
            ? (function Qy(e, t, n, r, o, s, l) {
                const f = t.consts,
                  D = as(t, e, 2, o, Zt(f, s));
                return (
                  Nl(t, n, D, Zt(f, l)),
                  null !== D.attrs && Ya(D, D.attrs, !1),
                  null !== D.mergedAttrs && Ya(D, D.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, D),
                  D
                );
              })(l, s, o, 0, t, n, r)
            : s.data[l];
        Mt(D, !0);
        const M = D.mergedAttrs;
        null !== M && ze(f, g, M);
        const T = D.classes;
        null !== T && Wc(f, g, T);
        const V = D.styles;
        return (
          null !== V && kd(f, g, V),
          64 != (64 & D.flags) && Fa(s, o, g, D),
          0 ===
            (function yo() {
              return ot.lFrame.elementDepthCount;
            })() && zn(g, o),
          (function xs() {
            ot.lFrame.elementDepthCount++;
          })(),
          Wr(D) && (Il(s, o, D), $f(s, D, o)),
          null !== r && Ol(o, D),
          Xa
        );
      }
      function ec() {
        let e = Wt();
        C() ? v() : ((e = e.parent), Mt(e, !1));
        const t = e;
        !(function Ui() {
          ot.lFrame.elementDepthCount--;
        })();
        const n = pt();
        return (
          n.firstCreatePass && (oo(n, e), Nr(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function x(e) {
              return 0 != (16 & e.flags);
            })(t) &&
            Gl(n, t, we(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function F(e) {
              return 0 != (32 & e.flags);
            })(t) &&
            Gl(n, t, we(), t.stylesWithoutHost, !1),
          ec
        );
      }
      function Zl(e, t, n, r) {
        return Xa(e, t, n, r), ec(), Zl;
      }
      function tc(e, t, n) {
        const r = we(),
          o = pt(),
          s = e + 22,
          l = o.firstCreatePass
            ? (function Jy(e, t, n, r, o) {
                const s = t.consts,
                  l = Zt(s, r),
                  f = as(t, e, 8, 'ng-container', l);
                return (
                  null !== l && Ya(f, l, !0),
                  Nl(t, n, f, Zt(s, o)),
                  null !== t.queries && t.queries.elementStart(t, f),
                  f
                );
              })(s, o, r, t, n)
            : o.data[s];
        Mt(l, !0);
        const f = (r[s] = r[11].createComment(''));
        return Fa(o, r, f, l), zn(f, r), Wr(l) && (Il(o, r, l), $f(o, l, r)), null != n && Ol(r, l), tc;
      }
      function nc() {
        let e = Wt();
        const t = pt();
        return (
          C() ? v() : ((e = e.parent), Mt(e, !1)), t.firstCreatePass && (oo(t, e), Nr(e) && t.queries.elementEnd(e)), nc
        );
      }
      function zl(e, t, n) {
        return tc(e, t, n), nc(), zl;
      }
      function vh() {
        return we();
      }
      function ql(e) {
        return !!e && 'function' == typeof e.then;
      }
      function yh(e) {
        return !!e && 'function' == typeof e.subscribe;
      }
      const Ch = yh;
      function Wl(e, t, n, r) {
        const o = we(),
          s = pt(),
          l = Wt();
        return (
          (function bh(e, t, n, r, o, s, l, f) {
            const g = Wr(r),
              M = e.firstCreatePass && nh(e),
              T = t[8],
              V = th(t);
            let Q = !0;
            if (3 & r.type || f) {
              const Ve = hn(r, t),
                qe = f ? f(Ve) : Ve,
                rt = V.length,
                Ee = f ? (It) => f(Ht(It[r.index])) : r.index;
              let ct = null;
              if (
                (!f &&
                  g &&
                  (ct = (function Ky(e, t, n, r) {
                    const o = e.cleanup;
                    if (null != o)
                      for (let s = 0; s < o.length - 1; s += 2) {
                        const l = o[s];
                        if (l === n && o[s + 1] === r) {
                          const f = t[7],
                            g = o[s + 2];
                          return f.length > g ? f[g] : null;
                        }
                        'string' == typeof l && (s += 2);
                      }
                    return null;
                  })(e, t, o, r.index)),
                null !== ct)
              )
                ((ct.__ngLastListenerFn__ || ct).__ngNextListenerFn__ = s), (ct.__ngLastListenerFn__ = s), (Q = !1);
              else {
                s = Eh(r, t, T, s, !1);
                const It = n.listen(qe, o, s);
                V.push(s, It), M && M.push(o, Ee, rt, rt + 1);
              }
            } else s = Eh(r, t, T, s, !1);
            const me = r.outputs;
            let Se;
            if (Q && null !== me && (Se = me[o])) {
              const Ve = Se.length;
              if (Ve)
                for (let qe = 0; qe < Ve; qe += 2) {
                  const Qt = t[Se[qe]][Se[qe + 1]].subscribe(s),
                    Li = V.length;
                  V.push(s, Qt), M && M.push(o, r.index, Li, -(Li + 1));
                }
            }
          })(s, o, o[11], l, e, t, 0, r),
          Wl
        );
      }
      function wh(e, t, n, r) {
        try {
          return !1 !== n(r);
        } catch (o) {
          return oh(e, o), !1;
        }
      }
      function Eh(e, t, n, r, o) {
        return function s(l) {
          if (l === Function) return r;
          kl(2 & e.flags ? sn(e.index, t) : t);
          let g = wh(t, 0, r, l),
            D = s.__ngNextListenerFn__;
          for (; D; ) (g = wh(t, 0, D, l) && g), (D = D.__ngNextListenerFn__);
          return o && !1 === g && (l.preventDefault(), (l.returnValue = !1)), g;
        };
      }
      function xh(e = 1) {
        return (function Ts(e) {
          return (ot.lFrame.contextLView = (function yi(e, t) {
            for (; e > 0; ) (t = t[15]), e--;
            return t;
          })(e, ot.lFrame.contextLView))[8];
        })(e);
      }
      function Xy(e, t) {
        let n = null;
        const r = (function xv(e) {
          const t = e.attrs;
          if (null != t) {
            const n = t.indexOf(5);
            if (0 == (1 & n)) return t[n + 1];
          }
          return null;
        })(e);
        for (let o = 0; o < t.length; o++) {
          const s = t[o];
          if ('*' !== s) {
            if (null === r ? gf(e, s, !0) : Tv(r, s)) return o;
          } else n = o;
        }
        return n;
      }
      function Mh(e) {
        const t = we()[16][6];
        if (!t.projection) {
          const r = (t.projection = Ji(e ? e.length : 1, null)),
            o = r.slice();
          let s = t.child;
          for (; null !== s; ) {
            const l = e ? Xy(s, e) : 0;
            null !== l && (o[l] ? (o[l].projectionNext = s) : (r[l] = s), (o[l] = s)), (s = s.next);
          }
        }
      }
      function Ah(e, t = 0, n) {
        const r = we(),
          o = pt(),
          s = as(o, 22 + e, 16, null, n || null);
        null === s.projection && (s.projection = t),
          v(),
          64 != (64 & s.flags) &&
            (function g_(e, t, n) {
              Pd(t[11], 0, t, n, xd(e, n, t), Id(n.parent || t[6], n, t));
            })(o, r, s);
      }
      function Yl(e, t, n) {
        return rc(e, '', t, '', n), Yl;
      }
      function rc(e, t, n, r, o) {
        const s = we(),
          l = us(s, t, n, r);
        return l !== ft && yr(pt(), Rt(), s, e, l, s[11], o, !1), rc;
      }
      function Ql(e, t, n, r, o, s, l) {
        const f = we(),
          g = ds(f, t, n, r, o, s);
        return g !== ft && yr(pt(), Rt(), f, e, g, f[11], l, !1), Ql;
      }
      function kh(e, t, n, r, o) {
        const s = e[n + 1],
          l = null === t;
        let f = r ? Hr(s) : Fo(s),
          g = !1;
        for (; 0 !== f && (!1 === g || l); ) {
          const M = e[f + 1];
          n0(e[f], t) && ((g = !0), (e[f + 1] = r ? yl(M) : _l(M))), (f = r ? Hr(M) : Fo(M));
        }
        g && (e[n + 1] = r ? _l(s) : yl(s));
      }
      function n0(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || 'string' != typeof t) && z(e, t) >= 0)
        );
      }
      const yn = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
      function Rh(e) {
        return e.substring(yn.key, yn.keyEnd);
      }
      function Lh(e, t) {
        const n = yn.textEnd;
        return n === t
          ? -1
          : ((t = yn.keyEnd =
              (function a0(e, t, n) {
                for (; t < n && e.charCodeAt(t) > 32; ) t++;
                return t;
              })(e, (yn.key = t), n)),
            vs(e, t, n));
      }
      function vs(e, t, n) {
        for (; t < n && e.charCodeAt(t) <= 32; ) t++;
        return t;
      }
      function Jl(e, t, n) {
        return $r(e, t, n, !1), Jl;
      }
      function Kl(e, t) {
        return $r(e, t, null, !0), Kl;
      }
      function Hh(e) {
        Gr(O, lo, e, !0);
      }
      function lo(e, t) {
        for (
          let n = (function o0(e) {
            return (
              (function Uh(e) {
                (yn.key = 0), (yn.keyEnd = 0), (yn.value = 0), (yn.valueEnd = 0), (yn.textEnd = e.length);
              })(e),
              Lh(e, vs(e, 0, yn.textEnd))
            );
          })(t);
          n >= 0;
          n = Lh(t, n)
        )
          O(e, Rh(t), !0);
      }
      function $r(e, t, n, r) {
        const o = we(),
          s = pt(),
          l = _n(2);
        s.firstUpdatePass && Gh(s, e, l, r),
          t !== ft &&
            qn(o, l, t) &&
            zh(
              s,
              s.data[an()],
              o,
              o[11],
              e,
              (o[l + 1] = (function _0(e, t) {
                return null == e || ('string' == typeof t ? (e += t) : 'object' == typeof e && (e = ge(Oo(e)))), e;
              })(t, n)),
              r,
              l
            );
      }
      function Gr(e, t, n, r) {
        const o = pt(),
          s = _n(2);
        o.firstUpdatePass && Gh(o, null, s, r);
        const l = we();
        if (n !== ft && qn(l, s, n)) {
          const f = o.data[an()];
          if (Wh(f, r) && !$h(o, s)) {
            let g = r ? f.classesWithoutHost : f.stylesWithoutHost;
            null !== g && (n = Ne(g, n || '')), Gl(o, f, l, n, r);
          } else
            !(function m0(e, t, n, r, o, s, l, f) {
              o === ft && (o = Ke);
              let g = 0,
                D = 0,
                M = 0 < o.length ? o[0] : null,
                T = 0 < s.length ? s[0] : null;
              for (; null !== M || null !== T; ) {
                const V = g < o.length ? o[g + 1] : void 0,
                  Q = D < s.length ? s[D + 1] : void 0;
                let Se,
                  me = null;
                M === T
                  ? ((g += 2), (D += 2), V !== Q && ((me = T), (Se = Q)))
                  : null === T || (null !== M && M < T)
                  ? ((g += 2), (me = M))
                  : ((D += 2), (me = T), (Se = Q)),
                  null !== me && zh(e, t, n, r, me, Se, l, f),
                  (M = g < o.length ? o[g] : null),
                  (T = D < s.length ? s[D] : null);
              }
            })(
              o,
              f,
              l,
              l[11],
              l[s + 1],
              (l[s + 1] = (function g0(e, t, n) {
                if (null == n || '' === n) return Ke;
                const r = [],
                  o = Oo(n);
                if (Array.isArray(o)) for (let s = 0; s < o.length; s++) e(r, o[s], !0);
                else if ('object' == typeof o) for (const s in o) o.hasOwnProperty(s) && e(r, s, o[s]);
                else 'string' == typeof o && t(r, o);
                return r;
              })(e, t, n)),
              r,
              s
            );
        }
      }
      function $h(e, t) {
        return t >= e.expandoStartIndex;
      }
      function Gh(e, t, n, r) {
        const o = e.data;
        if (null === o[n + 1]) {
          const s = o[an()],
            l = $h(e, n);
          Wh(s, r) && null === t && !l && (t = !1),
            (t = (function d0(e, t, n, r) {
              const o = (function Hi(e) {
                const t = ot.lFrame.currentDirectiveIndex;
                return -1 === t ? null : e[t];
              })(e);
              let s = r ? t.residualClasses : t.residualStyles;
              if (null === o)
                0 === (r ? t.classBindings : t.styleBindings) &&
                  ((n = la((n = Xl(null, e, t, n, r)), t.attrs, r)), (s = null));
              else {
                const l = t.directiveStylingLast;
                if (-1 === l || e[l] !== o)
                  if (((n = Xl(o, e, t, n, r)), null === s)) {
                    let g = (function f0(e, t, n) {
                      const r = n ? t.classBindings : t.styleBindings;
                      if (0 !== Fo(r)) return e[Hr(r)];
                    })(e, t, r);
                    void 0 !== g &&
                      Array.isArray(g) &&
                      ((g = Xl(null, e, t, g[1], r)),
                      (g = la(g, t.attrs, r)),
                      (function h0(e, t, n, r) {
                        e[Hr(n ? t.classBindings : t.styleBindings)] = r;
                      })(e, t, r, g));
                  } else
                    s = (function p0(e, t, n) {
                      let r;
                      const o = t.directiveEnd;
                      for (let s = 1 + t.directiveStylingLast; s < o; s++) r = la(r, e[s].hostAttrs, n);
                      return la(r, t.attrs, n);
                    })(e, t, r);
              }
              return void 0 !== s && (r ? (t.residualClasses = s) : (t.residualStyles = s)), n;
            })(o, s, t, r)),
            (function e0(e, t, n, r, o, s) {
              let l = s ? t.classBindings : t.styleBindings,
                f = Hr(l),
                g = Fo(l);
              e[r] = n;
              let M,
                D = !1;
              if (Array.isArray(n)) {
                const T = n;
                (M = T[1]), (null === M || z(T, M) > 0) && (D = !0);
              } else M = n;
              if (o)
                if (0 !== g) {
                  const V = Hr(e[f + 1]);
                  (e[r + 1] = Ha(V, f)),
                    0 !== V && (e[V + 1] = vl(e[V + 1], r)),
                    (e[f + 1] = (function Qv(e, t) {
                      return (131071 & e) | (t << 17);
                    })(e[f + 1], r));
                } else (e[r + 1] = Ha(f, 0)), 0 !== f && (e[f + 1] = vl(e[f + 1], r)), (f = r);
              else (e[r + 1] = Ha(g, 0)), 0 === f ? (f = r) : (e[g + 1] = vl(e[g + 1], r)), (g = r);
              D && (e[r + 1] = _l(e[r + 1])),
                kh(e, M, r, !0),
                kh(e, M, r, !1),
                (function t0(e, t, n, r, o) {
                  const s = o ? e.residualClasses : e.residualStyles;
                  null != s && 'string' == typeof t && z(s, t) >= 0 && (n[r + 1] = yl(n[r + 1]));
                })(t, M, e, r, s),
                (l = Ha(f, g)),
                s ? (t.classBindings = l) : (t.styleBindings = l);
            })(o, s, t, n, l, r);
        }
      }
      function Xl(e, t, n, r, o) {
        let s = null;
        const l = n.directiveEnd;
        let f = n.directiveStylingLast;
        for (-1 === f ? (f = n.directiveStart) : f++; f < l && ((s = t[f]), (r = la(r, s.hostAttrs, o)), s !== e); )
          f++;
        return null !== e && (n.directiveStylingLast = f), r;
      }
      function la(e, t, n) {
        const r = n ? 1 : 2;
        let o = -1;
        if (null !== t)
          for (let s = 0; s < t.length; s++) {
            const l = t[s];
            'number' == typeof l
              ? (o = l)
              : o === r && (Array.isArray(e) || (e = void 0 === e ? [] : ['', e]), O(e, l, !!n || t[++s]));
          }
        return void 0 === e ? null : e;
      }
      function zh(e, t, n, r, o, s, l, f) {
        if (!(3 & t.type)) return;
        const g = e.data,
          D = g[f + 1];
        oc(
          (function Ff(e) {
            return 1 == (1 & e);
          })(D)
            ? qh(g, t, n, o, Fo(D), l)
            : void 0
        ) ||
          (oc(s) ||
            ((function Nf(e) {
              return 2 == (2 & e);
            })(D) &&
              (s = qh(g, null, n, o, f, l))),
          (function __(e, t, n, r, o) {
            if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
            else {
              let s = -1 === r.indexOf('-') ? void 0 : io.DashCase;
              null == o
                ? e.removeStyle(n, r, s)
                : ('string' == typeof o && o.endsWith('!important') && ((o = o.slice(0, -10)), (s |= io.Important)),
                  e.setStyle(n, r, o, s));
            }
          })(r, l, vo(an(), n), o, s));
      }
      function qh(e, t, n, r, o, s) {
        const l = null === t;
        let f;
        for (; o > 0; ) {
          const g = e[o],
            D = Array.isArray(g),
            M = D ? g[1] : g,
            T = null === M;
          let V = n[o + 1];
          V === ft && (V = T ? Ke : void 0);
          let Q = T ? N(V, r) : M === r ? V : void 0;
          if ((D && !oc(Q) && (Q = N(g, r)), oc(Q) && ((f = Q), l))) return f;
          const me = e[o + 1];
          o = l ? Hr(me) : Fo(me);
        }
        if (null !== t) {
          let g = s ? t.residualClasses : t.residualStyles;
          null != g && (f = N(g, r));
        }
        return f;
      }
      function oc(e) {
        return void 0 !== e;
      }
      function Wh(e, t) {
        return 0 != (e.flags & (t ? 16 : 32));
      }
      function Yh(e, t = '') {
        const n = we(),
          r = pt(),
          o = e + 22,
          s = r.firstCreatePass ? as(r, o, 1, t, null) : r.data[o],
          l = (n[o] = Bc(n[11], t));
        Fa(r, n, l, s), Mt(s, !1);
      }
      function eu(e) {
        return ic('', e, ''), eu;
      }
      function ic(e, t, n) {
        const r = we(),
          o = us(r, e, t, n);
        return o !== ft && Po(r, an(), o), ic;
      }
      function tu(e, t, n, r, o) {
        const s = we(),
          l = ds(s, e, t, n, r, o);
        return l !== ft && Po(s, an(), l), tu;
      }
      function rp(e, t, n) {
        Gr(O, lo, us(we(), e, t, n), !0);
      }
      function nu(e, t, n) {
        const r = we();
        return qn(r, Zn(), t) && yr(pt(), Rt(), r, e, t, r[11], n, !0), nu;
      }
      const ki = void 0;
      var R0 = [
        'en',
        [['a', 'p'], ['AM', 'PM'], ki],
        [['AM', 'PM'], ki, ki],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
        ],
        ki,
        [
          ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ]
        ],
        ki,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini']
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', ki, "{1} 'at' {0}", ki],
        ['.', ',', ';', '%', '+', '-', 'E', '\xd7', '\u2030', '\u221e', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
        'USD',
        '$',
        'US Dollar',
        {},
        'ltr',
        function k0(e) {
          const n = Math.floor(Math.abs(e)),
            r = e.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === n && 0 === r ? 1 : 5;
        }
      ];
      let ys = {};
      function ru(e) {
        const t = (function L0(e) {
          return e.toLowerCase().replace(/_/g, '-');
        })(e);
        let n = gp(t);
        if (n) return n;
        const r = t.split('-')[0];
        if (((n = gp(r)), n)) return n;
        if ('en' === r) return R0;
        throw new K(701, !1);
      }
      function pp(e) {
        return ru(e)[it.PluralCase];
      }
      function gp(e) {
        return e in ys || (ys[e] = gt.ng && gt.ng.common && gt.ng.common.locales && gt.ng.common.locales[e]), ys[e];
      }
      var it = (() => (
        ((it = it || {})[(it.LocaleId = 0)] = 'LocaleId'),
        (it[(it.DayPeriodsFormat = 1)] = 'DayPeriodsFormat'),
        (it[(it.DayPeriodsStandalone = 2)] = 'DayPeriodsStandalone'),
        (it[(it.DaysFormat = 3)] = 'DaysFormat'),
        (it[(it.DaysStandalone = 4)] = 'DaysStandalone'),
        (it[(it.MonthsFormat = 5)] = 'MonthsFormat'),
        (it[(it.MonthsStandalone = 6)] = 'MonthsStandalone'),
        (it[(it.Eras = 7)] = 'Eras'),
        (it[(it.FirstDayOfWeek = 8)] = 'FirstDayOfWeek'),
        (it[(it.WeekendRange = 9)] = 'WeekendRange'),
        (it[(it.DateFormat = 10)] = 'DateFormat'),
        (it[(it.TimeFormat = 11)] = 'TimeFormat'),
        (it[(it.DateTimeFormat = 12)] = 'DateTimeFormat'),
        (it[(it.NumberSymbols = 13)] = 'NumberSymbols'),
        (it[(it.NumberFormats = 14)] = 'NumberFormats'),
        (it[(it.CurrencyCode = 15)] = 'CurrencyCode'),
        (it[(it.CurrencySymbol = 16)] = 'CurrencySymbol'),
        (it[(it.CurrencyName = 17)] = 'CurrencyName'),
        (it[(it.Currencies = 18)] = 'Currencies'),
        (it[(it.Directionality = 19)] = 'Directionality'),
        (it[(it.PluralCase = 20)] = 'PluralCase'),
        (it[(it.ExtraData = 21)] = 'ExtraData'),
        it
      ))();
      const V0 = ['zero', 'one', 'two', 'few', 'many'],
        Cs = 'en-US',
        sc = { marker: 'element' },
        ac = { marker: 'ICU' };
      var on = (() => (
        ((on = on || {})[(on.SHIFT = 2)] = 'SHIFT'),
        (on[(on.APPEND_EAGERLY = 1)] = 'APPEND_EAGERLY'),
        (on[(on.COMMENT = 2)] = 'COMMENT'),
        on
      ))();
      let mp = Cs;
      function _p(e) {
        (function De(e, t) {
          null == e && pe(t, e, null, '!=');
        })(e, 'Expected localeId to be defined'),
          'string' == typeof e && (mp = e.toLowerCase().replace(/_/g, '-'));
      }
      function vp(e, t, n) {
        const r = t.insertBeforeIndex,
          o = Array.isArray(r) ? r[0] : r;
        return null === o ? Od(e, 0, n) : Ht(n[o]);
      }
      function yp(e, t, n, r, o) {
        const s = t.insertBeforeIndex;
        if (Array.isArray(s)) {
          let l = r,
            f = null;
          if ((3 & t.type || ((f = l), (l = o)), null !== l && 0 == (2 & t.flags)))
            for (let g = 1; g < s.length; g++) Ai(e, l, n[s[g]], f, !1);
        }
      }
      function Cp(e, t) {
        if ((e.push(t), e.length > 1))
          for (let n = e.length - 2; n >= 0; n--) {
            const r = e[n];
            Dp(r) || (H0(r, t) && null === $0(r) && G0(r, t.index));
          }
      }
      function Dp(e) {
        return !(64 & e.type);
      }
      function H0(e, t) {
        return Dp(t) || e.index > t.index;
      }
      function $0(e) {
        const t = e.insertBeforeIndex;
        return Array.isArray(t) ? t[0] : t;
      }
      function G0(e, t) {
        const n = e.insertBeforeIndex;
        Array.isArray(n) ? (n[0] = t) : (Nd(vp, yp), (e.insertBeforeIndex = t));
      }
      function ua(e, t) {
        const n = e.data[t];
        return null === n || 'string' == typeof n ? null : n.hasOwnProperty('currentCaseLViewIndex') ? n : n.value;
      }
      function q0(e, t, n) {
        const r = Al(e, n, 64, null, null);
        return Cp(t, r), r;
      }
      function cc(e, t) {
        const n = t[e.currentCaseLViewIndex];
        return null === n ? n : n < 0 ? ~n : n;
      }
      function bp(e) {
        return e >>> 17;
      }
      function wp(e) {
        return (131070 & e) >>> 1;
      }
      let da = 0,
        fa = 0;
      function xp(e, t, n, r) {
        const o = n[11];
        let l,
          s = null;
        for (let f = 0; f < t.length; f++) {
          const g = t[f];
          if ('string' == typeof g) {
            const D = t[++f];
            null === n[D] && (n[D] = Bc(o, g));
          } else if ('number' == typeof g)
            switch (1 & g) {
              case 0:
                const D = bp(g);
                let M, T;
                if (
                  (null === s && ((s = D), (l = Na(o, r))),
                  D === s ? ((M = r), (T = l)) : ((M = null), (T = Ht(n[D]))),
                  null !== T)
                ) {
                  const Se = wp(g);
                  Ai(o, T, n[Se], M, !1);
                  const qe = ua(e, Se);
                  if (null !== qe && 'object' == typeof qe) {
                    const rt = cc(qe, n);
                    null !== rt && xp(e, qe.create[rt], n, n[qe.anchorIdx]);
                  }
                }
                break;
              case 1:
                const Q = t[++f],
                  me = t[++f];
                Fl(o, vo(g >>> 1, n), null, null, Q, me, null);
            }
          else
            switch (g) {
              case ac:
                const D = t[++f],
                  M = t[++f];
                null === n[M] && zn((n[M] = o_(o, D)), n);
                break;
              case sc:
                const T = t[++f],
                  V = t[++f];
                null === n[V] && zn((n[V] = jc(o, T, null)), n);
            }
        }
      }
      function Mp(e, t, n, r, o) {
        for (let s = 0; s < n.length; s++) {
          const l = n[s],
            f = n[++s];
          if (l & o) {
            let g = '';
            for (let D = s + 1; D <= s + f; D++) {
              const M = n[D];
              if ('string' == typeof M) g += M;
              else if ('number' == typeof M)
                if (M < 0) g += H(t[r - M]);
                else {
                  const T = M >>> 2;
                  switch (3 & M) {
                    case 1:
                      const V = n[++D],
                        Q = n[++D],
                        me = e.data[T];
                      'string' == typeof me ? Fl(t[11], t[T], null, me, V, g, Q) : yr(e, me, t, V, g, t[11], Q, !1);
                      break;
                    case 0:
                      const Se = t[T];
                      null !== Se && bd(t[11], Se, g);
                      break;
                    case 2:
                      K0(e, ua(e, T), t, g);
                      break;
                    case 3:
                      Ap(e, ua(e, T), r, t);
                  }
                }
            }
          } else {
            const g = n[s + 1];
            if (g > 0 && 3 == (3 & g)) {
              const M = ua(e, g >>> 2);
              t[M.currentCaseLViewIndex] < 0 && Ap(e, M, r, t);
            }
          }
          s += f;
        }
      }
      function Ap(e, t, n, r) {
        let o = r[t.currentCaseLViewIndex];
        if (null !== o) {
          let s = da;
          o < 0 && ((o = r[t.currentCaseLViewIndex] = ~o), (s = -1)), Mp(e, r, t.update[o], n, s);
        }
      }
      function K0(e, t, n, r) {
        const o = (function X0(e, t) {
          let n = e.cases.indexOf(t);
          if (-1 === n)
            switch (e.type) {
              case 1: {
                const r = (function U0(e, t) {
                  const n = pp(t)(parseInt(e, 10)),
                    r = V0[n];
                  return void 0 !== r ? r : 'other';
                })(
                  t,
                  (function j0() {
                    return mp;
                  })()
                );
                (n = e.cases.indexOf(r)), -1 === n && 'other' !== r && (n = e.cases.indexOf('other'));
                break;
              }
              case 0:
                n = e.cases.indexOf('other');
            }
          return -1 === n ? null : n;
        })(t, r);
        if (cc(t, n) !== o && (Tp(e, t, n), (n[t.currentCaseLViewIndex] = null === o ? null : ~o), null !== o)) {
          const l = n[t.anchorIdx];
          l && xp(e, t.create[o], n, l);
        }
      }
      function Tp(e, t, n) {
        let r = cc(t, n);
        if (null !== r) {
          const o = t.remove[r];
          for (let s = 0; s < o.length; s++) {
            const l = o[s];
            if (l > 0) {
              const f = vo(l, n);
              null !== f && zc(n[11], f);
            } else Tp(e, ua(e, ~l), n);
          }
        }
      }
      function eC() {
        const e = [];
        let n,
          r,
          t = -1;
        function s(f, g) {
          t = 0;
          const D = cc(f, g);
          r = null !== D ? f.remove[D] : Ke;
        }
        function l() {
          if (t < r.length) {
            const f = r[t++];
            return f > 0 ? n[f] : (e.push(t, r), s(n[1].data[~f], n), l());
          }
          return 0 === e.length ? null : ((r = e.pop()), (t = e.pop()), l());
        }
        return function o(f, g) {
          for (n = g; e.length; ) e.pop();
          return s(f.value, g), l;
        };
      }
      const lc = /\ufffd(\d+):?\d*\ufffd/gi,
        nC = /\ufffd(\d+)\ufffd/,
        Op = /^\s*(\ufffd\d+:?\d*\ufffd)\s*,\s*(select|plural)\s*,/,
        rC = /\ufffd\/?\*(\d+:\d+)\ufffd/gi,
        oC = /\ufffd(\/?[#*]\d+):?\d*\ufffd/gi,
        iC = /\uE500/g;
      function Sp(e, t, n, r, o, s, l) {
        const f = cs(e, r, 1, null);
        let g = f << on.SHIFT,
          D = ro();
        t === D && (D = null),
          null === D && (g |= on.APPEND_EAGERLY),
          l &&
            ((g |= on.COMMENT),
            (function e_(e) {
              void 0 === Rc && (Rc = e());
            })(eC)),
          o.push(g, null === s ? '' : s);
        const M = Al(e, f, l ? 32 : 1, null === s ? '' : s, null);
        Cp(n, M);
        const T = M.index;
        return (
          Mt(M, !1),
          null !== D &&
            t !== D &&
            (function z0(e, t) {
              let n = e.insertBeforeIndex;
              null === n
                ? (Nd(vp, yp), (n = e.insertBeforeIndex = [null, t]))
                : ((function X(e, t, n) {
                    e != t && pe(n, e, t, '==');
                  })(Array.isArray(n), !0, 'Expecting array here'),
                  n.push(t));
            })(D, T),
          M
        );
      }
      function cC(e, t, n, r, o, s, l) {
        const f = l.match(lc),
          g = Sp(e, t, n, s, r, f ? null : l, !1);
        f && pa(o, l, g.index, null, 0, null);
      }
      function pa(e, t, n, r, o, s) {
        const l = e.length,
          f = l + 1;
        e.push(null, null);
        const g = l + 2,
          D = t.split(lc);
        let M = 0;
        for (let T = 0; T < D.length; T++) {
          const V = D[T];
          if (1 & T) {
            const Q = o + parseInt(V, 10);
            e.push(-1 - Q), (M |= Np(Q));
          } else '' !== V && e.push(V);
        }
        return e.push((n << 2) | (r ? 1 : 0)), r && e.push(r, s), (e[l] = M), (e[f] = e.length - g), M;
      }
      function Np(e) {
        return 1 << Math.min(e, 31);
      }
      function Fp(e) {
        let t,
          s,
          n = '',
          r = 0,
          o = !1;
        for (; null !== (t = rC.exec(e)); )
          o
            ? t[0] === `\ufffd/*${s}\ufffd` && ((r = t.index), (o = !1))
            : ((n += e.substring(r, t.index + t[0].length)), (s = t[1]), (o = !0));
        return (n += e.slice(r)), n;
      }
      function Pp(e, t, n, r, o, s) {
        let l = 0;
        const f = {
          type: o.type,
          currentCaseLViewIndex: cs(e, t, 1, null),
          anchorIdx: s,
          cases: [],
          create: [],
          remove: [],
          update: []
        };
        (function mC(e, t, n) {
          e.push(Np(t.mainBinding), 2, -1 - t.mainBinding, (n << 2) | 2);
        })(n, o, s),
          (function Z0(e, t, n) {
            const r = e.data[t];
            null === r ? (e.data[t] = n) : (r.value = n);
          })(e, s, f);
        const g = o.values;
        for (let D = 0; D < g.length; D++) {
          const M = g[D],
            T = [];
          for (let V = 0; V < M.length; V++) {
            const Q = M[V];
            if ('string' != typeof Q) {
              const me = T.push(Q) - 1;
              M[V] = `\x3c!--\ufffd${me}\ufffd--\x3e`;
            }
          }
          l = pC(e, f, t, n, r, o.cases[D], M.join(''), T) | l;
        }
        l &&
          (function _C(e, t, n) {
            e.push(t, 1, (n << 2) | 3);
          })(n, l, s);
      }
      function hC(e) {
        const t = [],
          n = [];
        let r = 1,
          o = 0;
        const s = ou(
          (e = e.replace(Op, function (l, f, g) {
            return (r = 'select' === g ? 0 : 1), (o = parseInt(f.slice(1), 10)), '';
          }))
        );
        for (let l = 0; l < s.length; ) {
          let f = s[l++].trim();
          1 === r && (f = f.replace(/\s*(?:=)?(\w+)\s*/, '$1')), f.length && t.push(f);
          const g = ou(s[l++]);
          t.length > n.length && n.push(g);
        }
        return { type: r, mainBinding: o, cases: t, values: n };
      }
      function ou(e) {
        if (!e) return [];
        let t = 0;
        const n = [],
          r = [],
          o = /[{}]/g;
        let s;
        for (o.lastIndex = 0; (s = o.exec(e)); ) {
          const f = s.index;
          if ('}' == s[0]) {
            if ((n.pop(), 0 == n.length)) {
              const g = e.substring(t, f);
              Op.test(g) ? r.push(hC(g)) : r.push(g), (t = f + 1);
            }
          } else {
            if (0 == n.length) {
              const g = e.substring(t, f);
              r.push(g), (t = f + 1);
            }
            n.push('{');
          }
        }
        const l = e.substring(t);
        return r.push(l), r;
      }
      function pC(e, t, n, r, o, s, l, f) {
        const g = [],
          D = [],
          M = [];
        t.cases.push(s), t.create.push(g), t.remove.push(D), t.update.push(M);
        const V = Bd(Rd()).getInertBodyElement(l),
          Q = el(V) || V;
        return Q ? kp(e, t, n, r, g, D, M, Q, o, f, 0) : 0;
      }
      function kp(e, t, n, r, o, s, l, f, g, D, M) {
        let T = 0,
          V = f.firstChild;
        for (; V; ) {
          const Q = cs(e, n, 1, null);
          switch (V.nodeType) {
            case Node.ELEMENT_NODE:
              const me = V,
                Se = me.tagName.toLowerCase();
              if (Kc.hasOwnProperty(Se)) {
                iu(o, sc, Se, g, Q), (e.data[Q] = Se);
                const Ee = me.attributes;
                for (let ct = 0; ct < Ee.length; ct++) {
                  const It = Ee.item(ct),
                    Qt = It.name.toLowerCase();
                  It.value.match(lc)
                    ? Gd.hasOwnProperty(Qt) && pa(l, It.value, Q, It.name, 0, Xc[Qt] ? La : null)
                    : vC(o, Q, It);
                }
                (T = kp(e, t, n, r, o, s, l, V, Q, D, M + 1) | T), Rp(s, Q, M);
              }
              break;
            case Node.TEXT_NODE:
              const Ve = V.textContent || '',
                qe = Ve.match(lc);
              iu(o, null, qe ? '' : Ve, g, Q), Rp(s, Q, M), qe && (T = pa(l, Ve, Q, null, 0, null) | T);
              break;
            case Node.COMMENT_NODE:
              const rt = nC.exec(V.textContent || '');
              if (rt) {
                const ct = D[parseInt(rt[1], 10)];
                iu(o, ac, '', g, Q), Pp(e, n, r, g, ct, Q), gC(s, Q, M);
              }
          }
          V = V.nextSibling;
        }
        return T;
      }
      function Rp(e, t, n) {
        0 === n && e.push(t);
      }
      function gC(e, t, n) {
        0 === n && (e.push(~t), e.push(t));
      }
      function iu(e, t, n, r, o) {
        null !== t && e.push(t),
          e.push(
            n,
            o,
            (function W0(e, t, n) {
              return e | (t << 17) | (n << 1);
            })(0, r, o)
          );
      }
      function vC(e, t, n) {
        e.push((t << 1) | 1, n.name, n.value);
      }
      function Vp(e, t, n = -1) {
        const r = pt(),
          o = we(),
          s = 22 + e,
          l = Zt(r.consts, t),
          f = ro();
        r.firstCreatePass &&
          (function aC(e, t, n, r, o, s) {
            const l = ro(),
              f = [],
              g = [],
              D = [[]];
            o = (function fC(e, t) {
              if (
                (function dC(e) {
                  return -1 === e;
                })(t)
              )
                return Fp(e);
              {
                const n = e.indexOf(`:${t}\ufffd`) + 2 + t.toString().length,
                  r = e.search(new RegExp(`\ufffd\\/\\*\\d+:${t}\ufffd`));
                return Fp(e.substring(n, r));
              }
            })(o, s);
            const M = (function sC(e) {
              return e.replace(iC, ' ');
            })(o).split(oC);
            for (let T = 0; T < M.length; T++) {
              let V = M[T];
              if (0 == (1 & T)) {
                const Q = ou(V);
                for (let me = 0; me < Q.length; me++) {
                  let Se = Q[me];
                  if (0 == (1 & me)) {
                    const Ve = Se;
                    '' !== Ve && cC(e, l, D[0], f, g, n, Ve);
                  } else {
                    const Ve = Se;
                    if ('object' != typeof Ve) throw new Error(`Unable to parse ICU expression in "${o}" message.`);
                    Pp(e, n, g, t, Ve, Sp(e, l, D[0], n, f, '', !0).index);
                  }
                }
              } else {
                const Q = 47 === V.charCodeAt(0),
                  Se = (V.charCodeAt(Q ? 1 : 0), 22 + Number.parseInt(V.substring(Q ? 2 : 1)));
                if (Q) D.shift(), Mt(ro(), !1);
                else {
                  const Ve = q0(e, D[0], Se);
                  D.unshift([]), Mt(Ve, !0);
                }
              }
            }
            e.data[r] = { create: f, update: g };
          })(r, null === f ? 0 : f.index, o, s, l, n);
        const g = r.data[s],
          M = Md(r, f === o[6] ? null : f, o);
        (function J0(e, t, n, r) {
          const o = e[11];
          for (let s = 0; s < t.length; s++) {
            const l = t[s++],
              f = t[s],
              g = (l & on.COMMENT) === on.COMMENT,
              D = (l & on.APPEND_EAGERLY) === on.APPEND_EAGERLY,
              M = l >>> on.SHIFT;
            let T = e[M];
            null === T && (T = e[M] = g ? o.createComment(f) : Bc(o, f)), D && null !== n && Ai(o, n, T, r, !1);
          }
        })(o, g.create, M, f && 8 & f.type ? o[f.index] : null),
          zo(!0);
      }
      function Bp(e, t, n) {
        Vp(e, t, n),
          (function Up() {
            zo(!1);
          })();
      }
      function su(e) {
        return (
          (function Y0(e) {
            e && (da |= 1 << Math.min(fa, 31)), fa++;
          })(qn(we(), Zn(), e)),
          su
        );
      }
      function jp(e) {
        !(function Q0(e, t, n) {
          if (fa > 0) {
            const r = e.data[n];
            Mp(e, t, Array.isArray(r) ? r : r.update, Yt() - fa - 1, da);
          }
          (da = 0), (fa = 0);
        })(pt(), we(), e + 22);
      }
      function au(e, t, n, r, o) {
        if (((e = R(e)), Array.isArray(e))) for (let s = 0; s < e.length; s++) au(e[s], t, n, r, o);
        else {
          const s = pt(),
            l = we();
          let f = Oi(e) ? e : R(e.provide),
            g = nf(e);
          const D = Wt(),
            M = 1048575 & D.providerIndexes,
            T = D.directiveStart,
            V = D.providerIndexes >> 20;
          if (Oi(e) || !e.multi) {
            const Q = new Yo(g, o, ss),
              me = lu(f, t, o ? M : M + V, T);
            -1 === me
              ? (Zi(Mo(D, l), s, f),
                cu(s, e, t.length),
                t.push(f),
                D.directiveStart++,
                D.directiveEnd++,
                o && (D.providerIndexes += 1048576),
                n.push(Q),
                l.push(Q))
              : ((n[me] = Q), (l[me] = Q));
          } else {
            const Q = lu(f, t, M + V, T),
              me = lu(f, t, M, M + V),
              Se = Q >= 0 && n[Q],
              Ve = me >= 0 && n[me];
            if ((o && !Ve) || (!o && !Se)) {
              Zi(Mo(D, l), s, f);
              const qe = (function NC(e, t, n, r, o) {
                const s = new Yo(e, n, ss);
                return (s.multi = []), (s.index = t), (s.componentProviders = 0), Hp(s, o, r && !n), s;
              })(o ? SC : OC, n.length, o, r, g);
              !o && Ve && (n[me].providerFactory = qe),
                cu(s, e, t.length, 0),
                t.push(f),
                D.directiveStart++,
                D.directiveEnd++,
                o && (D.providerIndexes += 1048576),
                n.push(qe),
                l.push(qe);
            } else cu(s, e, Q > -1 ? Q : me, Hp(n[o ? me : Q], g, !o && r));
            !o && r && Ve && n[me].componentProviders++;
          }
        }
      }
      function cu(e, t, n, r) {
        const o = Oi(t),
          s = (function Q_(e) {
            return !!e.useClass;
          })(t);
        if (o || s) {
          const g = (s ? R(t.useClass) : t).prototype.ngOnDestroy;
          if (g) {
            const D = e.destroyHooks || (e.destroyHooks = []);
            if (!o && t.multi) {
              const M = D.indexOf(n);
              -1 === M ? D.push(n, [r, g]) : D[M + 1].push(r, g);
            } else D.push(n, g);
          }
        }
      }
      function Hp(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function lu(e, t, n, r) {
        for (let o = n; o < r; o++) if (t[o] === e) return o;
        return -1;
      }
      function OC(e, t, n, r) {
        return uu(this.multi, []);
      }
      function SC(e, t, n, r) {
        const o = this.multi;
        let s;
        if (this.providerFactory) {
          const l = this.providerFactory.componentProviders,
            f = Jo(n, n[1], this.providerFactory.index, r);
          (s = f.slice(0, l)), uu(o, s);
          for (let g = l; g < f.length; g++) s.push(f[g]);
        } else (s = []), uu(o, s);
        return s;
      }
      function uu(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function $p(e, t = []) {
        return (n) => {
          n.providersResolver = (r, o) =>
            (function IC(e, t, n) {
              const r = pt();
              if (r.firstCreatePass) {
                const o = Sn(e);
                au(n, r.data, r.blueprint, o, !0), au(t, r.data, r.blueprint, o, !1);
              }
            })(r, o ? o(e) : e, t);
        };
      }
      class Ds {}
      class Gp {}
      function FC(e, t) {
        return new Zp(e, null != t ? t : null);
      }
      class Zp extends Ds {
        constructor(t, n) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new Vl(this));
          const r = S(t);
          (this._bootstrapComponents = No(r.bootstrap)),
            (this._r3Injector = wf(
              t,
              n,
              [
                { provide: Ds, useValue: this },
                { provide: na, useValue: this.componentFactoryResolver }
              ],
              ge(t),
              new Set(['environment'])
            )),
            this._r3Injector.resolveInjectorInitializers(),
            (this.instance = this._r3Injector.get(t));
        }
        get injector() {
          return this._r3Injector;
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(), this.destroyCbs.forEach((n) => n()), (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class du extends Gp {
        constructor(t) {
          super(), (this.moduleType = t);
        }
        create(t) {
          return new Zp(this.moduleType, t);
        }
      }
      class PC extends Ds {
        constructor(t, n, r) {
          super(), (this.componentFactoryResolver = new Vl(this)), (this.instance = null);
          const o = new tf(
            [...t, { provide: Ds, useValue: this }, { provide: na, useValue: this.componentFactoryResolver }],
            n || Ba(),
            r,
            new Set(['environment'])
          );
          (this.injector = o), o.resolveInjectorInitializers();
        }
        destroy() {
          this.injector.destroy();
        }
        onDestroy(t) {
          this.injector.onDestroy(t);
        }
      }
      function fu(e, t, n = null) {
        return new PC(e, t, n).injector;
      }
      let kC = (() => {
        class e {
          constructor(n) {
            (this._injector = n), (this.cachedInjectors = new Map());
          }
          getOrCreateStandaloneInjector(n) {
            if (!n.standalone) return null;
            if (!this.cachedInjectors.has(n.id)) {
              const r = Jd(0, n.type),
                o = r.length > 0 ? fu([r], this._injector, `Standalone[${n.type.name}]`) : null;
              this.cachedInjectors.set(n.id, o);
            }
            return this.cachedInjectors.get(n.id);
          }
          ngOnDestroy() {
            try {
              for (const n of this.cachedInjectors.values()) null !== n && n.destroy();
            } finally {
              this.cachedInjectors.clear();
            }
          }
        }
        return (e.ɵprov = je({ token: e, providedIn: 'environment', factory: () => new e(gn(Si)) })), e;
      })();
      function zp(e) {
        e.getStandaloneInjector = (t) => t.get(kC).getOrCreateStandaloneInjector(e);
      }
      function Xp(e, t, n) {
        const r = mt() + e,
          o = we();
        return o[r] === ft
          ? ao(o, r, n ? t.call(n) : t())
          : (function ca(e, t) {
              return e[t];
            })(o, r);
      }
      function eg(e, t, n, r) {
        return rg(we(), mt(), e, t, n, r);
      }
      function tg(e, t, n, r, o) {
        return (function og(e, t, n, r, o, s, l) {
          const f = t + n;
          return Pi(e, f, o, s) ? ao(e, f + 2, l ? r.call(l, o, s) : r(o, s)) : ga(e, f + 2);
        })(we(), mt(), e, t, n, r, o);
      }
      function ng(e, t, n, r, o, s) {
        return (function ig(e, t, n, r, o, s, l, f) {
          const g = t + n;
          return (function Ka(e, t, n, r, o) {
            const s = Pi(e, t, n, r);
            return qn(e, t + 2, o) || s;
          })(e, g, o, s, l)
            ? ao(e, g + 3, f ? r.call(f, o, s, l) : r(o, s, l))
            : ga(e, g + 3);
        })(we(), mt(), e, t, n, r, o, s);
      }
      function ga(e, t) {
        const n = e[t];
        return n === ft ? void 0 : n;
      }
      function rg(e, t, n, r, o, s) {
        const l = t + n;
        return qn(e, l, o) ? ao(e, l + 1, s ? r.call(s, o) : r(o)) : ga(e, l + 1);
      }
      function cg(e, t) {
        const n = pt();
        let r;
        const o = e + 22;
        n.firstCreatePass
          ? ((r = (function QC(e, t) {
              if (t)
                for (let n = t.length - 1; n >= 0; n--) {
                  const r = t[n];
                  if (e === r.name) return r;
                }
            })(t, n.pipeRegistry)),
            (n.data[o] = r),
            r.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(o, r.onDestroy))
          : (r = n.data[o]);
        const s = r.factory || (r.factory = Gn(r.type)),
          l = qt(ss);
        try {
          const f = ar(!1),
            g = s();
          return (
            ar(f),
            (function Yy(e, t, n, r) {
              n >= e.data.length && ((e.data[n] = null), (e.blueprint[n] = null)), (t[n] = r);
            })(n, we(), o, g),
            g
          );
        } finally {
          qt(l);
        }
      }
      function lg(e, t, n) {
        const r = e + 22,
          o = we(),
          s = sr(o, r);
        return (function ma(e, t) {
          return e[1].data[t].pure;
        })(o, r)
          ? rg(o, mt(), t, s.transform, n, s)
          : s.transform(n);
      }
      function pu(e) {
        return (t) => {
          setTimeout(e, void 0, t);
        };
      }
      const uo = class tD extends a.x {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, n, r) {
          var o, s, l;
          let f = t,
            g = n || (() => null),
            D = r;
          if (t && 'object' == typeof t) {
            const T = t;
            (f = null === (o = T.next) || void 0 === o ? void 0 : o.bind(T)),
              (g = null === (s = T.error) || void 0 === s ? void 0 : s.bind(T)),
              (D = null === (l = T.complete) || void 0 === l ? void 0 : l.bind(T));
          }
          this.__isAsync && ((g = pu(g)), f && (f = pu(f)), D && (D = pu(D)));
          const M = super.subscribe({ next: f, error: g, complete: D });
          return t instanceof i.w0 && t.add(M), M;
        }
      };
      function nD() {
        return this._results[Fi()]();
      }
      class gu {
        constructor(t = !1) {
          (this._emitDistinctChangesOnly = t),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const n = Fi(),
            r = gu.prototype;
          r[n] || (r[n] = nD);
        }
        get changes() {
          return this._changes || (this._changes = new uo());
        }
        get(t) {
          return this._results[t];
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, n) {
          return this._results.reduce(t, n);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t, n) {
          const r = this;
          r.dirty = !1;
          const o = Jn(t);
          (this._changesDetected = !(function Mc(e, t, n) {
            if (e.length !== t.length) return !1;
            for (let r = 0; r < e.length; r++) {
              let o = e[r],
                s = t[r];
              if ((n && ((o = n(o)), (s = n(s))), s !== o)) return !1;
            }
            return !0;
          })(r._results, o, n)) &&
            ((r._results = o), (r.length = o.length), (r.last = o[this.length - 1]), (r.first = o[0]));
        }
        notifyOnChanges() {
          this._changes && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      let _a = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = iD), e;
      })();
      const rD = _a,
        oD = class extends rD {
          constructor(t, n, r) {
            super(), (this._declarationLView = t), (this._declarationTContainer = n), (this.elementRef = r);
          }
          createEmbeddedView(t, n) {
            const r = this._declarationTContainer.tViews,
              o = Za(this._declarationLView, r, t, 16, null, r.declTNode, null, null, null, null, n || null);
            o[17] = this._declarationLView[this._declarationTContainer.index];
            const l = this._declarationLView[19];
            return null !== l && (o[19] = l.createEmbeddedView(r)), Tl(r, o, t), new ia(o);
          }
        };
      function iD() {
        return uc(Wt(), we());
      }
      function uc(e, t) {
        return 4 & e.type ? new oD(t, e, rs(e, t)) : null;
      }
      let dc = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = sD), e;
      })();
      function sD() {
        return fg(Wt(), we());
      }
      const aD = dc,
        ug = class extends aD {
          constructor(t, n, r) {
            super(), (this._lContainer = t), (this._hostTNode = n), (this._hostLView = r);
          }
          get element() {
            return rs(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new Ko(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = Ao(this._hostTNode, this._hostLView);
            if (zt(t)) {
              const n = Nn(t, this._hostLView),
                r = Dt(t);
              return new Ko(n[1].data[r + 8], n);
            }
            return new Ko(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = dg(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - 10;
          }
          createEmbeddedView(t, n, r) {
            let o, s;
            'number' == typeof r ? (o = r) : null != r && ((o = r.index), (s = r.injector));
            const l = t.createEmbeddedView(n || {}, s);
            return this.insert(l, o), l;
          }
          createComponent(t, n, r, o, s) {
            const l =
              t &&
              !(function Mi(e) {
                return 'function' == typeof e;
              })(t);
            let f;
            if (l) f = n;
            else {
              const T = n || {};
              (f = T.index), (r = T.injector), (o = T.projectableNodes), (s = T.environmentInjector || T.ngModuleRef);
            }
            const g = l ? t : new sa(_t(t)),
              D = r || this.parentInjector;
            if (!s && null == g.ngModule) {
              const V = (l ? D : this.parentInjector).get(Si, null);
              V && (s = V);
            }
            const M = g.create(D, o, void 0, s);
            return this.insert(M.hostView, f), M;
          }
          insert(t, n) {
            const r = t._lView,
              o = r[1];
            if (
              (function hr(e) {
                return On(e[3]);
              })(r)
            ) {
              const M = this.indexOf(t);
              if (-1 !== M) this.detach(M);
              else {
                const T = r[3],
                  V = new ug(T, T[6], T[3]);
                V.detach(V.indexOf(t));
              }
            }
            const s = this._adjustIndex(n),
              l = this._lContainer;
            !(function l_(e, t, n, r) {
              const o = 10 + r,
                s = n.length;
              r > 0 && (n[o - 1][4] = t),
                r < s - 10 ? ((t[4] = n[o]), $s(n, 10 + r, t)) : (n.push(t), (t[4] = null)),
                (t[3] = n);
              const l = t[17];
              null !== l &&
                n !== l &&
                (function u_(e, t) {
                  const n = e[9];
                  t[16] !== t[3][3][16] && (e[2] = !0), null === n ? (e[9] = [t]) : n.push(t);
                })(l, t);
              const f = t[19];
              null !== f && f.insertView(e), (t[2] |= 64);
            })(o, r, l, s);
            const f = Zc(s, l),
              g = r[11],
              D = Na(g, l[7]);
            return (
              null !== D &&
                (function s_(e, t, n, r, o, s) {
                  (r[0] = o), (r[6] = t), Xs(e, r, n, 1, o, s);
                })(o, l[6], g, r, D, f),
              t.attachToViewContainerRef(),
              $s(mu(l), s, t),
              t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = dg(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              r = Hc(this._lContainer, n);
            r && (Qi(mu(this._lContainer), n), Ed(r[1], r));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              r = Hc(this._lContainer, n);
            return r && null != Qi(mu(this._lContainer), n) ? new ia(r) : null;
          }
          _adjustIndex(t, n = 0) {
            return null == t ? this.length + n : t;
          }
        };
      function dg(e) {
        return e[8];
      }
      function mu(e) {
        return e[8] || (e[8] = []);
      }
      function fg(e, t) {
        let n;
        const r = t[e.index];
        if (On(r)) n = r;
        else {
          let o;
          if (8 & e.type) o = Ht(r);
          else {
            const s = t[11];
            o = s.createComment('');
            const l = hn(e, t);
            Ai(
              s,
              Na(s, l),
              o,
              (function p_(e, t) {
                return e.nextSibling(t);
              })(s, l),
              !1
            );
          }
          (t[e.index] = n = eh(r, t, o, e)), qa(t, n);
        }
        return new ug(n, e, t);
      }
      class _u {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new _u(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class vu {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const n = t.queries;
          if (null !== n) {
            const r = null !== t.contentQueries ? t.contentQueries[0] : n.length,
              o = [];
            for (let s = 0; s < r; s++) {
              const l = n.getByIndex(s);
              o.push(this.queries[l.indexInDeclarationView].clone());
            }
            return new vu(o);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let n = 0; n < this.queries.length; n++) null !== Dg(t, n).matches && this.queries[n].setDirty();
        }
      }
      class hg {
        constructor(t, n, r = null) {
          (this.predicate = t), (this.flags = n), (this.read = r);
        }
      }
      class yu {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, n) {
          for (let r = 0; r < this.queries.length; r++) this.queries[r].elementStart(t, n);
        }
        elementEnd(t) {
          for (let n = 0; n < this.queries.length; n++) this.queries[n].elementEnd(t);
        }
        embeddedTView(t) {
          let n = null;
          for (let r = 0; r < this.length; r++) {
            const o = null !== n ? n.length : 0,
              s = this.getByIndex(r).embeddedTView(t, o);
            s && ((s.indexInDeclarationView = r), null !== n ? n.push(s) : (n = [s]));
          }
          return null !== n ? new yu(n) : null;
        }
        template(t, n) {
          for (let r = 0; r < this.queries.length; r++) this.queries[r].template(t, n);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class Cu {
        constructor(t, n = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = n);
        }
        elementStart(t, n) {
          this.isApplyingToNode(n) && this.matchTNode(t, n);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1);
        }
        template(t, n) {
          this.elementStart(t, n);
        }
        embeddedTView(t, n) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0), this.addMatch(-t.index, n), new Cu(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const n = this._declarationNodeIndex;
            let r = t.parent;
            for (; null !== r && 8 & r.type && r.index !== n; ) r = r.parent;
            return n === (null !== r ? r.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, n) {
          const r = this.metadata.predicate;
          if (Array.isArray(r))
            for (let o = 0; o < r.length; o++) {
              const s = r[o];
              this.matchTNodeWithReadOption(t, n, uD(n, s)), this.matchTNodeWithReadOption(t, n, zi(n, t, s, !1, !1));
            }
          else
            r === _a
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(t, n, zi(n, t, r, !1, !1));
        }
        matchTNodeWithReadOption(t, n, r) {
          if (null !== r) {
            const o = this.metadata.read;
            if (null !== o)
              if (o === ra || o === dc || (o === _a && 4 & n.type)) this.addMatch(n.index, -2);
              else {
                const s = zi(n, t, o, !1, !1);
                null !== s && this.addMatch(n.index, s);
              }
            else this.addMatch(n.index, r);
          }
        }
        addMatch(t, n) {
          null === this.matches ? (this.matches = [t, n]) : this.matches.push(t, n);
        }
      }
      function uD(e, t) {
        const n = e.localNames;
        if (null !== n) for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
        return null;
      }
      function fD(e, t, n, r) {
        return -1 === n
          ? (function dD(e, t) {
              return 11 & e.type ? rs(e, t) : 4 & e.type ? uc(e, t) : null;
            })(t, e)
          : -2 === n
          ? (function hD(e, t, n) {
              return n === ra ? rs(t, e) : n === _a ? uc(t, e) : n === dc ? fg(t, e) : void 0;
            })(e, t, r)
          : Jo(e, e[1], n, t);
      }
      function pg(e, t, n, r) {
        const o = t[19].queries[r];
        if (null === o.matches) {
          const s = e.data,
            l = n.matches,
            f = [];
          for (let g = 0; g < l.length; g += 2) {
            const D = l[g];
            f.push(D < 0 ? null : fD(t, s[D], l[g + 1], n.metadata.read));
          }
          o.matches = f;
        }
        return o.matches;
      }
      function Du(e, t, n, r) {
        const o = e.queries.getByIndex(n),
          s = o.matches;
        if (null !== s) {
          const l = pg(e, t, o, n);
          for (let f = 0; f < s.length; f += 2) {
            const g = s[f];
            if (g > 0) r.push(l[f / 2]);
            else {
              const D = s[f + 1],
                M = t[-g];
              for (let T = 10; T < M.length; T++) {
                const V = M[T];
                V[17] === V[3] && Du(V[1], V, D, r);
              }
              if (null !== M[9]) {
                const T = M[9];
                for (let V = 0; V < T.length; V++) {
                  const Q = T[V];
                  Du(Q[1], Q, D, r);
                }
              }
            }
          }
        }
        return r;
      }
      function gg(e) {
        const t = we(),
          n = pt(),
          r = bo();
        wo(r + 1);
        const o = Dg(n, r);
        if (
          e.dirty &&
          (function Pr(e) {
            return 4 == (4 & e[2]);
          })(t) ===
            (2 == (2 & o.metadata.flags))
        ) {
          if (null === o.matches) e.reset([]);
          else {
            const s = o.crossesNgTemplate ? Du(n, t, r, []) : pg(n, t, o, r);
            e.reset(s, cv), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function mg(e, t, n) {
        const r = pt();
        r.firstCreatePass && (Cg(r, new hg(e, t, n), -1), 2 == (2 & t) && (r.staticViewQueries = !0)), yg(r, we(), t);
      }
      function _g(e, t, n, r) {
        const o = pt();
        if (o.firstCreatePass) {
          const s = Wt();
          Cg(o, new hg(t, n, r), s.index),
            (function gD(e, t) {
              const n = e.contentQueries || (e.contentQueries = []);
              t !== (n.length ? n[n.length - 1] : -1) && n.push(e.queries.length - 1, t);
            })(o, e),
            2 == (2 & n) && (o.staticContentQueries = !0);
        }
        yg(o, we(), n);
      }
      function vg() {
        return (function pD(e, t) {
          return e[19].queries[t].queryList;
        })(we(), bo());
      }
      function yg(e, t, n) {
        const r = new gu(4 == (4 & n));
        Zf(e, t, r, r.destroy), null === t[19] && (t[19] = new vu()), t[19].queries.push(new _u(r));
      }
      function Cg(e, t, n) {
        null === e.queries && (e.queries = new yu()), e.queries.track(new Cu(t, n));
      }
      function Dg(e, t) {
        return e.queries.getByIndex(t);
      }
      function bg(e, t) {
        return uc(e, t);
      }
      function hc(...e) {}
      const jg = new Pt('Application Initializer');
      let pc = (() => {
        class e {
          constructor(n) {
            (this.appInits = n),
              (this.resolve = hc),
              (this.reject = hc),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((r, o) => {
                (this.resolve = r), (this.reject = o);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const n = [],
              r = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let o = 0; o < this.appInits.length; o++) {
                const s = this.appInits[o]();
                if (ql(s)) n.push(s);
                else if (Ch(s)) {
                  const l = new Promise((f, g) => {
                    s.subscribe({ complete: f, error: g });
                  });
                  n.push(l);
                }
              }
            Promise.all(n)
              .then(() => {
                r();
              })
              .catch((o) => {
                this.reject(o);
              }),
              0 === n.length && r(),
              (this.initialized = !0);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(gn(jg, 8));
          }),
          (e.ɵprov = je({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const Hg = new Pt('AppId', {
        providedIn: 'root',
        factory: function $g() {
          return `${Mu()}${Mu()}${Mu()}`;
        }
      });
      function Mu() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Gg = new Pt('Platform Initializer'),
        kD = new Pt('Platform ID', { providedIn: 'platform', factory: () => 'unknown' }),
        Zg = new Pt('appBootstrapListener');
      let RD = (() => {
        class e {
          log(n) {
            console.log(n);
          }
          warn(n) {
            console.warn(n);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = je({ token: e, factory: e.ɵfac, providedIn: 'platform' })),
          e
        );
      })();
      const gc = new Pt('LocaleId', {
          providedIn: 'root',
          factory: () =>
            td(gc, Qe.Optional | Qe.SkipSelf) ||
            (function LD() {
              return ('undefined' != typeof $localize && $localize.locale) || Cs;
            })()
        }),
        VD = new Pt('DefaultCurrencyCode', { providedIn: 'root', factory: () => 'USD' });
      class UD {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      let BD = (() => {
        class e {
          compileModuleSync(n) {
            return new du(n);
          }
          compileModuleAsync(n) {
            return Promise.resolve(this.compileModuleSync(n));
          }
          compileModuleAndAllComponentsSync(n) {
            const r = this.compileModuleSync(n),
              s = No(S(n).declarations).reduce((l, f) => {
                const g = _t(f);
                return g && l.push(new sa(g)), l;
              }, []);
            return new UD(r, s);
          }
          compileModuleAndAllComponentsAsync(n) {
            return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
          }
          clearCache() {}
          clearCacheFor(n) {}
          getModuleId(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = je({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const $D = (() => Promise.resolve(0))();
      function Au(e) {
        'undefined' == typeof Zone
          ? $D.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', e);
      }
      class Sr {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: n = !1,
          shouldCoalesceRunChangeDetection: r = !1
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new uo(!1)),
            (this.onMicrotaskEmpty = new uo(!1)),
            (this.onStable = new uo(!1)),
            (this.onError = new uo(!1)),
            'undefined' == typeof Zone)
          )
            throw new K(908, !1);
          Zone.assertZonePatched();
          const o = this;
          if (((o._nesting = 0), (o._outer = o._inner = Zone.current), Zone.AsyncStackTaggingZoneSpec)) {
            const s = Zone.AsyncStackTaggingZoneSpec;
            o._inner = o._inner.fork(new s('Angular'));
          }
          Zone.TaskTrackingZoneSpec && (o._inner = o._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t && Zone.longStackTraceZoneSpec && (o._inner = o._inner.fork(Zone.longStackTraceZoneSpec)),
            (o.shouldCoalesceEventChangeDetection = !r && n),
            (o.shouldCoalesceRunChangeDetection = r),
            (o.lastRequestAnimationFrameId = -1),
            (o.nativeRequestAnimationFrame = (function GD() {
              let e = gt.requestAnimationFrame,
                t = gt.cancelAnimationFrame;
              if ('undefined' != typeof Zone && e && t) {
                const n = e[Zone.__symbol__('OriginalDelegate')];
                n && (e = n);
                const r = t[Zone.__symbol__('OriginalDelegate')];
                r && (t = r);
              }
              return { nativeRequestAnimationFrame: e, nativeCancelAnimationFrame: t };
            })().nativeRequestAnimationFrame),
            (function qD(e) {
              const t = () => {
                !(function zD(e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(gt, () => {
                      e.fakeTopEventTask ||
                        (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                          'fakeTopEventTask',
                          () => {
                            (e.lastRequestAnimationFrameId = -1),
                              Iu(e),
                              (e.isCheckStableRunning = !0),
                              Tu(e),
                              (e.isCheckStableRunning = !1);
                          },
                          void 0,
                          () => {},
                          () => {}
                        )),
                        e.fakeTopEventTask.invoke();
                    })),
                    Iu(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, o, s, l, f) => {
                  try {
                    return Wg(e), n.invokeTask(o, s, l, f);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection && 'eventTask' === s.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      Yg(e);
                  }
                },
                onInvoke: (n, r, o, s, l, f, g) => {
                  try {
                    return Wg(e), n.invoke(o, s, l, f, g);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && t(), Yg(e);
                  }
                },
                onHasTask: (n, r, o, s) => {
                  n.hasTask(o, s),
                    r === o &&
                      ('microTask' == s.change
                        ? ((e._hasPendingMicrotasks = s.microTask), Iu(e), Tu(e))
                        : 'macroTask' == s.change && (e.hasPendingMacrotasks = s.macroTask));
                },
                onHandleError: (n, r, o, s) => (n.handleError(o, s), e.runOutsideAngular(() => e.onError.emit(s)), !1)
              });
            })(o);
        }
        static isInAngularZone() {
          return 'undefined' != typeof Zone && !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!Sr.isInAngularZone()) throw new K(909, !1);
        }
        static assertNotInAngularZone() {
          if (Sr.isInAngularZone()) throw new K(909, !1);
        }
        run(t, n, r) {
          return this._inner.run(t, n, r);
        }
        runTask(t, n, r, o) {
          const s = this._inner,
            l = s.scheduleEventTask('NgZoneEvent: ' + o, t, ZD, hc, hc);
          try {
            return s.runTask(l, n, r);
          } finally {
            s.cancelTask(l);
          }
        }
        runGuarded(t, n, r) {
          return this._inner.runGuarded(t, n, r);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const ZD = {};
      function Tu(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function Iu(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function Wg(e) {
        e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function Yg(e) {
        e._nesting--, Tu(e);
      }
      class WD {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new uo()),
            (this.onMicrotaskEmpty = new uo()),
            (this.onStable = new uo()),
            (this.onError = new uo());
        }
        run(t, n, r) {
          return t.apply(n, r);
        }
        runGuarded(t, n, r) {
          return t.apply(n, r);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, n, r, o) {
          return t.apply(n, r);
        }
      }
      const Qg = new Pt(''),
        Jg = new Pt('');
      let ya,
        YD = (() => {
          class e {
            constructor(n, r, o) {
              (this._ngZone = n),
                (this.registry = r),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                ya ||
                  ((function QD(e) {
                    ya = e;
                  })(o),
                  o.addToWindow(r)),
                this._watchAngularEvents(),
                n.run(() => {
                  this.taskTrackingZone = 'undefined' == typeof Zone ? null : Zone.current.get('TaskTrackingZone');
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                }
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      Sr.assertNotInAngularZone(),
                        Au(() => {
                          (this._isZoneStable = !0), this._runCallbacksIfReady();
                        });
                    }
                  });
                });
            }
            increasePendingRequestCount() {
              return (this._pendingCount += 1), (this._didWork = !0), this._pendingCount;
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error('pending async requests below zero');
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks;
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                Au(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let n = this._callbacks.pop();
                    clearTimeout(n.timeoutId), n.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let n = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (r) => !r.updateCb || !r.updateCb(n) || (clearTimeout(r.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((n) => ({
                    source: n.source,
                    creationLocation: n.creationLocation,
                    data: n.data
                  }))
                : [];
            }
            addCallback(n, r, o) {
              let s = -1;
              r &&
                r > 0 &&
                (s = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter((l) => l.timeoutId !== s)),
                    n(this._didWork, this.getPendingTasks());
                }, r)),
                this._callbacks.push({ doneCb: n, timeoutId: s, updateCb: o });
            }
            whenStable(n, r, o) {
              if (o && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
                );
              this.addCallback(n, r, o), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            registerApplication(n) {
              this.registry.registerApplication(n, this);
            }
            unregisterApplication(n) {
              this.registry.unregisterApplication(n);
            }
            findProviders(n, r, o) {
              return [];
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(gn(Sr), gn(Kg), gn(Jg));
            }),
            (e.ɵprov = je({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Kg = (() => {
          class e {
            constructor() {
              this._applications = new Map();
            }
            registerApplication(n, r) {
              this._applications.set(n, r);
            }
            unregisterApplication(n) {
              this._applications.delete(n);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(n) {
              return this._applications.get(n) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(n, r = !0) {
              var o;
              return null !== (o = null == ya ? void 0 : ya.findTestabilityInTree(this, n, r)) && void 0 !== o
                ? o
                : null;
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = je({ token: e, factory: e.ɵfac, providedIn: 'platform' })),
            e
          );
        })(),
        fo = null;
      const Xg = new Pt('AllowMultipleToken'),
        Ou = new Pt('PlatformDestroyListeners');
      class XD {
        constructor(t, n) {
          (this.name = t), (this.token = n);
        }
      }
      function tm(e, t, n = []) {
        const r = `Platform: ${t}`,
          o = new Pt(r);
        return (s = []) => {
          let l = Su();
          if (!l || l.injector.get(Xg, !1)) {
            const f = [...n, ...s, { provide: o, useValue: !0 }];
            e
              ? e(f)
              : (function eb(e) {
                  if (fo && !fo.get(Xg, !1)) throw new K(400, !1);
                  fo = e;
                  const t = e.get(rm);
                  (function em(e) {
                    const t = e.get(Gg, null);
                    t && t.forEach((n) => n());
                  })(e);
                })(
                  (function nm(e = [], t) {
                    return Ni.create({
                      name: t,
                      providers: [
                        { provide: sl, useValue: 'platform' },
                        { provide: Ou, useValue: new Set([() => (fo = null)]) },
                        ...e
                      ]
                    });
                  })(f, r)
                );
          }
          return (function nb(e) {
            const t = Su();
            if (!t) throw new K(401, !1);
            return t;
          })();
        };
      }
      function Su() {
        var e;
        return null !== (e = null == fo ? void 0 : fo.get(rm)) && void 0 !== e ? e : null;
      }
      let rm = (() => {
        class e {
          constructor(n) {
            (this._injector = n), (this._modules = []), (this._destroyListeners = []), (this._destroyed = !1);
          }
          bootstrapModuleFactory(n, r) {
            const o = (function im(e, t) {
                let n;
                return (n = 'noop' === e ? new WD() : ('zone.js' === e ? void 0 : e) || new Sr(t)), n;
              })(
                null == r ? void 0 : r.ngZone,
                (function om(e) {
                  return {
                    enableLongStackTrace: !1,
                    shouldCoalesceEventChangeDetection: !(!e || !e.ngZoneEventCoalescing) || !1,
                    shouldCoalesceRunChangeDetection: !(!e || !e.ngZoneRunCoalescing) || !1
                  };
                })(r)
              ),
              s = [{ provide: Sr, useValue: o }];
            return o.run(() => {
              const l = Ni.create({ providers: s, parent: this.injector, name: n.moduleType.name }),
                f = n.create(l),
                g = f.injector.get(oa, null);
              if (!g) throw new K(402, !1);
              return (
                o.runOutsideAngular(() => {
                  const D = o.onError.subscribe({
                    next: (M) => {
                      g.handleError(M);
                    }
                  });
                  f.onDestroy(() => {
                    _c(this._modules, f), D.unsubscribe();
                  });
                }),
                (function sm(e, t, n) {
                  try {
                    const r = n();
                    return ql(r)
                      ? r.catch((o) => {
                          throw (t.runOutsideAngular(() => e.handleError(o)), o);
                        })
                      : r;
                  } catch (r) {
                    throw (t.runOutsideAngular(() => e.handleError(r)), r);
                  }
                })(g, o, () => {
                  const D = f.injector.get(pc);
                  return (
                    D.runInitializers(),
                    D.donePromise.then(() => (_p(f.injector.get(gc, Cs) || Cs), this._moduleDoBootstrap(f), f))
                  );
                })
              );
            });
          }
          bootstrapModule(n, r = []) {
            const o = am({}, r);
            return (function JD(e, t, n) {
              const r = new du(n);
              return Promise.resolve(r);
            })(0, 0, n).then((s) => this.bootstrapModuleFactory(s, o));
          }
          _moduleDoBootstrap(n) {
            const r = n.injector.get(mc);
            if (n._bootstrapComponents.length > 0) n._bootstrapComponents.forEach((o) => r.bootstrap(o));
            else {
              if (!n.instance.ngDoBootstrap) throw new K(403, !1);
              n.instance.ngDoBootstrap(r);
            }
            this._modules.push(n);
          }
          onDestroy(n) {
            this._destroyListeners.push(n);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed) throw new K(404, !1);
            this._modules.slice().forEach((r) => r.destroy()), this._destroyListeners.forEach((r) => r());
            const n = this._injector.get(Ou, null);
            n && (n.forEach((r) => r()), n.clear()), (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(gn(Ni));
          }),
          (e.ɵprov = je({ token: e, factory: e.ɵfac, providedIn: 'platform' })),
          e
        );
      })();
      function am(e, t) {
        return Array.isArray(t) ? t.reduce(am, e) : Object.assign(Object.assign({}, e), t);
      }
      let mc = (() => {
        class e {
          constructor(n, r, o) {
            (this._zone = n),
              (this._injector = r),
              (this._exceptionHandler = o),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this._destroyed = !1),
              (this._destroyListeners = []),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                }
              }));
            const s = new L.y((f) => {
                (this._stable =
                  this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    f.next(this._stable), f.complete();
                  });
              }),
              l = new L.y((f) => {
                let g;
                this._zone.runOutsideAngular(() => {
                  g = this._zone.onStable.subscribe(() => {
                    Sr.assertNotInAngularZone(),
                      Au(() => {
                        !this._stable &&
                          !this._zone.hasPendingMacrotasks &&
                          !this._zone.hasPendingMicrotasks &&
                          ((this._stable = !0), f.next(!0));
                      });
                  });
                });
                const D = this._zone.onUnstable.subscribe(() => {
                  Sr.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        f.next(!1);
                      }));
                });
                return () => {
                  g.unsubscribe(), D.unsubscribe();
                };
              });
            this.isStable = (0, Z.T)(
              s,
              l.pipe(
                (function xe(e = {}) {
                  const {
                    connector: t = () => new a.x(),
                    resetOnError: n = !0,
                    resetOnComplete: r = !0,
                    resetOnRefCountZero: o = !0
                  } = e;
                  return (s) => {
                    let l,
                      f,
                      g,
                      D = 0,
                      M = !1,
                      T = !1;
                    const V = () => {
                        null == f || f.unsubscribe(), (f = void 0);
                      },
                      Q = () => {
                        V(), (l = g = void 0), (M = T = !1);
                      },
                      me = () => {
                        const Se = l;
                        Q(), null == Se || Se.unsubscribe();
                      };
                    return (0, Y.e)((Se, Ve) => {
                      D++, !T && !M && V();
                      const qe = (g = null != g ? g : t());
                      Ve.add(() => {
                        D--, 0 === D && !T && !M && (f = ve(me, o));
                      }),
                        qe.subscribe(Ve),
                        !l &&
                          D > 0 &&
                          ((l = new se.Hp({
                            next: (rt) => qe.next(rt),
                            error: (rt) => {
                              (T = !0), V(), (f = ve(Q, n, rt)), qe.error(rt);
                            },
                            complete: () => {
                              (M = !0), V(), (f = ve(Q, r)), qe.complete();
                            }
                          })),
                          (0, P.Xf)(Se).subscribe(l));
                    })(s);
                  };
                })()
              )
            );
          }
          get destroyed() {
            return this._destroyed;
          }
          get injector() {
            return this._injector;
          }
          bootstrap(n, r) {
            const o = n instanceof rf;
            if (!this._injector.get(pc).done) throw (!o && U(n), new K(405, false));
            let l;
            (l = o ? n : this._injector.get(na).resolveComponentFactory(n)), this.componentTypes.push(l.componentType);
            const f = (function KD(e) {
                return e.isBoundToModule;
              })(l)
                ? void 0
                : this._injector.get(Ds),
              D = l.create(Ni.NULL, [], r || l.selector, f),
              M = D.location.nativeElement,
              T = D.injector.get(Qg, null);
            return (
              null == T || T.registerApplication(M),
              D.onDestroy(() => {
                this.detachView(D.hostView), _c(this.components, D), null == T || T.unregisterApplication(M);
              }),
              this._loadComponent(D),
              D
            );
          }
          tick() {
            if (this._runningTick) throw new K(101, !1);
            try {
              this._runningTick = !0;
              for (let n of this._views) n.detectChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(n));
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(n) {
            const r = n;
            this._views.push(r), r.attachToAppRef(this);
          }
          detachView(n) {
            const r = n;
            _c(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView),
              this.tick(),
              this.components.push(n),
              this._injector
                .get(Zg, [])
                .concat(this._bootstrapListeners)
                .forEach((o) => o(n));
          }
          ngOnDestroy() {
            if (!this._destroyed)
              try {
                this._destroyListeners.forEach((n) => n()),
                  this._views.slice().forEach((n) => n.destroy()),
                  this._onMicrotaskEmptySubscription.unsubscribe();
              } finally {
                (this._destroyed = !0),
                  (this._views = []),
                  (this._bootstrapListeners = []),
                  (this._destroyListeners = []);
              }
          }
          onDestroy(n) {
            return this._destroyListeners.push(n), () => _c(this._destroyListeners, n);
          }
          destroy() {
            if (this._destroyed) throw new K(406, !1);
            const n = this._injector;
            n.destroy && !n.destroyed && n.destroy();
          }
          get viewCount() {
            return this._views.length;
          }
          warnIfDestroyed() {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(gn(Sr), gn(Si), gn(oa));
          }),
          (e.ɵprov = je({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      function _c(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      let lm = !0;
      function ob() {
        lm = !1;
      }
      let ib = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = sb), e;
      })();
      function sb(e) {
        return (function ab(e, t, n) {
          if (po(e) && !n) {
            const r = sn(e.index, t);
            return new ia(r, r);
          }
          return 47 & e.type ? new ia(t[16], t) : null;
        })(Wt(), we(), 16 == (16 & e));
      }
      class pm {
        constructor() {}
        supports(t) {
          return aa(t);
        }
        create(t) {
          return new hb(t);
        }
      }
      const fb = (e, t) => t;
      class hb {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || fb);
        }
        forEachItem(t) {
          let n;
          for (n = this._itHead; null !== n; n = n._next) t(n);
        }
        forEachOperation(t) {
          let n = this._itHead,
            r = this._removalsHead,
            o = 0,
            s = null;
          for (; n || r; ) {
            const l = !r || (n && n.currentIndex < mm(r, o, s)) ? n : r,
              f = mm(l, o, s),
              g = l.currentIndex;
            if (l === r) o--, (r = r._nextRemoved);
            else if (((n = n._next), null == l.previousIndex)) o++;
            else {
              s || (s = []);
              const D = f - o,
                M = g - o;
              if (D != M) {
                for (let V = 0; V < D; V++) {
                  const Q = V < s.length ? s[V] : (s[V] = 0),
                    me = Q + V;
                  M <= me && me < D && (s[V] = Q + 1);
                }
                s[l.previousIndex] = M - D;
              }
            }
            f !== g && t(l, f, g);
          }
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachMovedItem(t) {
          let n;
          for (n = this._movesHead; null !== n; n = n._nextMoved) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        forEachIdentityChange(t) {
          let n;
          for (n = this._identityChangesHead; null !== n; n = n._nextIdentityChange) t(n);
        }
        diff(t) {
          if ((null == t && (t = []), !aa(t))) throw new K(900, !1);
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let o,
            s,
            l,
            n = this._itHead,
            r = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let f = 0; f < this.length; f++)
              (s = t[f]),
                (l = this._trackByFn(f, s)),
                null !== n && Object.is(n.trackById, l)
                  ? (r && (n = this._verifyReinsertion(n, s, l, f)),
                    Object.is(n.item, s) || this._addIdentityChange(n, s))
                  : ((n = this._mismatch(n, s, l, f)), (r = !0)),
                (n = n._next);
          } else
            (o = 0),
              (function Zy(e, t) {
                if (Array.isArray(e)) for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[Fi()]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(t, (f) => {
                (l = this._trackByFn(o, f)),
                  null !== n && Object.is(n.trackById, l)
                    ? (r && (n = this._verifyReinsertion(n, f, l, o)),
                      Object.is(n.item, f) || this._addIdentityChange(n, f))
                    : ((n = this._mismatch(n, f, l, o)), (r = !0)),
                  (n = n._next),
                  o++;
              }),
              (this.length = o);
          return this._truncate(n), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
            for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = t._nextMoved)
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, n, r, o) {
          let s;
          return (
            null === t ? (s = this._itTail) : ((s = t._prev), this._remove(t)),
            null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, s, o))
              : null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(r, o))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, s, o))
              : (t = this._addAfter(new pb(n, r), s, o)),
            t
          );
        }
        _verifyReinsertion(t, n, r, o) {
          let s = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null);
          return (
            null !== s
              ? (t = this._reinsertAfter(s, t._prev, o))
              : t.currentIndex != o && ((t.currentIndex = o), this._addToMoves(t, o)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const n = t._next;
            this._addToRemovals(this._unlink(t)), (t = n);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail && (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, n, r) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const o = t._prevRemoved,
            s = t._nextRemoved;
          return (
            null === o ? (this._removalsHead = s) : (o._nextRemoved = s),
            null === s ? (this._removalsTail = o) : (s._prevRemoved = o),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _moveAfter(t, n, r) {
          return this._unlink(t), this._insertAfter(t, n, r), this._addToMoves(t, r), t;
        }
        _addAfter(t, n, r) {
          return (
            this._insertAfter(t, n, r),
            (this._additionsTail =
              null === this._additionsTail ? (this._additionsHead = t) : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, n, r) {
          const o = null === n ? this._itHead : n._next;
          return (
            (t._next = o),
            (t._prev = n),
            null === o ? (this._itTail = t) : (o._prev = t),
            null === n ? (this._itHead = t) : (n._next = t),
            null === this._linkedRecords && (this._linkedRecords = new gm()),
            this._linkedRecords.put(t),
            (t.currentIndex = r),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const n = t._prev,
            r = t._next;
          return null === n ? (this._itHead = r) : (n._next = r), null === r ? (this._itTail = n) : (r._prev = n), t;
        }
        _addToMoves(t, n) {
          return (
            t.previousIndex === n ||
              (this._movesTail = null === this._movesTail ? (this._movesHead = t) : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords && (this._unlinkedRecords = new gm()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t), (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail), (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, n) {
          return (
            (t.item = n),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class pb {
        constructor(t, n) {
          (this.item = t),
            (this.trackById = n),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class gb {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t), (t._nextDup = null), (t._prevDup = null))
            : ((this._tail._nextDup = t), (t._prevDup = this._tail), (t._nextDup = null), (this._tail = t));
        }
        get(t, n) {
          let r;
          for (r = this._head; null !== r; r = r._nextDup)
            if ((null === n || n <= r.currentIndex) && Object.is(r.trackById, t)) return r;
          return null;
        }
        remove(t) {
          const n = t._prevDup,
            r = t._nextDup;
          return (
            null === n ? (this._head = r) : (n._nextDup = r),
            null === r ? (this._tail = n) : (r._prevDup = n),
            null === this._head
          );
        }
      }
      class gm {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let r = this.map.get(n);
          r || ((r = new gb()), this.map.set(n, r)), r.add(t);
        }
        get(t, n) {
          const o = this.map.get(t);
          return o ? o.get(t, n) : null;
        }
        remove(t) {
          const n = t.trackById;
          return this.map.get(n).remove(t) && this.map.delete(n), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function mm(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let o = 0;
        return n && r < n.length && (o = n[r]), r + t + o;
      }
      class _m {
        constructor() {}
        supports(t) {
          return t instanceof Map || jl(t);
        }
        create() {
          return new mb();
        }
      }
      class mb {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead;
        }
        forEachItem(t) {
          let n;
          for (n = this._mapHead; null !== n; n = n._next) t(n);
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachChangedItem(t) {
          let n;
          for (n = this._changesHead; null !== n; n = n._nextChanged) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || jl(t))) throw new K(900, !1);
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (r, o) => {
              if (n && n.key === o) this._maybeAddToChanges(n, r), (this._appendAfter = n), (n = n._next);
              else {
                const s = this._getOrCreateRecordForKey(o, r);
                n = this._insertBeforeOrAppend(n, s);
              }
            }),
            n)
          ) {
            n._prev && (n._prev._next = null), (this._removalsHead = n);
            for (let r = n; null !== r; r = r._nextRemoved)
              r === this._mapHead && (this._mapHead = null),
                this._records.delete(r.key),
                (r._nextRemoved = r._next),
                (r.previousValue = r.currentValue),
                (r.currentValue = null),
                (r._prev = null),
                (r._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, n) {
          if (t) {
            const r = t._prev;
            return (
              (n._next = t),
              (n._prev = r),
              (t._prev = n),
              r && (r._next = n),
              t === this._mapHead && (this._mapHead = n),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter ? ((this._appendAfter._next = n), (n._prev = this._appendAfter)) : (this._mapHead = n),
            (this._appendAfter = n),
            null
          );
        }
        _getOrCreateRecordForKey(t, n) {
          if (this._records.has(t)) {
            const o = this._records.get(t);
            this._maybeAddToChanges(o, n);
            const s = o._prev,
              l = o._next;
            return s && (s._next = l), l && (l._prev = s), (o._next = null), (o._prev = null), o;
          }
          const r = new _b(t);
          return this._records.set(t, r), (r.currentValue = n), this._addToAdditions(r), r;
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next)
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, n) {
          Object.is(n, t.currentValue) ||
            ((t.previousValue = t.currentValue), (t.currentValue = n), this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, n) {
          t instanceof Map ? t.forEach(n) : Object.keys(t).forEach((r) => n(t[r], r));
        }
      }
      class _b {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function vm() {
        return new Ru([new pm()]);
      }
      let Ru = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (null != r) {
              const o = r.factories.slice();
              n = n.concat(o);
            }
            return new e(n);
          }
          static extend(n) {
            return { provide: e, useFactory: (r) => e.create(n, r || vm()), deps: [[e, new Ws(), new qs()]] };
          }
          find(n) {
            const r = this.factories.find((o) => o.supports(n));
            if (null != r) return r;
            throw new K(901, !1);
          }
        }
        return (e.ɵprov = je({ token: e, providedIn: 'root', factory: vm })), e;
      })();
      function ym() {
        return new Lu([new _m()]);
      }
      let Lu = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (r) {
              const o = r.factories.slice();
              n = n.concat(o);
            }
            return new e(n);
          }
          static extend(n) {
            return { provide: e, useFactory: (r) => e.create(n, r || ym()), deps: [[e, new Ws(), new qs()]] };
          }
          find(n) {
            const r = this.factories.find((o) => o.supports(n));
            if (r) return r;
            throw new K(901, !1);
          }
        }
        return (e.ɵprov = je({ token: e, providedIn: 'root', factory: ym })), e;
      })();
      const Cb = tm(null, 'core', []);
      let Db = (() => {
        class e {
          constructor(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(gn(mc));
          }),
          (e.ɵmod = ke({ type: e })),
          (e.ɵinj = Ct({})),
          e
        );
      })();
      function bb(e) {
        return 'boolean' == typeof e ? e : null != e && 'false' !== e;
      }
      function Eb(e, t) {
        const n = _t(e),
          r = t.elementInjector || Ba();
        return new sa(n).create(r, t.projectableNodes, t.hostElement, t.environmentInjector);
      }
    },
    2382: (Ge, he, w) => {
      'use strict';
      w.d(he, {
        Fj: () => H,
        u5: () => kr,
        Cf: () => Ae,
        JU: () => ce,
        JJ: () => qt,
        JL: () => St,
        F: () => dr,
        On: () => Lo,
        YN: () => Fr,
        _Y: () => ri,
        Kr: () => eo
      });
      var a = w(4893),
        i = w(9808),
        L = w(2076),
        Z = w(9751),
        P = w(4742),
        se = w(8421),
        Y = w(3269),
        xe = w(5403),
        ve = w(3268),
        ae = w(1810),
        ge = w(4004);
      let Ne = (() => {
          class C {
            constructor(m, A) {
              (this._renderer = m), (this._elementRef = A), (this.onChange = (ue) => {}), (this.onTouched = () => {});
            }
            setProperty(m, A) {
              this._renderer.setProperty(this._elementRef.nativeElement, m, A);
            }
            registerOnTouched(m) {
              this.onTouched = m;
            }
            registerOnChange(m) {
              this.onChange = m;
            }
            setDisabledState(m) {
              this.setProperty('disabled', m);
            }
          }
          return (
            (C.ɵfac = function (m) {
              return new (m || C)(a.Y36(a.Qsj), a.Y36(a.SBq));
            }),
            (C.ɵdir = a.lG2({ type: C })),
            C
          );
        })(),
        de = (() => {
          class C extends Ne {}
          return (
            (C.ɵfac = (function () {
              let v;
              return function (A) {
                return (v || (v = a.n5z(C)))(A || C);
              };
            })()),
            (C.ɵdir = a.lG2({ type: C, features: [a.qOj] })),
            C
          );
        })();
      const ce = new a.OlP('NgValueAccessor'),
        ie = { provide: ce, useExisting: (0, a.Gpc)(() => H), multi: !0 },
        be = new a.OlP('CompositionEventMode');
      let H = (() => {
        class C extends Ne {
          constructor(m, A, ue) {
            super(m, A),
              (this._compositionMode = ue),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function K() {
                  const C = (0, i.q)() ? (0, i.q)().getUserAgent() : '';
                  return /android (\d+)/.test(C.toLowerCase());
                })());
          }
          writeValue(m) {
            this.setProperty('value', null == m ? '' : m);
          }
          _handleInput(m) {
            (!this._compositionMode || (this._compositionMode && !this._composing)) && this.onChange(m);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(m) {
            (this._composing = !1), this._compositionMode && this.onChange(m);
          }
        }
        return (
          (C.ɵfac = function (m) {
            return new (m || C)(a.Y36(a.Qsj), a.Y36(a.SBq), a.Y36(be, 8));
          }),
          (C.ɵdir = a.lG2({
            type: C,
            selectors: [
              ['input', 'formControlName', '', 3, 'type', 'checkbox'],
              ['textarea', 'formControlName', ''],
              ['input', 'formControl', '', 3, 'type', 'checkbox'],
              ['textarea', 'formControl', ''],
              ['input', 'ngModel', '', 3, 'type', 'checkbox'],
              ['textarea', 'ngModel', ''],
              ['', 'ngDefaultControl', '']
            ],
            hostBindings: function (m, A) {
              1 & m &&
                a.NdJ('input', function ($e) {
                  return A._handleInput($e.target.value);
                })('blur', function () {
                  return A.onTouched();
                })('compositionstart', function () {
                  return A._compositionStart();
                })('compositionend', function ($e) {
                  return A._compositionEnd($e.target.value);
                });
            },
            features: [a._Bn([ie]), a.qOj]
          })),
          C
        );
      })();
      const Ae = new a.OlP('NgValidators'),
        Oe = new a.OlP('NgAsyncValidators');
      function q(C) {
        return null != C;
      }
      function fe(C) {
        return (0, a.QGY)(C) ? (0, L.D)(C) : C;
      }
      function De(C) {
        let v = {};
        return (
          C.forEach((m) => {
            v = null != m ? Object.assign(Object.assign({}, v), m) : v;
          }),
          0 === Object.keys(v).length ? null : v
        );
      }
      function pe(C, v) {
        return v.map((m) => m(C));
      }
      function et(C) {
        return C.map((v) =>
          (function Je(C) {
            return !C.validate;
          })(v)
            ? v
            : (m) => v.validate(m)
        );
      }
      function je(C) {
        return null != C
          ? (function Ot(C) {
              if (!C) return null;
              const v = C.filter(q);
              return 0 == v.length
                ? null
                : function (m) {
                    return De(pe(m, v));
                  };
            })(et(C))
          : null;
      }
      function Ct(C) {
        return null != C
          ? (function He(C) {
              if (!C) return null;
              const v = C.filter(q);
              return 0 == v.length
                ? null
                : function (m) {
                    return (function le(...C) {
                      const v = (0, Y.jO)(C),
                        { args: m, keys: A } = (0, P.D)(C),
                        ue = new Z.y(($e) => {
                          const { length: mt } = m;
                          if (!mt) return void $e.complete();
                          const Yt = new Array(mt);
                          let gr = mt,
                            Zn = mt;
                          for (let _n = 0; _n < mt; _n++) {
                            let Co = !1;
                            (0, se.Xf)(m[_n]).subscribe(
                              (0, xe.x)(
                                $e,
                                (zo) => {
                                  Co || ((Co = !0), Zn--), (Yt[_n] = zo);
                                },
                                () => gr--,
                                void 0,
                                () => {
                                  (!gr || !Co) && (Zn || $e.next(A ? (0, ae.n)(A, Yt) : Yt), $e.complete());
                                }
                              )
                            );
                          }
                        });
                      return v ? ue.pipe((0, ve.Z)(v)) : ue;
                    })(pe(m, v).map(fe)).pipe((0, ge.U)(De));
                  };
            })(et(C))
          : null;
      }
      function xt(C, v) {
        return null === C ? [v] : Array.isArray(C) ? [...C, v] : [C, v];
      }
      function Kt(C) {
        return C ? (Array.isArray(C) ? C : [C]) : [];
      }
      function Nt(C, v) {
        return Array.isArray(C) ? C.includes(v) : C === v;
      }
      function un(C, v) {
        const m = Kt(v);
        return (
          Kt(C).forEach((ue) => {
            Nt(m, ue) || m.push(ue);
          }),
          m
        );
      }
      function Bt(C, v) {
        return Kt(v).filter((m) => !Nt(C, m));
      }
      class Cn {
        constructor() {
          (this._rawValidators = []), (this._rawAsyncValidators = []), (this._onDestroyCallbacks = []);
        }
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        _setValidators(v) {
          (this._rawValidators = v || []), (this._composedValidatorFn = je(this._rawValidators));
        }
        _setAsyncValidators(v) {
          (this._rawAsyncValidators = v || []), (this._composedAsyncValidatorFn = Ct(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn || null;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn || null;
        }
        _registerOnDestroy(v) {
          this._onDestroyCallbacks.push(v);
        }
        _invokeOnDestroyCallbacks() {
          this._onDestroyCallbacks.forEach((v) => v()), (this._onDestroyCallbacks = []);
        }
        reset(v) {
          this.control && this.control.reset(v);
        }
        hasError(v, m) {
          return !!this.control && this.control.hasError(v, m);
        }
        getError(v, m) {
          return this.control ? this.control.getError(v, m) : null;
        }
      }
      class Dn extends Cn {
        constructor() {
          super(...arguments), (this._parent = null), (this.name = null), (this.valueAccessor = null);
        }
      }
      class vt extends Cn {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class Qe {
        constructor(v) {
          this._cd = v;
        }
        get isTouched() {
          var v, m;
          return !(
            null === (m = null === (v = this._cd) || void 0 === v ? void 0 : v.control) ||
            void 0 === m ||
            !m.touched
          );
        }
        get isUntouched() {
          var v, m;
          return !(
            null === (m = null === (v = this._cd) || void 0 === v ? void 0 : v.control) ||
            void 0 === m ||
            !m.untouched
          );
        }
        get isPristine() {
          var v, m;
          return !(
            null === (m = null === (v = this._cd) || void 0 === v ? void 0 : v.control) ||
            void 0 === m ||
            !m.pristine
          );
        }
        get isDirty() {
          var v, m;
          return !(
            null === (m = null === (v = this._cd) || void 0 === v ? void 0 : v.control) ||
            void 0 === m ||
            !m.dirty
          );
        }
        get isValid() {
          var v, m;
          return !(
            null === (m = null === (v = this._cd) || void 0 === v ? void 0 : v.control) ||
            void 0 === m ||
            !m.valid
          );
        }
        get isInvalid() {
          var v, m;
          return !(
            null === (m = null === (v = this._cd) || void 0 === v ? void 0 : v.control) ||
            void 0 === m ||
            !m.invalid
          );
        }
        get isPending() {
          var v, m;
          return !(
            null === (m = null === (v = this._cd) || void 0 === v ? void 0 : v.control) ||
            void 0 === m ||
            !m.pending
          );
        }
        get isSubmitted() {
          var v;
          return !(null === (v = this._cd) || void 0 === v || !v.submitted);
        }
      }
      let qt = (() => {
          class C extends Qe {
            constructor(m) {
              super(m);
            }
          }
          return (
            (C.ɵfac = function (m) {
              return new (m || C)(a.Y36(Dn, 2));
            }),
            (C.ɵdir = a.lG2({
              type: C,
              selectors: [
                ['', 'formControlName', ''],
                ['', 'ngModel', ''],
                ['', 'formControl', '']
              ],
              hostVars: 14,
              hostBindings: function (m, A) {
                2 & m &&
                  a.ekj('ng-untouched', A.isUntouched)('ng-touched', A.isTouched)('ng-pristine', A.isPristine)(
                    'ng-dirty',
                    A.isDirty
                  )('ng-valid', A.isValid)('ng-invalid', A.isInvalid)('ng-pending', A.isPending);
              },
              features: [a.qOj]
            })),
            C
          );
        })(),
        St = (() => {
          class C extends Qe {
            constructor(m) {
              super(m);
            }
          }
          return (
            (C.ɵfac = function (m) {
              return new (m || C)(a.Y36(vt, 10));
            }),
            (C.ɵdir = a.lG2({
              type: C,
              selectors: [
                ['', 'formGroupName', ''],
                ['', 'formArrayName', ''],
                ['', 'ngModelGroup', ''],
                ['', 'formGroup', ''],
                ['form', 3, 'ngNoForm', ''],
                ['', 'ngForm', '']
              ],
              hostVars: 16,
              hostBindings: function (m, A) {
                2 & m &&
                  a.ekj('ng-untouched', A.isUntouched)('ng-touched', A.isTouched)('ng-pristine', A.isPristine)(
                    'ng-dirty',
                    A.isDirty
                  )('ng-valid', A.isValid)('ng-invalid', A.isInvalid)('ng-pending', A.isPending)(
                    'ng-submitted',
                    A.isSubmitted
                  );
              },
              features: [a.qOj]
            })),
            C
          );
        })();
      const k = 'VALID',
        Ie = 'INVALID',
        I = 'PENDING',
        Me = 'DISABLED';
      function ke(C) {
        return (Vn(C) ? C.validators : C) || null;
      }
      function Gt(C) {
        return Array.isArray(C) ? je(C) : C || null;
      }
      function Ln(C, v) {
        return (Vn(v) ? v.asyncValidators : C) || null;
      }
      function nr(C) {
        return Array.isArray(C) ? Ct(C) : C || null;
      }
      function Vn(C) {
        return null != C && !Array.isArray(C) && 'object' == typeof C;
      }
      class $ {
        constructor(v, m) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = !1),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            (this._rawValidators = v),
            (this._rawAsyncValidators = m),
            (this._composedValidatorFn = Gt(this._rawValidators)),
            (this._composedAsyncValidatorFn = nr(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(v) {
          this._rawValidators = this._composedValidatorFn = v;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(v) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = v;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === k;
        }
        get invalid() {
          return this.status === Ie;
        }
        get pending() {
          return this.status == I;
        }
        get disabled() {
          return this.status === Me;
        }
        get enabled() {
          return this.status !== Me;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
        }
        setValidators(v) {
          (this._rawValidators = v), (this._composedValidatorFn = Gt(v));
        }
        setAsyncValidators(v) {
          (this._rawAsyncValidators = v), (this._composedAsyncValidatorFn = nr(v));
        }
        addValidators(v) {
          this.setValidators(un(v, this._rawValidators));
        }
        addAsyncValidators(v) {
          this.setAsyncValidators(un(v, this._rawAsyncValidators));
        }
        removeValidators(v) {
          this.setValidators(Bt(v, this._rawValidators));
        }
        removeAsyncValidators(v) {
          this.setAsyncValidators(Bt(v, this._rawAsyncValidators));
        }
        hasValidator(v) {
          return Nt(this._rawValidators, v);
        }
        hasAsyncValidator(v) {
          return Nt(this._rawAsyncValidators, v);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(v = {}) {
          (this.touched = !0), this._parent && !v.onlySelf && this._parent.markAsTouched(v);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }), this._forEachChild((v) => v.markAllAsTouched());
        }
        markAsUntouched(v = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((m) => {
              m.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !v.onlySelf && this._parent._updateTouched(v);
        }
        markAsDirty(v = {}) {
          (this.pristine = !1), this._parent && !v.onlySelf && this._parent.markAsDirty(v);
        }
        markAsPristine(v = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((m) => {
              m.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !v.onlySelf && this._parent._updatePristine(v);
        }
        markAsPending(v = {}) {
          (this.status = I),
            !1 !== v.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !v.onlySelf && this._parent.markAsPending(v);
        }
        disable(v = {}) {
          const m = this._parentMarkedDirty(v.onlySelf);
          (this.status = Me),
            (this.errors = null),
            this._forEachChild((A) => {
              A.disable(Object.assign(Object.assign({}, v), { onlySelf: !0 }));
            }),
            this._updateValue(),
            !1 !== v.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
            this._updateAncestors(Object.assign(Object.assign({}, v), { skipPristineCheck: m })),
            this._onDisabledChange.forEach((A) => A(!0));
        }
        enable(v = {}) {
          const m = this._parentMarkedDirty(v.onlySelf);
          (this.status = k),
            this._forEachChild((A) => {
              A.enable(Object.assign(Object.assign({}, v), { onlySelf: !0 }));
            }),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: v.emitEvent }),
            this._updateAncestors(Object.assign(Object.assign({}, v), { skipPristineCheck: m })),
            this._onDisabledChange.forEach((A) => A(!1));
        }
        _updateAncestors(v) {
          this._parent &&
            !v.onlySelf &&
            (this._parent.updateValueAndValidity(v),
            v.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(v) {
          this._parent = v;
        }
        getRawValue() {
          return this.value;
        }
        updateValueAndValidity(v = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status === k || this.status === I) && this._runAsyncValidator(v.emitEvent)),
            !1 !== v.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
            this._parent && !v.onlySelf && this._parent.updateValueAndValidity(v);
        }
        _updateTreeValidity(v = { emitEvent: !0 }) {
          this._forEachChild((m) => m._updateTreeValidity(v)),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: v.emitEvent });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? Me : k;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(v) {
          if (this.asyncValidator) {
            (this.status = I), (this._hasOwnPendingAsyncValidator = !0);
            const m = fe(this.asyncValidator(this));
            this._asyncValidationSubscription = m.subscribe((A) => {
              (this._hasOwnPendingAsyncValidator = !1), this.setErrors(A, { emitEvent: v });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(), (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(v, m = {}) {
          (this.errors = v), this._updateControlsErrors(!1 !== m.emitEvent);
        }
        get(v) {
          let m = v;
          return null == m || (Array.isArray(m) || (m = m.split('.')), 0 === m.length)
            ? null
            : m.reduce((A, ue) => A && A._find(ue), this);
        }
        getError(v, m) {
          const A = m ? this.get(m) : this;
          return A && A.errors ? A.errors[v] : null;
        }
        hasError(v, m) {
          return !!this.getError(v, m);
        }
        get root() {
          let v = this;
          for (; v._parent; ) v = v._parent;
          return v;
        }
        _updateControlsErrors(v) {
          (this.status = this._calculateStatus()),
            v && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(v);
        }
        _initObservables() {
          (this.valueChanges = new a.vpe()), (this.statusChanges = new a.vpe());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? Me
            : this.errors
            ? Ie
            : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(I)
            ? I
            : this._anyControlsHaveStatus(Ie)
            ? Ie
            : k;
        }
        _anyControlsHaveStatus(v) {
          return this._anyControls((m) => m.status === v);
        }
        _anyControlsDirty() {
          return this._anyControls((v) => v.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((v) => v.touched);
        }
        _updatePristine(v = {}) {
          (this.pristine = !this._anyControlsDirty()), this._parent && !v.onlySelf && this._parent._updatePristine(v);
        }
        _updateTouched(v = {}) {
          (this.touched = this._anyControlsTouched()), this._parent && !v.onlySelf && this._parent._updateTouched(v);
        }
        _registerOnCollectionChange(v) {
          this._onCollectionChange = v;
        }
        _setUpdateStrategy(v) {
          Vn(v) && null != v.updateOn && (this._updateOn = v.updateOn);
        }
        _parentMarkedDirty(v) {
          return !v && !(!this._parent || !this._parent.dirty) && !this._parent._anyControlsDirty();
        }
        _find(v) {
          return null;
        }
      }
      class U extends $ {
        constructor(v, m, A) {
          super(ke(m), Ln(A, m)),
            (this.controls = v),
            this._initObservables(),
            this._setUpdateStrategy(m),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !!this.asyncValidator });
        }
        registerControl(v, m) {
          return this.controls[v]
            ? this.controls[v]
            : ((this.controls[v] = m), m.setParent(this), m._registerOnCollectionChange(this._onCollectionChange), m);
        }
        addControl(v, m, A = {}) {
          this.registerControl(v, m),
            this.updateValueAndValidity({ emitEvent: A.emitEvent }),
            this._onCollectionChange();
        }
        removeControl(v, m = {}) {
          this.controls[v] && this.controls[v]._registerOnCollectionChange(() => {}),
            delete this.controls[v],
            this.updateValueAndValidity({ emitEvent: m.emitEvent }),
            this._onCollectionChange();
        }
        setControl(v, m, A = {}) {
          this.controls[v] && this.controls[v]._registerOnCollectionChange(() => {}),
            delete this.controls[v],
            m && this.registerControl(v, m),
            this.updateValueAndValidity({ emitEvent: A.emitEvent }),
            this._onCollectionChange();
        }
        contains(v) {
          return this.controls.hasOwnProperty(v) && this.controls[v].enabled;
        }
        setValue(v, m = {}) {
          (function jt(C, v, m) {
            C._forEachChild((A, ue) => {
              if (void 0 === m[ue]) throw new a.vHH(1002, '');
            });
          })(this, 0, v),
            Object.keys(v).forEach((A) => {
              (function _t(C, v, m) {
                const A = C.controls;
                if (!(v ? Object.keys(A) : A).length) throw new a.vHH(1e3, '');
                if (!A[m]) throw new a.vHH(1001, '');
              })(this, !0, A),
                this.controls[A].setValue(v[A], { onlySelf: !0, emitEvent: m.emitEvent });
            }),
            this.updateValueAndValidity(m);
        }
        patchValue(v, m = {}) {
          null != v &&
            (Object.keys(v).forEach((A) => {
              const ue = this.controls[A];
              ue && ue.patchValue(v[A], { onlySelf: !0, emitEvent: m.emitEvent });
            }),
            this.updateValueAndValidity(m));
        }
        reset(v = {}, m = {}) {
          this._forEachChild((A, ue) => {
            A.reset(v[ue], { onlySelf: !0, emitEvent: m.emitEvent });
          }),
            this._updatePristine(m),
            this._updateTouched(m),
            this.updateValueAndValidity(m);
        }
        getRawValue() {
          return this._reduceChildren({}, (v, m, A) => ((v[A] = m.getRawValue()), v));
        }
        _syncPendingControls() {
          let v = this._reduceChildren(!1, (m, A) => !!A._syncPendingControls() || m);
          return v && this.updateValueAndValidity({ onlySelf: !0 }), v;
        }
        _forEachChild(v) {
          Object.keys(this.controls).forEach((m) => {
            const A = this.controls[m];
            A && v(A, m);
          });
        }
        _setUpControls() {
          this._forEachChild((v) => {
            v.setParent(this), v._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(v) {
          for (const [m, A] of Object.entries(this.controls)) if (this.contains(m) && v(A)) return !0;
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren({}, (m, A, ue) => ((A.enabled || this.disabled) && (m[ue] = A.value), m));
        }
        _reduceChildren(v, m) {
          let A = v;
          return (
            this._forEachChild((ue, $e) => {
              A = m(A, ue, $e);
            }),
            A
          );
        }
        _allControlsDisabled() {
          for (const v of Object.keys(this.controls)) if (this.controls[v].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _find(v) {
          return this.controls.hasOwnProperty(v) ? this.controls[v] : null;
        }
      }
      function Tt(C, v) {
        var m, A;
        Le(C, v),
          v.valueAccessor.writeValue(C.value),
          C.disabled && (null === (A = (m = v.valueAccessor).setDisabledState) || void 0 === A || A.call(m, !0)),
          (function kt(C, v) {
            v.valueAccessor.registerOnChange((m) => {
              (C._pendingValue = m),
                (C._pendingChange = !0),
                (C._pendingDirty = !0),
                'change' === C.updateOn && fn(C, v);
            });
          })(C, v),
          (function Ft(C, v) {
            const m = (A, ue) => {
              v.valueAccessor.writeValue(A), ue && v.viewToModelUpdate(A);
            };
            C.registerOnChange(m),
              v._registerOnDestroy(() => {
                C._unregisterOnChange(m);
              });
          })(C, v),
          (function Xt(C, v) {
            v.valueAccessor.registerOnTouched(() => {
              (C._pendingTouched = !0),
                'blur' === C.updateOn && C._pendingChange && fn(C, v),
                'submit' !== C.updateOn && C.markAsTouched();
            });
          })(C, v),
          (function dn(C, v) {
            if (v.valueAccessor.setDisabledState) {
              const m = (A) => {
                v.valueAccessor.setDisabledState(A);
              };
              C.registerOnDisabledChange(m),
                v._registerOnDestroy(() => {
                  C._unregisterOnDisabledChange(m);
                });
            }
          })(C, v);
      }
      function Wn(C, v) {
        C.forEach((m) => {
          m.registerOnValidatorChange && m.registerOnValidatorChange(v);
        });
      }
      function Le(C, v) {
        const m = (function Ut(C) {
          return C._rawValidators;
        })(C);
        null !== v.validator ? C.setValidators(xt(m, v.validator)) : 'function' == typeof m && C.setValidators([m]);
        const A = (function Jt(C) {
          return C._rawAsyncValidators;
        })(C);
        null !== v.asyncValidator
          ? C.setAsyncValidators(xt(A, v.asyncValidator))
          : 'function' == typeof A && C.setAsyncValidators([A]);
        const ue = () => C.updateValueAndValidity();
        Wn(v._rawValidators, ue), Wn(v._rawAsyncValidators, ue);
      }
      function fn(C, v) {
        C._pendingDirty && C.markAsDirty(),
          C.setValue(C._pendingValue, { emitModelToViewChange: !1 }),
          v.viewToModelUpdate(C._pendingValue),
          (C._pendingChange = !1);
      }
      const An = { provide: vt, useExisting: (0, a.Gpc)(() => dr) },
        In = (() => Promise.resolve())();
      let dr = (() => {
        class C extends vt {
          constructor(m, A) {
            super(),
              (this.submitted = !1),
              (this._directives = new Set()),
              (this.ngSubmit = new a.vpe()),
              (this.form = new U({}, je(m), Ct(A)));
          }
          ngAfterViewInit() {
            this._setUpdateStrategy();
          }
          get formDirective() {
            return this;
          }
          get control() {
            return this.form;
          }
          get path() {
            return [];
          }
          get controls() {
            return this.form.controls;
          }
          addControl(m) {
            In.then(() => {
              const A = this._findContainer(m.path);
              (m.control = A.registerControl(m.name, m.control)),
                Tt(m.control, m),
                m.control.updateValueAndValidity({ emitEvent: !1 }),
                this._directives.add(m);
            });
          }
          getControl(m) {
            return this.form.get(m.path);
          }
          removeControl(m) {
            In.then(() => {
              const A = this._findContainer(m.path);
              A && A.removeControl(m.name), this._directives.delete(m);
            });
          }
          addFormGroup(m) {
            In.then(() => {
              const A = this._findContainer(m.path),
                ue = new U({});
              (function Un(C, v) {
                Le(C, v);
              })(ue, m),
                A.registerControl(m.name, ue),
                ue.updateValueAndValidity({ emitEvent: !1 });
            });
          }
          removeFormGroup(m) {
            In.then(() => {
              const A = this._findContainer(m.path);
              A && A.removeControl(m.name);
            });
          }
          getFormGroup(m) {
            return this.form.get(m.path);
          }
          updateModel(m, A) {
            In.then(() => {
              this.form.get(m.path).setValue(A);
            });
          }
          setValue(m) {
            this.control.setValue(m);
          }
          onSubmit(m) {
            var A;
            return (
              (this.submitted = !0),
              (function Hn(C, v) {
                C._syncPendingControls(),
                  v.forEach((m) => {
                    const A = m.control;
                    'submit' === A.updateOn &&
                      A._pendingChange &&
                      (m.viewToModelUpdate(A._pendingValue), (A._pendingChange = !1));
                  });
              })(this.form, this._directives),
              this.ngSubmit.emit(m),
              'dialog' === (null === (A = null == m ? void 0 : m.target) || void 0 === A ? void 0 : A.method)
            );
          }
          onReset() {
            this.resetForm();
          }
          resetForm(m) {
            this.form.reset(m), (this.submitted = !1);
          }
          _setUpdateStrategy() {
            this.options && null != this.options.updateOn && (this.form._updateOn = this.options.updateOn);
          }
          _findContainer(m) {
            return m.pop(), m.length ? this.form.get(m) : this.form;
          }
        }
        return (
          (C.ɵfac = function (m) {
            return new (m || C)(a.Y36(Ae, 10), a.Y36(Oe, 10));
          }),
          (C.ɵdir = a.lG2({
            type: C,
            selectors: [['form', 3, 'ngNoForm', '', 3, 'formGroup', ''], ['ng-form'], ['', 'ngForm', '']],
            hostBindings: function (m, A) {
              1 & m &&
                a.NdJ('submit', function ($e) {
                  return A.onSubmit($e);
                })('reset', function () {
                  return A.onReset();
                });
            },
            inputs: { options: ['ngFormOptions', 'options'] },
            outputs: { ngSubmit: 'ngSubmit' },
            exportAs: ['ngForm'],
            features: [a._Bn([An]), a.qOj]
          })),
          C
        );
      })();
      function ht(C, v) {
        const m = C.indexOf(v);
        m > -1 && C.splice(m, 1);
      }
      function Dr(C) {
        return 'object' == typeof C && null !== C && 2 === Object.keys(C).length && 'value' in C && 'disabled' in C;
      }
      const Yn = class extends $ {
          constructor(v = null, m, A) {
            super(ke(m), Ln(A, m)),
              (this.defaultValue = null),
              (this._onChange = []),
              (this._pendingChange = !1),
              this._applyFormState(v),
              this._setUpdateStrategy(m),
              this._initObservables(),
              this.updateValueAndValidity({ onlySelf: !0, emitEvent: !!this.asyncValidator }),
              Vn(m) && (m.nonNullable || m.initialValueIsDefault) && (this.defaultValue = Dr(v) ? v.value : v);
          }
          setValue(v, m = {}) {
            (this.value = this._pendingValue = v),
              this._onChange.length &&
                !1 !== m.emitModelToViewChange &&
                this._onChange.forEach((A) => A(this.value, !1 !== m.emitViewToModelChange)),
              this.updateValueAndValidity(m);
          }
          patchValue(v, m = {}) {
            this.setValue(v, m);
          }
          reset(v = this.defaultValue, m = {}) {
            this._applyFormState(v),
              this.markAsPristine(m),
              this.markAsUntouched(m),
              this.setValue(this.value, m),
              (this._pendingChange = !1);
          }
          _updateValue() {}
          _anyControls(v) {
            return !1;
          }
          _allControlsDisabled() {
            return this.disabled;
          }
          registerOnChange(v) {
            this._onChange.push(v);
          }
          _unregisterOnChange(v) {
            ht(this._onChange, v);
          }
          registerOnDisabledChange(v) {
            this._onDisabledChange.push(v);
          }
          _unregisterOnDisabledChange(v) {
            ht(this._onDisabledChange, v);
          }
          _forEachChild(v) {}
          _syncPendingControls() {
            return !(
              'submit' !== this.updateOn ||
              (this._pendingDirty && this.markAsDirty(),
              this._pendingTouched && this.markAsTouched(),
              !this._pendingChange) ||
              (this.setValue(this._pendingValue, { onlySelf: !0, emitModelToViewChange: !1 }), 0)
            );
          }
          _applyFormState(v) {
            Dr(v)
              ? ((this.value = this._pendingValue = v.value),
                v.disabled
                  ? this.disable({ onlySelf: !0, emitEvent: !1 })
                  : this.enable({ onlySelf: !0, emitEvent: !1 }))
              : (this.value = this._pendingValue = v);
          }
        },
        ti = { provide: Dn, useExisting: (0, a.Gpc)(() => Lo) },
        ni = (() => Promise.resolve())();
      let Lo = (() => {
          class C extends Dn {
            constructor(m, A, ue, $e, mt) {
              super(),
                (this._changeDetectorRef = mt),
                (this.control = new Yn()),
                (this._registered = !1),
                (this.update = new a.vpe()),
                (this._parent = m),
                this._setValidators(A),
                this._setAsyncValidators(ue),
                (this.valueAccessor = (function Vt(C, v) {
                  if (!v) return null;
                  let m, A, ue;
                  return (
                    Array.isArray(v),
                    v.forEach(($e) => {
                      $e.constructor === H
                        ? (m = $e)
                        : (function qr(C) {
                            return Object.getPrototypeOf(C.constructor) === de;
                          })($e)
                        ? (A = $e)
                        : (ue = $e);
                    }),
                    ue || A || m || null
                  );
                })(0, $e));
            }
            ngOnChanges(m) {
              if ((this._checkForErrors(), !this._registered || 'name' in m)) {
                if (this._registered && (this._checkName(), this.formDirective)) {
                  const A = m.name.previousValue;
                  this.formDirective.removeControl({ name: A, path: this._getPath(A) });
                }
                this._setUpControl();
              }
              'isDisabled' in m && this._updateDisabled(m),
                (function jn(C, v) {
                  if (!C.hasOwnProperty('model')) return !1;
                  const m = C.model;
                  return !!m.isFirstChange() || !Object.is(v, m.currentValue);
                })(m, this.viewModel) && (this._updateValue(this.model), (this.viewModel = this.model));
            }
            ngOnDestroy() {
              this.formDirective && this.formDirective.removeControl(this);
            }
            get path() {
              return this._getPath(this.name);
            }
            get formDirective() {
              return this._parent ? this._parent.formDirective : null;
            }
            viewToModelUpdate(m) {
              (this.viewModel = m), this.update.emit(m);
            }
            _setUpControl() {
              this._setUpdateStrategy(),
                this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this),
                (this._registered = !0);
            }
            _setUpdateStrategy() {
              this.options && null != this.options.updateOn && (this.control._updateOn = this.options.updateOn);
            }
            _isStandalone() {
              return !this._parent || !(!this.options || !this.options.standalone);
            }
            _setUpStandalone() {
              Tt(this.control, this), this.control.updateValueAndValidity({ emitEvent: !1 });
            }
            _checkForErrors() {
              this._isStandalone() || this._checkParentType(), this._checkName();
            }
            _checkParentType() {}
            _checkName() {
              this.options && this.options.name && (this.name = this.options.name), this._isStandalone();
            }
            _updateValue(m) {
              ni.then(() => {
                var A;
                this.control.setValue(m, { emitViewToModelChange: !1 }),
                  null === (A = this._changeDetectorRef) || void 0 === A || A.markForCheck();
              });
            }
            _updateDisabled(m) {
              const A = m.isDisabled.currentValue,
                ue = 0 !== A && (0, a.D6c)(A);
              ni.then(() => {
                var $e;
                ue && !this.control.disabled
                  ? this.control.disable()
                  : !ue && this.control.disabled && this.control.enable(),
                  null === ($e = this._changeDetectorRef) || void 0 === $e || $e.markForCheck();
              });
            }
            _getPath(m) {
              return this._parent
                ? (function st(C, v) {
                    return [...v.path, C];
                  })(m, this._parent)
                : [m];
            }
          }
          return (
            (C.ɵfac = function (m) {
              return new (m || C)(a.Y36(vt, 9), a.Y36(Ae, 10), a.Y36(Oe, 10), a.Y36(ce, 10), a.Y36(a.sBO, 8));
            }),
            (C.ɵdir = a.lG2({
              type: C,
              selectors: [['', 'ngModel', '', 3, 'formControlName', '', 3, 'formControl', '']],
              inputs: {
                name: 'name',
                isDisabled: ['disabled', 'isDisabled'],
                model: ['ngModel', 'model'],
                options: ['ngModelOptions', 'options']
              },
              outputs: { update: 'ngModelChange' },
              exportAs: ['ngModel'],
              features: [a._Bn([ti]), a.qOj, a.TTD]
            })),
            C
          );
        })(),
        ri = (() => {
          class C {}
          return (
            (C.ɵfac = function (m) {
              return new (m || C)();
            }),
            (C.ɵdir = a.lG2({
              type: C,
              selectors: [['form', 3, 'ngNoForm', '', 3, 'ngNativeValidate', '']],
              hostAttrs: ['novalidate', '']
            })),
            C
          );
        })(),
        go = (() => {
          class C {}
          return (
            (C.ɵfac = function (m) {
              return new (m || C)();
            }),
            (C.ɵmod = a.oAB({ type: C })),
            (C.ɵinj = a.cJS({})),
            C
          );
        })();
      const Bo = { provide: ce, useExisting: (0, a.Gpc)(() => Xr), multi: !0 };
      function mo(C, v) {
        return null == C ? `${v}` : (v && 'object' == typeof v && (v = 'Object'), `${C}: ${v}`.slice(0, 50));
      }
      let Xr = (() => {
          class C extends de {
            constructor() {
              super(...arguments),
                (this._optionMap = new Map()),
                (this._idCounter = 0),
                (this._compareWith = Object.is);
            }
            set compareWith(m) {
              this._compareWith = m;
            }
            writeValue(m) {
              this.value = m;
              const ue = mo(this._getOptionId(m), m);
              this.setProperty('value', ue);
            }
            registerOnChange(m) {
              this.onChange = (A) => {
                (this.value = this._getOptionValue(A)), m(this.value);
              };
            }
            _registerOption() {
              return (this._idCounter++).toString();
            }
            _getOptionId(m) {
              for (const A of Array.from(this._optionMap.keys()))
                if (this._compareWith(this._optionMap.get(A), m)) return A;
              return null;
            }
            _getOptionValue(m) {
              const A = (function Kr(C) {
                return C.split(':')[0];
              })(m);
              return this._optionMap.has(A) ? this._optionMap.get(A) : m;
            }
          }
          return (
            (C.ɵfac = (function () {
              let v;
              return function (A) {
                return (v || (v = a.n5z(C)))(A || C);
              };
            })()),
            (C.ɵdir = a.lG2({
              type: C,
              selectors: [
                ['select', 'formControlName', '', 3, 'multiple', ''],
                ['select', 'formControl', '', 3, 'multiple', ''],
                ['select', 'ngModel', '', 3, 'multiple', '']
              ],
              hostBindings: function (m, A) {
                1 & m &&
                  a.NdJ('change', function ($e) {
                    return A.onChange($e.target.value);
                  })('blur', function () {
                    return A.onTouched();
                  });
              },
              inputs: { compareWith: 'compareWith' },
              features: [a._Bn([Bo]), a.qOj]
            })),
            C
          );
        })(),
        Fr = (() => {
          class C {
            constructor(m, A, ue) {
              (this._element = m),
                (this._renderer = A),
                (this._select = ue),
                this._select && (this.id = this._select._registerOption());
            }
            set ngValue(m) {
              null != this._select &&
                (this._select._optionMap.set(this.id, m),
                this._setElementValue(mo(this.id, m)),
                this._select.writeValue(this._select.value));
            }
            set value(m) {
              this._setElementValue(m), this._select && this._select.writeValue(this._select.value);
            }
            _setElementValue(m) {
              this._renderer.setProperty(this._element.nativeElement, 'value', m);
            }
            ngOnDestroy() {
              this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value));
            }
          }
          return (
            (C.ɵfac = function (m) {
              return new (m || C)(a.Y36(a.SBq), a.Y36(a.Qsj), a.Y36(Xr, 9));
            }),
            (C.ɵdir = a.lG2({ type: C, selectors: [['option']], inputs: { ngValue: 'ngValue', value: 'value' } })),
            C
          );
        })();
      const di = { provide: ce, useExisting: (0, a.Gpc)(() => or), multi: !0 };
      function mn(C, v) {
        return null == C
          ? `${v}`
          : ('string' == typeof v && (v = `'${v}'`),
            v && 'object' == typeof v && (v = 'Object'),
            `${C}: ${v}`.slice(0, 50));
      }
      let or = (() => {
          class C extends de {
            constructor() {
              super(...arguments),
                (this._optionMap = new Map()),
                (this._idCounter = 0),
                (this._compareWith = Object.is);
            }
            set compareWith(m) {
              this._compareWith = m;
            }
            writeValue(m) {
              let A;
              if (((this.value = m), Array.isArray(m))) {
                const ue = m.map(($e) => this._getOptionId($e));
                A = ($e, mt) => {
                  $e._setSelected(ue.indexOf(mt.toString()) > -1);
                };
              } else
                A = (ue, $e) => {
                  ue._setSelected(!1);
                };
              this._optionMap.forEach(A);
            }
            registerOnChange(m) {
              this.onChange = (A) => {
                const ue = [],
                  $e = A.selectedOptions;
                if (void 0 !== $e) {
                  const mt = $e;
                  for (let Yt = 0; Yt < mt.length; Yt++) {
                    const Zn = this._getOptionValue(mt[Yt].value);
                    ue.push(Zn);
                  }
                } else {
                  const mt = A.options;
                  for (let Yt = 0; Yt < mt.length; Yt++) {
                    const gr = mt[Yt];
                    if (gr.selected) {
                      const Zn = this._getOptionValue(gr.value);
                      ue.push(Zn);
                    }
                  }
                }
                (this.value = ue), m(ue);
              };
            }
            _registerOption(m) {
              const A = (this._idCounter++).toString();
              return this._optionMap.set(A, m), A;
            }
            _getOptionId(m) {
              for (const A of Array.from(this._optionMap.keys()))
                if (this._compareWith(this._optionMap.get(A)._value, m)) return A;
              return null;
            }
            _getOptionValue(m) {
              const A = (function jo(C) {
                return C.split(':')[0];
              })(m);
              return this._optionMap.has(A) ? this._optionMap.get(A)._value : m;
            }
          }
          return (
            (C.ɵfac = (function () {
              let v;
              return function (A) {
                return (v || (v = a.n5z(C)))(A || C);
              };
            })()),
            (C.ɵdir = a.lG2({
              type: C,
              selectors: [
                ['select', 'multiple', '', 'formControlName', ''],
                ['select', 'multiple', '', 'formControl', ''],
                ['select', 'multiple', '', 'ngModel', '']
              ],
              hostBindings: function (m, A) {
                1 & m &&
                  a.NdJ('change', function ($e) {
                    return A.onChange($e.target);
                  })('blur', function () {
                    return A.onTouched();
                  });
              },
              inputs: { compareWith: 'compareWith' },
              features: [a._Bn([di]), a.qOj]
            })),
            C
          );
        })(),
        eo = (() => {
          class C {
            constructor(m, A, ue) {
              (this._element = m),
                (this._renderer = A),
                (this._select = ue),
                this._select && (this.id = this._select._registerOption(this));
            }
            set ngValue(m) {
              null != this._select &&
                ((this._value = m), this._setElementValue(mn(this.id, m)), this._select.writeValue(this._select.value));
            }
            set value(m) {
              this._select
                ? ((this._value = m),
                  this._setElementValue(mn(this.id, m)),
                  this._select.writeValue(this._select.value))
                : this._setElementValue(m);
            }
            _setElementValue(m) {
              this._renderer.setProperty(this._element.nativeElement, 'value', m);
            }
            _setSelected(m) {
              this._renderer.setProperty(this._element.nativeElement, 'selected', m);
            }
            ngOnDestroy() {
              this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value));
            }
          }
          return (
            (C.ɵfac = function (m) {
              return new (m || C)(a.Y36(a.SBq), a.Y36(a.Qsj), a.Y36(or, 9));
            }),
            (C.ɵdir = a.lG2({ type: C, selectors: [['option']], inputs: { ngValue: 'ngValue', value: 'value' } })),
            C
          );
        })(),
        pr = (() => {
          class C {}
          return (
            (C.ɵfac = function (m) {
              return new (m || C)();
            }),
            (C.ɵmod = a.oAB({ type: C })),
            (C.ɵinj = a.cJS({ imports: [go] })),
            C
          );
        })(),
        kr = (() => {
          class C {}
          return (
            (C.ɵfac = function (m) {
              return new (m || C)();
            }),
            (C.ɵmod = a.oAB({ type: C })),
            (C.ɵinj = a.cJS({ imports: [pr] })),
            C
          );
        })();
    },
    2313: (Ge, he, w) => {
      'use strict';
      w.d(he, { Dx: () => qt, H7: () => nr, b2: () => Dn, q6: () => Nt });
      var a = w(9808),
        i = w(4893);
      class L extends a.w_ {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class Z extends L {
        static makeCurrent() {
          (0, a.HT)(new Z());
        }
        onAndCancel(U, S, W) {
          return (
            U.addEventListener(S, W, !1),
            () => {
              U.removeEventListener(S, W, !1);
            }
          );
        }
        dispatchEvent(U, S) {
          U.dispatchEvent(S);
        }
        remove(U) {
          U.parentNode && U.parentNode.removeChild(U);
        }
        createElement(U, S) {
          return (S = S || this.getDefaultDocument()).createElement(U);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(U) {
          return U.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(U) {
          return U instanceof DocumentFragment;
        }
        getGlobalEventTarget(U, S) {
          return 'window' === S ? window : 'document' === S ? U : 'body' === S ? U.body : null;
        }
        getBaseHref(U) {
          const S = (function se() {
            return (P = P || document.querySelector('base')), P ? P.getAttribute('href') : null;
          })();
          return null == S
            ? null
            : (function xe($) {
                (Y = Y || document.createElement('a')), Y.setAttribute('href', $);
                const U = Y.pathname;
                return '/' === U.charAt(0) ? U : `/${U}`;
              })(S);
        }
        resetBaseElement() {
          P = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(U) {
          return (0, a.Mx)(document.cookie, U);
        }
      }
      let Y,
        P = null;
      const ve = new i.OlP('TRANSITION_ID'),
        le = [
          {
            provide: i.ip1,
            useFactory: function ae($, U, S) {
              return () => {
                S.get(i.CZH).donePromise.then(() => {
                  const W = (0, a.q)(),
                    ye = U.querySelectorAll(`style[ng-transition="${$}"]`);
                  for (let nt = 0; nt < ye.length; nt++) W.remove(ye[nt]);
                });
              };
            },
            deps: [ve, a.K0, i.zs3],
            multi: !0
          }
        ];
      let Ne = (() => {
        class $ {
          build() {
            return new XMLHttpRequest();
          }
        }
        return (
          ($.ɵfac = function (S) {
            return new (S || $)();
          }),
          ($.ɵprov = i.Yz7({ token: $, factory: $.ɵfac })),
          $
        );
      })();
      const de = new i.OlP('EventManagerPlugins');
      let ce = (() => {
        class $ {
          constructor(S, W) {
            (this._zone = W),
              (this._eventNameToPlugin = new Map()),
              S.forEach((ye) => (ye.manager = this)),
              (this._plugins = S.slice().reverse());
          }
          addEventListener(S, W, ye) {
            return this._findPluginFor(W).addEventListener(S, W, ye);
          }
          addGlobalEventListener(S, W, ye) {
            return this._findPluginFor(W).addGlobalEventListener(S, W, ye);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(S) {
            const W = this._eventNameToPlugin.get(S);
            if (W) return W;
            const ye = this._plugins;
            for (let nt = 0; nt < ye.length; nt++) {
              const st = ye[nt];
              if (st.supports(S)) return this._eventNameToPlugin.set(S, st), st;
            }
            throw new Error(`No event manager plugin found for event ${S}`);
          }
        }
        return (
          ($.ɵfac = function (S) {
            return new (S || $)(i.LFG(de), i.LFG(i.R0b));
          }),
          ($.ɵprov = i.Yz7({ token: $, factory: $.ɵfac })),
          $
        );
      })();
      class R {
        constructor(U) {
          this._doc = U;
        }
        addGlobalEventListener(U, S, W) {
          const ye = (0, a.q)().getGlobalEventTarget(this._doc, U);
          if (!ye) throw new Error(`Unsupported event target ${ye} for event ${S}`);
          return this.addEventListener(ye, S, W);
        }
      }
      let B = (() => {
          class $ {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(S) {
              const W = new Set();
              S.forEach((ye) => {
                this._stylesSet.has(ye) || (this._stylesSet.add(ye), W.add(ye));
              }),
                this.onStylesAdded(W);
            }
            onStylesAdded(S) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            ($.ɵfac = function (S) {
              return new (S || $)();
            }),
            ($.ɵprov = i.Yz7({ token: $, factory: $.ɵfac })),
            $
          );
        })(),
        ie = (() => {
          class $ extends B {
            constructor(S) {
              super(), (this._doc = S), (this._hostNodes = new Map()), this._hostNodes.set(S.head, []);
            }
            _addStylesToHost(S, W, ye) {
              S.forEach((nt) => {
                const st = this._doc.createElement('style');
                (st.textContent = nt), ye.push(W.appendChild(st));
              });
            }
            addHost(S) {
              const W = [];
              this._addStylesToHost(this._stylesSet, S, W), this._hostNodes.set(S, W);
            }
            removeHost(S) {
              const W = this._hostNodes.get(S);
              W && W.forEach(K), this._hostNodes.delete(S);
            }
            onStylesAdded(S) {
              this._hostNodes.forEach((W, ye) => {
                this._addStylesToHost(S, ye, W);
              });
            }
            ngOnDestroy() {
              this._hostNodes.forEach((S) => S.forEach(K));
            }
          }
          return (
            ($.ɵfac = function (S) {
              return new (S || $)(i.LFG(a.K0));
            }),
            ($.ɵprov = i.Yz7({ token: $, factory: $.ɵfac })),
            $
          );
        })();
      function K($) {
        (0, a.q)().remove($);
      }
      const be = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
          math: 'http://www.w3.org/1998/MathML/'
        },
        H = /%COMP%/g;
      function Te($, U, S) {
        for (let W = 0; W < U.length; W++) {
          let ye = U[W];
          Array.isArray(ye) ? Te($, ye, S) : ((ye = ye.replace(H, $)), S.push(ye));
        }
        return S;
      }
      function j($) {
        return (U) => {
          if ('__ngUnwrap__' === U) return $;
          !1 === $(U) && (U.preventDefault(), (U.returnValue = !1));
        };
      }
      let X = (() => {
        class $ {
          constructor(S, W, ye) {
            (this.eventManager = S),
              (this.sharedStylesHost = W),
              (this.appId = ye),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new ne(S));
          }
          createRenderer(S, W) {
            if (!S || !W) return this.defaultRenderer;
            switch (W.encapsulation) {
              case i.ifc.Emulated: {
                let ye = this.rendererByCompId.get(W.id);
                return (
                  ye ||
                    ((ye = new G(this.eventManager, this.sharedStylesHost, W, this.appId)),
                    this.rendererByCompId.set(W.id, ye)),
                  ye.applyToHost(S),
                  ye
                );
              }
              case 1:
              case i.ifc.ShadowDom:
                return new ee(this.eventManager, this.sharedStylesHost, S, W);
              default:
                if (!this.rendererByCompId.has(W.id)) {
                  const ye = Te(W.id, W.styles, []);
                  this.sharedStylesHost.addStyles(ye), this.rendererByCompId.set(W.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          ($.ɵfac = function (S) {
            return new (S || $)(i.LFG(ce), i.LFG(ie), i.LFG(i.AFp));
          }),
          ($.ɵprov = i.Yz7({ token: $, factory: $.ɵfac })),
          $
        );
      })();
      class ne {
        constructor(U) {
          (this.eventManager = U), (this.data = Object.create(null)), (this.destroyNode = null);
        }
        destroy() {}
        createElement(U, S) {
          return S ? document.createElementNS(be[S] || S, U) : document.createElement(U);
        }
        createComment(U) {
          return document.createComment(U);
        }
        createText(U) {
          return document.createTextNode(U);
        }
        appendChild(U, S) {
          (Ze(U) ? U.content : U).appendChild(S);
        }
        insertBefore(U, S, W) {
          U && (Ze(U) ? U.content : U).insertBefore(S, W);
        }
        removeChild(U, S) {
          U && U.removeChild(S);
        }
        selectRootElement(U, S) {
          let W = 'string' == typeof U ? document.querySelector(U) : U;
          if (!W) throw new Error(`The selector "${U}" did not match any elements`);
          return S || (W.textContent = ''), W;
        }
        parentNode(U) {
          return U.parentNode;
        }
        nextSibling(U) {
          return U.nextSibling;
        }
        setAttribute(U, S, W, ye) {
          if (ye) {
            S = ye + ':' + S;
            const nt = be[ye];
            nt ? U.setAttributeNS(nt, S, W) : U.setAttribute(S, W);
          } else U.setAttribute(S, W);
        }
        removeAttribute(U, S, W) {
          if (W) {
            const ye = be[W];
            ye ? U.removeAttributeNS(ye, S) : U.removeAttribute(`${W}:${S}`);
          } else U.removeAttribute(S);
        }
        addClass(U, S) {
          U.classList.add(S);
        }
        removeClass(U, S) {
          U.classList.remove(S);
        }
        setStyle(U, S, W, ye) {
          ye & (i.JOm.DashCase | i.JOm.Important)
            ? U.style.setProperty(S, W, ye & i.JOm.Important ? 'important' : '')
            : (U.style[S] = W);
        }
        removeStyle(U, S, W) {
          W & i.JOm.DashCase ? U.style.removeProperty(S) : (U.style[S] = '');
        }
        setProperty(U, S, W) {
          U[S] = W;
        }
        setValue(U, S) {
          U.nodeValue = S;
        }
        listen(U, S, W) {
          return 'string' == typeof U
            ? this.eventManager.addGlobalEventListener(U, S, j(W))
            : this.eventManager.addEventListener(U, S, j(W));
        }
      }
      function Ze($) {
        return 'TEMPLATE' === $.tagName && void 0 !== $.content;
      }
      class G extends ne {
        constructor(U, S, W, ye) {
          super(U), (this.component = W);
          const nt = Te(ye + '-' + W.id, W.styles, []);
          S.addStyles(nt),
            (this.contentAttr = (function Oe($) {
              return '_ngcontent-%COMP%'.replace(H, $);
            })(ye + '-' + W.id)),
            (this.hostAttr = (function re($) {
              return '_nghost-%COMP%'.replace(H, $);
            })(ye + '-' + W.id));
        }
        applyToHost(U) {
          super.setAttribute(U, this.hostAttr, '');
        }
        createElement(U, S) {
          const W = super.createElement(U, S);
          return super.setAttribute(W, this.contentAttr, ''), W;
        }
      }
      class ee extends ne {
        constructor(U, S, W, ye) {
          super(U),
            (this.sharedStylesHost = S),
            (this.hostEl = W),
            (this.shadowRoot = W.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const nt = Te(ye.id, ye.styles, []);
          for (let st = 0; st < nt.length; st++) {
            const Tt = document.createElement('style');
            (Tt.textContent = nt[st]), this.shadowRoot.appendChild(Tt);
          }
        }
        nodeOrShadowRoot(U) {
          return U === this.hostEl ? this.shadowRoot : U;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(U, S) {
          return super.appendChild(this.nodeOrShadowRoot(U), S);
        }
        insertBefore(U, S, W) {
          return super.insertBefore(this.nodeOrShadowRoot(U), S, W);
        }
        removeChild(U, S) {
          return super.removeChild(this.nodeOrShadowRoot(U), S);
        }
        parentNode(U) {
          return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(U)));
        }
      }
      let q = (() => {
        class $ extends R {
          constructor(S) {
            super(S);
          }
          supports(S) {
            return !0;
          }
          addEventListener(S, W, ye) {
            return S.addEventListener(W, ye, !1), () => this.removeEventListener(S, W, ye);
          }
          removeEventListener(S, W, ye) {
            return S.removeEventListener(W, ye);
          }
        }
        return (
          ($.ɵfac = function (S) {
            return new (S || $)(i.LFG(a.K0));
          }),
          ($.ɵprov = i.Yz7({ token: $, factory: $.ɵfac })),
          $
        );
      })();
      const fe = ['alt', 'control', 'meta', 'shift'],
        De = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS'
        },
        pe = { alt: ($) => $.altKey, control: ($) => $.ctrlKey, meta: ($) => $.metaKey, shift: ($) => $.shiftKey };
      let Je = (() => {
        class $ extends R {
          constructor(S) {
            super(S);
          }
          supports(S) {
            return null != $.parseEventName(S);
          }
          addEventListener(S, W, ye) {
            const nt = $.parseEventName(W),
              st = $.eventCallback(nt.fullKey, ye, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular(() => (0, a.q)().onAndCancel(S, nt.domEventName, st));
          }
          static parseEventName(S) {
            const W = S.toLowerCase().split('.'),
              ye = W.shift();
            if (0 === W.length || ('keydown' !== ye && 'keyup' !== ye)) return null;
            const nt = $._normalizeKey(W.pop());
            let st = '',
              Tt = W.indexOf('code');
            if (
              (Tt > -1 && (W.splice(Tt, 1), (st = 'code.')),
              fe.forEach((Wn) => {
                const dn = W.indexOf(Wn);
                dn > -1 && (W.splice(dn, 1), (st += Wn + '.'));
              }),
              (st += nt),
              0 != W.length || 0 === nt.length)
            )
              return null;
            const dt = {};
            return (dt.domEventName = ye), (dt.fullKey = st), dt;
          }
          static matchEventFullKeyCode(S, W) {
            let ye = De[S.key] || S.key,
              nt = '';
            return (
              W.indexOf('code.') > -1 && ((ye = S.code), (nt = 'code.')),
              !(null == ye || !ye) &&
                ((ye = ye.toLowerCase()),
                ' ' === ye ? (ye = 'space') : '.' === ye && (ye = 'dot'),
                fe.forEach((st) => {
                  st !== ye && (0, pe[st])(S) && (nt += st + '.');
                }),
                (nt += ye),
                nt === W)
            );
          }
          static eventCallback(S, W, ye) {
            return (nt) => {
              $.matchEventFullKeyCode(nt, S) && ye.runGuarded(() => W(nt));
            };
          }
          static _normalizeKey(S) {
            return 'esc' === S ? 'escape' : S;
          }
        }
        return (
          ($.ɵfac = function (S) {
            return new (S || $)(i.LFG(a.K0));
          }),
          ($.ɵprov = i.Yz7({ token: $, factory: $.ɵfac })),
          $
        );
      })();
      const Nt = (0, i.eFA)(i._c5, 'browser', [
          { provide: i.Lbi, useValue: a.bD },
          {
            provide: i.g9A,
            useValue: function xt() {
              Z.makeCurrent();
            },
            multi: !0
          },
          {
            provide: a.K0,
            useFactory: function Jt() {
              return (0, i.RDi)(document), document;
            },
            deps: []
          }
        ]),
        un = new i.OlP(''),
        Bt = [
          {
            provide: i.rWj,
            useClass: class ge {
              addToWindow(U) {
                (i.dqk.getAngularTestability = (W, ye = !0) => {
                  const nt = U.findTestabilityInTree(W, ye);
                  if (null == nt) throw new Error('Could not find testability for element.');
                  return nt;
                }),
                  (i.dqk.getAllAngularTestabilities = () => U.getAllTestabilities()),
                  (i.dqk.getAllAngularRootElements = () => U.getAllRootElements()),
                  i.dqk.frameworkStabilizers || (i.dqk.frameworkStabilizers = []),
                  i.dqk.frameworkStabilizers.push((W) => {
                    const ye = i.dqk.getAllAngularTestabilities();
                    let nt = ye.length,
                      st = !1;
                    const Tt = function (dt) {
                      (st = st || dt), nt--, 0 == nt && W(st);
                    };
                    ye.forEach(function (dt) {
                      dt.whenStable(Tt);
                    });
                  });
              }
              findTestabilityInTree(U, S, W) {
                if (null == S) return null;
                const ye = U.getTestability(S);
                return null != ye
                  ? ye
                  : W
                  ? (0, a.q)().isShadowRoot(S)
                    ? this.findTestabilityInTree(U, S.host, !0)
                    : this.findTestabilityInTree(U, S.parentElement, !0)
                  : null;
              }
            },
            deps: []
          },
          { provide: i.lri, useClass: i.dDg, deps: [i.R0b, i.eoX, i.rWj] },
          { provide: i.dDg, useClass: i.dDg, deps: [i.R0b, i.eoX, i.rWj] }
        ],
        Cn = [
          { provide: i.zSh, useValue: 'root' },
          {
            provide: i.qLn,
            useFactory: function Ut() {
              return new i.qLn();
            },
            deps: []
          },
          { provide: de, useClass: q, multi: !0, deps: [a.K0, i.R0b, i.Lbi] },
          { provide: de, useClass: Je, multi: !0, deps: [a.K0] },
          { provide: X, useClass: X, deps: [ce, ie, i.AFp] },
          { provide: i.FYo, useExisting: X },
          { provide: B, useExisting: ie },
          { provide: ie, useClass: ie, deps: [a.K0] },
          { provide: ce, useClass: ce, deps: [de, i.R0b] },
          { provide: a.JF, useClass: Ne, deps: [] },
          []
        ];
      let Dn = (() => {
          class $ {
            constructor(S) {}
            static withServerTransition(S) {
              return {
                ngModule: $,
                providers: [{ provide: i.AFp, useValue: S.appId }, { provide: ve, useExisting: i.AFp }, le]
              };
            }
          }
          return (
            ($.ɵfac = function (S) {
              return new (S || $)(i.LFG(un, 12));
            }),
            ($.ɵmod = i.oAB({ type: $ })),
            ($.ɵinj = i.cJS({ providers: [...Cn, ...Bt], imports: [a.ez, i.hGG] })),
            $
          );
        })(),
        qt = (() => {
          class $ {
            constructor(S) {
              this._doc = S;
            }
            getTitle() {
              return this._doc.title;
            }
            setTitle(S) {
              this._doc.title = S || '';
            }
          }
          return (
            ($.ɵfac = function (S) {
              return new (S || $)(i.LFG(a.K0));
            }),
            ($.ɵprov = i.Yz7({
              token: $,
              factory: function (S) {
                let W = null;
                return (
                  (W = S
                    ? new S()
                    : (function er() {
                        return new qt((0, i.LFG)(a.K0));
                      })()),
                  W
                );
              },
              providedIn: 'root'
            })),
            $
          );
        })();
      'undefined' != typeof window && window;
      let nr = (() => {
          class $ {}
          return (
            ($.ɵfac = function (S) {
              return new (S || $)();
            }),
            ($.ɵprov = i.Yz7({
              token: $,
              factory: function (S) {
                let W = null;
                return (W = S ? new (S || $)() : i.LFG(_t)), W;
              },
              providedIn: 'root'
            })),
            $
          );
        })(),
        _t = (() => {
          class $ extends nr {
            constructor(S) {
              super(), (this._doc = S);
            }
            sanitize(S, W) {
              if (null == W) return null;
              switch (S) {
                case i.q3G.NONE:
                  return W;
                case i.q3G.HTML:
                  return (0, i.qzn)(W, 'HTML') ? (0, i.z3N)(W) : (0, i.EiD)(this._doc, String(W)).toString();
                case i.q3G.STYLE:
                  return (0, i.qzn)(W, 'Style') ? (0, i.z3N)(W) : W;
                case i.q3G.SCRIPT:
                  if ((0, i.qzn)(W, 'Script')) return (0, i.z3N)(W);
                  throw new Error('unsafe value used in a script context');
                case i.q3G.URL:
                  return (0, i.qzn)(W, 'URL') ? (0, i.z3N)(W) : (0, i.mCW)(String(W));
                case i.q3G.RESOURCE_URL:
                  if ((0, i.qzn)(W, 'ResourceURL')) return (0, i.z3N)(W);
                  throw new Error('unsafe value used in a resource URL context (see https://g.co/ng/security#xss)');
                default:
                  throw new Error(`Unexpected SecurityContext ${S} (see https://g.co/ng/security#xss)`);
              }
            }
            bypassSecurityTrustHtml(S) {
              return (0, i.JVY)(S);
            }
            bypassSecurityTrustStyle(S) {
              return (0, i.L6k)(S);
            }
            bypassSecurityTrustScript(S) {
              return (0, i.eBb)(S);
            }
            bypassSecurityTrustUrl(S) {
              return (0, i.LAX)(S);
            }
            bypassSecurityTrustResourceUrl(S) {
              return (0, i.pB0)(S);
            }
          }
          return (
            ($.ɵfac = function (S) {
              return new (S || $)(i.LFG(a.K0));
            }),
            ($.ɵprov = i.Yz7({
              token: $,
              factory: function (S) {
                let W = null;
                return (
                  (W = S
                    ? new S()
                    : (function Vn($) {
                        return new _t($.get(a.K0));
                      })(i.LFG(i.zs3))),
                  W
                );
              },
              providedIn: 'root'
            })),
            $
          );
        })();
    },
    2526: (Ge, he, w) => {
      'use strict';
      w.d(he, { m2: () => Yn, F0: () => pn, Od: () => Bs, yS: () => bi, Bz: () => Hs, lC: () => eo });
      var a = w(4893),
        i = w(2076),
        L = w(9646),
        Z = w(1135);
      const se = (0, w(3888).d)(
        (u) =>
          function () {
            u(this), (this.name = 'EmptyError'), (this.message = 'no elements in sequence');
          }
      );
      var Y = w(9841),
        xe = w(7272),
        ve = w(9751),
        ae = w(8421);
      function le(u) {
        return new ve.y((d) => {
          (0, ae.Xf)(u()).subscribe(d);
        });
      }
      var ge = w(9635),
        Ne = w(576);
      function de(u, d) {
        const c = (0, Ne.m)(u) ? u : () => u,
          h = (y) => y.error(c());
        return new ve.y(d ? (y) => d.schedule(h, 0, y) : h);
      }
      var ce = w(515),
        R = w(727),
        B = w(4482),
        ie = w(5403);
      function K() {
        return (0, B.e)((u, d) => {
          let c = null;
          u._refCount++;
          const h = (0, ie.x)(d, void 0, void 0, void 0, () => {
            if (!u || u._refCount <= 0 || 0 < --u._refCount) return void (c = null);
            const y = u._connection,
              E = c;
            (c = null), y && (!E || y === E) && y.unsubscribe(), d.unsubscribe();
          });
          u.subscribe(h), h.closed || (c = u.connect());
        });
      }
      class be extends ve.y {
        constructor(d, c) {
          super(),
            (this.source = d),
            (this.subjectFactory = c),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            (0, B.A)(d) && (this.lift = d.lift);
        }
        _subscribe(d) {
          return this.getSubject().subscribe(d);
        }
        getSubject() {
          const d = this._subject;
          return (!d || d.isStopped) && (this._subject = this.subjectFactory()), this._subject;
        }
        _teardown() {
          this._refCount = 0;
          const { _connection: d } = this;
          (this._subject = this._connection = null), null == d || d.unsubscribe();
        }
        connect() {
          let d = this._connection;
          if (!d) {
            d = this._connection = new R.w0();
            const c = this.getSubject();
            d.add(
              this.source.subscribe(
                (0, ie.x)(
                  c,
                  void 0,
                  () => {
                    this._teardown(), c.complete();
                  },
                  (h) => {
                    this._teardown(), c.error(h);
                  },
                  () => this._teardown()
                )
              )
            ),
              d.closed && ((this._connection = null), (d = R.w0.EMPTY));
          }
          return d;
        }
        refCount() {
          return K()(this);
        }
      }
      var H = w(7579),
        J = w(9808),
        te = w(4004),
        Ue = w(3900),
        Ae = w(5698),
        Oe = w(8675),
        re = w(9300),
        Te = w(5577);
      function j(u) {
        return (0, B.e)((d, c) => {
          let h = !1;
          d.subscribe(
            (0, ie.x)(
              c,
              (y) => {
                (h = !0), c.next(y);
              },
              () => {
                h || c.next(u), c.complete();
              }
            )
          );
        });
      }
      function Fe(u = X) {
        return (0, B.e)((d, c) => {
          let h = !1;
          d.subscribe(
            (0, ie.x)(
              c,
              (y) => {
                (h = !0), c.next(y);
              },
              () => (h ? c.complete() : c.error(u()))
            )
          );
        });
      }
      function X() {
        return new se();
      }
      var ne = w(4671);
      function Re(u, d) {
        const c = arguments.length >= 2;
        return (h) => h.pipe(u ? (0, re.h)((y, E) => u(y, E, h)) : ne.y, (0, Ae.q)(1), c ? j(d) : Fe(() => new se()));
      }
      function Ce(u, d) {
        return (0, Ne.m)(d) ? (0, Te.z)(u, d, 1) : (0, Te.z)(u, 1);
      }
      var Ze = w(8505);
      function G(u) {
        return (0, B.e)((d, c) => {
          let E,
            h = null,
            y = !1;
          (h = d.subscribe(
            (0, ie.x)(c, void 0, void 0, (O) => {
              (E = (0, ae.Xf)(u(O, G(u)(d)))), h ? (h.unsubscribe(), (h = null), E.subscribe(c)) : (y = !0);
            })
          )),
            y && (h.unsubscribe(), (h = null), E.subscribe(c));
        });
      }
      function ee(u, d, c, h, y) {
        return (E, O) => {
          let N = c,
            z = d,
            Pe = 0;
          E.subscribe(
            (0, ie.x)(
              O,
              (We) => {
                const Be = Pe++;
                (z = N ? u(z, We, Be) : ((N = !0), We)), h && O.next(z);
              },
              y &&
                (() => {
                  N && O.next(z), O.complete();
                })
            )
          );
        };
      }
      function q(u, d) {
        return (0, B.e)(ee(u, d, arguments.length >= 2, !0));
      }
      function fe(u) {
        return u <= 0
          ? () => ce.E
          : (0, B.e)((d, c) => {
              let h = [];
              d.subscribe(
                (0, ie.x)(
                  c,
                  (y) => {
                    h.push(y), u < h.length && h.shift();
                  },
                  () => {
                    for (const y of h) c.next(y);
                    c.complete();
                  },
                  void 0,
                  () => {
                    h = null;
                  }
                )
              );
            });
      }
      function De(u, d) {
        const c = arguments.length >= 2;
        return (h) => h.pipe(u ? (0, re.h)((y, E) => u(y, E, h)) : ne.y, fe(1), c ? j(d) : Fe(() => new se()));
      }
      var Je = w(9718);
      function et(u) {
        return (0, B.e)((d, c) => {
          try {
            d.subscribe(c);
          } finally {
            c.add(u);
          }
        });
      }
      var Ot = w(8189),
        je = w(2313);
      const He = 'primary',
        Ct = Symbol('RouteTitle');
      class xt {
        constructor(d) {
          this.params = d || {};
        }
        has(d) {
          return Object.prototype.hasOwnProperty.call(this.params, d);
        }
        get(d) {
          if (this.has(d)) {
            const c = this.params[d];
            return Array.isArray(c) ? c[0] : c;
          }
          return null;
        }
        getAll(d) {
          if (this.has(d)) {
            const c = this.params[d];
            return Array.isArray(c) ? c : [c];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function Ut(u) {
        return new xt(u);
      }
      function Jt(u, d, c) {
        const h = c.path.split('/');
        if (h.length > u.length || ('full' === c.pathMatch && (d.hasChildren() || h.length < u.length))) return null;
        const y = {};
        for (let E = 0; E < h.length; E++) {
          const O = h[E],
            N = u[E];
          if (O.startsWith(':')) y[O.substring(1)] = N;
          else if (O !== N.path) return null;
        }
        return { consumed: u.slice(0, h.length), posParams: y };
      }
      function Nt(u, d) {
        const c = u ? Object.keys(u) : void 0,
          h = d ? Object.keys(d) : void 0;
        if (!c || !h || c.length != h.length) return !1;
        let y;
        for (let E = 0; E < c.length; E++) if (((y = c[E]), !un(u[y], d[y]))) return !1;
        return !0;
      }
      function un(u, d) {
        if (Array.isArray(u) && Array.isArray(d)) {
          if (u.length !== d.length) return !1;
          const c = [...u].sort(),
            h = [...d].sort();
          return c.every((y, E) => h[E] === y);
        }
        return u === d;
      }
      function Bt(u) {
        return Array.prototype.concat.apply([], u);
      }
      function Cn(u) {
        return u.length > 0 ? u[u.length - 1] : null;
      }
      function vt(u, d) {
        for (const c in u) u.hasOwnProperty(c) && d(u[c], c);
      }
      function Qe(u) {
        return (0, a.CqO)(u) ? u : (0, a.QGY)(u) ? (0, i.D)(Promise.resolve(u)) : (0, L.of)(u);
      }
      const qt = {
          exact: function en(u, d, c) {
            if (
              !wn(u.segments, d.segments) ||
              !gt(u.segments, d.segments, c) ||
              u.numberOfChildren !== d.numberOfChildren
            )
              return !1;
            for (const h in d.children) if (!u.children[h] || !en(u.children[h], d.children[h], c)) return !1;
            return !0;
          },
          subset: $t
        },
        St = {
          exact: function tt(u, d) {
            return Nt(u, d);
          },
          subset: function Pn(u, d) {
            return Object.keys(d).length <= Object.keys(u).length && Object.keys(d).every((c) => un(u[c], d[c]));
          },
          ignored: () => !0
        };
      function Xe(u, d, c) {
        return (
          qt[c.paths](u.root, d.root, c.matrixParams) &&
          St[c.queryParams](u.queryParams, d.queryParams) &&
          !('exact' === c.fragment && u.fragment !== d.fragment)
        );
      }
      function $t(u, d, c) {
        return tn(u, d, d.segments, c);
      }
      function tn(u, d, c, h) {
        if (u.segments.length > c.length) {
          const y = u.segments.slice(0, c.length);
          return !(!wn(y, c) || d.hasChildren() || !gt(y, c, h));
        }
        if (u.segments.length === c.length) {
          if (!wn(u.segments, c) || !gt(u.segments, c, h)) return !1;
          for (const y in d.children) if (!u.children[y] || !$t(u.children[y], d.children[y], h)) return !1;
          return !0;
        }
        {
          const y = c.slice(0, u.segments.length),
            E = c.slice(u.segments.length);
          return !!(wn(u.segments, y) && gt(u.segments, y, h) && u.children[He]) && tn(u.children[He], d, E, h);
        }
      }
      function gt(u, d, c) {
        return d.every((h, y) => St[c](u[y].parameters, h.parameters));
      }
      class Tn {
        constructor(d, c, h) {
          (this.root = d), (this.queryParams = c), (this.fragment = h);
        }
        get queryParamMap() {
          return this._queryParamMap || (this._queryParamMap = Ut(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return En.serialize(this);
        }
      }
      class Ye {
        constructor(d, c) {
          (this.segments = d), (this.children = c), (this.parent = null), vt(c, (h, y) => (h.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return xn(this);
        }
      }
      class bn {
        constructor(d, c) {
          (this.path = d), (this.parameters = c);
        }
        get parameterMap() {
          return this._parameterMap || (this._parameterMap = Ut(this.parameters)), this._parameterMap;
        }
        toString() {
          return Ln(this);
        }
      }
      function wn(u, d) {
        return u.length === d.length && u.every((c, h) => c.path === d[h].path);
      }
      let tr = (() => {
        class u {}
        return (
          (u.ɵfac = function (c) {
            return new (c || u)();
          }),
          (u.ɵprov = a.Yz7({
            token: u,
            factory: function () {
              return new Rn();
            },
            providedIn: 'root'
          })),
          u
        );
      })();
      class Rn {
        parse(d) {
          const c = new ye(d);
          return new Tn(c.parseRootSegment(), c.parseQueryParams(), c.parseFragment());
        }
        serialize(d) {
          const c = `/${Mn(d.root, !0)}`,
            h = (function Vn(u) {
              const d = Object.keys(u)
                .map((c) => {
                  const h = u[c];
                  return Array.isArray(h) ? h.map((y) => `${Ie(c)}=${Ie(y)}`).join('&') : `${Ie(c)}=${Ie(h)}`;
                })
                .filter((c) => !!c);
              return d.length ? `?${d.join('&')}` : '';
            })(d.queryParams);
          return `${c}${h}${
            'string' == typeof d.fragment
              ? `#${(function I(u) {
                  return encodeURI(u);
                })(d.fragment)}`
              : ''
          }`;
        }
      }
      const En = new Rn();
      function xn(u) {
        return u.segments.map((d) => Ln(d)).join('/');
      }
      function Mn(u, d) {
        if (!u.hasChildren()) return xn(u);
        if (d) {
          const c = u.children[He] ? Mn(u.children[He], !1) : '',
            h = [];
          return (
            vt(u.children, (y, E) => {
              E !== He && h.push(`${E}:${Mn(y, !1)}`);
            }),
            h.length > 0 ? `${c}(${h.join('//')})` : c
          );
        }
        {
          const c = (function kn(u, d) {
            let c = [];
            return (
              vt(u.children, (h, y) => {
                y === He && (c = c.concat(d(h, y)));
              }),
              vt(u.children, (h, y) => {
                y !== He && (c = c.concat(d(h, y)));
              }),
              c
            );
          })(u, (h, y) => (y === He ? [Mn(u.children[He], !1)] : [`${y}:${Mn(h, !1)}`]));
          return 1 === Object.keys(u.children).length && null != u.children[He]
            ? `${xn(u)}/${c[0]}`
            : `${xn(u)}/(${c.join('//')})`;
        }
      }
      function k(u) {
        return encodeURIComponent(u)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function Ie(u) {
        return k(u).replace(/%3B/gi, ';');
      }
      function Me(u) {
        return k(u).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%26/gi, '&');
      }
      function ke(u) {
        return decodeURIComponent(u);
      }
      function Gt(u) {
        return ke(u.replace(/\+/g, '%20'));
      }
      function Ln(u) {
        return `${Me(u.path)}${(function nr(u) {
          return Object.keys(u)
            .map((d) => `;${Me(d)}=${Me(u[d])}`)
            .join('');
        })(u.parameters)}`;
      }
      const _t = /^[^\/()?;=#]+/;
      function jt(u) {
        const d = u.match(_t);
        return d ? d[0] : '';
      }
      const $ = /^[^=?&#]+/,
        S = /^[^&#]+/;
      class ye {
        constructor(d) {
          (this.url = d), (this.remaining = d);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#')
              ? new Ye([], {})
              : new Ye([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const d = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(d);
            } while (this.consumeOptional('&'));
          return d;
        }
        parseFragment() {
          return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const d = [];
          for (
            this.peekStartsWith('(') || d.push(this.parseSegment());
            this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(');

          )
            this.capture('/'), d.push(this.parseSegment());
          let c = {};
          this.peekStartsWith('/(') && (this.capture('/'), (c = this.parseParens(!0)));
          let h = {};
          return (
            this.peekStartsWith('(') && (h = this.parseParens(!1)),
            (d.length > 0 || Object.keys(c).length > 0) && (h[He] = new Ye(d, c)),
            h
          );
        }
        parseSegment() {
          const d = jt(this.remaining);
          if ('' === d && this.peekStartsWith(';')) throw new a.vHH(4009, !1);
          return this.capture(d), new bn(ke(d), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const d = {};
          for (; this.consumeOptional(';'); ) this.parseParam(d);
          return d;
        }
        parseParam(d) {
          const c = jt(this.remaining);
          if (!c) return;
          this.capture(c);
          let h = '';
          if (this.consumeOptional('=')) {
            const y = jt(this.remaining);
            y && ((h = y), this.capture(h));
          }
          d[ke(c)] = ke(h);
        }
        parseQueryParam(d) {
          const c = (function U(u) {
            const d = u.match($);
            return d ? d[0] : '';
          })(this.remaining);
          if (!c) return;
          this.capture(c);
          let h = '';
          if (this.consumeOptional('=')) {
            const O = (function W(u) {
              const d = u.match(S);
              return d ? d[0] : '';
            })(this.remaining);
            O && ((h = O), this.capture(h));
          }
          const y = Gt(c),
            E = Gt(h);
          if (d.hasOwnProperty(y)) {
            let O = d[y];
            Array.isArray(O) || ((O = [O]), (d[y] = O)), O.push(E);
          } else d[y] = E;
        }
        parseParens(d) {
          const c = {};
          for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
            const h = jt(this.remaining),
              y = this.remaining[h.length];
            if ('/' !== y && ')' !== y && ';' !== y) throw new a.vHH(4010, !1);
            let E;
            h.indexOf(':') > -1
              ? ((E = h.slice(0, h.indexOf(':'))), this.capture(E), this.capture(':'))
              : d && (E = He);
            const O = this.parseChildren();
            (c[E] = 1 === Object.keys(O).length ? O[He] : new Ye([], O)), this.consumeOptional('//');
          }
          return c;
        }
        peekStartsWith(d) {
          return this.remaining.startsWith(d);
        }
        consumeOptional(d) {
          return !!this.peekStartsWith(d) && ((this.remaining = this.remaining.substring(d.length)), !0);
        }
        capture(d) {
          if (!this.consumeOptional(d)) throw new a.vHH(4011, !1);
        }
      }
      function nt(u) {
        return u.segments.length > 0 ? new Ye([], { [He]: u }) : u;
      }
      function st(u) {
        const d = {};
        for (const h of Object.keys(u.children)) {
          const E = st(u.children[h]);
          (E.segments.length > 0 || E.hasChildren()) && (d[h] = E);
        }
        return (function Tt(u) {
          if (1 === u.numberOfChildren && u.children[He]) {
            const d = u.children[He];
            return new Ye(u.segments.concat(d.segments), d.children);
          }
          return u;
        })(new Ye(u.segments, d));
      }
      function dt(u) {
        return u instanceof Tn;
      }
      function kt(u, d, c, h, y) {
        var E;
        if (0 === c.length) return Ft(d.root, d.root, d.root, h, y);
        const N = (function zr(u) {
          if ('string' == typeof u[0] && 1 === u.length && '/' === u[0]) return new Lt(!0, 0, u);
          let d = 0,
            c = !1;
          const h = u.reduce((y, E, O) => {
            if ('object' == typeof E && null != E) {
              if (E.outlets) {
                const N = {};
                return (
                  vt(E.outlets, (z, Pe) => {
                    N[Pe] = 'string' == typeof z ? z.split('/') : z;
                  }),
                  [...y, { outlets: N }]
                );
              }
              if (E.segmentPath) return [...y, E.segmentPath];
            }
            return 'string' != typeof E
              ? [...y, E]
              : 0 === O
              ? (E.split('/').forEach((N, z) => {
                  (0 == z && '.' === N) || (0 == z && '' === N ? (c = !0) : '..' === N ? d++ : '' != N && y.push(N));
                }),
                y)
              : [...y, E];
          }, []);
          return new Lt(c, d, h);
        })(c);
        return N.toRoot()
          ? Ft(d.root, d.root, new Ye([], {}), h, y)
          : (function z(We) {
              var Be;
              const ut = (function ho(u, d, c, h) {
                  if (u.isAbsolute) return new Bn(d.root, !0, 0);
                  if (-1 === h) return new Bn(c, c === d.root, 0);
                  return (function jn(u, d, c) {
                    let h = u,
                      y = d,
                      E = c;
                    for (; E > y; ) {
                      if (((E -= y), (h = h.parent), !h)) throw new a.vHH(4005, !1);
                      y = h.segments.length;
                    }
                    return new Bn(h, !1, y - E);
                  })(c, h + (Xt(u.commands[0]) ? 0 : 1), u.numberOfDoubleDots);
                })(N, d, null === (Be = u.snapshot) || void 0 === Be ? void 0 : Be._urlSegment, We),
                At = ut.processChildren
                  ? Vt(ut.segmentGroup, ut.index, N.commands)
                  : Hn(ut.segmentGroup, ut.index, N.commands);
              return Ft(d.root, ut.segmentGroup, At, h, y);
            })(null === (E = u.snapshot) || void 0 === E ? void 0 : E._lastPathIndex);
      }
      function Xt(u) {
        return 'object' == typeof u && null != u && !u.outlets && !u.segmentPath;
      }
      function fn(u) {
        return 'object' == typeof u && null != u && u.outlets;
      }
      function Ft(u, d, c, h, y) {
        let O,
          E = {};
        h &&
          vt(h, (z, Pe) => {
            E[Pe] = Array.isArray(z) ? z.map((We) => `${We}`) : `${z}`;
          }),
          (O = u === d ? c : Un(u, d, c));
        const N = nt(st(O));
        return new Tn(N, E, y);
      }
      function Un(u, d, c) {
        const h = {};
        return (
          vt(u.children, (y, E) => {
            h[E] = y === d ? c : Un(y, d, c);
          }),
          new Ye(u.segments, h)
        );
      }
      class Lt {
        constructor(d, c, h) {
          if (
            ((this.isAbsolute = d), (this.numberOfDoubleDots = c), (this.commands = h), d && h.length > 0 && Xt(h[0]))
          )
            throw new a.vHH(4003, !1);
          const y = h.find(fn);
          if (y && y !== Cn(h)) throw new a.vHH(4004, !1);
        }
        toRoot() {
          return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
        }
      }
      class Bn {
        constructor(d, c, h) {
          (this.segmentGroup = d), (this.processChildren = c), (this.index = h);
        }
      }
      function Hn(u, d, c) {
        if ((u || (u = new Ye([], {})), 0 === u.segments.length && u.hasChildren())) return Vt(u, d, c);
        const h = (function Cr(u, d, c) {
            let h = 0,
              y = d;
            const E = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; y < u.segments.length; ) {
              if (h >= c.length) return E;
              const O = u.segments[y],
                N = c[h];
              if (fn(N)) break;
              const z = `${N}`,
                Pe = h < c.length - 1 ? c[h + 1] : null;
              if (y > 0 && void 0 === z) break;
              if (z && Pe && 'object' == typeof Pe && void 0 === Pe.outlets) {
                if (!dr(z, Pe, O)) return E;
                h += 2;
              } else {
                if (!dr(z, {}, O)) return E;
                h++;
              }
              y++;
            }
            return { match: !0, pathIndex: y, commandIndex: h };
          })(u, d, c),
          y = c.slice(h.commandIndex);
        if (h.match && h.pathIndex < u.segments.length) {
          const E = new Ye(u.segments.slice(0, h.pathIndex), {});
          return (E.children[He] = new Ye(u.segments.slice(h.pathIndex), u.children)), Vt(E, 0, y);
        }
        return h.match && 0 === y.length
          ? new Ye(u.segments, {})
          : h.match && !u.hasChildren()
          ? ur(u, d, c)
          : h.match
          ? Vt(u, 0, y)
          : ur(u, d, c);
      }
      function Vt(u, d, c) {
        if (0 === c.length) return new Ye(u.segments, {});
        {
          const h = (function qr(u) {
              return fn(u[0]) ? u[0].outlets : { [He]: u };
            })(c),
            y = {};
          return (
            vt(h, (E, O) => {
              'string' == typeof E && (E = [E]), null !== E && (y[O] = Hn(u.children[O], d, E));
            }),
            vt(u.children, (E, O) => {
              void 0 === h[O] && (y[O] = E);
            }),
            new Ye(u.segments, y)
          );
        }
      }
      function ur(u, d, c) {
        const h = u.segments.slice(0, d);
        let y = 0;
        for (; y < c.length; ) {
          const E = c[y];
          if (fn(E)) {
            const z = An(E.outlets);
            return new Ye(h, z);
          }
          if (0 === y && Xt(c[0])) {
            h.push(new bn(u.segments[d].path, In(c[0]))), y++;
            continue;
          }
          const O = fn(E) ? E.outlets[He] : `${E}`,
            N = y < c.length - 1 ? c[y + 1] : null;
          O && N && Xt(N) ? (h.push(new bn(O, In(N))), (y += 2)) : (h.push(new bn(O, {})), y++);
        }
        return new Ye(h, {});
      }
      function An(u) {
        const d = {};
        return (
          vt(u, (c, h) => {
            'string' == typeof c && (c = [c]), null !== c && (d[h] = ur(new Ye([], {}), 0, c));
          }),
          d
        );
      }
      function In(u) {
        const d = {};
        return vt(u, (c, h) => (d[h] = `${c}`)), d;
      }
      function dr(u, d, c) {
        return u == c.path && Nt(d, c.parameters);
      }
      class ht {
        constructor(d, c) {
          (this.id = d), (this.url = c);
        }
      }
      class Dr extends ht {
        constructor(d, c, h = 'imperative', y = null) {
          super(d, c), (this.type = 0), (this.navigationTrigger = h), (this.restoredState = y);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Yn extends ht {
        constructor(d, c, h) {
          super(d, c), (this.urlAfterRedirects = h), (this.type = 1);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class nn extends ht {
        constructor(d, c, h, y) {
          super(d, c), (this.reason = h), (this.code = y), (this.type = 2);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class On extends ht {
        constructor(d, c, h, y) {
          super(d, c), (this.error = h), (this.target = y), (this.type = 3);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class Nr extends ht {
        constructor(d, c, h, y) {
          super(d, c), (this.urlAfterRedirects = h), (this.state = y), (this.type = 4);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class po extends ht {
        constructor(d, c, h, y) {
          super(d, c), (this.urlAfterRedirects = h), (this.state = y), (this.type = 7);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Wr extends ht {
        constructor(d, c, h, y, E) {
          super(d, c), (this.urlAfterRedirects = h), (this.state = y), (this.shouldActivate = E), (this.type = 8);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class Sn extends ht {
        constructor(d, c, h, y) {
          super(d, c), (this.urlAfterRedirects = h), (this.state = y), (this.type = 5);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Es extends ht {
        constructor(d, c, h, y) {
          super(d, c), (this.urlAfterRedirects = h), (this.state = y), (this.type = 6);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class $n {
        constructor(d) {
          (this.route = d), (this.type = 9);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class Ro {
        constructor(d) {
          (this.route = d), (this.type = 10);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class ti {
        constructor(d) {
          (this.snapshot = d), (this.type = 11);
        }
        toString() {
          return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class ni {
        constructor(d) {
          (this.snapshot = d), (this.type = 12);
        }
        toString() {
          return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class Lo {
        constructor(d) {
          (this.snapshot = d), (this.type = 13);
        }
        toString() {
          return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class ri {
        constructor(d) {
          (this.snapshot = d), (this.type = 14);
        }
        toString() {
          return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class oi {
        constructor(d, c, h) {
          (this.routerEvent = d), (this.position = c), (this.anchor = h), (this.type = 15);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      class Vo {
        constructor(d) {
          this._root = d;
        }
        get root() {
          return this._root.value;
        }
        parent(d) {
          const c = this.pathFromRoot(d);
          return c.length > 1 ? c[c.length - 2] : null;
        }
        children(d) {
          const c = si(d, this._root);
          return c ? c.children.map((h) => h.value) : [];
        }
        firstChild(d) {
          const c = si(d, this._root);
          return c && c.children.length > 0 ? c.children[0].value : null;
        }
        siblings(d) {
          const c = go(d, this._root);
          return c.length < 2 ? [] : c[c.length - 2].children.map((y) => y.value).filter((y) => y !== d);
        }
        pathFromRoot(d) {
          return go(d, this._root).map((c) => c.value);
        }
      }
      function si(u, d) {
        if (u === d.value) return d;
        for (const c of d.children) {
          const h = si(u, c);
          if (h) return h;
        }
        return null;
      }
      function go(u, d) {
        if (u === d.value) return [d];
        for (const c of d.children) {
          const h = go(u, c);
          if (h.length) return h.unshift(d), h;
        }
        return [];
      }
      class rr {
        constructor(d, c) {
          (this.value = d), (this.children = c);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function br(u) {
        const d = {};
        return u && u.children.forEach((c) => (d[c.value.outlet] = c)), d;
      }
      class ai extends Vo {
        constructor(d, c) {
          super(d), (this.snapshot = c), Jr(this, d);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function Uo(u, d) {
        const c = (function ci(u, d) {
            const O = new Er([], {}, {}, '', {}, He, d, null, u.root, -1, {});
            return new li('', new rr(O, []));
          })(u, d),
          h = new Z.X([new bn('', {})]),
          y = new Z.X({}),
          E = new Z.X({}),
          O = new Z.X({}),
          N = new Z.X(''),
          z = new wr(h, y, O, N, E, He, d, c.root);
        return (z.snapshot = c.root), new ai(new rr(z, []), c);
      }
      class wr {
        constructor(d, c, h, y, E, O, N, z) {
          var Pe, We;
          (this.url = d),
            (this.params = c),
            (this.queryParams = h),
            (this.fragment = y),
            (this.data = E),
            (this.outlet = O),
            (this.component = N),
            (this.title =
              null !==
                (We = null === (Pe = this.data) || void 0 === Pe ? void 0 : Pe.pipe((0, te.U)((Be) => Be[Ct]))) &&
              void 0 !== We
                ? We
                : (0, L.of)(void 0)),
            (this._futureSnapshot = z);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return this._paramMap || (this._paramMap = this.params.pipe((0, te.U)((d) => Ut(d)))), this._paramMap;
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = this.queryParams.pipe((0, te.U)((d) => Ut(d)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
        }
      }
      function Yr(u, d = 'emptyOnly') {
        const c = u.pathFromRoot;
        let h = 0;
        if ('always' !== d)
          for (h = c.length - 1; h >= 1; ) {
            const y = c[h],
              E = c[h - 1];
            if (y.routeConfig && '' === y.routeConfig.path) h--;
            else {
              if (E.component) break;
              h--;
            }
          }
        return (function Qr(u) {
          return u.reduce(
            (d, c) => {
              var h;
              return {
                params: Object.assign(Object.assign({}, d.params), c.params),
                data: Object.assign(Object.assign({}, d.data), c.data),
                resolve: Object.assign(
                  Object.assign(
                    Object.assign(Object.assign({}, c.data), d.resolve),
                    null === (h = c.routeConfig) || void 0 === h ? void 0 : h.data
                  ),
                  c._resolvedData
                )
              };
            },
            { params: {}, data: {}, resolve: {} }
          );
        })(c.slice(h));
      }
      class Er {
        constructor(d, c, h, y, E, O, N, z, Pe, We, Be, ut) {
          var At;
          (this.url = d),
            (this.params = c),
            (this.queryParams = h),
            (this.fragment = y),
            (this.data = E),
            (this.outlet = O),
            (this.component = N),
            (this.title = null === (At = this.data) || void 0 === At ? void 0 : At[Ct]),
            (this.routeConfig = z),
            (this._urlSegment = Pe),
            (this._lastPathIndex = We),
            (this._correctedLastPathIndex = null != ut ? ut : We),
            (this._resolve = Be);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return this._paramMap || (this._paramMap = Ut(this.params)), this._paramMap;
        }
        get queryParamMap() {
          return this._queryParamMap || (this._queryParamMap = Ut(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return `Route(url:'${this.url.map((h) => h.toString()).join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class li extends Vo {
        constructor(d, c) {
          super(c), (this.url = d), Jr(this, c);
        }
        toString() {
          return Gn(this._root);
        }
      }
      function Jr(u, d) {
        (d.value._routerState = u), d.children.forEach((c) => Jr(u, c));
      }
      function Gn(u) {
        const d = u.children.length > 0 ? ` { ${u.children.map(Gn).join(', ')} } ` : '';
        return `${u.value}${d}`;
      }
      function fr(u) {
        if (u.snapshot) {
          const d = u.snapshot,
            c = u._futureSnapshot;
          (u.snapshot = c),
            Nt(d.queryParams, c.queryParams) || u.queryParams.next(c.queryParams),
            d.fragment !== c.fragment && u.fragment.next(c.fragment),
            Nt(d.params, c.params) || u.params.next(c.params),
            (function Kt(u, d) {
              if (u.length !== d.length) return !1;
              for (let c = 0; c < u.length; ++c) if (!Nt(u[c], d[c])) return !1;
              return !0;
            })(d.url, c.url) || u.url.next(c.url),
            Nt(d.data, c.data) || u.data.next(c.data);
        } else (u.snapshot = u._futureSnapshot), u.data.next(u._futureSnapshot.data);
      }
      function xr(u, d) {
        const c =
          Nt(u.params, d.params) &&
          (function Ke(u, d) {
            return wn(u, d) && u.every((c, h) => Nt(c.parameters, d[h].parameters));
          })(u.url, d.url);
        return c && !(!u.parent != !d.parent) && (!u.parent || xr(u.parent, d.parent));
      }
      function Mr(u, d, c) {
        if (c && u.shouldReuseRoute(d.value, c.value.snapshot)) {
          const h = c.value;
          h._futureSnapshot = d.value;
          const y = (function Bo(u, d, c) {
            return d.children.map((h) => {
              for (const y of c.children) if (u.shouldReuseRoute(h.value, y.value.snapshot)) return Mr(u, h, y);
              return Mr(u, h);
            });
          })(u, d, c);
          return new rr(h, y);
        }
        {
          if (u.shouldAttach(d.value)) {
            const E = u.retrieve(d.value);
            if (null !== E) {
              const O = E.route;
              return (O.value._futureSnapshot = d.value), (O.children = d.children.map((N) => Mr(u, N))), O;
            }
          }
          const h = (function mo(u) {
              return new wr(
                new Z.X(u.url),
                new Z.X(u.params),
                new Z.X(u.queryParams),
                new Z.X(u.fragment),
                new Z.X(u.data),
                u.outlet,
                u.component,
                u
              );
            })(d.value),
            y = d.children.map((E) => Mr(u, E));
          return new rr(h, y);
        }
      }
      const Kr = 'ngNavigationCancelingError';
      function Xr(u, d) {
        const { redirectTo: c, navigationBehaviorOptions: h } = dt(d)
            ? { redirectTo: d, navigationBehaviorOptions: void 0 }
            : d,
          y = Fr(!1, 0, d);
        return (y.url = c), (y.navigationBehaviorOptions = h), y;
      }
      function Fr(u, d, c) {
        const h = new Error('NavigationCancelingError: ' + (u || ''));
        return (h[Kr] = !0), (h.cancellationCode = d), c && (h.url = c), h;
      }
      function di(u) {
        return mn(u) && dt(u.url);
      }
      function mn(u) {
        return u && u[Kr];
      }
      class jo {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.injector = null),
            (this.children = new _o()),
            (this.attachRef = null);
        }
      }
      let _o = (() => {
        class u {
          constructor() {
            this.contexts = new Map();
          }
          onChildOutletCreated(c, h) {
            const y = this.getOrCreateContext(c);
            (y.outlet = h), this.contexts.set(c, y);
          }
          onChildOutletDestroyed(c) {
            const h = this.getContext(c);
            h && ((h.outlet = null), (h.attachRef = null));
          }
          onOutletDeactivated() {
            const c = this.contexts;
            return (this.contexts = new Map()), c;
          }
          onOutletReAttached(c) {
            this.contexts = c;
          }
          getOrCreateContext(c) {
            let h = this.getContext(c);
            return h || ((h = new jo()), this.contexts.set(c, h)), h;
          }
          getContext(c) {
            return this.contexts.get(c) || null;
          }
        }
        return (
          (u.ɵfac = function (c) {
            return new (c || u)();
          }),
          (u.ɵprov = a.Yz7({ token: u, factory: u.ɵfac, providedIn: 'root' })),
          u
        );
      })();
      const or = !1;
      let eo = (() => {
        class u {
          constructor(c, h, y, E, O) {
            (this.parentContexts = c),
              (this.location = h),
              (this.changeDetector = E),
              (this.environmentInjector = O),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new a.vpe()),
              (this.deactivateEvents = new a.vpe()),
              (this.attachEvents = new a.vpe()),
              (this.detachEvents = new a.vpe()),
              (this.name = y || He),
              c.onChildOutletCreated(this.name, this);
          }
          ngOnDestroy() {
            var c;
            (null === (c = this.parentContexts.getContext(this.name)) || void 0 === c ? void 0 : c.outlet) === this &&
              this.parentContexts.onChildOutletDestroyed(this.name);
          }
          ngOnInit() {
            if (!this.activated) {
              const c = this.parentContexts.getContext(this.name);
              c &&
                c.route &&
                (c.attachRef ? this.attach(c.attachRef, c.route) : this.activateWith(c.route, c.injector));
            }
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new a.vHH(4012, or);
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new a.vHH(4012, or);
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
          }
          detach() {
            if (!this.activated) throw new a.vHH(4012, or);
            this.location.detach();
            const c = this.activated;
            return (this.activated = null), (this._activatedRoute = null), this.detachEvents.emit(c.instance), c;
          }
          attach(c, h) {
            (this.activated = c),
              (this._activatedRoute = h),
              this.location.insert(c.hostView),
              this.attachEvents.emit(c.instance);
          }
          deactivate() {
            if (this.activated) {
              const c = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(c);
            }
          }
          activateWith(c, h) {
            if (this.isActivated) throw new a.vHH(4013, or);
            this._activatedRoute = c;
            const y = this.location,
              O = c._futureSnapshot.component,
              N = this.parentContexts.getOrCreateContext(this.name).children,
              z = new Ho(c, N, y.injector);
            if (
              h &&
              (function Ht(u) {
                return !!u.resolveComponentFactory;
              })(h)
            ) {
              const Pe = h.resolveComponentFactory(O);
              this.activated = y.createComponent(Pe, y.length, z);
            } else
              this.activated = y.createComponent(O, {
                index: y.length,
                injector: z,
                environmentInjector: null != h ? h : this.environmentInjector
              });
            this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (u.ɵfac = function (c) {
            return new (c || u)(a.Y36(_o), a.Y36(a.s_b), a.$8M('name'), a.Y36(a.sBO), a.Y36(a.lqb));
          }),
          (u.ɵdir = a.lG2({
            type: u,
            selectors: [['router-outlet']],
            outputs: {
              activateEvents: 'activate',
              deactivateEvents: 'deactivate',
              attachEvents: 'attach',
              detachEvents: 'detach'
            },
            exportAs: ['outlet'],
            standalone: !0
          })),
          u
        );
      })();
      class Ho {
        constructor(d, c, h) {
          (this.route = d), (this.childContexts = c), (this.parent = h);
        }
        get(d, c) {
          return d === wr ? this.route : d === _o ? this.childContexts : this.parent.get(d, c);
        }
      }
      let ir = (() => {
        class u {}
        return (
          (u.ɵfac = function (c) {
            return new (c || u)();
          }),
          (u.ɵcmp = a.Xpm({
            type: u,
            selectors: [['ng-component']],
            standalone: !0,
            features: [a.jDz],
            decls: 1,
            vars: 0,
            template: function (c, h) {
              1 & c && a._UZ(0, 'router-outlet');
            },
            dependencies: [eo],
            encapsulation: 2
          })),
          u
        );
      })();
      function fi(u, d) {
        var c;
        return (
          u.providers && !u._injector && (u._injector = (0, a.MMx)(u.providers, d, `Route: ${u.path}`)),
          null !== (c = u._injector) && void 0 !== c ? c : d
        );
      }
      function hr(u) {
        const d = u.children && u.children.map(hr),
          c = d ? Object.assign(Object.assign({}, u), { children: d }) : Object.assign({}, u);
        return (
          !c.component &&
            !c.loadComponent &&
            (d || c.loadChildren) &&
            c.outlet &&
            c.outlet !== He &&
            (c.component = ir),
          c
        );
      }
      function Zt(u) {
        return u.outlet || He;
      }
      function no(u, d) {
        const c = u.filter((h) => Zt(h) === d);
        return c.push(...u.filter((h) => Zt(h) !== d)), c;
      }
      function Ar(u) {
        var d;
        if (!u) return null;
        if (null !== (d = u.routeConfig) && void 0 !== d && d._injector) return u.routeConfig._injector;
        for (let c = u.parent; c; c = c.parent) {
          const h = c.routeConfig;
          if (null != h && h._loadedInjector) return h._loadedInjector;
          if (null != h && h._injector) return h._injector;
        }
        return null;
      }
      class Go {
        constructor(d, c, h, y) {
          (this.routeReuseStrategy = d), (this.futureState = c), (this.currState = h), (this.forwardEvent = y);
        }
        activate(d) {
          const c = this.futureState._root,
            h = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(c, h, d), fr(this.futureState.root), this.activateChildRoutes(c, h, d);
        }
        deactivateChildRoutes(d, c, h) {
          const y = br(c);
          d.children.forEach((E) => {
            const O = E.value.outlet;
            this.deactivateRoutes(E, y[O], h), delete y[O];
          }),
            vt(y, (E, O) => {
              this.deactivateRouteAndItsChildren(E, h);
            });
        }
        deactivateRoutes(d, c, h) {
          const y = d.value,
            E = c ? c.value : null;
          if (y === E)
            if (y.component) {
              const O = h.getContext(y.outlet);
              O && this.deactivateChildRoutes(d, c, O.children);
            } else this.deactivateChildRoutes(d, c, h);
          else E && this.deactivateRouteAndItsChildren(c, h);
        }
        deactivateRouteAndItsChildren(d, c) {
          d.value.component && this.routeReuseStrategy.shouldDetach(d.value.snapshot)
            ? this.detachAndStoreRouteSubtree(d, c)
            : this.deactivateRouteAndOutlet(d, c);
        }
        detachAndStoreRouteSubtree(d, c) {
          const h = c.getContext(d.value.outlet),
            y = h && d.value.component ? h.children : c,
            E = br(d);
          for (const O of Object.keys(E)) this.deactivateRouteAndItsChildren(E[O], y);
          if (h && h.outlet) {
            const O = h.outlet.detach(),
              N = h.children.onOutletDeactivated();
            this.routeReuseStrategy.store(d.value.snapshot, { componentRef: O, route: d, contexts: N });
          }
        }
        deactivateRouteAndOutlet(d, c) {
          const h = c.getContext(d.value.outlet),
            y = h && d.value.component ? h.children : c,
            E = br(d);
          for (const O of Object.keys(E)) this.deactivateRouteAndItsChildren(E[O], y);
          h &&
            h.outlet &&
            (h.outlet.deactivate(),
            h.children.onOutletDeactivated(),
            (h.attachRef = null),
            (h.resolver = null),
            (h.route = null));
        }
        activateChildRoutes(d, c, h) {
          const y = br(c);
          d.children.forEach((E) => {
            this.activateRoutes(E, y[E.value.outlet], h), this.forwardEvent(new ri(E.value.snapshot));
          }),
            d.children.length && this.forwardEvent(new ni(d.value.snapshot));
        }
        activateRoutes(d, c, h) {
          var y;
          const E = d.value,
            O = c ? c.value : null;
          if ((fr(E), E === O))
            if (E.component) {
              const N = h.getOrCreateContext(E.outlet);
              this.activateChildRoutes(d, c, N.children);
            } else this.activateChildRoutes(d, c, h);
          else if (E.component) {
            const N = h.getOrCreateContext(E.outlet);
            if (this.routeReuseStrategy.shouldAttach(E.snapshot)) {
              const z = this.routeReuseStrategy.retrieve(E.snapshot);
              this.routeReuseStrategy.store(E.snapshot, null),
                N.children.onOutletReAttached(z.contexts),
                (N.attachRef = z.componentRef),
                (N.route = z.route.value),
                N.outlet && N.outlet.attach(z.componentRef, z.route.value),
                fr(z.route.value),
                this.activateChildRoutes(d, null, N.children);
            } else {
              const z = Ar(E.snapshot),
                Pe = null !== (y = null == z ? void 0 : z.get(a._Vd)) && void 0 !== y ? y : null;
              (N.attachRef = null),
                (N.route = E),
                (N.resolver = Pe),
                (N.injector = z),
                N.outlet && N.outlet.activateWith(E, N.injector),
                this.activateChildRoutes(d, null, N.children);
            }
          } else this.activateChildRoutes(d, null, h);
        }
      }
      class Zo {
        constructor(d) {
          (this.path = d), (this.route = this.path[this.path.length - 1]);
        }
      }
      class yo {
        constructor(d, c) {
          (this.component = d), (this.route = c);
        }
      }
      function xs(u, d, c) {
        const h = u._root;
        return kr(h, d ? d._root : null, c, [h.value]);
      }
      function pr(u, d) {
        const c = Symbol(),
          h = d.get(u, c);
        return h === c ? ('function' != typeof u || (0, a.Z0I)(u) ? d.get(u) : u) : h;
      }
      function kr(u, d, c, h, y = { canDeactivateChecks: [], canActivateChecks: [] }) {
        const E = br(d);
        return (
          u.children.forEach((O) => {
            (function Bi(u, d, c, h, y = { canDeactivateChecks: [], canActivateChecks: [] }) {
              const E = u.value,
                O = d ? d.value : null,
                N = c ? c.getContext(u.value.outlet) : null;
              if (O && E.routeConfig === O.routeConfig) {
                const z = (function we(u, d, c) {
                  if ('function' == typeof c) return c(u, d);
                  switch (c) {
                    case 'pathParamsChange':
                      return !wn(u.url, d.url);
                    case 'pathParamsOrQueryParamsChange':
                      return !wn(u.url, d.url) || !Nt(u.queryParams, d.queryParams);
                    case 'always':
                      return !0;
                    case 'paramsOrQueryParamsChange':
                      return !xr(u, d) || !Nt(u.queryParams, d.queryParams);
                    default:
                      return !xr(u, d);
                  }
                })(O, E, E.routeConfig.runGuardsAndResolvers);
                z ? y.canActivateChecks.push(new Zo(h)) : ((E.data = O.data), (E._resolvedData = O._resolvedData)),
                  kr(u, d, E.component ? (N ? N.children : null) : c, h, y),
                  z &&
                    N &&
                    N.outlet &&
                    N.outlet.isActivated &&
                    y.canDeactivateChecks.push(new yo(N.outlet.component, O));
              } else
                O && pt(d, N, y),
                  y.canActivateChecks.push(new Zo(h)),
                  kr(u, null, E.component ? (N ? N.children : null) : c, h, y);
            })(O, E[O.value.outlet], c, h.concat([O.value]), y),
              delete E[O.value.outlet];
          }),
          vt(E, (O, N) => pt(O, c.getContext(N), y)),
          y
        );
      }
      function pt(u, d, c) {
        const h = br(u),
          y = u.value;
        vt(h, (E, O) => {
          pt(E, y.component ? (d ? d.children.getContext(O) : null) : d, c);
        }),
          c.canDeactivateChecks.push(
            new yo(y.component && d && d.outlet && d.outlet.isActivated ? d.outlet.component : null, y)
          );
      }
      function Rr(u) {
        return 'function' == typeof u;
      }
      function A(u) {
        return u instanceof se || 'EmptyError' === (null == u ? void 0 : u.name);
      }
      const ue = Symbol('INITIAL_VALUE');
      function $e() {
        return (0, Ue.w)((u) =>
          (0, Y.a)(u.map((d) => d.pipe((0, Ae.q)(1), (0, Oe.O)(ue)))).pipe(
            (0, te.U)((d) => {
              for (const c of d)
                if (!0 !== c) {
                  if (c === ue) return ue;
                  if (!1 === c || c instanceof Tn) return c;
                }
              return !0;
            }),
            (0, re.h)((d) => d !== ue),
            (0, Ae.q)(1)
          )
        );
      }
      function gi(u) {
        return (0, ge.z)(
          (0, Ze.b)((d) => {
            if (dt(d)) throw Xr(0, d);
          }),
          (0, te.U)((d) => !0 === d)
        );
      }
      const bo = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {}
      };
      function wo(u, d, c, h, y) {
        const E = $i(u, d, c);
        return E.matched
          ? (function Hi(u, d, c, h) {
              const y = d.canMatch;
              if (!y || 0 === y.length) return (0, L.of)(!0);
              const E = y.map((O) => {
                const N = pr(O, u);
                return Qe(
                  (function C(u) {
                    return u && Rr(u.canMatch);
                  })(N)
                    ? N.canMatch(d, c)
                    : u.runInContext(() => N(d, c))
                );
              });
              return (0, L.of)(E).pipe($e(), gi());
            })((h = fi(d, h)), d, c).pipe((0, te.U)((O) => (!0 === O ? E : Object.assign({}, bo))))
          : (0, L.of)(E);
      }
      function $i(u, d, c) {
        var h;
        if ('' === d.path)
          return 'full' === d.pathMatch && (u.hasChildren() || c.length > 0)
            ? Object.assign({}, bo)
            : { matched: !0, consumedSegments: [], remainingSegments: c, parameters: {}, positionalParamSegments: {} };
        const E = (d.matcher || Jt)(c, u, d);
        if (!E) return Object.assign({}, bo);
        const O = {};
        vt(E.posParams, (z, Pe) => {
          O[Pe] = z.path;
        });
        const N =
          E.consumed.length > 0 ? Object.assign(Object.assign({}, O), E.consumed[E.consumed.length - 1].parameters) : O;
        return {
          matched: !0,
          consumedSegments: E.consumed,
          remainingSegments: c.slice(E.consumed.length),
          parameters: N,
          positionalParamSegments: null !== (h = E.posParams) && void 0 !== h ? h : {}
        };
      }
      function qo(u, d, c, h, y = 'corrected') {
        if (
          c.length > 0 &&
          (function Ms(u, d, c) {
            return c.some((h) => Wo(u, d, h) && Zt(h) !== He);
          })(u, c, h)
        ) {
          const O = new Ye(
            d,
            (function _i(u, d, c, h) {
              const y = {};
              (y[He] = h), (h._sourceSegment = u), (h._segmentIndexShift = d.length);
              for (const E of c)
                if ('' === E.path && Zt(E) !== He) {
                  const O = new Ye([], {});
                  (O._sourceSegment = u), (O._segmentIndexShift = d.length), (y[Zt(E)] = O);
                }
              return y;
            })(u, d, h, new Ye(c, u.children))
          );
          return (O._sourceSegment = u), (O._segmentIndexShift = d.length), { segmentGroup: O, slicedSegments: [] };
        }
        if (
          0 === c.length &&
          (function As(u, d, c) {
            return c.some((h) => Wo(u, d, h));
          })(u, c, h)
        ) {
          const O = new Ye(
            u.segments,
            (function mi(u, d, c, h, y, E) {
              const O = {};
              for (const N of h)
                if (Wo(u, c, N) && !y[Zt(N)]) {
                  const z = new Ye([], {});
                  (z._sourceSegment = u),
                    (z._segmentIndexShift = 'legacy' === E ? u.segments.length : d.length),
                    (O[Zt(N)] = z);
                }
              return Object.assign(Object.assign({}, y), O);
            })(u, d, c, h, u.children, y)
          );
          return (O._sourceSegment = u), (O._segmentIndexShift = d.length), { segmentGroup: O, slicedSegments: c };
        }
        const E = new Ye(u.segments, u.children);
        return (E._sourceSegment = u), (E._segmentIndexShift = d.length), { segmentGroup: E, slicedSegments: c };
      }
      function Wo(u, d, c) {
        return (!(u.hasChildren() || d.length > 0) || 'full' !== c.pathMatch) && '' === c.path;
      }
      function vi(u, d, c, h) {
        return !!(Zt(u) === h || (h !== He && Wo(d, c, u))) && ('**' === u.path || $i(d, u, c).matched);
      }
      function Ts(u, d, c) {
        return 0 === d.length && !u.children[c];
      }
      const yi = !1;
      class an {
        constructor(d) {
          this.segmentGroup = d || null;
        }
      }
      class Tr {
        constructor(d) {
          this.urlTree = d;
        }
      }
      function Rt(u) {
        return de(new an(u));
      }
      function Is(u) {
        return de(new Tr(u));
      }
      class Ns {
        constructor(d, c, h, y, E) {
          (this.injector = d),
            (this.configLoader = c),
            (this.urlSerializer = h),
            (this.urlTree = y),
            (this.config = E),
            (this.allowRedirects = !0);
        }
        apply() {
          const d = qo(this.urlTree.root, [], [], this.config).segmentGroup,
            c = new Ye(d.segments, d.children);
          return this.expandSegmentGroup(this.injector, this.config, c, He)
            .pipe((0, te.U)((E) => this.createUrlTree(st(E), this.urlTree.queryParams, this.urlTree.fragment)))
            .pipe(
              G((E) => {
                if (E instanceof Tr) return (this.allowRedirects = !1), this.match(E.urlTree);
                throw E instanceof an ? this.noMatchError(E) : E;
              })
            );
        }
        match(d) {
          return this.expandSegmentGroup(this.injector, this.config, d.root, He)
            .pipe((0, te.U)((y) => this.createUrlTree(st(y), d.queryParams, d.fragment)))
            .pipe(
              G((y) => {
                throw y instanceof an ? this.noMatchError(y) : y;
              })
            );
        }
        noMatchError(d) {
          return new a.vHH(4002, yi);
        }
        createUrlTree(d, c, h) {
          const y = nt(d);
          return new Tn(y, c, h);
        }
        expandSegmentGroup(d, c, h, y) {
          return 0 === h.segments.length && h.hasChildren()
            ? this.expandChildren(d, c, h).pipe((0, te.U)((E) => new Ye([], E)))
            : this.expandSegment(d, h, c, h.segments, y, !0);
        }
        expandChildren(d, c, h) {
          const y = [];
          for (const E of Object.keys(h.children)) 'primary' === E ? y.unshift(E) : y.push(E);
          return (0, i.D)(y).pipe(
            Ce((E) => {
              const O = h.children[E],
                N = no(c, E);
              return this.expandSegmentGroup(d, N, O, E).pipe((0, te.U)((z) => ({ segment: z, outlet: E })));
            }),
            q((E, O) => ((E[O.outlet] = O.segment), E), {}),
            De()
          );
        }
        expandSegment(d, c, h, y, E, O) {
          return (0, i.D)(h).pipe(
            Ce((N) =>
              this.expandSegmentAgainstRoute(d, c, h, N, y, E, O).pipe(
                G((Pe) => {
                  if (Pe instanceof an) return (0, L.of)(null);
                  throw Pe;
                })
              )
            ),
            Re((N) => !!N),
            G((N, z) => {
              if (A(N)) return Ts(c, y, E) ? (0, L.of)(new Ye([], {})) : Rt(c);
              throw N;
            })
          );
        }
        expandSegmentAgainstRoute(d, c, h, y, E, O, N) {
          return vi(y, c, E, O)
            ? void 0 === y.redirectTo
              ? this.matchSegmentAgainstRoute(d, c, y, E, O)
              : N && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(d, c, h, y, E, O)
              : Rt(c)
            : Rt(c);
        }
        expandSegmentAgainstRouteUsingRedirect(d, c, h, y, E, O) {
          return '**' === y.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(d, h, y, O)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(d, c, h, y, E, O);
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(d, c, h, y) {
          const E = this.applyRedirectCommands([], h.redirectTo, {});
          return h.redirectTo.startsWith('/')
            ? Is(E)
            : this.lineralizeSegments(h, E).pipe(
                (0, Te.z)((O) => {
                  const N = new Ye(O, {});
                  return this.expandSegment(d, N, c, O, y, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(d, c, h, y, E, O) {
          const { matched: N, consumedSegments: z, remainingSegments: Pe, positionalParamSegments: We } = $i(c, y, E);
          if (!N) return Rt(c);
          const Be = this.applyRedirectCommands(z, y.redirectTo, We);
          return y.redirectTo.startsWith('/')
            ? Is(Be)
            : this.lineralizeSegments(y, Be).pipe((0, Te.z)((ut) => this.expandSegment(d, c, h, ut.concat(Pe), O, !1)));
        }
        matchSegmentAgainstRoute(d, c, h, y, E) {
          return '**' === h.path
            ? ((d = fi(h, d)),
              h.loadChildren
                ? (h._loadedRoutes
                    ? (0, L.of)({ routes: h._loadedRoutes, injector: h._loadedInjector })
                    : this.configLoader.loadChildren(d, h)
                  ).pipe(
                    (0, te.U)((N) => ((h._loadedRoutes = N.routes), (h._loadedInjector = N.injector), new Ye(y, {})))
                  )
                : (0, L.of)(new Ye(y, {})))
            : wo(c, h, y, d).pipe(
                (0, Ue.w)(({ matched: O, consumedSegments: N, remainingSegments: z }) => {
                  var Pe;
                  return O
                    ? ((d = null !== (Pe = h._injector) && void 0 !== Pe ? Pe : d),
                      this.getChildConfig(d, h, y).pipe(
                        (0, Te.z)((Be) => {
                          var ut;
                          const At = null !== (ut = Be.injector) && void 0 !== ut ? ut : d,
                            vn = Be.routes,
                            { segmentGroup: cr, slicedSegments: _r } = qo(c, N, z, vn),
                            vr = new Ye(cr.segments, cr.children);
                          if (0 === _r.length && vr.hasChildren())
                            return this.expandChildren(At, vn, vr).pipe((0, te.U)((Gs) => new Ye(N, Gs)));
                          if (0 === vn.length && 0 === _r.length) return (0, L.of)(new Ye(N, {}));
                          const Ir = Zt(h) === E;
                          return this.expandSegment(At, vr, vn, _r, Ir ? He : E, !0).pipe(
                            (0, te.U)((Fn) => new Ye(N.concat(Fn.segments), Fn.children))
                          );
                        })
                      ))
                    : Rt(c);
                })
              );
        }
        getChildConfig(d, c, h) {
          return c.children
            ? (0, L.of)({ routes: c.children, injector: d })
            : c.loadChildren
            ? void 0 !== c._loadedRoutes
              ? (0, L.of)({ routes: c._loadedRoutes, injector: c._loadedInjector })
              : (function Do(u, d, c, h) {
                  const y = d.canLoad;
                  if (void 0 === y || 0 === y.length) return (0, L.of)(!0);
                  const E = y.map((O) => {
                    const N = pr(O, u);
                    return Qe(
                      (function Wt(u) {
                        return u && Rr(u.canLoad);
                      })(N)
                        ? N.canLoad(d, c)
                        : u.runInContext(() => N(d, c))
                    );
                  });
                  return (0, L.of)(E).pipe($e(), gi());
                })(d, c, h).pipe(
                  (0, Te.z)((y) =>
                    y
                      ? this.configLoader.loadChildren(d, c).pipe(
                          (0, Ze.b)((E) => {
                            (c._loadedRoutes = E.routes), (c._loadedInjector = E.injector);
                          })
                        )
                      : (function Ca(u) {
                          return de(Fr(yi, 3));
                        })()
                  )
                )
            : (0, L.of)({ routes: [], injector: d });
        }
        lineralizeSegments(d, c) {
          let h = [],
            y = c.root;
          for (;;) {
            if (((h = h.concat(y.segments)), 0 === y.numberOfChildren)) return (0, L.of)(h);
            if (y.numberOfChildren > 1 || !y.children[He]) return de(new a.vHH(4e3, yi));
            y = y.children[He];
          }
        }
        applyRedirectCommands(d, c, h) {
          return this.applyRedirectCreateUrlTree(c, this.urlSerializer.parse(c), d, h);
        }
        applyRedirectCreateUrlTree(d, c, h, y) {
          const E = this.createSegmentGroup(d, c.root, h, y);
          return new Tn(E, this.createQueryParams(c.queryParams, this.urlTree.queryParams), c.fragment);
        }
        createQueryParams(d, c) {
          const h = {};
          return (
            vt(d, (y, E) => {
              if ('string' == typeof y && y.startsWith(':')) {
                const N = y.substring(1);
                h[E] = c[N];
              } else h[E] = y;
            }),
            h
          );
        }
        createSegmentGroup(d, c, h, y) {
          const E = this.createSegments(d, c.segments, h, y);
          let O = {};
          return (
            vt(c.children, (N, z) => {
              O[z] = this.createSegmentGroup(d, N, h, y);
            }),
            new Ye(E, O)
          );
        }
        createSegments(d, c, h, y) {
          return c.map((E) => (E.path.startsWith(':') ? this.findPosParam(d, E, y) : this.findOrReturn(E, h)));
        }
        findPosParam(d, c, h) {
          const y = h[c.path.substring(1)];
          if (!y) throw new a.vHH(4001, yi);
          return y;
        }
        findOrReturn(d, c) {
          let h = 0;
          for (const y of c) {
            if (y.path === d.path) return c.splice(h), y;
            h++;
          }
          return d;
        }
      }
      class Ci {}
      class Fs {
        constructor(d, c, h, y, E, O, N, z) {
          (this.injector = d),
            (this.rootComponentType = c),
            (this.config = h),
            (this.urlTree = y),
            (this.url = E),
            (this.paramsInheritanceStrategy = O),
            (this.relativeLinkResolution = N),
            (this.urlSerializer = z);
        }
        recognize() {
          const d = qo(
            this.urlTree.root,
            [],
            [],
            this.config.filter((c) => void 0 === c.redirectTo),
            this.relativeLinkResolution
          ).segmentGroup;
          return this.processSegmentGroup(this.injector, this.config, d, He).pipe(
            (0, te.U)((c) => {
              if (null === c) return null;
              const h = new Er(
                  [],
                  Object.freeze({}),
                  Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                  this.urlTree.fragment,
                  {},
                  He,
                  this.rootComponentType,
                  null,
                  this.urlTree.root,
                  -1,
                  {}
                ),
                y = new rr(h, c),
                E = new li(this.url, y);
              return this.inheritParamsAndData(E._root), E;
            })
          );
        }
        inheritParamsAndData(d) {
          const c = d.value,
            h = Yr(c, this.paramsInheritanceStrategy);
          (c.params = Object.freeze(h.params)),
            (c.data = Object.freeze(h.data)),
            d.children.forEach((y) => this.inheritParamsAndData(y));
        }
        processSegmentGroup(d, c, h, y) {
          return 0 === h.segments.length && h.hasChildren()
            ? this.processChildren(d, c, h)
            : this.processSegment(d, c, h, h.segments, y);
        }
        processChildren(d, c, h) {
          return (0, i.D)(Object.keys(h.children)).pipe(
            Ce((y) => {
              const E = h.children[y],
                O = no(c, y);
              return this.processSegmentGroup(d, O, E, y);
            }),
            q((y, E) => (y && E ? (y.push(...E), y) : null)),
            (function pe(u, d = !1) {
              return (0, B.e)((c, h) => {
                let y = 0;
                c.subscribe(
                  (0, ie.x)(h, (E) => {
                    const O = u(E, y++);
                    (O || d) && h.next(E), !O && h.complete();
                  })
                );
              });
            })((y) => null !== y),
            j(null),
            De(),
            (0, te.U)((y) => {
              if (null === y) return null;
              const E = Ps(y);
              return (
                (function ba(u) {
                  u.sort((d, c) =>
                    d.value.outlet === He
                      ? -1
                      : c.value.outlet === He
                      ? 1
                      : d.value.outlet.localeCompare(c.value.outlet)
                  );
                })(E),
                E
              );
            })
          );
        }
        processSegment(d, c, h, y, E) {
          return (0, i.D)(c).pipe(
            Ce((O) => {
              var N;
              return this.processSegmentAgainstRoute(null !== (N = O._injector) && void 0 !== N ? N : d, O, h, y, E);
            }),
            Re((O) => !!O),
            G((O) => {
              if (A(O)) return Ts(h, y, E) ? (0, L.of)([]) : (0, L.of)(null);
              throw O;
            })
          );
        }
        processSegmentAgainstRoute(d, c, h, y, E) {
          var O, N;
          if (c.redirectTo || !vi(c, h, y, E)) return (0, L.of)(null);
          let z;
          if ('**' === c.path) {
            const Pe = y.length > 0 ? Cn(y).parameters : {},
              We = _(h) + y.length,
              Be = new Er(
                y,
                Pe,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                F(c),
                Zt(c),
                null !== (N = null !== (O = c.component) && void 0 !== O ? O : c._loadedComponent) && void 0 !== N
                  ? N
                  : null,
                c,
                b(h),
                We,
                oe(c),
                We
              );
            z = (0, L.of)({ snapshot: Be, consumedSegments: [], remainingSegments: [] });
          } else
            z = wo(h, c, y, d).pipe(
              (0, te.U)(({ matched: Pe, consumedSegments: We, remainingSegments: Be, parameters: ut }) => {
                var At, vn;
                if (!Pe) return null;
                const cr = _(h) + We.length;
                return {
                  snapshot: new Er(
                    We,
                    ut,
                    Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                    this.urlTree.fragment,
                    F(c),
                    Zt(c),
                    null !== (vn = null !== (At = c.component) && void 0 !== At ? At : c._loadedComponent) &&
                    void 0 !== vn
                      ? vn
                      : null,
                    c,
                    b(h),
                    cr,
                    oe(c),
                    cr
                  ),
                  consumedSegments: We,
                  remainingSegments: Be
                };
              })
            );
          return z.pipe(
            (0, Ue.w)((Pe) => {
              var We, Be;
              if (null === Pe) return (0, L.of)(null);
              const { snapshot: ut, consumedSegments: At, remainingSegments: vn } = Pe;
              d = null !== (We = c._injector) && void 0 !== We ? We : d;
              const cr = null !== (Be = c._loadedInjector) && void 0 !== Be ? Be : d,
                _r = (function Lr(u) {
                  return u.children ? u.children : u.loadChildren ? u._loadedRoutes : [];
                })(c),
                { segmentGroup: vr, slicedSegments: Ir } = qo(
                  h,
                  At,
                  vn,
                  _r.filter((Fn) => void 0 === Fn.redirectTo),
                  this.relativeLinkResolution
                );
              if (0 === Ir.length && vr.hasChildren())
                return this.processChildren(cr, _r, vr).pipe(
                  (0, te.U)((Fn) => (null === Fn ? null : [new rr(ut, Fn)]))
                );
              if (0 === _r.length && 0 === Ir.length) return (0, L.of)([new rr(ut, [])]);
              const Ac = Zt(c) === E;
              return this.processSegment(cr, _r, vr, Ir, Ac ? He : E).pipe(
                (0, te.U)((Fn) => (null === Fn ? null : [new rr(ut, Fn)]))
              );
            })
          );
        }
      }
      function Yo(u) {
        const d = u.value.routeConfig;
        return d && '' === d.path && void 0 === d.redirectTo;
      }
      function Ps(u) {
        const d = [],
          c = new Set();
        for (const h of u) {
          if (!Yo(h)) {
            d.push(h);
            continue;
          }
          const y = d.find((E) => h.value.routeConfig === E.value.routeConfig);
          void 0 !== y ? (y.children.push(...h.children), c.add(y)) : d.push(h);
        }
        for (const h of c) {
          const y = Ps(h.children);
          d.push(new rr(h.value, y));
        }
        return d.filter((h) => !c.has(h));
      }
      function b(u) {
        let d = u;
        for (; d._sourceSegment; ) d = d._sourceSegment;
        return d;
      }
      function _(u) {
        var d, c;
        let h = u,
          y = null !== (d = h._segmentIndexShift) && void 0 !== d ? d : 0;
        for (; h._sourceSegment; )
          (h = h._sourceSegment), (y += null !== (c = h._segmentIndexShift) && void 0 !== c ? c : 0);
        return y - 1;
      }
      function F(u) {
        return u.data || {};
      }
      function oe(u) {
        return u.resolve || {};
      }
      function zt(u) {
        return 'string' == typeof u.title || null === u.title;
      }
      function Dt(u) {
        return (0, Ue.w)((d) => {
          const c = u(d);
          return c ? (0, i.D)(c).pipe((0, te.U)(() => d)) : (0, L.of)(d);
        });
      }
      let rn = (() => {
          class u {
            buildTitle(c) {
              var h;
              let y,
                E = c.root;
              for (; void 0 !== E; )
                (y = null !== (h = this.getResolvedTitleForRoute(E)) && void 0 !== h ? h : y),
                  (E = E.children.find((O) => O.outlet === He));
              return y;
            }
            getResolvedTitleForRoute(c) {
              return c.data[Ct];
            }
          }
          return (
            (u.ɵfac = function (c) {
              return new (c || u)();
            }),
            (u.ɵprov = a.Yz7({
              token: u,
              factory: function () {
                return (0, a.f3M)(Nn);
              },
              providedIn: 'root'
            })),
            u
          );
        })(),
        Nn = (() => {
          class u extends rn {
            constructor(c) {
              super(), (this.title = c);
            }
            updateTitle(c) {
              const h = this.buildTitle(c);
              void 0 !== h && this.title.setTitle(h);
            }
          }
          return (
            (u.ɵfac = function (c) {
              return new (c || u)(a.LFG(je.Dx));
            }),
            (u.ɵprov = a.Yz7({ token: u, factory: u.ɵfac, providedIn: 'root' })),
            u
          );
        })();
      class ar {}
      class Eo extends class Vr {
        shouldDetach(d) {
          return !1;
        }
        store(d, c) {}
        shouldAttach(d) {
          return !1;
        }
        retrieve(d) {
          return null;
        }
        shouldReuseRoute(d, c) {
          return d.routeConfig === c.routeConfig;
        }
      } {}
      const xo = new a.OlP('', { providedIn: 'root', factory: () => ({}) }),
        ks = new a.OlP('ROUTES');
      let Mo = (() => {
        class u {
          constructor(c, h) {
            (this.injector = c),
              (this.compiler = h),
              (this.componentLoaders = new WeakMap()),
              (this.childrenLoaders = new WeakMap());
          }
          loadComponent(c) {
            if (this.componentLoaders.get(c)) return this.componentLoaders.get(c);
            if (c._loadedComponent) return (0, L.of)(c._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(c);
            const h = Qe(c.loadComponent()).pipe(
                (0, Ze.b)((E) => {
                  this.onLoadEndListener && this.onLoadEndListener(c), (c._loadedComponent = E);
                }),
                et(() => {
                  this.componentLoaders.delete(c);
                })
              ),
              y = new be(h, () => new H.x()).pipe(K());
            return this.componentLoaders.set(c, y), y;
          }
          loadChildren(c, h) {
            if (this.childrenLoaders.get(h)) return this.childrenLoaders.get(h);
            if (h._loadedRoutes) return (0, L.of)({ routes: h._loadedRoutes, injector: h._loadedInjector });
            this.onLoadStartListener && this.onLoadStartListener(h);
            const E = this.loadModuleFactoryOrRoutes(h.loadChildren).pipe(
                (0, te.U)((N) => {
                  this.onLoadEndListener && this.onLoadEndListener(h);
                  let z,
                    Pe,
                    We = !1;
                  Array.isArray(N)
                    ? (Pe = N)
                    : ((z = N.create(c).injector), (Pe = Bt(z.get(ks, [], a.XFs.Self | a.XFs.Optional))));
                  return { routes: Pe.map(hr), injector: z };
                }),
                et(() => {
                  this.childrenLoaders.delete(h);
                })
              ),
              O = new be(E, () => new H.x()).pipe(K());
            return this.childrenLoaders.set(h, O), O;
          }
          loadModuleFactoryOrRoutes(c) {
            return Qe(c()).pipe(
              (0, Te.z)((h) =>
                h instanceof a.YKP || Array.isArray(h) ? (0, L.of)(h) : (0, i.D)(this.compiler.compileModuleAsync(h))
              )
            );
          }
        }
        return (
          (u.ɵfac = function (c) {
            return new (c || u)(a.LFG(a.zs3), a.LFG(a.Sil));
          }),
          (u.ɵprov = a.Yz7({ token: u, factory: u.ɵfac, providedIn: 'root' })),
          u
        );
      })();
      class Rs {}
      class Ls {
        shouldProcessUrl(d) {
          return !0;
        }
        extract(d) {
          return d;
        }
        merge(d, c) {
          return d;
        }
      }
      function Zi(u) {
        throw u;
      }
      function Cc(u, d, c) {
        return d.parse('/');
      }
      const wa = { paths: 'exact', fragment: 'ignored', matrixParams: 'ignored', queryParams: 'exact' },
        Ea = { paths: 'subset', fragment: 'ignored', matrixParams: 'ignored', queryParams: 'subset' };
      function Vs() {
        var u, d;
        const c = (0, a.f3M)(tr),
          h = (0, a.f3M)(_o),
          y = (0, a.f3M)(J.Ye),
          E = (0, a.f3M)(a.zs3),
          O = (0, a.f3M)(a.Sil),
          N = null !== (u = (0, a.f3M)(ks, { optional: !0 })) && void 0 !== u ? u : [],
          z = null !== (d = (0, a.f3M)(xo, { optional: !0 })) && void 0 !== d ? d : {},
          Pe = (0, a.f3M)(Nn),
          We = (0, a.f3M)(rn, { optional: !0 }),
          Be = (0, a.f3M)(Rs, { optional: !0 }),
          ut = (0, a.f3M)(ar, { optional: !0 }),
          At = new pn(null, c, h, y, E, O, Bt(N));
        return (
          Be && (At.urlHandlingStrategy = Be),
          ut && (At.routeReuseStrategy = ut),
          (At.titleStrategy = null != We ? We : Pe),
          (function xa(u, d) {
            u.errorHandler && (d.errorHandler = u.errorHandler),
              u.malformedUriErrorHandler && (d.malformedUriErrorHandler = u.malformedUriErrorHandler),
              u.onSameUrlNavigation && (d.onSameUrlNavigation = u.onSameUrlNavigation),
              u.paramsInheritanceStrategy && (d.paramsInheritanceStrategy = u.paramsInheritanceStrategy),
              u.relativeLinkResolution && (d.relativeLinkResolution = u.relativeLinkResolution),
              u.urlUpdateStrategy && (d.urlUpdateStrategy = u.urlUpdateStrategy),
              u.canceledNavigationResolution && (d.canceledNavigationResolution = u.canceledNavigationResolution);
          })(z, At),
          At
        );
      }
      let pn = (() => {
        class u {
          constructor(c, h, y, E, O, N, z) {
            (this.rootComponentType = c),
              (this.urlSerializer = h),
              (this.rootContexts = y),
              (this.location = E),
              (this.config = z),
              (this.lastSuccessfulNavigation = null),
              (this.currentNavigation = null),
              (this.disposed = !1),
              (this.navigationId = 0),
              (this.currentPageId = 0),
              (this.isNgZoneEnabled = !1),
              (this.events = new H.x()),
              (this.errorHandler = Zi),
              (this.malformedUriErrorHandler = Cc),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1),
              (this.afterPreactivation = () => (0, L.of)(void 0)),
              (this.urlHandlingStrategy = new Ls()),
              (this.routeReuseStrategy = new Eo()),
              (this.onSameUrlNavigation = 'ignore'),
              (this.paramsInheritanceStrategy = 'emptyOnly'),
              (this.urlUpdateStrategy = 'deferred'),
              (this.relativeLinkResolution = 'corrected'),
              (this.canceledNavigationResolution = 'replace'),
              (this.configLoader = O.get(Mo)),
              (this.configLoader.onLoadEndListener = (ut) => this.triggerEvent(new Ro(ut))),
              (this.configLoader.onLoadStartListener = (ut) => this.triggerEvent(new $n(ut))),
              (this.ngModule = O.get(a.h0i)),
              (this.console = O.get(a.c2e));
            const Be = O.get(a.R0b);
            (this.isNgZoneEnabled = Be instanceof a.R0b && a.R0b.isInAngularZone()),
              this.resetConfig(z),
              (this.currentUrlTree = (function er() {
                return new Tn(new Ye([], {}), {}, null);
              })()),
              (this.rawUrlTree = this.currentUrlTree),
              (this.browserUrlTree = this.currentUrlTree),
              (this.routerState = Uo(this.currentUrlTree, this.rootComponentType)),
              (this.transitions = new Z.X({
                id: 0,
                targetPageId: 0,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.currentUrlTree,
                extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
                urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
                rawUrl: this.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: 'imperative',
                restoredState: null,
                currentSnapshot: this.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: this.routerState,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null
              })),
              (this.navigations = this.setupNavigations(this.transitions)),
              this.processNavigations();
          }
          get browserPageId() {
            var c;
            return null === (c = this.location.getState()) || void 0 === c ? void 0 : c.ɵrouterPageId;
          }
          setupNavigations(c) {
            const h = this.events;
            return c.pipe(
              (0, re.h)((y) => 0 !== y.id),
              (0, te.U)((y) =>
                Object.assign(Object.assign({}, y), { extractedUrl: this.urlHandlingStrategy.extract(y.rawUrl) })
              ),
              (0, Ue.w)((y) => {
                let E = !1,
                  O = !1;
                return (0, L.of)(y).pipe(
                  (0, Ze.b)((N) => {
                    this.currentNavigation = {
                      id: N.id,
                      initialUrl: N.rawUrl,
                      extractedUrl: N.extractedUrl,
                      trigger: N.source,
                      extras: N.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? Object.assign(Object.assign({}, this.lastSuccessfulNavigation), { previousNavigation: null })
                        : null
                    };
                  }),
                  (0, Ue.w)((N) => {
                    const z = this.browserUrlTree.toString(),
                      Pe = !this.navigated || N.extractedUrl.toString() !== z || z !== this.currentUrlTree.toString();
                    if (
                      ('reload' === this.onSameUrlNavigation || Pe) &&
                      this.urlHandlingStrategy.shouldProcessUrl(N.rawUrl)
                    )
                      return (
                        Jo(N.source) && (this.browserUrlTree = N.extractedUrl),
                        (0, L.of)(N).pipe(
                          (0, Ue.w)((Be) => {
                            const ut = this.transitions.getValue();
                            return (
                              h.next(new Dr(Be.id, this.serializeUrl(Be.extractedUrl), Be.source, Be.restoredState)),
                              ut !== this.transitions.getValue() ? ce.E : Promise.resolve(Be)
                            );
                          }),
                          (function Da(u, d, c, h) {
                            return (0, Ue.w)((y) =>
                              (function Ss(u, d, c, h, y) {
                                return new Ns(u, d, c, h, y).apply();
                              })(u, d, c, y.extractedUrl, h).pipe(
                                (0, te.U)((E) => Object.assign(Object.assign({}, y), { urlAfterRedirects: E }))
                              )
                            );
                          })(this.ngModule.injector, this.configLoader, this.urlSerializer, this.config),
                          (0, Ze.b)((Be) => {
                            (this.currentNavigation = Object.assign(Object.assign({}, this.currentNavigation), {
                              finalUrl: Be.urlAfterRedirects
                            })),
                              (y.urlAfterRedirects = Be.urlAfterRedirects);
                          }),
                          (function _e(u, d, c, h, y, E) {
                            return (0, Te.z)((O) =>
                              (function Gi(u, d, c, h, y, E, O = 'emptyOnly', N = 'legacy') {
                                return new Fs(u, d, c, h, y, O, N, E).recognize().pipe(
                                  (0, Ue.w)((z) =>
                                    null === z
                                      ? (function Di(u) {
                                          return new ve.y((d) => d.error(u));
                                        })(new Ci())
                                      : (0, L.of)(z)
                                  )
                                );
                              })(u, d, c, O.urlAfterRedirects, h.serialize(O.urlAfterRedirects), h, y, E).pipe(
                                (0, te.U)((N) => Object.assign(Object.assign({}, O), { targetSnapshot: N }))
                              )
                            );
                          })(
                            this.ngModule.injector,
                            this.rootComponentType,
                            this.config,
                            this.urlSerializer,
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution
                          ),
                          (0, Ze.b)((Be) => {
                            if (((y.targetSnapshot = Be.targetSnapshot), 'eager' === this.urlUpdateStrategy)) {
                              if (!Be.extras.skipLocationChange) {
                                const At = this.urlHandlingStrategy.merge(Be.urlAfterRedirects, Be.rawUrl);
                                this.setBrowserUrl(At, Be);
                              }
                              this.browserUrlTree = Be.urlAfterRedirects;
                            }
                            const ut = new Nr(
                              Be.id,
                              this.serializeUrl(Be.extractedUrl),
                              this.serializeUrl(Be.urlAfterRedirects),
                              Be.targetSnapshot
                            );
                            h.next(ut);
                          })
                        )
                      );
                    if (Pe && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
                      const { id: ut, extractedUrl: At, source: vn, restoredState: cr, extras: _r } = N,
                        vr = new Dr(ut, this.serializeUrl(At), vn, cr);
                      h.next(vr);
                      const Ir = Uo(At, this.rootComponentType).snapshot;
                      return (
                        (y = Object.assign(Object.assign({}, N), {
                          targetSnapshot: Ir,
                          urlAfterRedirects: At,
                          extras: Object.assign(Object.assign({}, _r), { skipLocationChange: !1, replaceUrl: !1 })
                        })),
                        (0, L.of)(y)
                      );
                    }
                    return (this.rawUrlTree = N.rawUrl), N.resolve(null), ce.E;
                  }),
                  (0, Ze.b)((N) => {
                    const z = new po(
                      N.id,
                      this.serializeUrl(N.extractedUrl),
                      this.serializeUrl(N.urlAfterRedirects),
                      N.targetSnapshot
                    );
                    this.triggerEvent(z);
                  }),
                  (0, te.U)(
                    (N) =>
                      (y = Object.assign(Object.assign({}, N), {
                        guards: xs(N.targetSnapshot, N.currentSnapshot, this.rootContexts)
                      }))
                  ),
                  (function mt(u, d) {
                    return (0, Te.z)((c) => {
                      const {
                        targetSnapshot: h,
                        currentSnapshot: y,
                        guards: { canActivateChecks: E, canDeactivateChecks: O }
                      } = c;
                      return 0 === O.length && 0 === E.length
                        ? (0, L.of)(Object.assign(Object.assign({}, c), { guardsResult: !0 }))
                        : (function Yt(u, d, c, h) {
                            return (0, i.D)(u).pipe(
                              (0, Te.z)((y) =>
                                (function pi(u, d, c, h, y) {
                                  const E = d && d.routeConfig ? d.routeConfig.canDeactivate : null;
                                  if (!E || 0 === E.length) return (0, L.of)(!0);
                                  const O = E.map((N) => {
                                    var z;
                                    const Pe = null !== (z = Ar(d)) && void 0 !== z ? z : y,
                                      We = pr(N, Pe);
                                    return Qe(
                                      (function Mt(u) {
                                        return u && Rr(u.canDeactivate);
                                      })(We)
                                        ? We.canDeactivate(u, d, c, h)
                                        : Pe.runInContext(() => We(u, d, c, h))
                                    ).pipe(Re());
                                  });
                                  return (0, L.of)(O).pipe($e());
                                })(y.component, y.route, c, d, h)
                              ),
                              Re((y) => !0 !== y, !0)
                            );
                          })(O, h, y, u).pipe(
                            (0, Te.z)((N) =>
                              N &&
                              (function hi(u) {
                                return 'boolean' == typeof u;
                              })(N)
                                ? (function gr(u, d, c, h) {
                                    return (0, i.D)(d).pipe(
                                      Ce((y) =>
                                        (0, xe.z)(
                                          (function _n(u, d) {
                                            return null !== u && d && d(new ti(u)), (0, L.of)(!0);
                                          })(y.route.parent, h),
                                          (function Zn(u, d) {
                                            return null !== u && d && d(new Lo(u)), (0, L.of)(!0);
                                          })(y.route, h),
                                          (function zo(u, d, c) {
                                            const h = d[d.length - 1],
                                              E = d
                                                .slice(0, d.length - 1)
                                                .reverse()
                                                .map((O) =>
                                                  (function Ui(u) {
                                                    const d = u.routeConfig ? u.routeConfig.canActivateChild : null;
                                                    return d && 0 !== d.length ? { node: u, guards: d } : null;
                                                  })(O)
                                                )
                                                .filter((O) => null !== O)
                                                .map((O) =>
                                                  le(() => {
                                                    const N = O.guards.map((z) => {
                                                      var Pe;
                                                      const We = null !== (Pe = Ar(O.node)) && void 0 !== Pe ? Pe : c,
                                                        Be = pr(z, We);
                                                      return Qe(
                                                        (function ro(u) {
                                                          return u && Rr(u.canActivateChild);
                                                        })(Be)
                                                          ? Be.canActivateChild(h, u)
                                                          : We.runInContext(() => Be(h, u))
                                                      ).pipe(Re());
                                                    });
                                                    return (0, L.of)(N).pipe($e());
                                                  })
                                                );
                                            return (0, L.of)(E).pipe($e());
                                          })(u, y.path, c),
                                          (function Co(u, d, c) {
                                            const h = d.routeConfig ? d.routeConfig.canActivate : null;
                                            if (!h || 0 === h.length) return (0, L.of)(!0);
                                            const y = h.map((E) =>
                                              le(() => {
                                                var O;
                                                const N = null !== (O = Ar(d)) && void 0 !== O ? O : c,
                                                  z = pr(E, N);
                                                return Qe(
                                                  (function ji(u) {
                                                    return u && Rr(u.canActivate);
                                                  })(z)
                                                    ? z.canActivate(d, u)
                                                    : N.runInContext(() => z(d, u))
                                                ).pipe(Re());
                                              })
                                            );
                                            return (0, L.of)(y).pipe($e());
                                          })(u, y.route, c)
                                        )
                                      ),
                                      Re((y) => !0 !== y, !0)
                                    );
                                  })(h, E, u, d)
                                : (0, L.of)(N)
                            ),
                            (0, te.U)((N) => Object.assign(Object.assign({}, c), { guardsResult: N }))
                          );
                    });
                  })(this.ngModule.injector, (N) => this.triggerEvent(N)),
                  (0, Ze.b)((N) => {
                    if (((y.guardsResult = N.guardsResult), dt(N.guardsResult))) throw Xr(0, N.guardsResult);
                    const z = new Wr(
                      N.id,
                      this.serializeUrl(N.extractedUrl),
                      this.serializeUrl(N.urlAfterRedirects),
                      N.targetSnapshot,
                      !!N.guardsResult
                    );
                    this.triggerEvent(z);
                  }),
                  (0, re.h)(
                    (N) => !!N.guardsResult || (this.restoreHistory(N), this.cancelNavigationTransition(N, '', 3), !1)
                  ),
                  Dt((N) => {
                    if (N.guards.canActivateChecks.length)
                      return (0, L.of)(N).pipe(
                        (0, Ze.b)((z) => {
                          const Pe = new Sn(
                            z.id,
                            this.serializeUrl(z.extractedUrl),
                            this.serializeUrl(z.urlAfterRedirects),
                            z.targetSnapshot
                          );
                          this.triggerEvent(Pe);
                        }),
                        (0, Ue.w)((z) => {
                          let Pe = !1;
                          return (0, L.of)(z).pipe(
                            (function ze(u, d) {
                              return (0, Te.z)((c) => {
                                const {
                                  targetSnapshot: h,
                                  guards: { canActivateChecks: y }
                                } = c;
                                if (!y.length) return (0, L.of)(c);
                                let E = 0;
                                return (0, i.D)(y).pipe(
                                  Ce((O) =>
                                    (function bt(u, d, c, h) {
                                      const y = u.routeConfig,
                                        E = u._resolve;
                                      return (
                                        void 0 !== (null == y ? void 0 : y.title) && !zt(y) && (E[Ct] = y.title),
                                        (function wt(u, d, c, h) {
                                          const y = (function Et(u) {
                                            return [...Object.keys(u), ...Object.getOwnPropertySymbols(u)];
                                          })(u);
                                          if (0 === y.length) return (0, L.of)({});
                                          const E = {};
                                          return (0, i.D)(y).pipe(
                                            (0, Te.z)((O) =>
                                              (function yt(u, d, c, h) {
                                                var y;
                                                const E = null !== (y = Ar(d)) && void 0 !== y ? y : h,
                                                  O = pr(u, E);
                                                return Qe(O.resolve ? O.resolve(d, c) : E.runInContext(() => O(d, c)));
                                              })(u[O], d, c, h).pipe(
                                                Re(),
                                                (0, Ze.b)((N) => {
                                                  E[O] = N;
                                                })
                                              )
                                            ),
                                            fe(1),
                                            (0, Je.h)(E),
                                            G((O) => (A(O) ? ce.E : de(O)))
                                          );
                                        })(E, u, d, h).pipe(
                                          (0, te.U)(
                                            (O) => (
                                              (u._resolvedData = O),
                                              (u.data = Yr(u, c).resolve),
                                              y && zt(y) && (u.data[Ct] = y.title),
                                              null
                                            )
                                          )
                                        )
                                      );
                                    })(O.route, h, u, d)
                                  ),
                                  (0, Ze.b)(() => E++),
                                  fe(1),
                                  (0, Te.z)((O) => (E === y.length ? (0, L.of)(c) : ce.E))
                                );
                              });
                            })(this.paramsInheritanceStrategy, this.ngModule.injector),
                            (0, Ze.b)({
                              next: () => (Pe = !0),
                              complete: () => {
                                Pe || (this.restoreHistory(z), this.cancelNavigationTransition(z, '', 2));
                              }
                            })
                          );
                        }),
                        (0, Ze.b)((z) => {
                          const Pe = new Es(
                            z.id,
                            this.serializeUrl(z.extractedUrl),
                            this.serializeUrl(z.urlAfterRedirects),
                            z.targetSnapshot
                          );
                          this.triggerEvent(Pe);
                        })
                      );
                  }),
                  Dt((N) => {
                    const z = (Pe) => {
                      var We;
                      const Be = [];
                      (null === (We = Pe.routeConfig) || void 0 === We ? void 0 : We.loadComponent) &&
                        !Pe.routeConfig._loadedComponent &&
                        Be.push(
                          this.configLoader.loadComponent(Pe.routeConfig).pipe(
                            (0, Ze.b)((ut) => {
                              Pe.component = ut;
                            }),
                            (0, te.U)(() => {})
                          )
                        );
                      for (const ut of Pe.children) Be.push(...z(ut));
                      return Be;
                    };
                    return (0, Y.a)(z(N.targetSnapshot.root)).pipe(j(), (0, Ae.q)(1));
                  }),
                  Dt(() => this.afterPreactivation()),
                  (0, te.U)((N) => {
                    const z = (function ui(u, d, c) {
                      const h = Mr(u, d._root, c ? c._root : void 0);
                      return new ai(h, d);
                    })(this.routeReuseStrategy, N.targetSnapshot, N.currentRouterState);
                    return (y = Object.assign(Object.assign({}, N), { targetRouterState: z }));
                  }),
                  (0, Ze.b)((N) => {
                    (this.currentUrlTree = N.urlAfterRedirects),
                      (this.rawUrlTree = this.urlHandlingStrategy.merge(N.urlAfterRedirects, N.rawUrl)),
                      (this.routerState = N.targetRouterState),
                      'deferred' === this.urlUpdateStrategy &&
                        (N.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, N),
                        (this.browserUrlTree = N.urlAfterRedirects));
                  }),
                  ((u, d, c) =>
                    (0, te.U)((h) => (new Go(d, h.targetRouterState, h.currentRouterState, c).activate(u), h)))(
                    this.rootContexts,
                    this.routeReuseStrategy,
                    (N) => this.triggerEvent(N)
                  ),
                  (0, Ze.b)({
                    next() {
                      E = !0;
                    },
                    complete() {
                      E = !0;
                    }
                  }),
                  et(() => {
                    var N;
                    E || O || this.cancelNavigationTransition(y, '', 1),
                      (null === (N = this.currentNavigation) || void 0 === N ? void 0 : N.id) === y.id &&
                        (this.currentNavigation = null);
                  }),
                  G((N) => {
                    var z;
                    if (((O = !0), mn(N))) {
                      di(N) || ((this.navigated = !0), this.restoreHistory(y, !0));
                      const Pe = new nn(y.id, this.serializeUrl(y.extractedUrl), N.message, N.cancellationCode);
                      if ((h.next(Pe), di(N))) {
                        const We = this.urlHandlingStrategy.merge(N.url, this.rawUrlTree),
                          Be = {
                            skipLocationChange: y.extras.skipLocationChange,
                            replaceUrl: 'eager' === this.urlUpdateStrategy || Jo(y.source)
                          };
                        this.scheduleNavigation(We, 'imperative', null, Be, {
                          resolve: y.resolve,
                          reject: y.reject,
                          promise: y.promise
                        });
                      } else y.resolve(!1);
                    } else {
                      this.restoreHistory(y, !0);
                      const Pe = new On(
                        y.id,
                        this.serializeUrl(y.extractedUrl),
                        N,
                        null !== (z = y.targetSnapshot) && void 0 !== z ? z : void 0
                      );
                      h.next(Pe);
                      try {
                        y.resolve(this.errorHandler(N));
                      } catch (We) {
                        y.reject(We);
                      }
                    }
                    return ce.E;
                  })
                );
              })
            );
          }
          resetRootComponentType(c) {
            (this.rootComponentType = c), (this.routerState.root.component = this.rootComponentType);
          }
          setTransition(c) {
            this.transitions.next(Object.assign(Object.assign({}, this.transitions.value), c));
          }
          initialNavigation() {
            this.setUpLocationChangeListener(),
              0 === this.navigationId && this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
          }
          setUpLocationChangeListener() {
            this.locationSubscription ||
              (this.locationSubscription = this.location.subscribe((c) => {
                const h = 'popstate' === c.type ? 'popstate' : 'hashchange';
                'popstate' === h &&
                  setTimeout(() => {
                    var y;
                    const E = { replaceUrl: !0 },
                      O = null !== (y = c.state) && void 0 !== y && y.navigationId ? c.state : null;
                    if (O) {
                      const z = Object.assign({}, O);
                      delete z.navigationId, delete z.ɵrouterPageId, 0 !== Object.keys(z).length && (E.state = z);
                    }
                    const N = this.parseUrl(c.url);
                    this.scheduleNavigation(N, h, O, E);
                  }, 0);
              }));
          }
          get url() {
            return this.serializeUrl(this.currentUrlTree);
          }
          getCurrentNavigation() {
            return this.currentNavigation;
          }
          triggerEvent(c) {
            this.events.next(c);
          }
          resetConfig(c) {
            (this.config = c.map(hr)), (this.navigated = !1), (this.lastSuccessfulId = -1);
          }
          ngOnDestroy() {
            this.dispose();
          }
          dispose() {
            this.transitions.complete(),
              this.locationSubscription &&
                (this.locationSubscription.unsubscribe(), (this.locationSubscription = void 0)),
              (this.disposed = !0);
          }
          createUrlTree(c, h = {}) {
            const { relativeTo: y, queryParams: E, fragment: O, queryParamsHandling: N, preserveFragment: z } = h,
              Pe = y || this.routerState.root,
              We = z ? this.currentUrlTree.fragment : O;
            let Be = null;
            switch (N) {
              case 'merge':
                Be = Object.assign(Object.assign({}, this.currentUrlTree.queryParams), E);
                break;
              case 'preserve':
                Be = this.currentUrlTree.queryParams;
                break;
              default:
                Be = E || null;
            }
            return (
              null !== Be && (Be = this.removeEmptyProps(Be)),
              kt(Pe, this.currentUrlTree, c, Be, null != We ? We : null)
            );
          }
          navigateByUrl(c, h = { skipLocationChange: !1 }) {
            const y = dt(c) ? c : this.parseUrl(c),
              E = this.urlHandlingStrategy.merge(y, this.rawUrlTree);
            return this.scheduleNavigation(E, 'imperative', null, h);
          }
          navigate(c, h = { skipLocationChange: !1 }) {
            return (
              (function zi(u) {
                for (let d = 0; d < u.length; d++) {
                  if (null == u[d]) throw new a.vHH(4008, false);
                }
              })(c),
              this.navigateByUrl(this.createUrlTree(c, h), h)
            );
          }
          serializeUrl(c) {
            return this.urlSerializer.serialize(c);
          }
          parseUrl(c) {
            let h;
            try {
              h = this.urlSerializer.parse(c);
            } catch (y) {
              h = this.malformedUriErrorHandler(y, this.urlSerializer, c);
            }
            return h;
          }
          isActive(c, h) {
            let y;
            if (((y = !0 === h ? Object.assign({}, wa) : !1 === h ? Object.assign({}, Ea) : h), dt(c)))
              return Xe(this.currentUrlTree, c, y);
            const E = this.parseUrl(c);
            return Xe(this.currentUrlTree, E, y);
          }
          removeEmptyProps(c) {
            return Object.keys(c).reduce((h, y) => {
              const E = c[y];
              return null != E && (h[y] = E), h;
            }, {});
          }
          processNavigations() {
            this.navigations.subscribe(
              (c) => {
                var h;
                (this.navigated = !0),
                  (this.lastSuccessfulId = c.id),
                  (this.currentPageId = c.targetPageId),
                  this.events.next(
                    new Yn(c.id, this.serializeUrl(c.extractedUrl), this.serializeUrl(this.currentUrlTree))
                  ),
                  (this.lastSuccessfulNavigation = this.currentNavigation),
                  null === (h = this.titleStrategy) || void 0 === h || h.updateTitle(this.routerState.snapshot),
                  c.resolve(!0);
              },
              (c) => {
                this.console.warn(`Unhandled Navigation Error: ${c}`);
              }
            );
          }
          scheduleNavigation(c, h, y, E, O) {
            var N, z;
            if (this.disposed) return Promise.resolve(!1);
            let Pe, We, Be;
            O
              ? ((Pe = O.resolve), (We = O.reject), (Be = O.promise))
              : (Be = new Promise((vn, cr) => {
                  (Pe = vn), (We = cr);
                }));
            const ut = ++this.navigationId;
            let At;
            return (
              'computed' === this.canceledNavigationResolution
                ? (0 === this.currentPageId && (y = this.location.getState()),
                  (At =
                    y && y.ɵrouterPageId
                      ? y.ɵrouterPageId
                      : E.replaceUrl || E.skipLocationChange
                      ? null !== (N = this.browserPageId) && void 0 !== N
                        ? N
                        : 0
                      : (null !== (z = this.browserPageId) && void 0 !== z ? z : 0) + 1))
                : (At = 0),
              this.setTransition({
                id: ut,
                targetPageId: At,
                source: h,
                restoredState: y,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.rawUrlTree,
                rawUrl: c,
                extras: E,
                resolve: Pe,
                reject: We,
                promise: Be,
                currentSnapshot: this.routerState.snapshot,
                currentRouterState: this.routerState
              }),
              Be.catch((vn) => Promise.reject(vn))
            );
          }
          setBrowserUrl(c, h) {
            const y = this.urlSerializer.serialize(c),
              E = Object.assign(Object.assign({}, h.extras.state), this.generateNgRouterState(h.id, h.targetPageId));
            this.location.isCurrentPathEqualTo(y) || h.extras.replaceUrl
              ? this.location.replaceState(y, '', E)
              : this.location.go(y, '', E);
          }
          restoreHistory(c, h = !1) {
            var y, E;
            if ('computed' === this.canceledNavigationResolution) {
              const O = this.currentPageId - c.targetPageId;
              ('popstate' !== c.source &&
                'eager' !== this.urlUpdateStrategy &&
                this.currentUrlTree !==
                  (null === (y = this.currentNavigation) || void 0 === y ? void 0 : y.finalUrl)) ||
              0 === O
                ? this.currentUrlTree ===
                    (null === (E = this.currentNavigation) || void 0 === E ? void 0 : E.finalUrl) &&
                  0 === O &&
                  (this.resetState(c), (this.browserUrlTree = c.currentUrlTree), this.resetUrlToCurrentUrlTree())
                : this.location.historyGo(O);
            } else
              'replace' === this.canceledNavigationResolution &&
                (h && this.resetState(c), this.resetUrlToCurrentUrlTree());
          }
          resetState(c) {
            (this.routerState = c.currentRouterState),
              (this.currentUrlTree = c.currentUrlTree),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, c.rawUrl));
          }
          resetUrlToCurrentUrlTree() {
            this.location.replaceState(
              this.urlSerializer.serialize(this.rawUrlTree),
              '',
              this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId)
            );
          }
          cancelNavigationTransition(c, h, y) {
            const E = new nn(c.id, this.serializeUrl(c.extractedUrl), h, y);
            this.triggerEvent(E), c.resolve(!1);
          }
          generateNgRouterState(c, h) {
            return 'computed' === this.canceledNavigationResolution
              ? { navigationId: c, ɵrouterPageId: h }
              : { navigationId: c };
          }
        }
        return (
          (u.ɵfac = function (c) {
            a.$Z();
          }),
          (u.ɵprov = a.Yz7({
            token: u,
            factory: function () {
              return Vs();
            },
            providedIn: 'root'
          })),
          u
        );
      })();
      function Jo(u) {
        return 'imperative' !== u;
      }
      let Us = (() => {
          class u {
            constructor(c, h, y, E, O) {
              (this.router = c),
                (this.route = h),
                (this.tabIndexAttribute = y),
                (this.renderer = E),
                (this.el = O),
                (this._preserveFragment = !1),
                (this._skipLocationChange = !1),
                (this._replaceUrl = !1),
                (this.commands = null),
                (this.onChanges = new H.x()),
                this.setTabIndexIfNotOnNativeEl('0');
            }
            set preserveFragment(c) {
              this._preserveFragment = (0, a.D6c)(c);
            }
            get preserveFragment() {
              return this._preserveFragment;
            }
            set skipLocationChange(c) {
              this._skipLocationChange = (0, a.D6c)(c);
            }
            get skipLocationChange() {
              return this._skipLocationChange;
            }
            set replaceUrl(c) {
              this._replaceUrl = (0, a.D6c)(c);
            }
            get replaceUrl() {
              return this._replaceUrl;
            }
            setTabIndexIfNotOnNativeEl(c) {
              if (null != this.tabIndexAttribute) return;
              const h = this.renderer,
                y = this.el.nativeElement;
              null !== c ? h.setAttribute(y, 'tabindex', c) : h.removeAttribute(y, 'tabindex');
            }
            ngOnChanges(c) {
              this.onChanges.next(this);
            }
            set routerLink(c) {
              null != c
                ? ((this.commands = Array.isArray(c) ? c : [c]), this.setTabIndexIfNotOnNativeEl('0'))
                : ((this.commands = null), this.setTabIndexIfNotOnNativeEl(null));
            }
            onClick() {
              return (
                null === this.urlTree ||
                  this.router.navigateByUrl(this.urlTree, {
                    skipLocationChange: this.skipLocationChange,
                    replaceUrl: this.replaceUrl,
                    state: this.state
                  }),
                !0
              );
            }
            get urlTree() {
              return null === this.commands
                ? null
                : this.router.createUrlTree(this.commands, {
                    relativeTo: void 0 !== this.relativeTo ? this.relativeTo : this.route,
                    queryParams: this.queryParams,
                    fragment: this.fragment,
                    queryParamsHandling: this.queryParamsHandling,
                    preserveFragment: this.preserveFragment
                  });
            }
          }
          return (
            (u.ɵfac = function (c) {
              return new (c || u)(a.Y36(pn), a.Y36(wr), a.$8M('tabindex'), a.Y36(a.Qsj), a.Y36(a.SBq));
            }),
            (u.ɵdir = a.lG2({
              type: u,
              selectors: [['', 'routerLink', '', 5, 'a', 5, 'area']],
              hostBindings: function (c, h) {
                1 & c &&
                  a.NdJ('click', function () {
                    return h.onClick();
                  });
              },
              inputs: {
                queryParams: 'queryParams',
                fragment: 'fragment',
                queryParamsHandling: 'queryParamsHandling',
                state: 'state',
                relativeTo: 'relativeTo',
                preserveFragment: 'preserveFragment',
                skipLocationChange: 'skipLocationChange',
                replaceUrl: 'replaceUrl',
                routerLink: 'routerLink'
              },
              standalone: !0,
              features: [a.TTD]
            })),
            u
          );
        })(),
        bi = (() => {
          class u {
            constructor(c, h, y) {
              (this.router = c),
                (this.route = h),
                (this.locationStrategy = y),
                (this._preserveFragment = !1),
                (this._skipLocationChange = !1),
                (this._replaceUrl = !1),
                (this.commands = null),
                (this.href = null),
                (this.onChanges = new H.x()),
                (this.subscription = c.events.subscribe((E) => {
                  E instanceof Yn && this.updateTargetUrlAndHref();
                }));
            }
            set preserveFragment(c) {
              this._preserveFragment = (0, a.D6c)(c);
            }
            get preserveFragment() {
              return this._preserveFragment;
            }
            set skipLocationChange(c) {
              this._skipLocationChange = (0, a.D6c)(c);
            }
            get skipLocationChange() {
              return this._skipLocationChange;
            }
            set replaceUrl(c) {
              this._replaceUrl = (0, a.D6c)(c);
            }
            get replaceUrl() {
              return this._replaceUrl;
            }
            set routerLink(c) {
              this.commands = null != c ? (Array.isArray(c) ? c : [c]) : null;
            }
            ngOnChanges(c) {
              this.updateTargetUrlAndHref(), this.onChanges.next(this);
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            onClick(c, h, y, E, O) {
              return (
                !!(
                  0 !== c ||
                  h ||
                  y ||
                  E ||
                  O ||
                  ('string' == typeof this.target && '_self' != this.target) ||
                  null === this.urlTree
                ) ||
                (this.router.navigateByUrl(this.urlTree, {
                  skipLocationChange: this.skipLocationChange,
                  replaceUrl: this.replaceUrl,
                  state: this.state
                }),
                !1)
              );
            }
            updateTargetUrlAndHref() {
              this.href =
                null !== this.urlTree
                  ? this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree))
                  : null;
            }
            get urlTree() {
              return null === this.commands
                ? null
                : this.router.createUrlTree(this.commands, {
                    relativeTo: void 0 !== this.relativeTo ? this.relativeTo : this.route,
                    queryParams: this.queryParams,
                    fragment: this.fragment,
                    queryParamsHandling: this.queryParamsHandling,
                    preserveFragment: this.preserveFragment
                  });
            }
          }
          return (
            (u.ɵfac = function (c) {
              return new (c || u)(a.Y36(pn), a.Y36(wr), a.Y36(J.S$));
            }),
            (u.ɵdir = a.lG2({
              type: u,
              selectors: [
                ['a', 'routerLink', ''],
                ['area', 'routerLink', '']
              ],
              hostVars: 2,
              hostBindings: function (c, h) {
                1 & c &&
                  a.NdJ('click', function (E) {
                    return h.onClick(E.button, E.ctrlKey, E.shiftKey, E.altKey, E.metaKey);
                  }),
                  2 & c && a.uIk('target', h.target)('href', h.href, a.LSH);
              },
              inputs: {
                target: 'target',
                queryParams: 'queryParams',
                fragment: 'fragment',
                queryParamsHandling: 'queryParamsHandling',
                state: 'state',
                relativeTo: 'relativeTo',
                preserveFragment: 'preserveFragment',
                skipLocationChange: 'skipLocationChange',
                replaceUrl: 'replaceUrl',
                routerLink: 'routerLink'
              },
              standalone: !0,
              features: [a.TTD]
            })),
            u
          );
        })(),
        Bs = (() => {
          class u {
            constructor(c, h, y, E, O, N) {
              (this.router = c),
                (this.element = h),
                (this.renderer = y),
                (this.cdr = E),
                (this.link = O),
                (this.linkWithHref = N),
                (this.classes = []),
                (this.isActive = !1),
                (this.routerLinkActiveOptions = { exact: !1 }),
                (this.isActiveChange = new a.vpe()),
                (this.routerEventsSubscription = c.events.subscribe((z) => {
                  z instanceof Yn && this.update();
                }));
            }
            ngAfterContentInit() {
              (0, L.of)(this.links.changes, this.linksWithHrefs.changes, (0, L.of)(null))
                .pipe((0, Ot.J)())
                .subscribe((c) => {
                  this.update(), this.subscribeToEachLinkOnChanges();
                });
            }
            subscribeToEachLinkOnChanges() {
              var c;
              null === (c = this.linkInputChangesSubscription) || void 0 === c || c.unsubscribe();
              const h = [...this.links.toArray(), ...this.linksWithHrefs.toArray(), this.link, this.linkWithHref]
                .filter((y) => !!y)
                .map((y) => y.onChanges);
              this.linkInputChangesSubscription = (0, i.D)(h)
                .pipe((0, Ot.J)())
                .subscribe((y) => {
                  this.isActive !== this.isLinkActive(this.router)(y) && this.update();
                });
            }
            set routerLinkActive(c) {
              const h = Array.isArray(c) ? c : c.split(' ');
              this.classes = h.filter((y) => !!y);
            }
            ngOnChanges(c) {
              this.update();
            }
            ngOnDestroy() {
              var c;
              this.routerEventsSubscription.unsubscribe(),
                null === (c = this.linkInputChangesSubscription) || void 0 === c || c.unsubscribe();
            }
            update() {
              !this.links ||
                !this.linksWithHrefs ||
                !this.router.navigated ||
                Promise.resolve().then(() => {
                  const c = this.hasActiveLinks();
                  this.isActive !== c &&
                    ((this.isActive = c),
                    this.cdr.markForCheck(),
                    this.classes.forEach((h) => {
                      c
                        ? this.renderer.addClass(this.element.nativeElement, h)
                        : this.renderer.removeClass(this.element.nativeElement, h);
                    }),
                    c && void 0 !== this.ariaCurrentWhenActive
                      ? this.renderer.setAttribute(
                          this.element.nativeElement,
                          'aria-current',
                          this.ariaCurrentWhenActive.toString()
                        )
                      : this.renderer.removeAttribute(this.element.nativeElement, 'aria-current'),
                    this.isActiveChange.emit(c));
                });
            }
            isLinkActive(c) {
              const h = (function Ko(u) {
                return !!u.paths;
              })(this.routerLinkActiveOptions)
                ? this.routerLinkActiveOptions
                : this.routerLinkActiveOptions.exact || !1;
              return (y) => !!y.urlTree && c.isActive(y.urlTree, h);
            }
            hasActiveLinks() {
              const c = this.isLinkActive(this.router);
              return (
                (this.link && c(this.link)) ||
                (this.linkWithHref && c(this.linkWithHref)) ||
                this.links.some(c) ||
                this.linksWithHrefs.some(c)
              );
            }
          }
          return (
            (u.ɵfac = function (c) {
              return new (c || u)(a.Y36(pn), a.Y36(a.SBq), a.Y36(a.Qsj), a.Y36(a.sBO), a.Y36(Us, 8), a.Y36(bi, 8));
            }),
            (u.ɵdir = a.lG2({
              type: u,
              selectors: [['', 'routerLinkActive', '']],
              contentQueries: function (c, h, y) {
                if ((1 & c && (a.Suo(y, Us, 5), a.Suo(y, bi, 5)), 2 & c)) {
                  let E;
                  a.iGM((E = a.CRH())) && (h.links = E), a.iGM((E = a.CRH())) && (h.linksWithHrefs = E);
                }
              },
              inputs: {
                routerLinkActiveOptions: 'routerLinkActiveOptions',
                ariaCurrentWhenActive: 'ariaCurrentWhenActive',
                routerLinkActive: 'routerLinkActive'
              },
              outputs: { isActiveChange: 'isActiveChange' },
              exportAs: ['routerLinkActive'],
              standalone: !0,
              features: [a.TTD]
            })),
            u
          );
        })();
      class Ma {}
      let bc = (() => {
        class u {
          constructor(c, h, y, E, O) {
            (this.router = c), (this.injector = y), (this.preloadingStrategy = E), (this.loader = O);
          }
          setUpPreloading() {
            this.subscription = this.router.events
              .pipe(
                (0, re.h)((c) => c instanceof Yn),
                Ce(() => this.preload())
              )
              .subscribe(() => {});
          }
          preload() {
            return this.processRoutes(this.injector, this.router.config);
          }
          ngOnDestroy() {
            this.subscription && this.subscription.unsubscribe();
          }
          processRoutes(c, h) {
            var y, E, O;
            const N = [];
            for (const z of h) {
              z.providers && !z._injector && (z._injector = (0, a.MMx)(z.providers, c, `Route: ${z.path}`));
              const Pe = null !== (y = z._injector) && void 0 !== y ? y : c,
                We = null !== (E = z._loadedInjector) && void 0 !== E ? E : Pe;
              (z.loadChildren && !z._loadedRoutes && void 0 === z.canLoad) || (z.loadComponent && !z._loadedComponent)
                ? N.push(this.preloadConfig(Pe, z))
                : (z.children || z._loadedRoutes) &&
                  N.push(this.processRoutes(We, null !== (O = z.children) && void 0 !== O ? O : z._loadedRoutes));
            }
            return (0, i.D)(N).pipe((0, Ot.J)());
          }
          preloadConfig(c, h) {
            return this.preloadingStrategy.preload(h, () => {
              let y;
              y = h.loadChildren && void 0 === h.canLoad ? this.loader.loadChildren(c, h) : (0, L.of)(null);
              const E = y.pipe(
                (0, Te.z)((O) => {
                  var N;
                  return null === O
                    ? (0, L.of)(void 0)
                    : ((h._loadedRoutes = O.routes),
                      (h._loadedInjector = O.injector),
                      this.processRoutes(null !== (N = O.injector) && void 0 !== N ? N : c, O.routes));
                })
              );
              if (h.loadComponent && !h._loadedComponent) {
                const O = this.loader.loadComponent(h);
                return (0, i.D)([E, O]).pipe((0, Ot.J)());
              }
              return E;
            });
          }
        }
        return (
          (u.ɵfac = function (c) {
            return new (c || u)(a.LFG(pn), a.LFG(a.Sil), a.LFG(a.lqb), a.LFG(Ma), a.LFG(Mo));
          }),
          (u.ɵprov = a.Yz7({ token: u, factory: u.ɵfac, providedIn: 'root' })),
          u
        );
      })();
      const qi = new a.OlP('');
      let Wi = (() => {
        class u {
          constructor(c, h, y = {}) {
            (this.router = c),
              (this.viewportScroller = h),
              (this.options = y),
              (this.lastId = 0),
              (this.lastSource = 'imperative'),
              (this.restoredId = 0),
              (this.store = {}),
              (y.scrollPositionRestoration = y.scrollPositionRestoration || 'disabled'),
              (y.anchorScrolling = y.anchorScrolling || 'disabled');
          }
          init() {
            'disabled' !== this.options.scrollPositionRestoration &&
              this.viewportScroller.setHistoryScrollRestoration('manual'),
              (this.routerEventsSubscription = this.createScrollEvents()),
              (this.scrollEventsSubscription = this.consumeScrollEvents());
          }
          createScrollEvents() {
            return this.router.events.subscribe((c) => {
              c instanceof Dr
                ? ((this.store[this.lastId] = this.viewportScroller.getScrollPosition()),
                  (this.lastSource = c.navigationTrigger),
                  (this.restoredId = c.restoredState ? c.restoredState.navigationId : 0))
                : c instanceof Yn &&
                  ((this.lastId = c.id),
                  this.scheduleScrollEvent(c, this.router.parseUrl(c.urlAfterRedirects).fragment));
            });
          }
          consumeScrollEvents() {
            return this.router.events.subscribe((c) => {
              c instanceof oi &&
                (c.position
                  ? 'top' === this.options.scrollPositionRestoration
                    ? this.viewportScroller.scrollToPosition([0, 0])
                    : 'enabled' === this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition(c.position)
                  : c.anchor && 'enabled' === this.options.anchorScrolling
                  ? this.viewportScroller.scrollToAnchor(c.anchor)
                  : 'disabled' !== this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition([0, 0]));
            });
          }
          scheduleScrollEvent(c, h) {
            this.router.triggerEvent(new oi(c, 'popstate' === this.lastSource ? this.store[this.restoredId] : null, h));
          }
          ngOnDestroy() {
            this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(),
              this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
          }
        }
        return (
          (u.ɵfac = function (c) {
            a.$Z();
          }),
          (u.ɵprov = a.Yz7({ token: u, factory: u.ɵfac })),
          u
        );
      })();
      function Io(u, d) {
        return { ɵkind: u, ɵproviders: d };
      }
      function Ei(u) {
        return [{ provide: ks, multi: !0, useValue: u }];
      }
      function wc() {
        const u = (0, a.f3M)(a.zs3);
        return (d) => {
          var c, h;
          const y = u.get(a.z2F);
          if (d !== y.components[0]) return;
          const E = u.get(pn),
            O = u.get(Ta);
          1 === u.get(Pt) && E.initialNavigation(),
            null === (c = u.get(Ec, null, a.XFs.Optional)) || void 0 === c || c.setUpPreloading(),
            null === (h = u.get(qi, null, a.XFs.Optional)) || void 0 === h || h.init(),
            E.resetRootComponentType(y.componentTypes[0]),
            O.closed || (O.next(), O.unsubscribe());
        };
      }
      const Ta = new a.OlP('', { factory: () => new H.x() }),
        Pt = new a.OlP('', { providedIn: 'root', factory: () => 1 });
      const Ec = new a.OlP('');
      function Qu(u) {
        return Io(0, [
          { provide: Ec, useExisting: bc },
          { provide: Ma, useExisting: u }
        ]);
      }
      const xc = new a.OlP('ROUTER_FORROOT_GUARD'),
        Ju = [
          J.Ye,
          { provide: tr, useClass: Rn },
          { provide: pn, useFactory: Vs },
          _o,
          {
            provide: wr,
            useFactory: function To(u) {
              return u.routerState.root;
            },
            deps: [pn]
          },
          Mo
        ];
      function cn() {
        return new a.PXZ('Router', pn);
      }
      let Hs = (() => {
        class u {
          constructor(c) {}
          static forRoot(c, h) {
            return {
              ngModule: u,
              providers: [
                Ju,
                [],
                Ei(c),
                { provide: xc, useFactory: Jn, deps: [[pn, new a.FiY(), new a.tp0()]] },
                { provide: xo, useValue: h || {} },
                null != h && h.useHash ? { provide: J.S$, useClass: J.Do } : { provide: J.S$, useClass: J.b0 },
                {
                  provide: qi,
                  useFactory: () => {
                    const u = (0, a.f3M)(pn),
                      d = (0, a.f3M)(J.EM),
                      c = (0, a.f3M)(xo);
                    return c.scrollOffset && d.setOffset(c.scrollOffset), new Wi(u, d, c);
                  }
                },
                null != h && h.preloadingStrategy ? Qu(h.preloadingStrategy).ɵproviders : [],
                { provide: a.PXZ, multi: !0, useFactory: cn },
                null != h && h.initialNavigation ? Br(h) : [],
                [
                  { provide: $s, useFactory: wc },
                  { provide: a.tb, multi: !0, useExisting: $s }
                ]
              ]
            };
          }
          static forChild(c) {
            return { ngModule: u, providers: [Ei(c)] };
          }
        }
        return (
          (u.ɵfac = function (c) {
            return new (c || u)(a.LFG(xc, 8));
          }),
          (u.ɵmod = a.oAB({ type: u })),
          (u.ɵinj = a.cJS({ imports: [ir] })),
          u
        );
      })();
      function Jn(u) {
        return 'guarded';
      }
      function Br(u) {
        return [
          'disabled' === u.initialNavigation
            ? Io(3, [
                {
                  provide: a.ip1,
                  multi: !0,
                  useFactory: () => {
                    const d = (0, a.f3M)(pn);
                    return () => {
                      d.setUpLocationChangeListener();
                    };
                  }
                },
                { provide: Pt, useValue: 2 }
              ]).ɵproviders
            : [],
          'enabledBlocking' === u.initialNavigation
            ? Io(2, [
                { provide: Pt, useValue: 0 },
                {
                  provide: a.ip1,
                  multi: !0,
                  deps: [a.zs3],
                  useFactory: (d) => {
                    const c = d.get(J.V_, Promise.resolve());
                    let h = !1;
                    return () =>
                      c.then(
                        () =>
                          new Promise((E) => {
                            const O = d.get(pn),
                              N = d.get(Ta);
                            (function y(E) {
                              d.get(pn)
                                .events.pipe(
                                  (0, re.h)((N) => N instanceof Yn || N instanceof nn || N instanceof On),
                                  (0, te.U)(
                                    (N) =>
                                      N instanceof Yn || (N instanceof nn && (0 === N.code || 1 === N.code) && null)
                                  ),
                                  (0, re.h)((N) => null !== N),
                                  (0, Ae.q)(1)
                                )
                                .subscribe(() => {
                                  E();
                                });
                            })(() => {
                              E(!0), (h = !0);
                            }),
                              (O.afterPreactivation = () => (E(!0), h || N.closed ? (0, L.of)(void 0) : N)),
                              O.initialNavigation();
                          })
                      );
                  }
                }
              ]).ɵproviders
            : []
        ];
      }
      const $s = new a.OlP('');
    },
    7582: (Ge, he, w) => {
      'use strict';
      function ge(G, ee, q, fe) {
        return new (q || (q = Promise))(function (pe, Je) {
          function et(He) {
            try {
              je(fe.next(He));
            } catch (Ct) {
              Je(Ct);
            }
          }
          function Ot(He) {
            try {
              je(fe.throw(He));
            } catch (Ct) {
              Je(Ct);
            }
          }
          function je(He) {
            He.done
              ? pe(He.value)
              : (function De(pe) {
                  return pe instanceof q
                    ? pe
                    : new q(function (Je) {
                        Je(pe);
                      });
                })(He.value).then(et, Ot);
          }
          je((fe = fe.apply(G, ee || [])).next());
        });
      }
      function H(G) {
        return this instanceof H ? ((this.v = G), this) : new H(G);
      }
      function J(G, ee, q) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var De,
          fe = q.apply(G, ee || []),
          pe = [];
        return (
          (De = {}),
          Je('next'),
          Je('throw'),
          Je('return'),
          (De[Symbol.asyncIterator] = function () {
            return this;
          }),
          De
        );
        function Je(xt) {
          fe[xt] &&
            (De[xt] = function (Ut) {
              return new Promise(function (Jt, Kt) {
                pe.push([xt, Ut, Jt, Kt]) > 1 || et(xt, Ut);
              });
            });
        }
        function et(xt, Ut) {
          try {
            !(function Ot(xt) {
              xt.value instanceof H ? Promise.resolve(xt.value.v).then(je, He) : Ct(pe[0][2], xt);
            })(fe[xt](Ut));
          } catch (Jt) {
            Ct(pe[0][3], Jt);
          }
        }
        function je(xt) {
          et('next', xt);
        }
        function He(xt) {
          et('throw', xt);
        }
        function Ct(xt, Ut) {
          xt(Ut), pe.shift(), pe.length && et(pe[0][0], pe[0][1]);
        }
      }
      function Ue(G) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var q,
          ee = G[Symbol.asyncIterator];
        return ee
          ? ee.call(G)
          : ((G = (function R(G) {
              var ee = 'function' == typeof Symbol && Symbol.iterator,
                q = ee && G[ee],
                fe = 0;
              if (q) return q.call(G);
              if (G && 'number' == typeof G.length)
                return {
                  next: function () {
                    return G && fe >= G.length && (G = void 0), { value: G && G[fe++], done: !G };
                  }
                };
              throw new TypeError(ee ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
            })(G)),
            (q = {}),
            fe('next'),
            fe('throw'),
            fe('return'),
            (q[Symbol.asyncIterator] = function () {
              return this;
            }),
            q);
        function fe(pe) {
          q[pe] =
            G[pe] &&
            function (Je) {
              return new Promise(function (et, Ot) {
                !(function De(pe, Je, et, Ot) {
                  Promise.resolve(Ot).then(function (je) {
                    pe({ value: je, done: et });
                  }, Je);
                })(et, Ot, (Je = G[pe](Je)).done, Je.value);
              });
            };
        }
      }
      w.d(he, { FC: () => J, KL: () => Ue, mG: () => ge, qq: () => H }),
        'function' == typeof SuppressedError && SuppressedError;
    }
  },
  (Ge) => {
    Ge((Ge.s = 7985));
  }
]);
