class ParentName {
  constructor() {
    this.fathername = "Mintu datta",
      this.title = "datta"
  }
}

class Child extends ParentName {
  constructor(name) {
    super();
    this.name = name
  }

  getFullName() {
    return this.name + " " + this.title;
  }

}

const baby = new Child("Saruj");
console.log(baby)
console.log(baby.getFullName())