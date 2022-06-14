const SERVER = 'http://alinam-001-site1.btempurl.com/restapi';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  USER_INFO: '/user/:id',

  CHILDREN: '/children',
  CREATE_CHILD: '/children/new',
  CHILD_PROFILE: '/children/:id',

  GAMES: '/games',
  GAME: '/games/:game',

  PROGRAMMES: '/programs',

  STATISTICS: '/statistics',
};

export const API_ROUTES = {
  LOGIN: `${SERVER}/user/signIn`,
  LOGOUT: `${SERVER}/user/logOut`,
  REGISTER: `${SERVER}/user/signUp`,
  USER_INFO: '',

  //Children
  GET_CHILDREN: `${SERVER}/child/getChildren`,
  GET_CHILDREN_NAMES: `${SERVER}/child/getChildrenNames`,
  CREATE_NEW_CHILD: `${SERVER}/child/addChild`,
  GET_CHILD: `${SERVER}/child/getChildInfo`,
  EDIT_CHILD: `${SERVER}/child/editChild`,
  DELETE_CHILD: `${SERVER}/child/deleteChild`,

  //Programmes
  GET_PROGRAMMES: `${SERVER}/program/getProgramsWithGames`,
  GET_PROGRAMME_LIST: `${SERVER}/program/getPrograms`,
  SAVE_PROGRAMME: `${SERVER}/program/addProgram`,
  EDIT_PROGRAMME: `${SERVER}/program/editProgram`,
  DELETE_PROGRAMME: `${SERVER}/program/deleteProgram`,

  //Games
  SAVE_RESULTS: `${SERVER}/statistics/saveResults`,
  GET_DASHBOARD_DATA: `${SERVER}/statistics/dashboard`,
};