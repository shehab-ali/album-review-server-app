import reviewsModel from './reviews-model.js';

const createReview = (review) => reviewsModel.create(review);
const deleteReview = (rid) => reviewsModel.deleteOne({_id: rid});
const updateReview = (rid, review) => reviewsModel.updateOne({_id: rid}, {$set: review})
const findAllReviews = () => reviewsModel.find();

export default {createReview, deleteReview, updateReview, findAllReviews};