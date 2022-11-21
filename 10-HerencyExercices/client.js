class Client extends Person {
  static countClient = 0;
  constructor(name, lastName, age, registrationDate) {
    super(idPerson, name, lastName, age);
    this._idClient = ++Client.countClient;
    this._registrationDate = registrationDate;
  }
  getIdClient() {
    return this._idClient;
  }
  getRegistrationDate() {
    return this._registrationDate;
  }
  setIdClient(idClient) {
    this._idClient = idClient;
  }
  setRegistrationDate(registrationDate) {
    this._registrationDate = registrationDate;
  }
  toString() {
    return (
      super.toString() + " " + this._idClient + " " + this._registrationDate
    );
  }
}
