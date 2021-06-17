import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos : Array<string> = []

  constructor() { }

  ngOnInit(): void {
  }

  submitTodo(value : string) : void{
    const box = document.querySelector('#todo') as HTMLInputElement;
    box.value = "";

    this.todos.push(value);
    this.changeBackground(this.todos.length);
  }

  deleteTodo(index : number) : Array<string>{
    return this.todos = this.todos.filter((v,i) => index !== i);
  }

  toggleComplete(index: number) : void{
    const todos = document.querySelectorAll(".todo p");
    todos.forEach((todo, i) => {
      if(index === i)
        todo.classList.toggle("completed")
    });
  }

  changeBackground(index : number) : void {
    const allTodos = document.querySelectorAll(".todo");
    allTodos.forEach((t, i) =>{
      if(i % 2 === 1)
        t.classList.add("background");
    });
  }
}
