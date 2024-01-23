//     1 - MASALA
// let a = 12;
// let result = '';
// switch (a) {
//     case 1: result = "Yanvar"
//             break;
//     case 2: result = "Fevral"
//             break;
//     result = "Yanvar"
//         break;
//     case 2:
//         result = "Fevral"
//         break;
//     case 3:
//         result = "Mart"
//         break;
//     case 4:
//         result = "Aprel"
//         break;
//     case 5:
//         result = "May"
//          break;
//     case 6:
//         result = "Iyul"
//         break;
// case 7:
//     result = "Iyun"
//     break;
// case 8:
//     result = "Avgust"   
//     break;
// case 9 :   
//      result = "Sentyabr"  
//      break;
// case 10 : 
//     result = "Oktyabr"  
//     break;
// case 11 :
//     result = "Noyabr"
//     break;
// case 12:
//     result = "Dekabr"
//     break;
//     default:
//         break;
// }
// console.log(result);
//    2 - MASALA

// let n = 6;
// let result = '';
// switch (n) {
//     case 1:
//         result = "Yanvar Qish";
//         break;
//     case 2:
//         result = "Fevral Qish";
//        break;   
//     case 3: 
//         result = "Mart Bahor"; 
//         break;   
//     case 4:
//         result = "Aprel Bahor";
//         break;  
//     case 5:
//         result = "May Bahor ";
//      break;
//     case 6:
//         result = "Iyun Yoz";
//         break;
//     case 7:
//         result = "Iyul  Yoz";
//         break;
//     case 8:
//         result = "Avgust Yoz";
//         break;
//     case 9 :   
//         result = "Sentyabr Kuz";  
//         break;
//     case 10 : 
//         result = "Oktyabr Kuz";
//         break;
//     case 11 :
//         result = "Noyabr Kuz";
//         break;
//     case 12:
//         result = "Dekabr Qish";
//         break;
        
//     default:
//         break;
// }
// console.log(result);

//   3 - MASALA
// let num = 1;
// let n = 15;
// for (let num = 2; num <= n; num++) {
//     let tub = true;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             tub = false;
//             break;
//         }
//     }
//     if (tub) {
//         console.log(num);
//     }
// }
// console.log(n);

//   4 - MASALA
// let n = 10;
// let yigindi = 0;
//     for (let i = 0; i < n; i++) {
//         let kiritilgan = parseInt(15);
//         yigindi += kiritilgan;
//     }
//     console.log("Kiritilgan sonlar yig'indisi: " + n);
//   5 - MASALA
// let n = 15;
// for (let i = n; i >= 1; i--) {
//     console.log(i);
//   }
//    6 - MASALA
// let n = 12;
// if (n === 0 || n === 1) {
//     return 1;
// } else {
//     let faktorial = 1;
//     for (let i = 2; i <= n; i++) {
//         faktorial *= i;
//     }
//     return faktorial;
// }
// console.log(n);
//  7 - MASALA
// let n = 123;
// let summa = 0;
// while (n > 0) {
//     summa += n % 10;
//     n = Math.floor(n / 10);
// }
// return summa;
// console.log(n);
