function sum(...value) {
    let sum = 0;

    for (let i in value) {
        sum = sum + value[i];
    }

    console.log(sum);
}

let arr = [10, 20, 30, 40];

sum(...arr);