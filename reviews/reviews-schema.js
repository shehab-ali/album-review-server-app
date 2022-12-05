import mongoose from 'mongoose';

const reviewsSchema = mongoose.Schema({
                                          movieID: String,
                                          postedBy: {
                                              userID: String
                                          },
                                          review: String,
                                      }, {collection: 'reviews'});
export default reviewsSchema;