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
  id?: number,
  gameOrder: number,
  gameTiming: number,
  gameID: number,
}

export interface IGameResponse extends IResponse {
  resultData: IGame,
}

export interface IGameListResponse extends IResponse {
  resultData: IGame[],
}