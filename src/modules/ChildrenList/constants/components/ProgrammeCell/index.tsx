import React from "react";
import { Row } from 'react-table';
import PlayIcon from '../../../../../assets/play.svg';
import { IChildTableData } from "../../../../../models/IChild";

interface ProgrammeCellProps {
  value: Row,
}

export function ProgrammeCell({ value } : ProgrammeCellProps) {
  const programmExists = (value.original as IChildTableData).programId;
  return (
    <React.Fragment>
      {programmExists && <img className="play-btn" src={PlayIcon} alt="play" />}
    </React.Fragment>
  );
}
