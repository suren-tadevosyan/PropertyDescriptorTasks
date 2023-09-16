function Imutable(obj = {}) {
  this.name = obj.name;
  this.age = obj.age;
  Object.freeze(this);
}

const user1 = new Imutable({ name: "Ann", age: 18 });

console.log(user1);

console.log(Object.isFrozen(user1));
