"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var cheerio = require("cheerio");
var LetterboxdUser = 'FavourOshio'; //My Letterboxd username for test
var diary = "https://letterboxd.com/".concat(LetterboxdUser, "/films/diary/for/2023"); //Just films for 2023
var AxiosIntstance = axios_1["default"].create();
AxiosIntstance.get(diary)
    .then(function (response) {
    var html = response.data;
    var $ = cheerio.load(html);
    var filmsTable = $('tbody').children('tr');
    // console.log(filmsTable)
    var films = [];
    filmsTable.each(function (_i, elem) {
        var title = $(elem).find('.td-film-details').find('h3').text();
        var userRating = parseInt($(elem).find('input.rateit-field').val());
        var releaseDate = parseInt($(elem).find('.td-released').text());
        var liked = $(elem).find('.icon-liked').length > 0;
        var rewatched = $(elem).find('.td-rewatch.center.icon-status-off').length === 0;
        // const dayWatched = $(elem).find('.td-day').text()
        // const monthWatched = $(elem).find('.date').find('strong').text()
        // // const yearWatched
        // console.log(title + ' | ' + monthWatched + '' + dayWatched)
        films.push({
            title: title,
            userRating: userRating,
            releaseDate: releaseDate,
            liked: liked,
            rewatched: rewatched
        });
    });
    console.log(films);
})["catch"](console.error);
