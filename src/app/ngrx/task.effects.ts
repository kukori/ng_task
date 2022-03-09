import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { TaskService } from '../services/task.service';
import { deleteTask, createTask, toggleTaskReminder } from './task.actions';

@Injectable()
export class TaskEffects {

    loadTasks = createEffect(() => this.actions.pipe(
        ofType('[Tasks Page] Load Tasks'),
        mergeMap(() => this.taskService.getTasks()
        .pipe(
            map(tasks => ({ type: '[Tasks API] Tasks Loaded Success', tasks: tasks })),
            catchError(() => EMPTY)
        ))
        )
    );

    deleteTask = createEffect(() => this.actions.pipe(
        ofType(deleteTask),
        switchMap(action => this.taskService.deleteTask(action.task)
        .pipe(
            // tap((result) => console.log('eee', action)),
            map(result => ({ type: '[Tasks API] Delete Task Success', task: action.task })),
            catchError(() => EMPTY)
        ))
        )
    );

    createTask = createEffect(() => this.actions.pipe(
        ofType(createTask),
        mergeMap(action => this.taskService.createTask(action.task)
        .pipe(
            map(result => ({ type: '[Tasks API] Create Task Success', task: result })),
            catchError(() => EMPTY)
        ))
        )
    );

    toggleTaskReminder = createEffect(() => this.actions.pipe(
        ofType(toggleTaskReminder),
        switchMap(action => this.taskService.toggleTask(action.task)
        .pipe(
            map(result => ({ type: '[Tasks API] Toggle Task Reminder Success', task: action.task })),
            catchError(() => EMPTY)
        ))
        )
    );
 
    constructor( private actions: Actions, private taskService: TaskService ) {}
}