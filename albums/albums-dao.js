import albumsModel from './albums-model.js';

const likeAlbum = async (album) => {
    let actualAlbum = {}
    const existingAlbum = await albumsModel.findOne({imdbID: album.imdbID})
    if (existingAlbum) {
        // update
        const status = await albumsModel.updateOne({imdbID: album.imdbID},
                                                   {$set: {likes: existingAlbum.likes + 1}})
                                                   actualAlbum = {...existingAlbum, likes: existingAlbum.likes + 1}
    } else {
        // insert
        actualAlbum = await albumsModel.create({

                                                   ...album,
                                                   likes: 1,
                                                   reviews: 0
                                               })
    }
    return actualAlbum
}

const dislikeAlbum = async (album) => {
    let actualAlbum = {}
    const existingAlbum = await albumsModel.findOne({imdbID: album.imdbID})
    if (existingAlbum) {
        // update
        const status = await albumsModel.updateOne({imdbID: album.imdbID},
                                                   {$set: {likes: existingAlbum.likes - 1}})
        actualAlbum = {...existingAlbum, likes: existingAlbum.likes - 1}
    } else {
        // insert
        actualAlbum = await albumsModel.create({

                                                   ...album,
                                                   likes: -1,
                                                   reviews: 0
                                               })
    }
    return actualAlbum
}

const reviewAlbum = async (album) => {
    let actualAlbum = {}
    const existingAlbum = await albumsModel.findOne({imdbID: album.imdbID})
    if (existingAlbum) {
        // update
        const status = await albumsModel.updateOne({imdbID: album.imdbID},
                                                   {$set: {reviews: existingAlbum.reviews + 1}})
        actualAlbum = {...existingAlbum, reviews: existingAlbum.reviews + 1}
    } else {
        // insert
        actualAlbum = await albumsModel.create({

                                                   ...album,
                                                   likes: 0,
                                                   reviews: 1,
                                               })
    }
    return actualAlbum

}

const deleteReview = async (album) => {
    let actualAlbum = {}
    const existingAlbum = await albumsModel.findOne({imdbID: album.imdbID})
    const status = await albumsModel.updateOne({imdbID: album.imdbID},
                                               {$set: {reviews: existingAlbum.reviews - 1}})
    actualAlbum = {...existingAlbum, reviews: existingAlbum.reviews - 1}
    return actualAlbum

}

const findAllAlbums = () => albumsModel.find();

const findAlbumByImdbID = async (imdbID) => {
    const album = albumsModel.findOne({imdbID})
    return album
}

export default {
    findAlbumByImdbID, likeAlbum, dislikeAlbum, findAllAlbums, reviewAlbum, deleteReview
}