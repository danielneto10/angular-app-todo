import { Pipe, PipeTransform } from '@angular/core';
import { TaskList } from '../models/task-list';

@Pipe({
  name: 'filterTodoList',
})
export class FilterTodoListPipe implements PipeTransform {
  transform(value: TaskList[], checked: boolean): TaskList[] {
    if (checked) {
      return value.filter((task) => task.checked === true);
    }
    console.log(value);
    return value;
  }
}
