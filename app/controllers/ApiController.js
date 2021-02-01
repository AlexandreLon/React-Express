import edge from 'edge.js'
import {User} from '../models/User'

export const index = (req, res) => {
    res.send(edge.render('index'))
}

export const userPage = async (req, res) => {
    const user = new User({username: "toto"});
    await user.save()
    const users = await User.find();
    res.send(edge.render('user', {users: users}))
}