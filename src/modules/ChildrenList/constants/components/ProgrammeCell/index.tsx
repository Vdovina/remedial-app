import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Row } from 'react-table';
import PlayIcon from '../../../../../assets/play.svg';
import { IChildTableData } from "../../../../../models/IChild";
import { loadCurrentProgramme } from '../../../../GamePage/redux/actions';

interface ProgrammeCellProps {
  value: Row,
}

export function ProgrammeCell({ value } : ProgrammeCellProps) {
  const programmExists = (value.original as IChildTableData).programId;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onStartProgram = (id: number) => {
    dispatch(loadCurrentProgramme(id, navigate));
  };

  return (
    <div
      className="play-btn__wrapper"
      onClick={() => {
        if (programmExists) {
          onStartProgram(programmExists);
        }
      }}
    >
      {programmExists && (
        <img
          title="Запустить программу"
          className="play-btn"
          src={PlayIcon}
          alt="play"
        />
      )}
    </div>
  );
}
