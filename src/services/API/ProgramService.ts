import React from 'react';
import axios from 'axios';
import { API_ROUTES } from '../../constants/routes';
import { IProgrammeGame } from '../../models/IGame';

export default class ProgrammeService {
  /**
   * Get programms with games list
   * @param {number} userId
   * @returns {Promise}
   */
   static get(userId: number) {
    return axios
      .get(API_ROUTES.GET_PROGRAMMES, { params: { userId }})
      .then(res => res.data);
  }

  /**
   * Get programms with games list without games
   * @param {number} userId
   * @returns {Promise}
   */
  static getList(userId: number) {
    return axios
      .get(API_ROUTES.GET_PROGRAMME_LIST, { params: { userId }})
      .then(res => res.data);
  }

  /**
   * Save new program
   * @param {number} userID
   * @param {string} name
   * @param {IProgrammeGame} games
   * @returns {Promise}
   */
  static save(userID: number, name: string, games: IProgrammeGame[]) {
    const data = {
      userID,
      name,
      games,
    };
    return axios
      .post(API_ROUTES.SAVE_PROGRAMME, data)
      .then(res => res.data);
  }

  /**
   * Edit program
   * @param {number} id
   * @param {string} name
   * @param {IProgrammeGame} games
   * @returns {Promise}
   */
  static edit(id: number, name: string, games: IProgrammeGame[]) {
    const data = {
      id,
      name,
      games,
    };
    return axios
      .post(API_ROUTES.EDIT_PROGRAMME, data)
      .then(res => res.data);
  }

  /**
   * Delete program
   * @param {number} programId
   * @returns {Promise}
   */
  static delete(programId: number) {
    return axios
      .delete(API_ROUTES.DELETE_PROGRAMME, { params: { programId }})
      .then(res => res.data);
  }
}