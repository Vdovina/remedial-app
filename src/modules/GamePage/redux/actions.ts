import { SelectOption } from "../../../components/Select";
import { IChildName } from "../../../models/IChild";
import { ACTIONS } from "./constants";

export const loadChildren = () => ({
  type: ACTIONS.LOAD_CHILDREN,
});

export const loadChildrenSuccess = (children: SelectOption[]) => ({
  type: ACTIONS.LOAD_CHILDREN_SUCCESS,
  payload: children,
});

export const loadChildrenFail = (error: any) => ({
  type: ACTIONS.LOAD_CHILDREN_FAIL,
  payload: error,
});

export const saveResults = (
  mistakeCount: number,
  timing: number,
  childId: number,
) => ({
  type: ACTIONS.SAVE_RESULTS,
  payload: {
    mistakeCount,
    timing,
    childId,
  }
});

export const setCurrentGame = (game: any) => ({
  type: ACTIONS.SET_CURRENT_GAME,
  payload: game,
});

export const setCurrentGameOrder = () => ({
  type: ACTIONS.SET_CUURENT_GAME_ORDER,
});


export const loadCurrentProgramme = (id: number, navigate: any) => ({
  type: ACTIONS.LOAD_CURRENT_PROGRAMME,
  payload: {
    id,
    navigate,
  },
});

export const loadCurrentProgrammeSuccess = (programme: any[]) => ({
  type: ACTIONS.LOAD_CURRENT_PROGRAMME_SUCCESS,
  payload: programme,
});

export const loadCurrentProgrammeFail = (error: any) => ({
  type: ACTIONS.LOAD_CURRENT_PROGRAMME_FAIL,
  payload: error,
});