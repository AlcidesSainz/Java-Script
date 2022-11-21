class Employee extends Person {
  static countEmployee = 0;
  constructor(name, lastName, age, salary) {
    this._idEmployee = ++Employee.countEmployee;
    this._salary = salary;
    super(idPerson, name, lastName, age);
  }
  getIdEmployee() {
    return this._idEmployee;
  }
  getSalary() {
    return this._salary;
  }
  setSalary(salary) {
    this._salary = salary;
  }
  toString() {
    return `${super.toString()} ${this._idEmployee} ${this._salary}`;
  }
}
