import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Observable<Task[]>;
  showAddTask: Observable<boolean>;

  constructor(private store: Store<{ showAddTask: boolean, tasks: Task[] }>) { 
    this.showAddTask = store.select('showAddTask');
    this.tasks = store.select(state => state.tasks);
  }

  ngOnInit(): void {
    this.store.dispatch({ type: '[Tasks Page] Load Tasks' });
  }
}
