/* 
 1- Call .takeVacationDays() with an input of 5 on your nurseOlynyk instance.

 2- Under the method call, log the value saved to the remainingVacationDays property in nurseOlynyk.

*/

class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }
  
  class Nurse extends HospitalEmployee {
   constructor(name, certifications) {
     super(name);
     this._certifications = certifications;
   } 
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
  
  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays);