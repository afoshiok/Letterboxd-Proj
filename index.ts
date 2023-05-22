import axios, { Axios } from "axios";
import * as cheerio from 'cheerio';

const LetterboxdUser = 'FavourOshio' //My Letterboxd username for test
const diary = `https://letterboxd.com/${LetterboxdUser}/films/diary/for/2023` //Just films for 2023

interface FilmData {
    title: string,
    userRating: number
    releaseDate: number,
    // Like: boolean,
    // Rewatch: boolean,
    // DateWatched: string
}

const AxiosIntstance: Axios = axios.create()

AxiosIntstance.get(diary)
.then(
    response => {
        const html = response.data
        const $ = cheerio.load(html)
        const filmsTable = $('tbody').children('tr')
        // console.log(filmsTable)

        const films: FilmData[] = []
        filmsTable.each((_i, elem) => {
            const title: string = $(elem).find('.td-film-details').find('h3').text()
            const userRating: number = parseInt($(elem).find('input.rateit-field').val())
            const releaseDate: number = parseInt($(elem).find('.td-released').text())
            films.push({
                title,
                userRating,
                releaseDate
            })
        })

        console.log(films)
    }
)
.catch(console.error)