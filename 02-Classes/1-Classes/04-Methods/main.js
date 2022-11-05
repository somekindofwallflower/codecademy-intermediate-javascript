  /* 
  
  1- In the Surgeon constructor, prepend the name and department properties with an underscore (_).

  2- Inside of the constructor(), add a property named _remainingVacationDays and set it equal to 20.

  3- Under the constructor(), create a getter called name that returns the value saved to _name.

  4- Under the name getter, create a getter called department that returns the value saved to _department.

  5- Under the department getter, create a getter called remainingVacationDays that returns the value saved to _remainingVacationDays.

  6- Under the remainingVacationDays getter, create a method called takeVacationDays that accepts one argument named daysOff.

Inside of the method, subtract daysOff from the number saved to _remainingVacationDays. Set _remainingVacationDays to the result.

  class Surgeon {
    constructor(name, department) {
      this.name = name;
      this.department = department;
    }
  }
  
  const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
  const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');


  
  */


  class Surgeon {
    constructor(name, department) {
      this._name = name;
      this._department = department;
      this._remainingVacationDays = 20;
    }
  
    get name() {
      return this._name;
    }
  
    get department() {
      return this._department;
    }
  
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
  
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }
  
  const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
  const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
