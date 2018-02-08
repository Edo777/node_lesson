const express = require("express");
const PhotosRouter = express.Router();
const UsersService = require('../services/users');

PhotosRouter.get("/:id", (req, res) =>{
    UsersService.getUserById(req.params.id)
            .then((user)=>{
                console.log(user)
                res.send(`Id : ${user.id}
                          Name : ${user.name}
                          Surname : ${user.surname}`);
            })
            .catch((err)=>{
                res.send(err);
            });
});

PhotosRouter.post('/:id/update', (req, res)=>{
    UsersService.updateUser(req.params.id, req.body.name, req.body.surname)
            .then((message)=>{
                res.redirect(`/photos/${req.params.id}`)
            })
            .catch(err => res.send(err));
});

module.exports = PhotosRouter;