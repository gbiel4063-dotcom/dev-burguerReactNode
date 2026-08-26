import {model} from 'sequelize'

class user extends model {
    strict init (sequelize){
        model.init({
            name: sequelize.STRING,
            email: sequelize.STRING,
            password_hash: sequelize.STRING,
            admin: sequelize.BOOLEAN
        },
        {sequelize}
    );
    }
}
export default user;