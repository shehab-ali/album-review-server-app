import usersModel from './users-model.js';

const findAllUsers = () => {
    return usersModel.find()
}
const findUserById = (id) => {
    return usersModel.findById(id)

}
const findUserByEmail = (email) =>
    usersModel.findOne({email})


const findUserByCredentials = (email, password) =>
    usersModel.findOne({email, password})
// userModel.findOne({email: email, password: password})
const createUser = (user) =>
    usersModel.create(user)
const updateUser = (id, user) =>
    usersModel.updateOne(
        {_id: id},
        {$set: user}
    )
const deleteUser = (id) =>
    usersModel.deleteOne({_id: id})

export default {
    findUserByEmail, findAllUsers, findUserByCredentials,
    findUserById, createUser, deleteUser, updateUser
}