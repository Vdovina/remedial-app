import axios from 'axios';
import { API_ROUTES } from "../../constants/routes";
import { IChild, IChildData } from '../../models/IChild';
import { data } from '../../constants/data';

export default class ChildService {
  /**
   * Get children list
   * @param {string} token
   * @param {number} page
   * @param {number} count
   * @returns {Promise}
   */
  static getList(token: string, page: number, count: number) {
    const params = {
      token,
      page,
      count,
    };
    return axios
      .get(API_ROUTES.GET_CHILDREN, { params })
      .then(res => res.data);
  }

  /**
   * Get children list with names only
   * @param {string} token
   * @returns {Promise}
   */
   static getNames(token: string) {
    return axios
      .get(API_ROUTES.GET_CHILDREN_NAMES, { params: token })
      .then(res => res.data);
  }

  /**
   * Create new record about child
   * @param {string} token
   * @param {IChildData} data
   * @returns {Promise}
   */
  static create(token: string, data: IChildData) {
    return axios.post(API_ROUTES.CREATE_NEW_CHILD, data);
  }

  /**
   * Get info about child
   * @param {string} token
   * @param {number} childId
   * @returns {Promise}
   */
  static get(token: string, childId: number) {
    const params = {
      token,
      childId,
    };
    const url = API_ROUTES.GET_CHILD;
    return axios
      .get(url, { params })
      .then(res => res.data);
  }

  /**
   * Edit child
   * @param {string} token
   * @param {number} childData
   * @returns {Promise}
   */
  static edit(token: string, childData: IChild) {
    const data = {
      ...childData,
      token,
    };
    return axios.post(API_ROUTES.EDIT_CHILD, data).then(res => res.data);
  }

  /**
   * Delete child
   * @param {number} childId
   * @returns {Promise}
   */
  static delete(childId: number) {
    return axios
      .delete(API_ROUTES.DELETE_CHILD, { params: { childId } })
      .then(res => res.data);
  }
}