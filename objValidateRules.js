const obj = {
  name: "Ann",
  age: 26,
};

const rules = {
  name: {
    writable: false,
  },
  age: {
    writable: false,
    configurable: true,
  },
};

function validateRules(obj, rules) {
  for (let [key, value] of Object.entries(obj)) {
    Object.defineProperty(obj, key, {
      value: value,
      writable: rules[key].writable,
      configurable: rules[key].configurable,
    });
  }
}

validateRules(obj, rules);

console.log(Object.getOwnPropertyDescriptors(obj));
console.log({ ...rules });
