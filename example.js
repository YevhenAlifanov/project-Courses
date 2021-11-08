
// function first(){

//     setTimeout(function(){
//         console.log(1);
//     }, 500);
// }
// function second(){
//     console.log(2);
// }
// first();
// second();

// function learnJS(lang, callback){
//     console.log(`я учу : ${lang}`)
//     callback(); 
// }
// learnJS("JavaScript", function(){
//     console.log('Я прошел этот урок');
// });

// let options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         background: 'red'
//     },
//     makeTest: function(){
//         console.log('Test');
//     }
// };
// options.makeTest();

// let {border, background} = options.colors;
// console.log(border);
// // console.log(options.name);

// // // delete options.name;
// // console.log(options);

// // let counter = 0;

// // for (let key in options){
// //     if(typeof(options[key]) === 'object'){
// //         for(let i in options[key]){
// //             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// //             counter++;
// //         };
// //     } else {
// //         console.log(`Свойство ${key} имеет значение ${options[key]}`);
// //         counter++;
// //     }
    
// // }
// // console.log(counter);

// console.log(Object.keys(options).length);




// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// }

 

// console.log(arr.length);
// console.log(arr);


// for(let i =0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// for (let value of arr){
//     console.log(value);
// }

let arr = [12, 2, 33, 4, 1.5, 6, 7];
arr.sort(compareNum);
console.log(arr);
function compareNum(a,b){
    return(a-b);
}


// let str = prompt("", "");
// let products = str.split(", ");

// console.log(products.join(': '));