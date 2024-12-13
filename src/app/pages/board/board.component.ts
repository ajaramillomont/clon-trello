import { Component, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Dialog } from '@angular/cdk/dialog';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Column, ToDo } from '../../models/todo.models';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlusCircle }
from '@fortawesome/free-solid-svg-icons';
import {TodoDialogComponent} from '../../components/todo-dialog/todo-dialog.component'

@Component({
  selector: 'app-board',
  imports: [  DragDropModule,
              NavbarComponent,
              CommonModule,
              FontAwesomeModule ],
  templateUrl: './board.component.html',
  styles: [`
     /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }
    `
  ]
})
export class BoardComponent {

  //Dialog funciona como un servicio, por lo que tenemos que hacer la inyección de dependencias

  constructor(private dialog: Dialog) {}

  faPlusCircle = faPlusCircle;

  columns: Column [] = [
    {
      title: 'ToDo',
      todos: [
        {
          id: '1',
          title: 'Task 1'
        },
        {
          id: '2',
          title: 'Task 2'
        },
        {
          id: '3',
          title: 'Task 3'
        }
      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '1',
          title: 'Task 1'
        }
      ]
    },
    {
      title: 'Done',
      todos: [
        {
          id: '4',
          title: 'Titulo 4'
        }
      ]
    }
  ];


  todos: ToDo[] = [];
  doing: ToDo[] = [];
  done: ToDo[] = [];


  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<ToDo[]>){
    if(event.previousContainer === event.container) {
      //cuando el elemento se mueve en el mismo contenedor
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }else {
      //pasar de un contenedor a otro
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
  }

  addColumn() {
    this.columns.push({
      title: 'New Column',
      todos: []
    })
  }

  addTask(index: number) {
    const newTask = {
      id: '4',
      title: 'NewTask'
    };
    this.columns[index].todos.push(newTask);
    console.log(index);
  }

  openDialog (todo: ToDo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      autoFocus: false,
      data: { 
        todo: todo,
      }
    });
    dialogRef.closed.subscribe(output => {
      console.log(output);
    })
  }
}
