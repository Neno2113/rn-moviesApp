import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieMapper } from "../../../infrastructure";
import { GeneralMovieResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import type { Movie } from "../../entities/movie.entity";





export const moviesNowPlayingUseCase = async( fetcher: HttpAdapter ):Promise<Movie[]> => {

    try {
        const nowPlaying = await fetcher.get<GeneralMovieResponse>('/now_playing');

        return nowPlaying.results.map( MovieMapper.fromMovieDBResultToEntity )              


    } catch (error) {
        console.log(error);
        
        throw new Error('Error fetching movies - NowPlaying')
    }

}