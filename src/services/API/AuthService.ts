import axios from 'axios';
import { ILogin } from '../../models/IUser';
import { API_ROUTES } from "../../constants/routes";

export class AuthService {
  /**
   * Authorize user
   * @param {ILogin} data
   * @param {String} data.email
   * @param {String} data.password
   * @returns {Promise}
   */
  static authorize(params: ILogin) {
    // return fetch(API_ROUTES.LOGIN, {
    //   method: 'GET',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify(params),
    //   credentials: 'include',
    // }).then(res => res.json());
    // return axios.request({
    //   method: 'GET',
    //   url: API_ROUTES.LOGIN,
    //   headers: {'Content-Type': 'application/json'},
    //   params: params,
    //   withCredentials: true,
    // }).then(res => res.data);
    return axios
      .get(API_ROUTES.LOGIN, { params, withCredentials: true })
      .then(res => res.data);
  }

  static logout() {
    return axios.post(API_ROUTES.LOGOUT);
  }

  /**
   * Get user info
   * @param {number} id
   * @returns {Promise}
   */
   static getUserInfo = (id : number) => {
    return axios.request({
      method: 'GET',
      url: API_ROUTES.USER_INFO,
      data: id,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  };

  static register = (userData: any) => {
    return axios
      .post(API_ROUTES.REGISTER, userData)
      .then(res => res.data);
  };

}