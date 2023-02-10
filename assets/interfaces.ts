
interface MovieInfo {
    movie: {
        moviePoster: string,
        movieNameCN: string,
        movieNameEN: string,
        realseYear: string,
        movieType: string[],
        director: string,
        actors: string,
        sourceType: number,
        sourceURL: string,
    },
    recommender: {
        name: string,
        avatar: string,
        reconmmendWords: string,
    }

};

interface Weekinfo {
    timestamp: number,
    month: string,
    date: string,
    movieList: MovieInfo[],
    test:any
};

export type { MovieInfo, Weekinfo };