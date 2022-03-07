import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showAddTask?: boolean;
  subsciption?: Subscription;

  constructor(private uiService: UiService) { 
    this.subsciption = this.uiService.onToggle().subscribe(
      (value) => { this.showAddTask = value; }
    )
  }

  ngOnInit(): void {
  }

  toggleAddTask(): void {
    this.uiService.toggleAddTask();
  }
}
