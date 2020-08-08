class Student {
  constructor(sId, sName) {
    this.id = sId,
      this.name = sName,
      this.school = "bakalia govt. school."
  }
}

const student1 = new Student("1", "Saruj");
const student2 = new Student("2", "datta");
console.log(student1, student2);

console.log(student1.name, student2.name);