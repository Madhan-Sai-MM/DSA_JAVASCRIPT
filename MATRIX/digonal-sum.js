/* Q - 1) Write a program to print the sum of 
right diagonal of a matrix */

var mm = [[1,2,3],[4,5,6],[7,8,9]]
//          0         1      2
let n = mm.length; //3
let m = mm[0].length //3

sum = 0;
for(i=0;i<m;i++){
    var kk = mm[i][m-1-i]; 
    sum = sum + kk; //0 + 3= 3; 3 + 5 = 8; 8 + 7 = 15;
}
console.log("SUM OF THE RIGHT DIAGONAL IS ", sum) // 15
