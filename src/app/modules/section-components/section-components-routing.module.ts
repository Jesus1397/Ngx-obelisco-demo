import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccessComponent } from './access/access.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CardComponent } from './card/card.component';
import { CollapseComponent } from './collapse/collapse.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PanelComponent } from './panel/panel.component';
import { MapComponent } from './map/map.component';
import { ModalComponent } from './modal/modal.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TableComponent } from './table/table.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StepsFormComponent } from './steps-form/steps-form.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { StatusMessageComponent } from './status-message/status-message.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SwitchComponent } from './switch/switch.component';
import { ListComponent } from './list/list.component';
import { BannerComponent } from './banner/banner.component';
import { ButtonComponent } from './button/button.component';
import { HighlightedComponent } from './highlighted/highlighted.component';
import { BlockComponent } from './block/block.component';
import { SearchComponent } from './search/search.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CustomContentComponent } from './custom-content/custom-content.component';
import { DefaultImageComponent } from './default-image/default-image.component';
import { AlertComponent } from './alert/alert.component';
import { BadgeComponent } from './badge/badge.component';

const routes: Routes = [
  {
    path: 'access',
    component: AccessComponent,
    loadChildren: () => import('./access/access.module').then((m) => m.AccessModule)
  },
  {
    path: 'alert',
    component: AlertComponent,
    loadChildren: () => import('./alert/alert.module').then((m) => m.AlertModule)
  },
  {
    path: 'card',
    component: CardComponent,
    loadChildren: () => import('./card/card.module').then((m) => m.CardModule)
  },
  {
    path: 'breadcrumb',
    component: BreadcrumbComponent,
    loadChildren: () => import('./breadcrumb/breadcrumb.module').then((m) => m.BreadcrumbModule)
  },
  {
    path: 'badge',
    component: BadgeComponent,
    loadChildren: () => import('./badge/badge.module').then((m) => m.BadgeModule)
  },
  {
    path: 'footer',
    component: FooterComponent,
    loadChildren: () => import('./footer/footer.module').then((m) => m.FooterModule)
  },
  {
    path: 'progress-bar',
    component: ProgressBarComponent,
    loadChildren: () => import('./progress-bar/progress-bar.module').then((m) => m.ProgressBarModule)
  },
  {
    path: 'collapse',
    component: CollapseComponent,
    loadChildren: () => import('./collapse/collapse.module').then((m) => m.CollapseModule)
  },
  {
    path: 'map',
    component: MapComponent,
    loadChildren: () => import('./map/map.module').then((m) => m.MapModule)
  },
  {
    path: 'modal',
    component: ModalComponent,
    loadChildren: () => import('./modal/modal.module').then((m) => m.ModalModule)
  },
  {
    path: 'pagination',
    component: PaginationComponent,
    loadChildren: () => import('./pagination/pagination.module').then((m) => m.PaginationModule)
  },
  {
    path: 'table',
    component: TableComponent,
    loadChildren: () => import('./table/table.module').then((m) => m.TableModule)
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    loadChildren: () => import('./gallery/gallery.module').then((m) => m.GalleryModule)
  },
  {
    path: 'navigation',
    component: NavigationComponent,
    loadChildren: () => import('./navigation/navigation.module').then((m) => m.NavigationModule)
  },
  {
    path: 'panel',
    component: PanelComponent,
    loadChildren: () => import('./panel/panel.module').then((m) => m.PanelModule)
  },
  {
    path: 'steps-form',
    component: StepsFormComponent,
    loadChildren: () => import('./steps-form/steps-form.module').then((m) => m.StepsFormModule)
  },
  {
    path: 'dropdown',
    component: DropdownComponent,
    loadChildren: () => import('./dropdown/dropdown.module').then((m) => m.DropdownModule)
  },
  {
    path: 'status-message',
    component: StatusMessageComponent,
    loadChildren: () => import('./status-message/status-message.module').then((m) => m.StatusMessageModule)
  },
  {
    path: 'spinner',
    component: SpinnerComponent,
    loadChildren: () => import('./spinner/spinner.module').then((m) => m.SpinnerModule)
  },
  {
    path: 'tooltip',
    component: TooltipComponent,
    loadChildren: () => import('./tooltip/tooltip.module').then((m) => m.TooltipModule)
  },
  {
    path: 'navbar',
    component: NavbarComponent,
    loadChildren: () => import('./navbar/navbar.module').then((m) => m.NavbarModule)
  },
  {
    path: 'switch',
    component: SwitchComponent,
    loadChildren: () => import('./switch/switch.module').then((m) => m.SwitchModule)
  },
  {
    path: 'list',
    component: ListComponent,
    loadChildren: () => import('./list/list.module').then((m) => m.ListModule)
  },
  {
    path: 'banner',
    component: BannerComponent,
    loadChildren: () => import('./banner/banner.module').then((m) => m.BannerModule)
  },
  {
    path: 'button',
    component: ButtonComponent,
    loadChildren: () => import('./button/button.module').then((m) => m.ButtonModule)
  },
  {
    path: 'highlighted',
    component: HighlightedComponent,
    loadChildren: () => import('./highlighted/highlighted.module').then((m) => m.HighlightedModule)
  },
  {
    path: 'block',
    component: BlockComponent,
    loadChildren: () => import('./block/block.module').then((m) => m.BlockModule)
  },
  {
    path: 'search',
    component: SearchComponent,
    loadChildren: () => import('./search/search.module').then((m) => m.SearchModule)
  },
  // {
  //   path: 'datepicker',
  //   component: DatepickerComponent,
  //   loadChildren: () => import('./datepicker/datepicker.module').then((m) => m.DatepickerModule)
  // },
  {
    path: 'calendar',
    component: CalendarComponent,
    loadChildren: () => import('./calendar/calendar.module').then((m) => m.CalendarModule)
  },
  {
    path: 'custom-content',
    component: CustomContentComponent,
    loadChildren: () => import('./custom-content/custom-content.module').then((m) => m.CustomContentModule)
  },
  {
    path: 'default-image',
    component: DefaultImageComponent,
    loadChildren: () => import('./default-image/default-image.module').then((m) => m.DefaultImageModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionComponentsRoutingModule {}
