import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../redux/store";
import { loadGames } from './redux/actions';
import { setCurrentGame } from "../GamePage/redux/actions";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import './GameList.scss';

function GameList() {
  const { games } = useSelector((state : IState) => state.gameList);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(loadGames());
  }, []);

  const onSelectGame = (gamePath: string) => {
    // const currentGame = games.find(game => game.code === gamePath);
    // dispatch(setCurrentGame(currentGame));
    navigate(ROUTES.GAME.replace(':game', gamePath));
  };

  return (
    <div className="game-list__wrapper">
      <div className="game-list__header">
        <h1>Игры</h1>
      </div>
      <div className="game-list__content__wrapper">
        <div className="game-list__content">
          {games.map(game => (
            <div className="game-list__game" key={game.id} onClick={() => onSelectGame(game.code)}>
              <div className="game-list__game__image"></div>
              <div className="game-list__game__text-block">
                <p className="game-list__game__text-block__name">{game.name}</p>
                <p>{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameList;