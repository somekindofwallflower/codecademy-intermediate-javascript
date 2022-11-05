/*
 1- In the next few exercises, you will create two subclasses (Doctor and Nurse) from a parent class named HospitalEmployee. Below, we have listed the properties and methods you will find in the Doctor and Nurse classes.

Doctor
Properties: _name, _remainingVacationDays (set to 20 inside the constructor()), _insurance
Methods: .takeVacationDays()

Nurse
Properties: _name, _remainingVacationDays (set to 20 inside constructor()), _certifications
Methods: .takeVacationDays(), .addCertification()

In main.js, create a parent class named HospitalEmployee. Add a constructor with name as an argument.


2- Inside of the constructor(), set the instance’s _name to name and _remainingVacationDays to 20.


3- Under the constructor, create getters for your _name and _remainingVacationDays properties.
Inside the getter, return the property’s value.


4- Under the getters, add a method called takeVacationDays.This method should accept one argument, called daysOff.
Inside the method, subtract daysOff from _remainingVacationDays. Save the result to _remainingVacationDays.

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