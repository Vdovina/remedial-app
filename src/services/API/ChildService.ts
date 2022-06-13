import axios from 'axios';
import { API_ROUTES } from "../../constants/routes";
import { IChild, IChildData } from '../../models/IChild';
import { data } from '../../constants/data';

export default class ChildService {
  /**
   * Get children list
   * @param {Object} userId
   * @returns {Promise}
   */
  static getChildren(userId: number, page: number, count: number) {
    const params = {
      userId,
      page,
      count,
    };
    return axios
      .get(API_ROUTES.GET_CHILDREN, { params })
      .then(res => res.data);
  }

  /**
   * Get children list with names only
   * @param {Object} userId
   * @returns {Promise}
   */
   static getChildrenNames() {
    return axios
      .get(API_ROUTES.GET_CHILDREN_NAMES, { withCredentials: true })
      .then(res => res.data);
  }

  static createNewChild(data: IChildData) {
    return axios.post(API_ROUTES.CREATE_NEW_CHILD, data);
  }

  static getChild(userId: number, childId: number) {
    const params = {
      userId,
      childId,
    };
    const url = API_ROUTES.GET_CHILD;
    return axios
      .get(url, { params })
      .then(res => res.data);
  }

  static editChild(data: IChild) {
    const url = API_ROUTES.EDIT_CHILD;
    return axios.post(url, data);
  }

  static deleteChild(childId: number) {
    return axios
      .delete(API_ROUTES.DELETE_CHILD, { params: { childId } })
      .then(res => res.data);
  }
}