'use strict';

class Worker {
    constructor(name, surname, rate = 0, days = 0) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days
    }

    getSalary() {
        return this.rate * this.days;
    }
}

const worker1 = new Worker('Andrei', 'Dzugan', 20, 10);

console.log(`Dear ${worker1.name} ${worker1.surname}, your salary is ${worker1.getSalary()}$`);

