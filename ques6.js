class Person {
    static count = 0;
    constructor(personID, personName, age) {
    this.personID = personID;
    this.personName = personName;
    this.age = age;
    }
     displayDetails() {
        console.log("id:", this.personID);
        console.log("name:", this.personName);
        console.log("age:", this.age);
    }

    static displayCount() {
        console.log("total persons:", Person.count);
    }
}
class Doctor extends Person {
    constructor(Drspecial, Drfee) {
    this.Drspecial = Drspecial;
    this.Drfee = Drfee;
    }
     displayDetails() {
        console.log("specialization:", this.Drspecial);
        console.log("fee:", this.Drfee);
        console.log();
    }
}
class Patient extends Person{
    constructor(patientDisease, patientRoomNO) {
    this.patientDisease = patientDisease;
    this.patientRoomNO = patientRoomNO;
    }
    displayDetails() {
        console.log("Disease:", this.patientDisease);
        console.log("Roll no:", this.patientRoomNO);
        console.log();
}
}
let doctor1 = new Doctor(1, "rahul", 35, "cardiologist", 1000);
let doctor2 = new Doctor(2, "neha", 40, "neurologist", 1200);

let patient1 = new Patient(3, "amit", 25, "fever", 101);
let patient2 = new Patient(4, "riya", 30, "migraine", 102);

doctor1.displayDetails();
doctor2.displayDetails();
patient1.displayDetails();
patient2.displayDetails();

Person.displayCount();
