import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  showAddTask?: boolean;
  subsciption?: Subscription;

  constructor(private taskService: TaskService, private uiService: UiService) { 
    this.subsciption = this.uiService.onToggle().subscribe(
      (value) => { this.showAddTask = value; }
    )
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => 
      this.tasks = this.tasks.filter(current => current.id !== task.id)
    );
  }

  toggleTask(task: Task) {
    this.taskService.toggleTask(task).subscribe(() => {
      task.reminder = !task.reminder
    });
  }

  addTask(task: Task) {
    this.taskService.createTask(task).subscribe((task) => {
      this.tasks.push(task);
    })
  }
}
