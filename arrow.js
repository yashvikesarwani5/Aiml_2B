const hello = () => {
    console.log("Hello World");
};

hello();
const student = (name, physics, marks) => {
    console.log(`Name: ${name}`);
    console.log(`Physics: ${physics}`);
    console.log(`Marks: ${marks}`);
};

student("Yashvi", "Physics", 85);
let triangle = () => {
    for(let i = 1; i <= 3; i++) {
        console.log("*".repeat(i));
    }
};

triangle();