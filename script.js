"use strict";

let numberOfFilms = prompt('Сколько фильмоы вы уже посмотрели?', '');

let personalMovieDB = {};
personalMovieDB.count = numberOfFilms;
personalMovieDB.movies = {};
personalMovieDB.actors = {};
personalMovieDB.genres = [];
personalMovieDB.privat = false;

let lastFilm = prompt('Один из последних фильмов', '');
let countOfFilm = +prompt('На сколько вы его оцените?', '');
let lastFilm2 = prompt('Один из последних фильмов', '');
let countOfFilm2 = +prompt('На сколько вы его оцените?', '');
personalMovieDB.movies[lastFilm] = countOfFilm;
personalMovieDB.movies[lastFilm2] = countOfFilm2;