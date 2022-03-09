import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  text?: string;
  day?: string;
  reminder: boolean = false;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if(!this.text || !this.day) {
      alert('missing data')
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.store.dispatch({ type: '[Tasks API] Create Task', task: newTask });

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
