import mongoose from 'mongoose'

const UserModel = new mongoose.Schema({
    username: String
});

const User = mongoose.model('User', UserModel);

export {User};