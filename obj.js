let student = {
    name: "Yashvi",
    lastName: "Kesharwani",
    city:"Alopibagh",
    pincode:211006,
    salary:function(){
        document.write("Salary is 50000");
    },
    subjects:["Maths","Java","C++"]
};
console.log(student.name);
console.log(student.lastName);
console.log(student.city);
console.log(student.pincode);
console.log(student.subjects);
student.salary();

llet student = {
    name: "Yashvi",
    lastName: "Kesharwani",
    city: "Alopibagh",
    pincode: 211006,

    salary: function () {
        document.write("Salary is 50000");
    },

    subjects: ["Maths", "Java", "C++"]
};
function Students(name, rollNumber, pincode, city) {
    this.name = name;
    this.rollNumber = rollNumber;
    this.pincode = pincode;
    this.city = city;
}

const student1 = new Students("Rahul", 101, 201001, "Ghaziabad");

console.log(student1);

class Student {
    constructor(name, pincode) {
        this.name = name;
        this.pincode = pincode;
    }

    display() {
        console.log("Name:", this.name);
        console.log("Pincode:", this.pincode);
    }
}

const student1 = new Student("Rahul", 201001);

student1.display();