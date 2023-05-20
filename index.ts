import axios, { Axios } from "axios";
import cheerio from 'cheerio'

const LetterboxdUser = 'FavourOshio' //My Letterboxd username for test
const diary = `https://letterboxd.com/${LetterboxdUser}/films/diary/for/2023` //Just films for 2023

interface FilmData {
    title: string,
    userRating: number
    // releaseDate: string,
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
            const title: string = $(elem)
            .find('div').text() //FIXME: Trying to access the film title span element
            const userRating: number = parseInt($(elem).find('input.rateit-field').val())
            films.push({
                title,
                userRating
            })
        })

        console.log(films)
    }
)
.catch(console.error)