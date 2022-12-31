/* Q - 2) Write a program to print sum of 
border elements of a square Matrix */
let a = [ [1,2,3],[4,5,6],[7,8,9] ];
let sum2 = getBoundary(a);
function getBoundary(a)
{
	let sum2 = 0;
	for(let i = 0; i < a.length; i++)
	{
		for(let j = 0; j < a.length; j++)
		{
			if (i == 0)
				sum2 += a[i][j];
			else if (i == a.length - 1)
				sum2 += a[i][j];
			else if (j == 0)
				sum2 += a[i][j];
			else if (j == a.length - 1)
				sum2 += a[i][j];
		}
	}
	return sum2;
}
console.log("SUM OF THE BOUNDARY ELEMENTS IS ", sum2);