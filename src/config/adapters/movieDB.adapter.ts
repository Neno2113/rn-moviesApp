import { AxiosAdapter } from "./http/axios.adapter";




export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key:'017b3631c2e3cc907a587665ac2d128e',
        language: 'es-MX'
    }
})