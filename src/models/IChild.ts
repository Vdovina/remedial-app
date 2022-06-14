import { IProgramme } from './IProgramme';
import { IResponse } from './IResponse';

export interface IChild {
  id: number,
  surname: string,
  name: string,
  birthDate: string,
  diagnosis: string,
  parentPhone: string,
  info?: string,
  programId?: number | null,
}

export interface IChildData {
  surname: string,
  name: string,
  birthDate: string,
  diagnosis?: string,
  parentPhone?: string,
  info?: string,
  programId?: number,
}

export interface IChildTableData {
  id: number,
  name: string,
  surname?: string,
  age: number,
  diagnosis: string,
  parentPhone: string,
  info?: string,
  programId?: number | null,
}

export interface IChildName {
  id: number,
  name: string,
  surname: string,
}

export interface IChildResponse extends IResponse {
  resultData: IChild,
}

export interface IChildListResponse extends IResponse {
  resultData: IChildTableData[],
}

export interface IChildNameListResponse extends IResponse {
  resultData: IChildName[],
}