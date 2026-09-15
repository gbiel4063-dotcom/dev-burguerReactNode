
import user from "../models/users.js"
import {v4} from 'uuid'

class usercontroller{
    async store(request,response){
        const user = {
            id: v4(),
            name: 'henrique',
            email: 'henrique@gmail.com',
            password_hash: '123456',
            admin: false,
        };
        await user.create(user);
        res.status(201).json(user);
    }
}

export default new usercontroller()