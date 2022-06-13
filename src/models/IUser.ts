import { IResponse } from './IResponse';

export interface IUser {
  token: string,
  surname: string,
  name: string,
  email: string,
  profession: string, 
}

export interface IUserName {
  token: string,
  surname: string,
  name: string,
}

export interface ILogin {
  email: string,
  password: string,
}

export interface IUserData {
  token: string,
  surname: string,
  userName: string,
  email: string,
  profession: string, 
}

export interface IUserResponse extends IResponse {
  resultData: IUserData,
}