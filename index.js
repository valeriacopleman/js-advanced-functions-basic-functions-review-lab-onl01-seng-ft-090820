// Your code here
function saturdayFun(act = `roller-skate`) {
    return `This Saturday, I want to ${act}!`
}

let mondayWork = function(work = 'go to the office') {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair="*") {
    return function(adj="special") {
      return `You are ${flair }${adj}${flair}!`;
    }
}

const Calculator = {
    add: function(a, b) {
      return a+b;
    },
    subtract: function(a, b) {
      return a-b;
    },
    multiply: function(a, b) {
      return a*b;
    },
    divide: function(a, b) {
      return a/b;
    }
}

function actionApplyer(start, fns) {
    for (let i = 0; i < fns.length; i++) {
      start = fns[i](start);
    }
    return start;
  }
  