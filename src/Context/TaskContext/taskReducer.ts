import { TaskStateModel } from '../../Models/TaskStateModel';
import { FormatSecondsToMinutes } from '../../utils/FormatSecondsToMinutes';
import { getNextCycle } from '../../utils/getNextCycle';
import { TaskActionModel, TaskActionsType } from './taskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionsType.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaining = newTask.duration * 60;

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondRemaining: FormatSecondsToMinutes(secondsRemaining),
        tasks: [...state.tasks, newTask],
      };
    }
    case TaskActionsType.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask?.id && state.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    }
    case TaskActionsType.COMPLETE_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask?.id && state.activeTask.id === task.id) {
            return { ...task, completeDate: Date.now() };
          }
          return task;
        }),
      };
    }
    case TaskActionsType.RESET_STATE: {
      return state;
    }
    case TaskActionsType.COUNT_DOWN: {
      return {
        ...state,
        secondsRemaining: action.payload.secondsRemaining,
        formattedSecondRemaining: FormatSecondsToMinutes(
          action.payload.secondsRemaining,
        ),
      };
    }
  }
  return state;
}
