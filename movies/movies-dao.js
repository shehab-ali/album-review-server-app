import moviesModel from './movies-model.js';

const likeMovie = async (movie) => {
    let actualMovie = {}
    const existingMovie = await moviesModel.findOne({imdbID: movie.imdbID})
    if (existingMovie) {
        // update
        const status = await moviesModel.updateOne({imdbID: movie.imdbID},
                                                   {$set: {likes: existingMovie.likes + 1}})
        actualMovie = {...existingMovie, likes: existingMovie.likes + 1}
    } else {
        // insert
        actualMovie = await moviesModel.create({

                                                   ...movie,
                                                   likes: 1,
                                                   reviews: 0
                                               })
    }
    return actualMovie
}

const dislikeMovie = async (movie) => {
    let actualMovie = {}
    const existingMovie = await moviesModel.findOne({imdbID: movie.imdbID})
    if (existingMovie) {
        // update
        const status = await moviesModel.updateOne({imdbID: movie.imdbID},
                                                   {$set: {likes: existingMovie.likes - 1}})
        actualMovie = {...existingMovie, likes: existingMovie.likes - 1}
    } else {
        // insert
        actualMovie = await moviesModel.create({

                                                   ...movie,
                                                   likes: -1,
                                                   reviews: 0
                                               })
    }
    return actualMovie
}

const reviewMovie = async (movie) => {
    let actualMovie = {}
    const existingMovie = await moviesModel.findOne({imdbID: movie.imdbID})
    if (existingMovie) {
        // update
        const status = await moviesModel.updateOne({imdbID: movie.imdbID},
                                                   {$set: {reviews: existingMovie.reviews + 1}})
        actualMovie = {...existingMovie, reviews: existingMovie.reviews + 1}
    } else {
        // insert
        actualMovie = await moviesModel.create({

                                                   ...movie,
                                                   likes: 0,
                                                   reviews: 1,
                                               })
    }
    return actualMovie

}

const deleteReview = async (movie) => {
    let actualMovie = {}
    const existingMovie = await moviesModel.findOne({imdbID: movie.imdbID})
    const status = await moviesModel.updateOne({imdbID: movie.imdbID},
                                               {$set: {reviews: existingMovie.reviews - 1}})
    actualMovie = {...existingMovie, reviews: existingMovie.reviews - 1}
    return actualMovie

}

const findAllMovies = () => moviesModel.find();

const findMovieByImdbID = async (imdbID) => {
    const movie = moviesModel.findOne({imdbID})
    return movie
}

export default {
    findMovieByImdbID, likeMovie, dislikeMovie, findAllMovies, reviewMovie, deleteReview
}