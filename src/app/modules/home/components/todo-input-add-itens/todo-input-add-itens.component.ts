import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskList } from '../../models/task-list';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss'],
})
export class TodoInputAddItensComponent implements OnInit {
  @Input() taskList: Array<TaskList> = [];
  @Output() emmitItemTaskList = new EventEmitter<TaskList>();

  task: string = '';

  constructor() {}

  ngOnInit(): void {}

  addItem() {
    // if (this.task) {
    //   this.taskList.push({ task: this.task, checked: false } as TaskList);
    //   this.task = '';
    // }
    this.task = this.task.trim();
    if (this.task) {
      const taskItem = { task: this.task, checked: false } as TaskList;
      this.emmitItemTaskList.emit(taskItem);
      this.task = '';
    }
  }
}
