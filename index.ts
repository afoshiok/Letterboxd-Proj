import axios, { Axios } from "axios";

const LetterboxdUser = 'FavourOshio' //My Letterboxd username for test
const diary = `https://letterboxd.com/${LetterboxdUser}/films/diary/`

const AxiosIntstance: Axios = axios.create()

AxiosIntstance.get(diary)
.then(
    response => {
        const html = response.data
        console.log(html)
    }
)
.catch(console.error)