import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Product } from '../../models/product.models';
import { ConnectService } from '../../services/apifakeplatzi/connect.service';
import {ScrollingModule} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-scroll',
  imports: [ NavbarComponent, CommonModule, ScrollingModule ],
  templateUrl: './scroll.component.html'
})
export class ScrollComponent {
  products = signal<Product[]>([]);

  //inyección de dependencias
  private connectService = inject(ConnectService);

  ngOnInit() {
    this.getProducts();
  }

  private getProducts() {
    this.connectService.geProducts().subscribe({
      next: (products) => {
        this.products.set(products);
      }
    })
  }
}
