import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { BoardComponent } from './pages/board/board.component';
import { ScrollComponent } from './pages/scroll/scroll.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'boards',
    component: BoardsComponent
  },
  {
    path: 'boards/board',
    component: BoardComponent
  },
  {
    path: 'scroll',
    component: ScrollComponent
  }
];
