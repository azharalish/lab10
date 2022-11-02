'use strict';

let lab1 = [5, 5, 0, 5, 5, 10, 10];
let lab2 = [5, 5, 5, 5, 5, 5, 10, ];
let lab3 = [5, 10, 10, 15];
let lab4_5 = [10, 5, 5, 5, 5, 5, 10, 10, 10, 10, 5];
let lab6 = [5, 5, 10, 5, 5, 10];
let lab8 = [5, 10, 10, 10, 5];
let quiz1 = 26;


function get_sum(lab) {
    let sum = 0;
    for(let i = 0; i < lab.length; i++){
        sum += lab[i];
    }
    return sum;
}

function main(...labs) {
    let obj = {};
    obj.sums = []
    for(let i = 0; i < labs.length; i++) {
        if(i > 3){
            obj[`lab${i+2}`] = labs[i];
            obj.sums.push(get_sum(labs[i]));
        } else {
            obj[`lab${i+1}`] = labs[i];
            obj.sums.push(get_sum(labs[i]));
        };
    }
    obj.lab4_5 = obj.lab4;
    delete obj.lab4;
    obj.lab8 = obj.lab7;
    delete obj.lab7;
    obj.quiz = quiz1;
    obj.total_score = obj.sums.reduce((a, b) => a + b) * 0.6 + quiz1 * 0.4;
    return obj;
}
const results = main(lab1, lab2, lab3, lab4_5, lab6, lab8);
console.log(results);

