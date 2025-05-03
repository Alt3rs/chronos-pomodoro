import { TaskModel } from '../../Models/TaskModel';

export enum TaskActionsType {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
}

export type TaskActionModel =
  | {
      type: TaskActionsType.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionsType.INTERRUPT_TASK;
    }
  | {
      type: TaskActionsType.RESET_STATE;
    };
