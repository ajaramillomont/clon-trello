import { Component } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay'
import { ButtonComponent } from '../../shared/components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  imports: [OverlayModule, ButtonComponent, FontAwesomeModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  isOpen = false;
  isOpenBody = false;
}
