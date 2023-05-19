import axios, { Axios } from "axios";
import cheerio from 'cheerio'

const LetterboxdUser = 'FavourOshio' //My Letterboxd username for test
const diary = `https://letterboxd.com/${LetterboxdUser}/films/diary/`

interface FilmData {
    Title: string,
    ReleaseDate: string,
    Like: boolean,
    Rewatch: boolean,
    DateWatched: string
}

const AxiosIntstance: Axios = axios.create()

AxiosIntstance.get(diary)
.then(
    response => {
        const html = response.data
        const $ = cheerio.load(html)
        const filmsTable = $('tbody').children('tr').length
        console.log(filmsTable)
    }
)
.catch(console.error)