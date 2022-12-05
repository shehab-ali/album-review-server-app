import mongoose from 'mongoose';

const reviewsSchema = mongoose.Schema({
                                          albumID: String,
                                          postedBy: {
                                              userID: String
                                          },
                                          review: String,
                                      }, {collection: 'reviews'});
export default reviewsSchema;