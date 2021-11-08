
// // // function first(){

// // //     setTimeout(function(){
// // //         console.log(1);
// // //     }, 500);
// // // }
// // // function second(){
// // //     console.log(2);
// // // }
// // // first();
// // // second();

// // // function learnJS(lang, callback){
// // //     console.log(`я учу : ${lang}`)
// // //     callback(); 
// // // }
// // // learnJS("JavaScript", function(){
// // //     console.log('Я прошел этот урок');
// // // });

// // // let options = {
// // //     name: 'test',
// // //     width: 1024,
// // //     height: 1024,
// // //     colors: {
// // //         border: 'black',
// // //         background: 'red'
// // //     },
// // //     makeTest: function(){
// // //         console.log('Test');
// // //     }
// // // };
// // // options.makeTest();

// // // let {border, background} = options.colors;
// // // console.log(border);
// // // // console.log(options.name);

// // // // // delete options.name;
// // // // console.log(options);

// // // // let counter = 0;

// // // // for (let key in options){
// // // //     if(typeof(options[key]) === 'object'){
// // // //         for(let i in options[key]){
// // // //             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// // // //             counter++;
// // // //         };
// // // //     } else {
// // // //         console.log(`Свойство ${key} имеет значение ${options[key]}`);
// // // //         counter++;
// // // //     }
    
// // // // }
// // // // console.log(counter);

// // // console.log(Object.keys(options).length);




// // // arr.forEach(function(item, i, arr){
// // //     console.log(`${i}: ${item} внутри массива ${arr}`);
// // // }

 

// // // console.log(arr.length);
// // // console.log(arr);


// // // for(let i =0; i<arr.length; i++){
// // //     console.log(arr[i]);
// // // }

// // // for (let value of arr){
// // //     console.log(value);
// // // }

// // let arr = [12, 2, 33, 4, 1.5, 6, 7];
// // arr.sort(compareNum);
// // console.log(arr);
// // function compareNum(a,b){
// //     return(a-b);
// // }// *упорядочить массив


// // // let str = prompt("", "");
// // // let products = str.split(", ");

// // // console.log(products.join(': '));

// // let a = 5;
// // let b = a; 
// // b = b + 5;
// // console.log(b);
// // console.log(a);


// // const obj = {
// //     a:1,
// //     b:2
// // };
// // const copy = obj;
// // copy.a = 10;

// // console.log(copy);
// // console.log(obj);

// // function copy(mainObj){
// //     let objCopy = {}

// //     let key;
// //     for (key in mainObj){
// //         objCopy[key] = mainObj[key];
// //     }
// //     return objCopy;
// // }

// const numbers = {
//     a:2,
//     b:4,
//     c:{
//         x:3,
//         y:4
//     }
// };

// // const newNumbers = copy(numbers);
// // newNumbers.a = 10;
// // console.log(numbers);
// // console.log(newNumbers);

// let add = {
//     d:17,
//     e:20
// };

// // console.log(Object.assign(numbers, add));

// // let clone = Object.assign({}, add);
// // console.log(clone);
// // clone.d = 666;
// // console.log(clone);

// // console.log(numbers);

// let oldArray = ['a', 'b', 'c'];
// let newArray = oldArray.slice();

// newArray[1] = 'hhjhhj';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'video', 'rutube'],
//     blogs = ['word', 'livejourn', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];
//  console.log(internet);

//  function log(a,b,c){
//      console.log(a);
//      console.log(b);
//      console.log(c);
//  }

//  let num = [2,5,7];

//  log(...num);
//  let array = ['a', 'b'];

//  const newAarray= [...array];

//  const q ={
//      one:1,
//      two:2
//  };
//  const newObj = {...q};

let soldier = {
    name: 'Igor',
    age: 25,
    color: 'white',
    height: 180,
    language: 'english'
};

let John = {
    name: 'John',
};
John.hair = 'black';

Object.setPrototypeOf(John, soldier);
console.log(John.hair);
console.log(John.name);
console.log(John.height);
console.log(John);