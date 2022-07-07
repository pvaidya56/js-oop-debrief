class Person {
  constructor(fullName, dob, address) {
    this.fullName = fullName;
    this.dob = dob;
    this.address = address;
  }
  introduce() {
    console.log(`Hi, my name is ${this.fullName}`);
  }
}

class Employee extends Person {
  constructor(fullName, dob, address, salary, department, vacationDays) {
    super(fullName, dob, address);
    this.salary = salary;
    this.department = department;
    this.vacationDays = vacationDays;
  }
  remainingVacationDays(daysTakenOff) {
    return this.vacationDays - daysTakenOff;
  }
}

class Developer extends Employee {
  constructor(
    fullName,
    dob,
    address,
    salary,
    department,
    vacationDays,
    languages
  ) {
    super(fullName, dob, address, salary, department, vacationDays);
    this.languages = languages;
  }
}

let swe1 = new Developer(
  "Thanh Pham",
  "01-01-1988",
  "TX",
  90000,
  "development",
  20,
  ["JavaScript", "Python", "Java"]
);

console.log(swe1.remainingVacationDays(5));
