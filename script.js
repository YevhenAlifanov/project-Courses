"use strict";

let numberOfFilms = prompt('Сколько фильмоы вы уже посмотрели?', '');

let personalMovieDB = {};
personalMovieDB.count = numberOfFilms;
personalMovieDB.movies = {};
personalMovieDB.actors = {};
personalMovieDB.genres = [];
personalMovieDB.privat = false;


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

if (personalMovieDB.count <10){
    console.log('little');
} else if(personalMovieDB.count>30 && personalMovieDB.count <30){
    console.log('norm');
} else{
    console.log('too much')
}

