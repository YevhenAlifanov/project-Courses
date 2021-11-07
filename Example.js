
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

let options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function(){
        console.log('Test');
    }
};
options.makeTest();

let {border, background} = options.colors;
console.log(border);
// console.log(options.name);

// // delete options.name;
// console.log(options);

// let counter = 0;

// for (let key in options){
//     if(typeof(options[key]) === 'object'){
//         for(let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         };
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
    
// }
// console.log(counter);

console.log(Object.keys(options).length);

