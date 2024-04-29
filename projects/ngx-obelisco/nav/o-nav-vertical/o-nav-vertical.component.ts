import { Component, Input } from '@angular/core';
import { NavVerticalItems } from 'ngx-obelisco-example/core/models';

@Component({
  selector: 'o-nav-vertical',
  templateUrl: './o-nav-vertical.component.html',
  styleUrls: ['./o-nav-vertical.component.scss']
})
export class ONavVerticalComponent {
  @Input() public navVertItems: NavVerticalItems[] = [];
  @Input() public customClasses: string = '';

  public scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
