import { createReducer, on } from '@ngrx/store';
import { tasksLoaded, deleteTaskSuccess, createTaskSuccess, toggleTaskReminderSuccess } from './task.actions';
import { Task } from '../Task';
 
export const initialState: Task[] = [];
 
const _taskReducer = createReducer(
  initialState,
  on(tasksLoaded, (state, { tasks }) => tasks),
  on(deleteTaskSuccess, (state, {task}) => state.filter(element => element.id !== task.id)),
  on(createTaskSuccess, (state, {task}) => [...state, task]),
  on(toggleTaskReminderSuccess, (state, {task}) => state.map(element => element.id === task.id ? {...element, reminder: !element.reminder} : element)),
);
 
export function taskReducer(state: any, action: any) {
  return _taskReducer(state, action);
}