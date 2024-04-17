var arr1 = [10, 20, 4, 40, 60, 70];
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isNotInArr1(elt) {
  return !arr1.includes(elt);
}
function unionArr(arr1, arr2) {
  const arrFiltered = arr2.filter(isNotInArr1);
  const unionArr = arr1.concat(arrFiltered);
  return unionArr.sort((a, b) => a - b);
}
console.log(unionArr(arr1, arr2));
