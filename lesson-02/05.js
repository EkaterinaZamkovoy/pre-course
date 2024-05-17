let passport = {
  name: "Petr",
  surname: "Petrov",
};

let clone = Object.assign({}, passport);
clone.name = "Ivan";

console.log(passport);
console.log(clone);
