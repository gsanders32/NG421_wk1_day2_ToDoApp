import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todos';
  todoList: any [] = [];
  todoTitle: string;

  ngOnInit() {
    // get current date minus 1
    const newDate = new Date();
    newDate.setDate(newDate.getDate() - 1);

    this.todoTitle = '';
    this.todoList = [
      // example of how to make an item in todo list
      { title: 'Install Angular CLI', isDone: false, dateAdded: newDate },
      { title: 'Test item', isDone: false, dateAdded: newDate },
    ];
  }

  // adds a todo to our list
  addTodo(): void {
    this.todoList.push({
      title: this.todoTitle,
      isDone: false,
      dateAdded: Date.now(),
      dateCompleted: ''
    });

    // resets our todoTitle variable to an empty string
    this.todoTitle = '';
  }

  finishedTodo(todo: any) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList[index].isDone = this.todoList[index].isDone === false ? true : false;
    this.todoList[index].dateCompleted = new Date();
  }

  deleteTodo(todo: any) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }

}


