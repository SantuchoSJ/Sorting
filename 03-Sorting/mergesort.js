function split(wholeArray) {
  let mitad = Math.floor(wholeArray.length / 2);

  let firstHalf = wholeArray.slice(0, mitad);
  let secondHalf = wholeArray.slice(mitad, wholeArray.length);

  return [firstHalf, secondHalf];
}


function merge(arr1, arr2) {
  let nuevoArr = [];
  const indice = 0;

  while (indice < arr1.length || indice < arr2.length) {
      if (arr1[indice] < arr2[indice] || !arr2[indice]) {
          nuevoArr.push(arr1.shift());
      } else {
          nuevoArr.push(arr2.shift());
      }
  } return nuevoArr;
}

function mergeSort (arr){
  if(arr.length <= 1) return arr
  let arr1= split(arr)[0]
  let arr2= split(arr)[1]

  let split1= mergeSort(arr1)
  let split2= mergeSort(arr2)


  return merge(split1, split2)

}



/*
mergeSort([1,5,3,7])
    arr1 = [1,5]
    arr2 = [3,7]
    return merge([1,5], [3,7]) // [1,3,5,7]
        mergeSort([1,5])
            arr1 = [1]
            arr2 = [5]
            return merge([1], [5]); // <--- [1,5]
                mergeSort([1]) = [1]
                mergeSort([5]) = [5]
        
        mergeSort([3,7])
            arr1 = [3]
            arr2 = [7]
            return merge([3], [7]) <--- [3,7]
*/