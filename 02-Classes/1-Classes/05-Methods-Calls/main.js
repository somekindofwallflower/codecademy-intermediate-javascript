
/* 

1- At the bottom of main.js, use console.log() to print the value saved to thename property of the surgeonRomero object.

2- Call .takeVacationDays() on surgeonRomero, with an input of 3.

3- After the call to .takeVacationDays(), use console.log() to print the value saved to the remainingVacationDays property of the surgeonRomero instance.

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
  
  console.log(surgeonRomero.name);
  surgeonRomero.takeVacationDays(3);
  console.log(surgeonRomero.remainingVacationDays);
  