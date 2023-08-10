// const data = {
//   data: [
//     {
//       innerIndex: 0,
//       inputFieldName: "Firstname",
//       label: "Enter Your Firstname",
//       typeSelectField: "text",
//     },
//     {
//       innerIndex: 1,
//       inputFieldName: "Surname",
//       label: "Enter Surname",
//       typeSelectField: "text",
//     },
//   ],
// };

// console.log(JSON.stringify(data));
// function a(arr) {
//   let sum = 0;
//   let sum2;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     console.log(sum);
//     sum2 = ((arr.length + 1) * (arr.length + 1 + 1)) / 2;
//   }
//   console.log(sum2);
//   let data = sum2 - sum;
//   return data;
// }
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 10];
// let missingNumbers = a(number);

// console.log(`The missing number is ${missingNumbers}.`);

// function b(str, chr) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === chr) {
//       count++;
//     }
//   }
//   return count;
// }
// const r1 = b("abbas ali", "a");
// console.log(r1);

// let num = 12321;
// let temp = num;
// let reverse = 0;

// while (temp > 0) {
//   let digit = temp % 10;
//   reverse = reverse * 10 + digit;
//   temp = parseInt(temp / 10);
// }

// if (reverse === num) {
//   console.log(num + " is a palindrome number.");
// } else {
//   console.log(num + " is not a palindrome number.");
// }
// program to generate fibonacci series up to n terms

// take input from the user
// function data(number) {
//   let n1 = 0;
//   let n2 = 1;
//   let nextTerm;

//   const fibSeries = [];

//   console.log("Fibonacci Series:");

//   for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     fibSeries.push(n1);
//     // console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
//   }
//   return fibSeries;
// }

// const d = data(5);
// console.log(d);

// const num = [
//   [],
//   [],
//   ["a", "b", "c"],
//   ["d", "e", "f"],
//   ["g", "h", "i"],
//   ["j", "k", "l"],
//   ["m", "n", "o"],
//   ["p", "q", "r", "s"],
//   ["t", "u", "v"],
//   ["w", "x", "y", "z"],
// ];
// const name1 = [
//   "ads",
//   "bdis",
//   "de",
//   "kal",
//   "asw",
//   "abbas",
//   "mohsin",
//   "mom",
//   "papa",
// ];
// let newname = name1;
// let newarr = [];

// function check(x, k) {
//   for (i = 0; i < newname.length; i++) {
//     if (num[x].length == 3) {
//       if (
//         newname[i][k] == num[x][0] ||
//         newname[i][k] == num[x][1] ||
//         newname[i][k] == num[x][2]
//       ) {
//         newarr.push(newname[i]);
//       }
//     } else {
//       if (
//         newname[i][k] == num[x][0] ||
//         newname[i][k] == num[x][1] ||
//         newname[i][k] == num[x][2] ||
//         newname[i][k] == num[x][3]
//       ) {
//         newarr.push(newname[i]);
//       }
//     }
//   }
// }

// a = "";
// // a = "529";
// for (k = 0; k < a.length; k++) {
//   check(a[k], k);
//   newname = newarr;
//   newarr = [];
// }

// console.log("last", newname);

// const keypad = [
//   [],
//   [],
//   ["a", "b", "c"],
//   ["d", "e", "f"],
//   ["g", "h", "i"],
//   ["j", "k", "l"],
//   ["m", "n", "o"],
//   ["p", "q", "r", "s"],
//   ["t", "u", "v"],
//   ["w", "x", "y", "z"],
// ];

// const names = [
//   "ads",
//   "bdis",
//   "de",
//   "kal",
//   "asw",
//   "abbas",
//   "mohsin",
//   "mom",
//   "papa",
// ];

// const getNamesFromKeypadSequence = (sequence) => {
//   const sequenceDigits = [...sequence].map(Number);
//   return names.filter((name) => {
//     const nameLetters = [...name];
//     return sequenceDigits.every((digit, index) => {
//       return keypad[digit].includes(nameLetters[index]);
//     });
//   });
// };

// const sequence = "529";
// console.log(getNamesFromKeypadSequence(sequence)); // ['kal', 'jay']
