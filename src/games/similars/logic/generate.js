function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generate(count, figures, colors) {
  const randRule = getRandomInt(2);
  const ruleTask = randRule === 0 ? 'figure' : 'color';
  const minorTask = randRule === 0 ? 'color' : 'figure';
  const rules = randRule === 0 ? figures : colors;
  const minors = randRule === 0 ? colors : figures;
  const ruleArray = Object.keys(rules);
  const minorArray = Object.keys(minors);

  const randRuleTask = getRandomInt(ruleArray.length);
  let finalRules = [{
    [ruleTask]: rules[ruleArray[randRuleTask]],
  }, {
    [ruleTask]: rules[ruleArray[randRuleTask]],
  }];
  let mutableRuleArray = ruleArray.reduce(
    (res, item, index) => (
      index === randRuleTask ? res : [...res, item]
    ), []
  );

  for (let i = 0; i < count - 2; i++) {
    const rand = getRandomInt(mutableRuleArray.length);
    finalRules.push({
      [ruleTask]: rules[mutableRuleArray[rand]],
    });
  }

  let indexes = Array(count).fill(0).map((_, i) => i);
  let finalOrder = [];
  for (let i = 0; i < count; i++) {
    const rand = getRandomInt(indexes.length);
    finalOrder.push(indexes[rand]);
    indexes.splice(rand, 1);
  }
  let finalArray = finalOrder.map(
    order => (finalRules[order])
  );

  const final = finalArray.map(
    (item, i) => {
      const randMinor = minorArray[getRandomInt(Object.keys(minorArray).length)];
      return ({
        ...item,
        [minorTask]: minors[randMinor],
        isActive: false,
        id: i,
      });
    }
  )

  return ({
    property: ruleTask,
    task: ruleArray[randRuleTask],
    objects: final,
  });


  debugger;
  const rand = getRandomInt(2);
  if (rand === 0) {
    const randFigureTask = getRandomInt(Object.keys(figures).length);
    let finalShapes = [figures[randFigureTask], figures[randFigureTask]];
    let shapes = Object.keys(figures).reduce((res, item) => (
      item === String(randFigureTask) ? res : [...res, figures[item]]
    ), []);
    for (let i = 0; i < count - 2; i++) {
      const rand = getRandomInt(Object.keys(shapes).length);
      finalShapes.push(shapes[rand]);
    }
    let indexes = Array(count).fill(0).map((_, i) => i);
    let finalOrder = [];
    for (let i = 0; i < count; i++) {
      const rand = getRandomInt(indexes.length);
      finalOrder.push(indexes[rand]);
      indexes.splice(rand, 1);
    }
    let finalArray = [];
    for (let i = 0; i < count; i++) {
      finalArray.push(finalShapes[finalOrder[i]]);
    }
    const final = finalArray.map(item => {
      const color = colors[getRandomInt(Object.keys(colors).length)];
      return ({
        ...item,
        color,
        classes: `${item.figure} ${color}-${item.fill}`,
        isActive: false,
      });
    });
    return {
      task: figures[randFigureTask].figure,
      figures: final,
    };
  }
  else {
    const randColorTask = getRandomInt(Object.keys(colors).length);
    let finalColors = [colors[randColorTask], colors[randColorTask]];
    let pallete = Object.keys(colors).reduce((res, item) => (
      item === String(randColorTask) ? res : [...res, colors[item]]
    ), []);
    for (let i = 0; i < count - 2; i++) {
      const rand = getRandomInt(Object.keys(pallete).length);
      finalColors.push(pallete[rand]);
    }
    let indexes = Array(count).fill(0).map((_, i) => i);
    let finalOrder = [];
    for (let i = 0; i < count; i++) {
      const rand = getRandomInt(indexes.length);
      finalOrder.push(indexes[rand]);
      indexes.splice(rand, 1);
    }
    let finalArray = [];
    for (let i = 0; i < count; i++) {
      finalArray.push(finalColors[finalOrder[i]]);
    }
    const final = finalArray.map(item => {
      const shape = figures[getRandomInt(Object.keys(figures).length)];
      return ({
        item,
        ...shape,
        classes: `${shape.figure} ${item}-${shape.fill}`,
        isActive: false,
      });
    });
    return {
      task: colors[randColorTask],
      figures: final,
    };
  }
}

export default generate;