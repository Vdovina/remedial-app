import React from "react";
import { combineReducers } from "redux";
import { default as newChildCard } from '../modules/NewChild/redux/reducer';
import { default as childrenList } from '../modules/ChildrenList/redux/reducer';
import { default as childProfile } from '../modules/ChildProfile/redux/reducer';
import { default as gameList } from '../modules/GameList/redux/reducer';
import { default as programmes } from '../modules/Programmes/redux/reducer';
import { default as statistics } from '../modules/Statistics/redux/reducer';
import { default as auth } from '../modules/Auth/redux/reducer';
import { default as gamePage } from '../modules/GamePage/redux/reducer';

export default combineReducers({
  newChildCard,
  childrenList,
  childProfile,
  gameList,
  programmes,
  statistics,
  auth,
  gamePage,
});