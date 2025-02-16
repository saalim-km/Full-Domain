// function bubbleSort(arr) {
//     let swapped;

//     do{
//         swapped = false;
//         for(let i=0;i<arr.length;i++) {
//             if(arr[i] > arr[i+1]) {
//                 [arr[i] ,arr[i+1]] = [arr[i+1],arr[i]];
//                 swapped = true;
//             }
//         }
//     }while(swapped);

//     return arr;
// }
// console.log(bubbleSort([5,4,3,2,1]))


// function mergeSort(arr) {
//     if(arr.length <= 1) return arr;

//     let mid = Math.floor(arr.length / 2);
//     let left = mergeSort(arr.slice(0,mid));
//     let right = mergeSort(arr.slice(mid));

//     return merge(left,right);
// }


// function merge(left,right) {
//     const sortedArr = [];
//     while(left.length && right.length) {
//         if(left[0] < right[0]) {
//             sortedArr.push(left.shift());
//         }else {
//             sortedArr.push(right.shift());
//         }
//     }

//     return [...sortedArr,...left,...right];
// }
// console.log(mergeSort([5,4,3,2,1]))



// function mergeSort(str) {
//     if(str.length <= 1) return str;

//     let mid = Math.floor(str.length / 2);
//     let left =  mergeSort(str.slice(0,mid));
//     let right = mergeSort(str.slice(mid));

//     return merge(left,right);
// }

// function merge(left,right) {
//     let sortedStr = "";
//     while(left.length && right.length) {
//         if(left[0] < right[0]) {
//             sortedStr += left[0]
//             left = left.slice(1);
//         }else {
//             sortedStr += right[0];
//             right = right.slice(1);
//         }
//     }

//     return sortedStr + left + right;
// }

// console.log(mergeSort('edcba'))

// let str = "cba";
// console.log(str.slice(0,1))
// console.log(str.slice(1))




// insertion
// function insertionSort(arr) {
//     for(let i=1;i<arr.length;i++) {
//         let key = arr[i];
//         let j = i-1;

//         while(j >= 0 && arr[j] > key) {
//             arr[j+1] = arr[j];
//             j--;
//         }

//         arr[j+1] = key;
//     }

//     return arr;
// }

// console.log(insertionSort([3,2,1]))



// selection
// function selectionSort(arr) {
//     for(let i=0;i<arr.length;i++) {
//         let min = i;

//         for(let j=i+1;j<arr.length;j++) {
//             if(arr[j] < arr[min]) {
//                 min = j;
//             }
//         }

//         if(min !== i) {
//             [arr[i],arr[min]] = [arr[min] , arr[i]];
//         }
//     }

//     return arr;
// }
// console.log(selectionSort([3,2,1]))


// quick sort
function quickSort(arr) {
    if(arr.length <= 1) return arr;

    let p = arr[arr.length-1];
    let left = [];
    let right = [];

    for(let i=0;i<arr.length-1;i++) {
        if(arr[i] < p) {
            left.push(arr[i]);
        }else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left),p,...quickSort(right)];
}
console.log(quickSort([3,2,1]))