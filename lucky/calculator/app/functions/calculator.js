export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
};

export const handleNumber = (value, state) => {
  if (state.currentValue === "0") {
    return {
      ...state,
      currentValue: `${value}`,
    };
  }

  return {
    ...state,
    currentValue: `${state.currentValue}${value}`,
  };
};

const handleEqual = (state) => {
  const { currentValue, previousValue, operator } = state;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = { operator: null, previousValue: null };

  switch (operator) {
    case "+":
      return {
        currentValue: `${previous + current}`,
        ...resetState,
      };
    case "-":
      return {
        currentValue: `${previous - current}`,
        ...resetState,
      };
    case "*":
      return {
        currentValue: `${previous * current}`,
        ...resetState,
      };
    case "/":
      return {
        currentValue: `${previous / current}`,
        ...resetState,
      };

    default:
      return state;
  }
};

const calculator = (type, value, state) => {
  switch (type) {
    case "number":
      return handleNumber(value, state);
    case "clear":
      return initialState;
    case "posneg":
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`,
      };
    case "percentage":
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`,
      };
    case "operator":
      console.log(state.previousValue, state.currentValue, state.operator);
      if (state.previousValue) {
        return {
          operator: value,
          previousValue: handleEqual(state).currentValue,
          currentValue: "0",
        };
      }
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: "",
      };
    case "equal":
      if (state.previousValue && state.operator) {
        return handleEqual(state);
      }
      return state;
    default:
      return state;
  }
};

export default calculator;
