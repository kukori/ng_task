import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.httpClient.delete<Task>(url);
  }

  toggleTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.httpClient.put<Task>(url, {...task, reminder: !task.reminder}, httpOptions);
  }

  createTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.apiUrl, task, httpOptions);
  }
}
