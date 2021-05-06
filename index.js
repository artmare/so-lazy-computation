const getSoExpenseComputationData = () => {
  const soLargeEmpty = new Array(10000).fill({ isOdd: false });

  return soLargeEmpty.map((i, ind) => {
    const isOdd = !!(ind % 2);

    return {
      ...i,
      isOdd
    }
  });
};

const object = {
  get expenseData() {
    const expenseData = getSoExpenseComputationData();

    // cache this data after `get` excecute :—)
    Object.defineProperty(this, 'expenseData', {
      value: expenseData,
      writable: false,
      configurable: false,
      enumerable: false
    });

    return expenseData;
  }
}

console.log(object.hasOwnProperty('expenseData'));

console.log(object.expenseData);