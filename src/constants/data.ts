import { useAbsoluteLayout } from "react-table";
import { IChild } from "../models/IChild";
import { IGame } from "../models/IGame";
import { IProgramme } from "../models/IProgramme";

export const games = [{
  id: 2,
  code: 'similar_figures',
  name: 'Найди одинаковые геометрические фигуры',
  description: 'Выбери две фигуры, у которых цвет или форма соответствуют тем, что задал компьютер',
  img: '',
  defaultTiming: 120,
  timing: 120,
  category: '',
  theme: '',
}, {
  id: 3,
  code: 'similar_alive',
  name: 'Найди одинаковых живых существ',
  description: 'Выбери две фигуры, у которых цвет или форма соответствуют тем, что задал компьютер',
  img: '',
  defaultTiming: 180,
  timing: 180,
  category: '',
  theme: '',
}, {
  id: 4,
  code: 'similar_things',
  name: 'Найди одинаковые предметы',
  description: 'Выбери две фигуры, у которых цвет или форма соответствуют тем, что задал компьютер',
  img: '',
  defaultTiming: 180,
  timing: 180,
  category: '',
  theme: '',
}] as IGame[];

export const data = [{
  id: 1,
  userName: 'Екатерина',
  email: 'katya@gmail.com',
  password: '1234',
  children: [{
    id: 1,
    surname: 'Крылова',
    name: 'Дарья',
    birthDate: '12.04.2016',
    diagnosis: 'Амблиопия',
    parentPhone: '89127486182',
    info: '',
    programId: {
      id: 1,
      name: 'Программа 1',
      games: [games[0]] as IGame[],
    } as IProgramme,
  }, {
    id: 2,
    surname: 'Мехоношин',
    name: 'Андрей',
    birthDate: '02.02.2016',
    diagnosis: 'Амблиопия',
    parentPhone: '89245856937',
    info: '',
    programId: undefined,
  }, {
    id: 3,
    surname: 'Мартынов',
    name: 'Алексей',
    birthDate: '29.08.2017',
    diagnosis: 'Амблиопия',
    parentPhone: '89982394757',
    info: '',
    programId: undefined,
  }, {
    id: 4,
    surname: 'Мартынова',
    name: 'Алёна',
    birthDate: '02.03.2018',
    diagnosis: 'Амблиопия',
    parentPhone: '89891279836',
    info: '',
    programId: undefined,
  }, {
    id: 5,
    surname: 'Болигова',
    name: 'Оскана',
    birthDate: '19.04.2017',
    diagnosis: 'Амблиопия',
    parentPhone: '89128368478',
    info: '',
    programId: undefined,
  }] as IChild[],  
}];

export const statisticsData = [{
  date: '14.03.2022',
  avgMistakesCount: 4,
  mistakesByChildren: [{
    id: 3,
    name: 'Иванов Иван',
    avgMistakesCount: 2,
  }, {
    id: 4,
    name: 'Иванов Сергей',
    avgMistakesCount: 6,
  }, {
    id: 5,
    name: 'Сидорова Катя',
    avgMistakesCount: 4,
  }],
  avgTiming: 120,
  avgTimingByChildren: [{
    name: 'Иванов Иван',
    avgTiming: 110,
  }, {
    id: 4,
    name: 'Иванов Сергей',
    avgTiming: 130,
  }, {
    id: 5,
    name: 'Сидорова Катя',
    avgTiming: 120,
  }],
}, {
  date: '21.03.2022',
  avgMistakesCount: 10,
  mistakesByChildren: [{
    id: 3,
    name: 'Иванов Иван',
    avgMistakesCount: 10,
  }, {
    id: 4,
    name: 'Иванов Сергей',
    avgMistakesCount: 10,
  }, {
    id: 5,
    name: 'Сидорова Катя',
    avgMistakesCount: 10,
  }],
  avgTiming: 120,
  avgTimingByChildren: [{
    id: 3,
    name: 'Иванов Иван',
    avgTiming: 110,
  }, {
    id: 4,
    name: 'Иванов Сергей',
    avgTiming: 130,
  }, {
    id: 5,
    name: 'Сидорова Катя',
    avgTiming: 120,
  }],
}, {
  date: '28.03.2022',
  avgMistakesCount: 2,
  mistakesByChildren: [{
    id: 3,
    name: 'Иванов Иван',
    avgMistakesCount: 2,
  }, {
    id: 4,
    name: 'Иванов Сергей',
    avgMistakesCount: 2,
  }, {
    id: 5,
    name: 'Сидорова Катя',
    avgMistakesCount: 2,
  }],
  avgTiming: 120,
  avgTimingByChildren: [{
    id: 3,
    name: 'Иванов Иван',
    avgTiming: 110,
  }, {
    id: 4,
    name: 'Иванов Сергей',
    avgTiming: 130,
  }, {
    id: 5,
    name: 'Сидорова Катя',
    avgTiming: 120,
  }],
}, {
  date: '04.04.2022',
  avgMistakesCount: 4,
  mistakesByChildren: [{
    id: 3,
    name: 'Иванов Иван',
    avgMistakesCount: 2,
  }, {
    id: 4,
    name: 'Иванов Сергей',
    avgMistakesCount: 6,
  }, {
    id: 5,
    name: 'Сидорова Катя',
    avgMistakesCount: 4,
  }],
  avgTiming: 180,
  avgTimingByChildren: [{
    id: 3,
    name: 'Иванов Иван',
    avgTiming: 180,
  }, {
    id: 4,
    name: 'Иванов Сергей',
    avgTiming: 180,
  }, {
    id: 5,
    name: 'Сидорова Катя',
    avgTiming: 180,
  }],
}];