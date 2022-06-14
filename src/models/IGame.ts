import { IResponse } from './IResponse';

export interface IGame {
  id: number,
  code: string,
  name: string,
  description?: string,
  defaultTiming: number,
  timing?: number,
  category?: string,
  theme?: string,
  img?: string,
}

export interface IProgrammeGame {
  programGameID?: number,
  gameOrder: number,
  gameTiming: number,
  gameID: number,
  gameName?: string,
  gameCode?: string,
}

export interface IGameResponse extends IResponse {
  resultData: IGame,
}

export interface IGameListResponse extends IResponse {
  resultData: IGame[],
}

export interface IProgrammeGameResponse extends IResponse {
  resultData: IProgrammeGame[],
}