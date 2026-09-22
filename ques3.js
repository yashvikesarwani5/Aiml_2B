class employee {
    constructor(id, name, basicsalary) {
        this.id = id;
        this.name = name;
        this.basicsalary = basicsalary;
    }

    calculatesalary() {
        return this.basicsalary;
    }
}

class manager extends employee {
    constructor(id, name, basicsalary, incentive) {
        super(id, name, basicsalary);
        this.incentive = incentive;
    }

    calculatesalary() {
        return this.basicsalary + this.incentive;
    }
}

let emp = new employee(101, "rahul", 30000);
let mgr = new manager(102, "priya", 50000, 10000);

console.log("employee salary:", emp.calculatesalary());
console.log("manager salary:", mgr.calculatesalary());