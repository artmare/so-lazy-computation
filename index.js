const getSoExpenseComputationData = () => {
  const soLargeArray = new Array(10000).fill({ isOdd: false });

  return soLargeArray.map((i, ind) => {
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

// invoke `get` method
object.expenseData;

// avoid `get` computation and return cached expenseData
object.expenseData;