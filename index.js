function increment(x) {
  return ++x;
}

function double(x) {
  return x * 2;
}

function addLogging(fn) {
  return function(x) {
    const result = fn(x);
    // console.log("The result is: ", result);
    return result;
  };
}

const incrementWithLogging = addLogging(increment);
const doubleWithLogging = addLogging(double);

// incrementWithLogging(5);
// doubleWithLogging(5);
