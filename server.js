import mongoose from "mongoose";
import express from 'express';
import cors from 'cors'
import session from 'express-session';
const app = express();
import userController from "./controllers/user-controller.js";
import moviesController from "./controllers/movies-controller.js";
import authController from "./controllers/auth-controller.js";
import reviewsController from "./controllers/reviews-controller.js";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}

const CONNECTION_STRING =  'mongodb://localhost:27017/movieReviewServer'
mongoose.connect('mongodb+srv://shehab:shehab@cluster0.hctruag.mongodb.net/?retryWrites=true&w=majority');
app.use(cors({
                 credentials: true,
                 origin: 'http://localhost:3000'
             }));
//https://eloquent-figolla-180294.netlify.app
app.use(session({
                    secret: 'SECRETO',
                    cookie: {secure: false}
                }));
app.use(express.json());

userController(app);
moviesController(app);
authController(app);
reviewsController(app)

app.get('/', (request, response) => {
    response.send("Welcome to movie-review");
});

app.listen(process.env.PORT || 4000);