import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task?: Task;
  faTimes = faTimes;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onDeleteClick(task?: Task): void {
    this.store.dispatch({ type: '[Tasks API] Delete Task', task: task });
  }

  onToggle(task?: Task): void {
    this.store.dispatch({ type: '[Tasks API] Toggle Task Reminder', task: task });
  }
}
