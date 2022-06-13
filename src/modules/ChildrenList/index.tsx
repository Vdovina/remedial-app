import React, { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../../constants/routes";
import { IState } from "../../redux/store";
import { Table, Button, ButtonTheme } from '../../components';
import { loadChildren, setCurrentPage, setPageEntities } from "./redux/actions";
import { loadChildInfo } from "../ChildProfile/redux/actions";
import { columns } from "./constants/columns";
import ExportIcon from '../../assets/export.svg';
import NewIcon from '../../assets/plus.svg';
import TableMessage from "../../components/Table/TableMessage";
import { LOADING_STATUS } from "../../constants/loadingStatuses";
import './ChildrenList.scss';

type ChildrenListProps = {
  
}

function ChildrenList(props : ChildrenListProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    children,
    isLoading,
    pageEntities,
    currentPage,
  } = useSelector((state : IState) => state.childrenList);

  useEffect(() => {
    dispatch(loadChildren());
  }, [pageEntities, currentPage]);

  const onRowClick = (e: any, rowValue: any) => {
    const id = rowValue.original.id;
    dispatch(loadChildInfo(id));
    navigate(ROUTES.CHILD_PROFILE.replace(':id', String(id)));
  }
  
  const tableMessage = useMemo(() => {
    if (children && children.length === 0) {
      return (
        <TableMessage  message="Вы ещё не добавили детей в список..."/>
      );
    }
    if (isLoading === LOADING_STATUS.ERROR) {
      return (
        <TableMessage message="Произошла ошибка при загрузке данных" />
      );
    }
    return undefined;
  }, [children]);

  return(
    <div className="children-list__wrapper">
      <div className="children-list__header">
        <h1 className="children-list__title">Список детей</h1>
        <div className="children-list__buttons">
          <Button
            onClick={() => navigate(ROUTES.CREATE_CHILD)}
            theme={ButtonTheme.light}
          >
            <div className="children-list__buttons__new">
              <img className="new-btn" src={NewIcon} alt="new" />
              <span>Добавить ученика</span>
            </div>
          </Button>
          <Button
            theme={ButtonTheme.light}
            onClick={() => {}}
          >
            <div className="children-list__buttons__export">
              <img className="export-btn" src={ExportIcon} alt="export"/>
              <span>Экспорт</span>
            </div>
          </Button>
        </div>
      </div>
      <Table
        columns={columns}
        data={children}
        totalItems={children.length}
        rowClick={onRowClick}
        isLoading={isLoading === LOADING_STATUS.LOADING}
        message={tableMessage}
        currentPage={currentPage}
        setCurrentPage={(value) => dispatch(setCurrentPage(value))}
        pageEntities={pageEntities}
        setPageEntities={(value) => dispatch(setPageEntities(value))}
      />
    </div>
  )
}

export default ChildrenList;