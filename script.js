// function factorial(n) {
// 	return (n! = 1) ? n * factorial(n - 1) : 1; 
// }
// console.log(factorial(5));


// function sum (arr) {
// 	var a = 0;
// 	for (var i = 0; i < arr.length; i++) {
// 		a = a + arr[i];
// 	}
// 	return a;
// }

// function getSubArrays (arr) {
//  	var result = [];
//  	for (var i = 0; i < arr.length; i++) {
//  		for (var j = i + 1; j <= arr.length; j++) {
// 			result.push(arr.slice(i,j));	
//  		}
// 	}
//  	return result;
// }

// function getMinSub (arr) {
// 	var minArray = [];
// 	var subArrays = getSubArrays (arr);
// 	for (var i = 0; i < subArrays.length; i++) {
// 		var subArraySum = sum (subArrays[i]);
// 		var minArraySum = sum (minArray);
// 		if (subArraySum < minArraySum) {
// 			minArray = subArrays[i];
// 		}
// 	}
// 	return minArray;
// }

// var arr = [1, -2, -3, 4, -2, 6];
// var arr2 = [2, -1, 2, -3, 5, -9]; // [-9]
// var arr3 = [-5, 1, -3, 3, 5, -6]; // [-5, 1, -3]
// var arr4 = [5, -3, 1, 3, -2, -7]; // [-2, -7]
// var arr5 = [-1, -3, -5]; // [-1, -3, -5]
// var arr6 = [1, 5, 6]; // []
// var arr7 = [-1, -2, -3, 9, -2, -1, -3]; 

// console.log(arr, getMinSub(arr));
// console.log(arr2, getMinSub(arr2));
// console.log(arr3, getMinSub(arr3));
// console.log(arr4, getMinSub(arr4));
// console.log(arr5, getMinSub(arr5));
// console.log(arr6, getMinSub(arr6));
// console.log(arr7, getMinSub(arr7));



