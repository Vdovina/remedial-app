import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { ROUTES } from './constants/routes';
import HomePage from './modules/HomePage';
import Auth from './modules/Auth';
import ChildrenList from './modules/ChildrenList';
import ChildProfile from './modules/ChildProfile';
import NewChild from './modules/NewChild';
import GameList from './modules/GameList';
import Programmes from './modules/Programmes';
import Statistics from './modules/Statistics';
import Register from './modules/Register';
import GamePage from './modules/GamePage';
import NotFound from './modules/NotFound';
import AuthControl from './helpers/auth/AuthControl';
import Layout from './helpers/auth/Layout';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route element={<Layout hideHeaderPaths={[ROUTES.LOGIN, ROUTES.REGISTER]} />}>
            <Route path={ROUTES.LOGIN} element={<Auth/>} />
            <Route path={ROUTES.REGISTER} element={<Register/>} />
            <Route path={ROUTES.HOME} element={<HomePage/>} />
            <Route path={ROUTES.GAMES} element={<GameList/>} />
            <Route path={ROUTES.GAME} element={<GamePage/>} />

            <Route element={<AuthControl />}>
              <Route path={ROUTES.CHILDREN} element={<ChildrenList/>} />
              <Route path={ROUTES.CHILD_PROFILE} element={<ChildProfile />} />
              <Route path={ROUTES.CREATE_CHILD} element={<NewChild/>} />
              <Route path={ROUTES.PROGRAMMES} element={<Programmes/>} />
              <Route path={ROUTES.STATISTICS} element={<Statistics/>} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
