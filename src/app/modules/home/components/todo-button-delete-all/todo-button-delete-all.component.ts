import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TaskList } from '../../models/task-list';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-todo-button-delete-all',
  templateUrl: './todo-button-delete-all.component.html',
  styleUrls: ['./todo-button-delete-all.component.scss'],
})
export class TodoButtonDeleteAllComponent implements OnInit {
  @Input() taskList: Array<TaskList> = [];
  @Output() updateTaskList = new EventEmitter<boolean>();
  newTaskList: TaskList[] = [];
  dialogResult: boolean = false;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  confirmDelete() {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      disableClose: true,
      data: this.dialogResult,
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) this.updateTaskList.emit(result);
    });
  }
}
