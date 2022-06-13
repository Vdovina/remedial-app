import { IAction } from "../../../models/IAction";
import { ACTIONS } from "./constants";
import { LOADING_STATUS } from "../../../constants/loadingStatuses";
import { IProgramme, IProgrammeName } from "../../../models/IProgramme";
import { IGame } from "../../../models/IGame";
import { ProgrammeCardType } from "../components/ProgrammeFormation";
import { STATUSES } from "../constants/statuses";

interface IProgrammeState {
  programmes: IProgramme[],
  games: IGame[],
  programmesLoading: string,
  gamesLoading: string,
  form: {
    id?: number,
    programmeName: string,
    programmeGames: ProgrammeCardType[],
    status: string,
  }
}

const initialState : IProgrammeState = {
  programmes: [],
  games: [],
  programmesLoading: LOADING_STATUS.IDLE,
  gamesLoading: LOADING_STATUS.IDLE,
  form: {
    programmeName: '',
    programmeGames: [],
    status: STATUSES.NEW,
  },
};

const reducer = (
  state : IProgrammeState = initialState,
  action: IAction,
) : IProgrammeState => {
  function _processEditProgrammeStart(state: IProgrammeState, id: number) : IProgrammeState {
    const currentProgramme = state.programmes.find(programme => programme.id === id);
    if (currentProgramme) {
      const processedGames = currentProgramme.games?.map(
        (game : any) => ({
          id: game.programGameID,
          programGameId: game.programGameID,
          gameId: game.gameID,
          name: game.gameName,
          timing: game.gameTiming,
        })
      );
      return ({
        ...state,
        form: {
          id: currentProgramme.id,
          programmeName: currentProgramme.name,
          programmeGames: processedGames,
          status: STATUSES.EDIT,
        }
      });
    }
    return state;
  }

  switch(action.type) {
    case ACTIONS.SET_PROGRAMME_GAMES:
      return ({
        ...state,
        form: {
          ...state.form,
          programmeGames: action.payload,
        },
      });
    case ACTIONS.SET_GAME_TIME:
      return ({
        ...state,
        form: {
          ...state.form,
          programmeGames: state.form.programmeGames.map(
            game => game.id === action.payload.id ? {...game, timing: action.payload.timing} : game
          ),
        },
      });
    case ACTIONS.SET_PROGRAMME_NAME:
      return ({
        ...state,
        form: {
          ...state.form,
          programmeName: action.payload,
        },
      });
    case ACTIONS.LOAD_PROGRAMMES:
      return ({
        ...state,
        programmesLoading: LOADING_STATUS.LOADING,
      });
    case ACTIONS.LOAD_PROGRAMMES_SUCCESS:
      return ({
        ...state,
        programmes: action.payload,
        programmesLoading: LOADING_STATUS.DONE,
      });
    case ACTIONS.LOAD_PROGRAMMES_FAIL:
      return ({
        ...state,
        programmesLoading: LOADING_STATUS.ERROR,
      });
    case ACTIONS.LOAD_GAMES:
      return ({
        ...state,
        gamesLoading: LOADING_STATUS.LOADING,
      });
    case ACTIONS.LOAD_GAMES_SUCCESS:
      return ({
        ...state,
        games: action.payload,
        gamesLoading: action.payload?.length === 0 ? LOADING_STATUS.EMPTY : LOADING_STATUS.DONE,
      });
    case ACTIONS.LOAD_GAMES_FAIL:
      return ({
        ...state,
        gamesLoading: LOADING_STATUS.ERROR,
      });


    case ACTIONS.SAVE_NEW_PROGRAMME_FAIL:
      return ({
        ...state,
        form: {
          ...state.form,
          status: STATUSES.FAILED,
        }
      });
    case ACTIONS.SAVE_EDIT_PROGRAMME_FAIL:
      return ({
        ...state,
        form: {
          ...state.form,
          status: STATUSES.FAILED,
        }
      });
    case ACTIONS.DELETE_PROGRAMME_FAIL:
      return ({
        ...state,
        form: {
          ...state.form,
          status: STATUSES.FAILED,
        }
      });

    case ACTIONS.START_NEW_PROGRAMME:
      return ({
        ...state,
        form: {
          ...initialState.form,
        }
      });
    case ACTIONS.START_EDIT_PROGRAMME:
      return _processEditProgrammeStart(state, action.payload);
    default:
      return state;
  }
}

export default reducer;