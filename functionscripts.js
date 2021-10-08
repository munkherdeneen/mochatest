String.prototype.filter = function (bword) {
  return this.replace(bword + " ", "");
};

Array.prototype.bubbleSort = function () {
  for (let l = this.length - 1; l >= 0; l--) {
    for (let k = 0; k < l; k++) {
      if (this[k] > this[k + 1]) {
        tmp = this[k];
        this[k] = this[k + 1];
        this[k + 1] = tmp;
      }
    }
  }
  return this;
};

var Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

var Teacher = function () {};
Teacher.prototype = new Person();

Teacher.prototype.learn = function (subject) {
  return this.name + " is now teaching " + subject;
};

var me = new Teacher();
me.initialize("John", 25);

console.log("This house is not nice!".filter("not"));
console.log([10, -4, 0, 35, -25, 1, 11, 25].bubbleSort());
console.log(me.learn("Inheritance"));