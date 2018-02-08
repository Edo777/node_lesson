const express = require('express');
const UsersRouter = express.Router();

UsersRouter.get('/:id', (req, res)=>{
    res.send('Hello user');
});

module.exports = UsersRouter;