import mongoose from 'mongoose';

const moviesSchema = mongoose.Schema({
                                         title: String,
                                         imdbID: {type: String, unique: true},
                                         poster: String,
                                         likes: {type: Number, default: 0},
                                         reviews: {type: Number, default: 0},
                                     }, {collection: 'movies'})
export default moviesSchema

