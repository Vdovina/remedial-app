import React from 'react';
import { API_ROUTES } from '../../constants/routes';
import { data, games } from '../../constants/data';
import axios from 'axios';

export default class GameService {
  /**
   * Get game list
   * @returns {Promise}
   */
   static get() {
    console.log('LOAD GAMES');
    return axios.get(API_ROUTES.GET_GAMES).then(res => res.data);
    return {
      isSucceeded: true,
      resultData: games,
    };
  }

  static saveResults(
    mistakeCount: number,
    timing: number,
    childID: number,
    gameID: number,
    ) {
    return axios
      .post(API_ROUTES.SAVE_RESULTS, {
        mistakeCount,
        timing,
        gameID,
        childID,
      })
      .then(res => res.data);
  }
}