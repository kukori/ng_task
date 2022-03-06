import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

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
      const tasks = this.tasks.map(current =>
        current.id === task.id ? { ...current, reminder: !current.reminder } : current
      );  
      this.tasks = tasks;
    });
  }
}
