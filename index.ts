import axios, { Axios } from "axios";
import cheerio from 'cheerio'
// import { Cheerio } from "cheerio";

const LetterboxdUser = 'FavourOshio' //My Letterboxd username for test
const diary = `https://letterboxd.com/${LetterboxdUser}/films/diary/`

const AxiosIntstance: Axios = axios.create()

AxiosIntstance.get(diary)
.then(
    response => {
        const html = response.data
        const $ = cheerio.load(html)
        const filmsTable = $('#table film-table > tr')
        console.log(filmsTable)
    }
)
.catch(console.error)