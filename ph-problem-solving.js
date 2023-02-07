/*
First Problem:
        // Desc: Called a function name of mindGame. Then write a variable for sum numbers then finally return this sum.
*/

function mindGame(num) {
    const sum = (((num * 3) + 10) / 2) - 5;
    return sum;

}


/* 
Second Problem:
        // Desc: Write a function scope of name evenOdd. then create a variable for store string length. then run if else condition for select variable even or odd.
*/
function evenOdd(str) {
    const strLength = str.length;
    if (strLength % 2 === 0) {
        return "even";
    } else {
        return "odd"
    }
}



/* P
Third Problem:
        // Desc: Called a functioin name of isLGSeven. then pass a peramiter name of input for chechiing greater then of 7 or less than of 7. Finally write if else condition for checking this input from 7 different??
*/

function isLGSeven(input) {
    if (input < 7) {
        const inptDifSum = input - 7;
        return inptDifSum;
    } else {
        const result = input * 2;
        return result;
    }
}


/* 
Fourth Problem:
        // Desc:  Frist a define a array for finding bad data. Then create a function name of findingBadData. then pass a perameter name of arr. then create a blank array for pushing chacecter and check for this array lenght or problem solving output.
*/
let results = [2, -5, -7, -13]

function findingBadData(arr) {
    let blankArr = [];
    for (i = 0; i < results.length; i++) {
        if (arr[i] < 0) {
            blankArr.push(arr[i])
        }
    }

    return blankArr.length;
}


/* 
Fifth Problem:
         // Desc: Called a function name of gemsToDiamond and pass 3 perameter for adding friends total gems power. then adding with + (plus) operator for get total gems. then write if else condition for "if gemsTotal number greater then 1000+ then minus from gems friends total power" then return final total output
*/
function gemsToDiamond(fd1, fd2, fd3) {
    const gemsFd1 = fd1 * 21;
    const gemsFd2 = fd2 * 32;
    const gemsFd3 = fd3 * 43;
    const gemsFdTotal = gemsFd1 + gemsFd2 + gemsFd3;
    // console.log(gemsFdTotal);
    if (gemsFdTotal > 2000) {
        const gemsFinalTolal = gemsFdTotal - 2000;
        return gemsFinalTolal;
    } else {
        return gemsFdTotal;
    }
}