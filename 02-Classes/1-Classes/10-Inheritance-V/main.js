/*
1- Use the properties and methods below to help you complete the tasks that follow.

Nurse
Properties: _name, _remainingVacationDays (set to 20 inside the constructor()), _certifications
Methods: .takeVacationDays(), .addCertification()
Under the Nurse constructor(), add a getter that returns the value saved to the Nurse instance’s _certifications.

2- Add a method called addCertification under the certifications getter.

The method should accept one input (newCertification). Inside the method, use the push method to add the newCertification value to the nurse’s certifications array.

3- At the bottom of main.js call the .addCertification() method on nurseOlynyk with a parameter of 'Genetics'.

4- Log the value saved to the certifications property of nurseOlynyk.
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
  
    get certifications() {
      return this._certifications;
    }
  
    addCertification(newCertification) {
      this._certifications.push(newCertification);
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays);
  nurseOlynyk.addCertification('Genetics');
  console.log(nurseOlynyk.certifications);