import { AfterContentChecked, Component } from '@angular/core';

import { TaskList } from '../../models/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements AfterContentChecked {
  taskList: Array<TaskList> = [];

  constructor() {}

  ngAfterContentChecked(): void {
    if (this.taskList) {
      this.sortTodoList();
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }

  sortTodoList() {
    this.taskList = this.taskList.sort(
      (a, b) => Number(a.checked) - Number(b.checked)
    );
  }

  deleteItem(event: Event, index: number) {
    event.stopPropagation();
    this.taskList.splice(index, 1);
  }

  addItem(task: TaskList) {
    this.taskList.push(task);
  }

  deleteAllChecked(result: boolean) {
    if (result)
      this.taskList = this.taskList.filter((task) => task.checked == false);
  }

  log(fool: any) {
    console.log(fool);
  }
}
