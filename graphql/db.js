let movies = 
[
    {
        id: 0,
        name: "신세계",
        score: 1
    },
    {
        id: 1,
        name: "내부자들",
        score: 2329
    },
    {
        id: 2,
        name: "기생충",
        score: 299
    },
    {
        id: 3,
        name: "클래식",
        score: 9
    },
    {
        id: 4,
        name: "클래식2",
        score: 19
    },
    {
        id: 5,
        name: "클래식3",
        score: 123
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    }else {
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies[movies.length-1].id + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}