"use strict";
function insertionSort(inputArr) {
    for (let i = 1; i < inputArr.length; i++) {
        let current = inputArr[i];
        let j = i - 1;
        while ((j > -1) && (current < inputArr[j])) {
            inputArr[j + 1] = inputArr[j];
            j--;
        }
        inputArr[j + 1] = current;
    }
    return inputArr;
}
let inputArr = [1, 3, 2, 4, 6, 9, 8, 0, 7, 5];
console.log(insertionSort(inputArr));
