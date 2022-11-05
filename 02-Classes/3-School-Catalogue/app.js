class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(numberOfStudents) {
        if (typeof numberOfSudents === 'number') {
            this._numberOfStudents = numberOfStudents;
        } else {
            throw 'Invalid input: numberOfStudents must be set to a Number.';
        }
    }

    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.
  `)
    }

    static pickSubstituteTeacher(substituteTeachers) {
        return substituteTeachers[Math.floor(Math.random() * substituteTeachers.length)];
    }
}

class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'Primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class Middle extends School {
    constructor(name, numberOfStudents, averageTestScores) {
        super(name, 'Middle', numberOfStudents);
        this._averageTestScores = averageTestScores;
    }

    get averageTestScores() {
        return this._averageTestScores;
    }
}

class High extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'High', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeams;
    }
}

class SchoolCatalog {
    constructor(schoolList) {
        this._MySchoolCatalog = schoolList;
    }

    get schoolCatalog() {
        return this._MySchoolCatalog;
    }

    set schoolCatalog(newSchool) {
        this._MySchoolCatalog.push(newSchool);
    }
}

// Primary School Instance
const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

lorraineHansbury.quickFacts();
console.log(Primary.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

// Middle School Instance
const wallfloweMiddleSchool = new Middle('SomeKindOfWallflower School', 313, 9.13);
console.log(wallfloweMiddleSchool.averageTestScores);

// High School Instance
const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);

const schoolCatalog = new SchoolCatalog([]);
schoolCatalog.schoolCatalog = lorraineHansbury;
schoolCatalog.schoolCatalog = wallfloweMiddleSchool;
schoolCatalog.schoolCatalog = alSmith;
console.log(schoolCatalog.schoolCatalog);