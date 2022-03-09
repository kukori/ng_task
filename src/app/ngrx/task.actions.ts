import { createAction, props } from '@ngrx/store';
import { Task } from '../Task';

export const tasksLoaded = createAction('[Tasks API] Tasks Loaded Success',  props<{ tasks: Task[] }>());

export const deleteTask = createAction('[Tasks API] Delete Task',  props<{ task: Task }>());

export const deleteTaskSuccess = createAction('[Tasks API] Delete Task Success',  props<{ task: Task }>());

export const createTask = createAction('[Tasks API] Create Task',  props<{ task: Task }>());

export const createTaskSuccess = createAction('[Tasks API] Create Task Success',  props<{ task: Task }>());

export const toggleTaskReminder = createAction('[Tasks API] Toggle Task Reminder',  props<{ task: Task }>());

export const toggleTaskReminderSuccess = createAction('[Tasks API] Toggle Task Reminder Success',  props<{ task: Task }>());