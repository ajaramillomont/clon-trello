import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay'
import { ButtonComponent } from '../../shared/components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faInfoCircle }
from '@fortawesome/free-solid-svg-icons';

import {CdkAccordionModule} from '@angular/cdk/accordion';


@Component({
  selector: 'app-navbar',
  imports: [OverlayModule, ButtonComponent, FontAwesomeModule, CdkAccordionModule, CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  isOpen = false;
  isOpenBody = false;

items = [
  {
    label: 'Item 1',
    items: [
      {
        label: 'Sub Item 1.1'
      },
      {
        label: 'Sub Item 1.2'
      }
    ]
  },
  {
    label: 'Item 2',
    items: [
      {
        label: 'Sub Item 2.1'
      }
    ]
  },
  {
    label: 'Item 3',
    items: [
      {
        label: 'Sub Item 3.1'
      },
      {
        label: 'Sub Item 3.2'
      },
      {
        label: 'Sub Item 3.3'
      }
    ]
  }
]

}
