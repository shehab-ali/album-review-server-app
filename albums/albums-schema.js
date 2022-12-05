import mongoose from 'mongoose';

const albumsSchema = mongoose.Schema({
                                         title: String,
                                         imdbID: {type: String, unique: true},
                                         poster: String,
                                         likes: {type: Number, default: 0},
                                         reviews: {type: Number, default: 0},
                                     }, {collection: 'albums'})
export default albumsSchema

