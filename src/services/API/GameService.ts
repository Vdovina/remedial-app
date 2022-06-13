import React from 'react';
import { API_ROUTES } from '../../constants/routes';
import { data, games } from '../../constants/data';

export default class GameService {
  /**
   * Get game list
   * @returns {Promise}
   */
   static getGames() {
    console.log('LOAD GAMES');
    // return axios.get(API_ROUTES.GET_CHILDREN);
    return {
      isSucceeded: true,
      resultData: games,
    };
  }
}