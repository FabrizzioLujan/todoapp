import { Component, OnInit, ViewChild, ElementRef, AfterContentInit, OnChanges,SimpleChanges, SimpleChange, HostListener} from '@angular/core';

interface Task{
  done: boolean,
  title: string
}


@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {

  title = "Mis Tareas";

  task: Array<Task> = [];

  inputTask = "Nueva Tarea"
  editing:boolean=false;
  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(){

  }

  addTask(){
    this.task.push({title: this.inputTask, done:false});

  }

  deleteTask(task: Task){
    const index: number = this.task.indexOf(task);
    if(index !== -1){
      this.task.splice(index, 1);
}
    console.log('Eliminando' + task)

  }
  }
