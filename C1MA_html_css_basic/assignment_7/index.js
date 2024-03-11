// let arr = [2,0,4];
// let result = arr.map((x)=>{
//     if(x==0){
//         console.log("table cannot be generated");
//     }else{
// for(i=1;i<=10;i++){
    
//     console.log(x,"*",i,"=",x*i);

// } 
// }
// }  
// );

// const table = [2,3,4];
// table.map((e,i,array)=>{
//   let res;
//   console.log(`Table of ${e}`);
//   for(let i = 1; i<=10; i++)
//   {
//     res = e*i;
//     console.log(`${e} x ${i} = ${res}`);
//   }
// })

// let table = [2,0,4];
// table.map((x,i,array)=>{
// let result;
//         console.log(`\n\n table of  ${x} \n\n`);
// for(i=1;i<=10;i++){
//     result = x*i;
//     console.log(x,"*",i,"=",x*i);

// } 
// } 
//);



// -write a program to compare two array and where id match in both array pick the object from second array and rest are also included


// function toCompare(arr1,arr2){
//     let mergedArray = [];
//      for(let obj1 of arr1){
//         let found = false;
//         for(let obj2 of arr2){
//             if(obj1.id == obj2.id){
//               mergedArray.push(obj2);
//               found = true;
//               break;
//             }
//         }
//         if(!found){
//             mergedArray.push(obj1);
//         }
//      }

//      for (let obj2 of arr2) {
//         let found = false;

//         // Check if obj2.id exists in mergedArray
//         for (let obj of mergedArray) {
//             if (obj2.id === obj.id) {
//                 found = true;
//                 break;
//             }
//         }

//         if (!found) {
//             mergedArray.push(obj2); // If no match found, add obj2 to mergedArray
//         }
//     }

//     return mergedArray;
// }
// let arr1= [
//     {
//         id:1,
//         name:"hadi"
//     },
//     {
//         id:2,
//         name:"asghar"
//     }];
// let arr2 = [
//     {
//         id:2,
//         name:"asad"
//     },
//     {
//         id:3,
//         name:"ali"
//     }];
// let res = toCompare(arr1,arr2);

// console.log(res);



// function toCompare(arr1, arr2) {
//     let mergedArray = [];

//     // Add all objects from arr1 to mergedArray
//     for (let obj of arr2) {
//         mergedArray.push(obj);
//     }

//     // Add objects from arr2 to mergedArray if they have unique ids
//     for (let obj2 of arr2) {
//         let found = false;
//         for (let obj1 of arr1) {
//             if (obj1.id === obj2.id) {
//                 found = true;
//                 break;
//             }
//         }
//         if (!found) {
//             mergedArray.push(obj2);
//         }
//     }

//     return mergedArray;
// }

// let arr1 = [
//     { id: 1, name: "hadi" },
//     { id: 2, name: "asghar" }
// ];

// let arr2 = [
//     { id: 2, name: "asad" },
//     { id: 3, name: "ali" }
// ];

// let res = toCompare(arr1, arr2);
// console.log(res);

const array1 = [{ id: 1, name: "hadi" }, { id: 2, name: "asghar" }];
const array2 = [{ id: 2, name: "asad" }, { id: 3, name: "ali" }];
const fltr = array2.filter((e) => !array1.find((obj) => e.id === obj.id ))
const combined = array1.concat(fltr)
console.log(combined);
