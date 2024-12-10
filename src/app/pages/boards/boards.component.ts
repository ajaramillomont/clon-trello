import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BoardComponent } from "../board/board.component";

@Component({
  selector: 'app-boards',
  imports: [NavbarComponent, BoardComponent],
  templateUrl: './boards.component.html'
})
export class BoardsComponent {

}
