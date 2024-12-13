import { Component, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock }
from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToDo } from '../../models/todo.models';
import { InputData } from '../../models/data.models';
import { OutputData } from '../../models/data.models';
@Component({
  selector: 'app-todo-dialog',
  imports: [ FontAwesomeModule, CommonModule, ButtonComponent],
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {

  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData
  ) { this.todo = data.todo}

  @Input() tasks!: ToDo[];


  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser
  faTag = faTag
  faCheckSquare = faCheckSquare
  faClock = faClock

  todo!: ToDo;

  close() {
    this.dialogRef.close({
      respuesta: true,
    });
  }

  cerrarConRespueta(respuesta: boolean) {
    this.dialogRef.close({ respuesta });
  }
}
