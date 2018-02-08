const users = [
    {
        id: 156,
        name: 'Edgar',
        surname: 'Xachatryan'
    },
    {
        id: 157,
        name: 'Seroj',
        surname: 'Harutyunyan'
    }
];


class UsersService {
    constructor(){
        this.Users = users;
    }



    getUserById(id){
        return new Promise((resolve, reject)=>{
            for( let key in this.Users){
                if(this.Users[key].id == id){
                    return resolve(this.Users[key]);
                }
            }
                return reject('User not found');
        })
    }

    updateUser(id, name, surname){
        return new Promise((resolve, reject)=>{
            for( let key in this.Users){
                if(this.Users[key].id == id){
                    this.Users[key].name = name;
                    this.Users[key].surname = surname;
                    return resolve('User updated');
                }
            }
                return reject('User not found');
        })
    }

}

module.exports = new UsersService();