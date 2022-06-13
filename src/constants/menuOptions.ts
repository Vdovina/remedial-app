import { ROUTES } from '../constants/routes';

interface MenuOption {
  name: string,
  title: string,
  route: string
}

const REGISTERED_MENU_OPTIONS : MenuOption[] = [{
  name: 'games',
  title: 'Игры',
  route: ROUTES.GAMES,
}, {
  name: 'childList',
  title: 'Список детей',
  route: ROUTES.CHILDREN,
}, {
  name: 'programme',
  title: 'Программы обучения',
  route: ROUTES.PROGRAMMES,
}, {
  name: 'statistics',
  title: 'Статистика',
  route: ROUTES.STATISTICS,
}];

const UNREGISTERED_MENU_OPTIONS : MenuOption[] = [{
  name: 'signIn',
  title: 'Вход',
  route: ROUTES.LOGIN,
}, {
  name: 'signUp',
  title: 'Регистрация',
  route: ROUTES.REGISTER,
}];

export {
  REGISTERED_MENU_OPTIONS,
  UNREGISTERED_MENU_OPTIONS,
}