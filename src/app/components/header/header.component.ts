import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { toggle } from '../../ngrx/app.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showAddTask: Observable<boolean>;

  constructor(private store: Store<{ showAddTask: boolean }>, private router: Router) { 
    this.showAddTask = store.select('showAddTask');
  }

  ngOnInit(): void {
  }

  toggleAddTask(): void {
    this.store.dispatch(toggle());
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
