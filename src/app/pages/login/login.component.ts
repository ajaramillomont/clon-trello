import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';
@Component({
  selector: 'app-login',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './login.component.html'
})
export class LoginComponent {

}
