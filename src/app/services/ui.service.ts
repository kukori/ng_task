import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  // what we have to call to toggle
  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  // this is what we have to subscribe to be notified of the change
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
