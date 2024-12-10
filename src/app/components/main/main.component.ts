import { Component } from '@angular/core';
import {
  faBell,
  faInfoCircle,
  faBox,
  faWaveSquare,
  faClock,
  faAngleUp,
  faAngleDown,
  faHeart,
  faBorderAll,
  faUsers,
  faGear, }
from '@fortawesome/free-solid-svg-icons';

import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@Component({
  selector: 'app-main',
  imports: [FontAwesomeModule, CdkAccordionModule],
  templateUrl: './main.component.html'
})
export class MainComponent {
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;
}
