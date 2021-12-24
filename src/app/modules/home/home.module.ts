import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';

import { HeaderComponent } from './components/header/header.component';
import { DeleteDialogComponent } from './components/todo-button-delete-all/delete-dialog/delete-dialog.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FilterTodoListPipe } from './helpers/filter-todo-list.pipe';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent,
    DeleteDialogComponent,
    FilterTodoListPipe,
  ],
  imports: [CommonModule, AngularMaterialModule, FormsModule],
})
export class HomeModule {}
