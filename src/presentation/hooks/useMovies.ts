import { useEffect, useState } from "react"
import { Movie } from "../../core/entities/movie.entity"

import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";

export const useMovies = () => {
    
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
    const [popular, setPopular] = useState<Movie[]>([])
    const [topRated, setTopRated] = useState<Movie[]>([])
    const [upcoming, setUpcoming] = useState<Movie[]>([])


    useEffect(() => {
        initialLoad();
     
    }, [])

    const initialLoad = async() => {

        const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        const upcomingPromise = UseCases.upcomingMoviesUseCase(movieDBFetcher);
        const topRatedPromise = UseCases.topRatedMoviesUseCase(movieDBFetcher);
        const popularPromise = UseCases.popularMoviesUseCase(movieDBFetcher);


        const [ 
            nowplayingMovies, 
            upcomingMovies,
            topRatedMovies,
            popularMovies, 
        ] = await Promise.all([ nowPlayingPromise, upcomingPromise, topRatedPromise, popularPromise ]);


        setNowPlaying( nowplayingMovies );
        setUpcoming( upcomingMovies );
        setTopRated( topRatedMovies );
        setPopular( popularMovies );

        setIsLoading(false);
        
    }
    
  
  
    return {
        isLoading,
        nowPlaying,
        upcoming,
        topRated,
        popular
    }
}
