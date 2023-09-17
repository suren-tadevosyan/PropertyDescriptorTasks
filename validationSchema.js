const obj = {
  name: 123,
  age: 20,
};

const schema = {
  name: {
    value: "",
    writable: true,
    validate: (value) => typeof value === "string",
  },
  age: {
    value: 0,
    writable: true,
    validate: (value) => typeof value === "number" && value >= 18,
  },
};

function validation(obj, schema) {
  for (const [key, val] of Object.entries(obj)) {
    if (schema[key] && !schema[key].validate(val)) {
      Object.defineProperty(obj, key, {
        value: schema[key].value,
        writable: schema[key].writable,
        enumerable: true,
        configurable: true,
      });
    } else {
      Object.defineProperty(obj, key, {
        value: val,
        writable: schema[key].writable,
        enumerable: true,
        configurable: true,
      });
    }
  }
}

validation(obj, schema);
console.log(Object.getOwnPropertyDescriptors(obj));
