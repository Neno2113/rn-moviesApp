import { Movie } from "../..";
import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieMapper, GeneralMovieResponse } from "../../../infrastructure";



export const upcomingMoviesUseCase = async( fetcher: HttpAdapter):Promise<Movie[]> => {


    try {
        const upcoming = await fetcher.get<GeneralMovieResponse>('/upcoming');

        return upcoming.results.map( MovieMapper.fromMovieDBResultToEntity )

        
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching upcoming movies')
        
    }
}