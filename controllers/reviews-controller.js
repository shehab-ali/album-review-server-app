import reviewsDao from "../reviews/reviews-dao.js";

const findAllReviews = async (req, res) => {
    const reviews = await reviewsDao.findAllReviews();
    res.json(reviews);
}

const createReview = async (req, res) => {
    const newReview = req.body;
    const insertedReview = await reviewsDao.createReview(newReview);
    res.json(insertedReview);
}

const deleteReview = async (req, res) => {
    const reviewIdToDelete = req.params.rid;
    const status = await reviewsDao.deleteReview(reviewIdToDelete);
    res.send(status);
}

const updateReview = async (req, res) => {
    const reviewIdToUpdate = req.params.rid;
    const updatedReview = req.body;
    const status = await reviewsDao.updateReview(reviewIdToUpdate, updatedReview);
    res.send(status);
}


const reviewsController = (app) => {
    app.post('/api/reviews', createReview);
    app.get('/api/reviews', findAllReviews);
    app.put('/api/reviews/:rid', updateReview);
    app.delete('/api/reviews/:rid', deleteReview);
}

export default reviewsController;