import {Component, OnDestroy, OnInit} from '@angular/core';

interface Task{
  done: boolean,
  title: string
}


@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit, OnDestroy {

  title = "Mis Tareas";

  task: Array<Task> = [];

  inputTask = "Nueva Tarea";

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(){

  }

  addTask(){
    this.task.push({title: this.inputTask, done:false});

  }

  deleteTask(task: Task){

    console.log('Eliminando' + task)

  }
  }
