import albumsDao from '../albums/albums-dao.js';

const likeAlbum = async (req, res) => {
    const album = req.body
    const actualAlbum = await albumsDao.likeAlbum(album)
    res.json(actualAlbum)
}

const dislikeAlbum = async (req,res) => {
    const album = req.body
    const actualAlbum = await albumsDao.dislikeAlbum(album)
    res.json(actualAlbum)
}

const reviewAlbum = async (req, res) => {
    const album = req.body
    const actualAlbum = await albumsDao.reviewAlbum(album)
    res.json(actualAlbum)
}

const deleteReview = async (req, res) => {
    const album = req.body
    const actualAlbum = await albumsDao.deleteReview(album)
    res.json(actualAlbum)
}

const findAlbumByImdbID = async (req, res) => {
    const imdbID = req.params.imdbID
    const album = await albumsDao.findAlbumByImdbID(imdbID)
    res.json(album)
}

const findAllAlbums = async (req, res) => {
    const albums = await albumsDao.findAllAlbums();
    res.json(albums);
}

const albumsController = (app) => {
    app.post('/api/likes', likeAlbum)
    app.post('/api/dislikes', dislikeAlbum)
    app.post('/api/review', reviewAlbum)
    app.post('/api/deleteReview', deleteReview)
    app.get('/api/albums', findAllAlbums)
    app.get('/api/albums/:imdbID', findAlbumByImdbID)
}

export default albumsController;