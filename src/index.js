/*task 1*/
const notifications = {
  facebook: [
              { text: 'Alice', source: 'facebook', date: '19/09/2023' }, 
              { text: 'Bob', source: 'facebook', date: '19/09/2023' }
            ],
  telegram: [{ text: 'Charlie', source: 'telegram', date: '19/09/2023' }],

  [Symbol.iterator]() {
    let currentIndex = 0;
    let innerIndex = 0;

    const values = [];

    for (const key in this) {
      values.push(this[key]);
    }

    return {
      next() {
        if (innerIndex === values[currentIndex].length) {
          innerIndex = 0;
          currentIndex++;
        }

        if (currentIndex === values.length) {
          return {
            done: true
          }
        }

        return {
          value: values[currentIndex][innerIndex++],
          done: false,
        }
      }
    }
  }

}

for (const notification of notifications) {
  console.log(notification);
};

/*task 2*/
function memoize(fn) {
  const cashe = new Map();

  return function(...args) {
    const key = args.map(arg => `${arg}_${typeof arg}`).join('-');
    //console.log(key);
    if (cashe.has(key)) {
      console.log('Map has');
      return cashe.get(key);
    }

    const result = fn(...args);
    console.log('res');
    cashe.set(key, result);
    return result;
  }
}
