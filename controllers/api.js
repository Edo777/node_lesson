const UsersController = require('./users');
const PhotosController = require('./photos');

class API {

    initializeApp(app){
        app.use('/users', UsersController);
        app.use('/photos', PhotosController);

        app.use('/test', (req, res)=>{
            res.send('test');
        })
    }
}

module.exports = new API();