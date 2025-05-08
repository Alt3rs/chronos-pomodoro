import { TaskModel } from '../../Models/TaskModel';
import { TaskStateModel } from '../../Models/TaskStateModel';

export enum TaskActionsType {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
  COUNT_DOWN = 'COUNT_DOWN',
  COMPLETE_TASK = 'COMPLETE_TASK',
  CHANGE_SETTINGS = 'CHANGE_SETTINGS',
}

export type TaskActionModel =
  | {
      type: TaskActionsType.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionsType.COUNT_DOWN;
      payload: { secondsRemaining: number };
    }
  | {
      type: TaskActionsType.CHANGE_SETTINGS;
      payload: TaskStateModel['config'];
    }
  | {
      type: TaskActionsType.INTERRUPT_TASK;
    }
  | {
      type: TaskActionsType.RESET_STATE;
    }
  | {
      type: TaskActionsType.COMPLETE_TASK;
    };
