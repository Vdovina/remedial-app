import React from 'react';
import { statisticsData } from '../../constants/data';
import { API_ROUTES } from '../../constants/routes';

export class StatisticsService {
  /**
   * Load statistics data
   * @returns {Promise}
   */
  static get(data: any) {
    return {
      isSucceeded: true,
      resultData: statisticsData,
    }
  }
}