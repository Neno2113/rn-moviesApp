import type { MovieResult } from "../";
import { Movie } from "../../core/entities/movie.entity";




export class MovieMapper {

    static fromMovieDBResultToEntity( movieResult: MovieResult ): Movie {
        return {
            id: movieResult.id,
            title: movieResult.title,
            description: movieResult.overview,
            releaseDate: new Date(movieResult.release_date),
            rating: movieResult.vote_average,
            poster:`https://image.tmdb.org/t/p/w500${movieResult.poster_path}`,
            backdrop:`https://image.tmdb.org/t/p/w500${movieResult.backdrop_path}`,

        }
    }

}