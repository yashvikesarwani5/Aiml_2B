let student = {
    name: "yashvi",
    rollno: 101,
    course: "aiml",
    marks: 85,

    display: function() {
        console.log("name:", this.name);
        console.log("rollno:", this.rollno);
        console.log("course:", this.course);
        console.log("marks:", this.marks);
    }
};

student.display();
