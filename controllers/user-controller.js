import userDao from '../users/users-dao.js';

const findAllUsers = async (req, res) => {
    const users = await userDao.findAllUsers()
    res.json(users)
}

const findUserById = async (req, res) => {
    const user_id = req.params['id']
    const user = await userDao.findUserById(user_id)
    if(user) {
        res.json(user)
    } else {
        res.sendStatus(404)
    }
}

const findUserByEmail = async (req, res) => {
    const email = req.params.email
    const user = await userDao.findUserByEmail(email)
    if(user) {
        res.json(user)
    } else {
        res.sendStatus(404)
    }
}

const findUserByCredentials = async (req, res) => {
    const credentials = req.body
    const {email, password} = credentials
    const user = await userDao.findUserByCredentials(
        email, password
    )
    if(user) {
        res.sendStatus(200)
    } else {
        res.sendStatus(403)
    }
}

const createUser = async (req, res) => {
    const user = req.body
    const new_user = await userDao.createUser(user)
    res.json(new_user)
}

const updateUser = async (req, res) => {
    const user = req.body
    const user_id = req.params['id']
    const status = await userDao.updateUser(user_id, user)
    res.json(status)
}

const deleteUser = async (req, res) => {
    const user_id = req.params['id']
    const status = await userDao.deleteUser(user_id)
    res.json(status)
}

const userController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:id', findUserById);
    app.get('/api/users/email/:email', findUserByEmail);
    app.post('/api/users/credentials', findUserByCredentials);
    app.post('/api/users', createUser);
    app.put('/api/users/:id', updateUser);
    app.delete('/api/users/:id', deleteUser);
}

export default userController;