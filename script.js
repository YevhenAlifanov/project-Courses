"use strict";

let numberOfFilms;




let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start: function(){
        numberOfFilms = +prompt('Сколько фильмоы вы уже посмотрели?', '');
    
        while(numberOfFilms =="" || numberOfFilms == null || isNaN(numberOfFilms)){
            numberOfFilms = +prompt('Сколько фильмоы вы уже посмотрели?', '');
        }
        
    },
    rememberMyFilms: function (){
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
    },
    detectPersonalLevel: function (){
        if (personalMovieDB.count <10){
            console.log('little');
        } else if(personalMovieDB.count>30 && personalMovieDB.count <30){
            console.log('norm');
        } else{
            console.log('too much')
        }
    },
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function(){
        for(let i=1; i<=3; i++){
            let genre = prompt(`самый любимый фильм под номером ${i}`);

            if(genre == "" || genre == null){
                console.log('вы ввели некорректные данные');
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            }
            
    
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i} - это ${item} `);
        });
    }
    
};
