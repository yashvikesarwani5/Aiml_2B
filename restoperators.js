let sum = (...numbers) => {
    let total = 0;

    for (let n of numbers) {
        total += n;
    }

    return total;
};

console.log(sum(10, 20, 30, 40));

function sum (value){
    let total = 0
    for (let n of value){
        total=total+n;
    }
    return total;
}