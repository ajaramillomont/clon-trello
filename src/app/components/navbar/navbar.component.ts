import { Component } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay'
import { ButtonComponent } from '../../shared/components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faBell, faInfoCircle, faBox, faWaveSquare, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  imports: [OverlayModule, ButtonComponent, FontAwesomeModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;

  isOpen = false;
  isOpenBody = false;
}
