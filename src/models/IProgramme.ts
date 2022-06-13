import { IGame } from './IGame';
import { IResponse } from './IResponse';

export interface IProgramme {
  id: number,
  name: string,
  games: IGame[],
}

export interface IProgrammeName {
  id: number,
  name: string,
}

export interface IProgrammeResponse extends IResponse {
  resultData: IProgramme,
}

export interface IProgrammesResponse extends IResponse {
  resultData: IProgramme[],
}

export interface IProgrammeListResponse extends IResponse {
  resultData: IProgrammeName[],
}