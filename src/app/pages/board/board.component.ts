import { Component } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { NavbarComponent } from '../../components/navbar/navbar.component';


@Component({
  selector: 'app-board',
  imports: [ DragDropModule, CdkDrag, NavbarComponent ],
  templateUrl: './board.component.html'
})
export class BoardComponent {

}
