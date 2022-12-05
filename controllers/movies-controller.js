import moviesDao from '../movies/movies-dao.js';

const likeMovie = async (req, res) => {
    const movie = req.body
    const actualMovie = await moviesDao.likeMovie(movie)
    res.json(actualMovie)
}

const dislikeMovie = async (req,res) => {
    const movie = req.body
    const actualMovie = await moviesDao.dislikeMovie(movie)
    res.json(actualMovie)
}

const reviewMovie = async (req, res) => {
    const movie = req.body
    const actualMovie = await moviesDao.reviewMovie(movie)
    res.json(actualMovie)
}

const deleteReview = async (req, res) => {
    const movie = req.body
    const actualMovie = await moviesDao.deleteReview(movie)
    res.json(actualMovie)
}

const findMovieByImdbID = async (req, res) => {
    const imdbID = req.params.imdbID
    const movie = await moviesDao.findMovieByImdbID(imdbID)
    res.json(movie)
}

const findAllMovies = async (req, res) => {
    const movies = await moviesDao.findAllMovies();
    res.json(movies);
}

const moviesController = (app) => {
    app.post('/api/likes', likeMovie)
    app.post('/api/dislikes', dislikeMovie)
    app.post('/api/review', reviewMovie)
    app.post('/api/deleteReview', deleteReview)
    app.get('/api/movies', findAllMovies)
    app.get('/api/movies/:imdbID', findMovieByImdbID)
}

export default moviesController;