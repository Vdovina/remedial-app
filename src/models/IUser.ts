import { IResponse } from './IResponse';

export interface IUser {
  id: number,
  surname: string,
  name: string,
  email: string,
  profession: string, 
}

export interface IUserName {
  id: number,
  surname: string,
  name: string,
}

export interface ILogin {
  email: string,
  password: string,
}

export interface IUserData {
  id: number,
  surname: string,
  userName: string,
  email: string,
  profession: string, 
}

export interface IUserResponse extends IResponse {
  resultData: IUserData,
}