// Bowling Code 
//gutter ball= 0
// 1 1 = 20
 // 5 5 3 = 16 
 // 5 5 3 4 = 24 
 // 
 
 
//10 frames 
//2 balls per set 
//strike if instance 1 = 10 
//then, add instance 1 and 2 
// instance 2 x 2 + instance 3 x 2 then add together (concat)
//result of that double goes back to frame 1 
//return to original (math.random in decimals)
//spare turn 1 + turn 2 = 10, count turn 3 twice and return number to original frame 


// const numbers = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 0, 1, 7, 3, 6, 4, 10, 0, 2, 8, 6] // sums to 133
// // function for adding two numbers. 
// const add = (a, b) =>
//   a + b
// // use reduce to sum our array
// const sum = numbers.reduce(add)

var sum = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 0, 1, 7, 3, 6, 4, 10, 0, 2, 8, 6].reduce(add, 0);
function add(a, b) {
    return a + b;
}
console.log(sum); // 91 

var a = sum.indexOf(10, 2);


//
function sumArray(array) {
  for (
    var
      index = 0,              // The iterator
      length = array.length,  // Cache the array length
      sum = 0;                // The total amount
      index < length;         // The "for"-loop condition
      sum += array[index++]   // Add number on each iteration
  );
  return sum;
}



//use array index to add the sums 

// var bowling = {
//   score: [], 
//   displayScore: function() {
//     if (this.score.length === 0) {
//       console.log(' ');
//     } else {
//       console.log();
//         if (this.score[i] = 10) {
//           console.log( );
//         }
//       }
//     }
//   }
// }

// strike: function () {
//   var strike = [i]
//   for (var = 10)
//   then add ball 2 + ball 3 * 10 
  
// }
// bowling: function () {
// var score = [i]
//   for (var i = 0; i < score.length; i++)
//   if ball = 0  {
    
//   } else {
//     if ball 1 + ball 2 = 10 
//     then, ball 3 * 2.concat sum 
    
//   } else {
    
//   } else {
    
//   }
// };

