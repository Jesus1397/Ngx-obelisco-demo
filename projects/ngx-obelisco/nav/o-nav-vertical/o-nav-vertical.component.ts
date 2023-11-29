import { Component, Input } from '@angular/core';
import { NavVerticalItems } from '@gcba/ngx-obelisco/core/models';

@Component({
  selector: 'o-nav-vertical',
  templateUrl: './o-nav-vertical.component.html',
  styleUrls: ['./o-nav-vertical.component.scss']
})
export class ONavVerticalComponent {
  @Input() public navVertItems: NavVerticalItems[] = [];

  public scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
