const obj = {
  _name: [],
  get name() {
    return this._name;
  },

  set name(args) {
    let namesArr = args.split(",");

    return namesArr.reduce(
      (acc, name) => this._name.push([name, name.length]),
      []
    );
  },
};

obj.name = "Hamlet, Artavazd";
console.log(obj.name);
