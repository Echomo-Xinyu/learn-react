class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  introduce() {
    return `Hi, my name is ${this.fullName}.`;
  }
}

const david = new Person("David", "Tang");
david.firstName;
david.introduce();

const david2 = {
  firstName: "David",
  lastName: "Tang",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  introduce() {
    return `Hi, my name is ${this.fullName}.`;
  },
};

david2.introduce();

class Student extends Person {
  study() {
    return `${this.fullName} has notifications turned off.`;
  }
}

const joshua = new Student("Joshua", "Yoo");
joshua.study();
joshua.introduce();
