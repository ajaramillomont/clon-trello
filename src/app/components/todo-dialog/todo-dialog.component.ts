import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { DialogRef } from '@angular/cdk/dialog';
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock }
from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-todo-dialog',
  imports: [ FontAwesomeModule, CommonModule, ButtonComponent],
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {

  constructor(private dialogRef: DialogRef) { }

  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser
  faTag = faTag
  faCheckSquare = faCheckSquare
  faClock = faClock

  close() {
    this.dialogRef.close();
  }
}
