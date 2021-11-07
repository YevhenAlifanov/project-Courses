"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмоы вы уже посмотрели?', '');

    while(numberOfFilms =="" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмоы вы уже посмотрели?', '');
    }
    
}
start();

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};




function rememberMyFilms(){
    for(let i=0; i<2; i++){

        let lastFilm = prompt('Один из последних фильмов', '');
        let countOfFilm = prompt('На сколько вы его оцените?', '');

        if(lastFilm !== null && countOfFilm !== null && lastFilm !==''&& countOfFilm !==''&& countOfFilm.length<50 ){
            personalMovieDB.movies[lastFilm] = countOfFilm;
          
        } else {
            console.log('error');
            i--;
        }
     
}
}
rememberMyFilms();



function detectPersonalLevel(){
    if (personalMovieDB.count <10){
        console.log('little');
    } else if(personalMovieDB.count>30 && personalMovieDB.count <30){
        console.log('norm');
    } else{
        console.log('too much')
    }
}
detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


function writeYourGenres(){
    for(let i=1; i<=3; i++){
         
        personalMovieDB.genres[i-1] = prompt(`самый любимый фильм под номером ${i} ', '`);;

    }
}
console.log(writeYourGenres());
console.log(personalMovieDB);