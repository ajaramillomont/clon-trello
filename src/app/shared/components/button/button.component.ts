import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {

  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() color = 'success'

  get colors() {
    return {
      //diccionario de colores
      'text-white': this.color === 'success' || this.color === 'primary' || this.color === 'purple' || this.color === 'red',
      'text-gray': this.color === 'gray',
      'bg-success-700': this.color === 'success',
      'hover:bg-success-800': this.color === 'success',
      'focus:ring-success-300': this.color === 'success',
      'bg-purple-700': this.color === 'purple',
      'hover:bg-purple-800': this.color === 'purple',
      'focus:ring-purple-300': this.color === 'purple',
      'bg-primary-700': this.color === 'primary',
      'hover:bg-primary-800': this.color === 'primary',
      'focus:ring-primary-300': this.color === 'primary',
      'bg-red-700': this.color === 'red',
      'hover:bg-red-800': this.color === 'red',
      'focus:ring-red-300': this.color === 'red',
      'bg-gray-300': this.color === 'gray',
      'hover:bg-gray-400': this.color === 'gray',
      'focus:ring-gray-50': this.color === 'gray',
    }
  }

}
