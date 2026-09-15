let FirstName = "Abhi";
let LastName = "Kashyap";

console.log("My FirstName is " + FirstName);
console.log("My LastName is " + LastName);

console.log(`My FirstName is ${FirstName}`);
console.log(`My Name is ${FirstName} ${LastName}`);

function FullName(First, Last) {
    return `${First} ${Last}`;
}

let Name = `Hallo ${FullName(FirstName, LastName)}`;
console.log(Name);