import { Component } from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay'
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-navbar',
  imports: [OverlayModule, ButtonComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isOpen = false;
}
