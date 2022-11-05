/* 
If you want extra practice with inheritance, take some time to create a Doctor class that inherits from HospitalEmployee. The properties and methods for the Doctor class are listed below:

Doctor
properties: _name, _remainingVacationDays (set to 20 inside constructor()), _insurance
methods: .takeVacationDays()
*/

// Super Class
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
  
    static generatePassword() {
      return Math.floor(Math.random()*10000);
    }
  }
  
//   Subclass Nurse
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    } 
    
    get certifications() {
      return this._certifications;
    }
    
    addCertification(newCertification) {
      this.certifications.push(newCertification);
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays);
  nurseOlynyk.addCertification('Genetics');
  console.log(nurseOlynyk.certifications);
  

//   Subclass Doctor
  class Doctor extends HospitalEmployee {
    constructor(name, insurance) {
      super(name);
      this._insurance = insurance;
    }
  
    get insurance() {
      return this._insurance;
    }
  
    addInsurance(newInsurance) {
      this._insurance.push(newInsurance)
    }
  }
  
  const doctorWallflower = new Doctor('SomeKindOfWallflower', ['Insurance 1']);
  doctorWallflower.takeVacationDays(3);
  console.log(doctorWallflower.remainingVacationDays);
  doctorWallflower.addInsurance('Insurance 2');
  console.log(doctorWallflower.insurance);