import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
import { TASKS } from 'src/app/mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    //https://mocki.io/v1/2d36c874-daa9-4998-a7e0-3b8e07431bae
    const tasks = of(TASKS)
    return tasks;
  }
}
