import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
                                        email: {type: String, required: true, unique: true},
                                        password: {type: String, required: true},
                                        handle: {type: String, default: "newUser"},
                                        firstName: {type: String, default: "guest"},
                                        lastName: {type: String, default: "user"},
                                        role: {
                                            type: String,
                                            enum: ['USER', 'REVIEWER', 'ADMIN'],
                                            default: 'USER'
                                        },
                                        likedMovies: [{type: String, default: []}],
                                        dislikedMovies: [{type: String, default: []}],
                                    }, {collection: 'users'});

export default usersSchema;