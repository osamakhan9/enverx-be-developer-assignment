const express = require('express');
const {createPost , deletedCrud , editCrud, getAllCrud} = require('../controller/Products.controller')


const crudRoute = express.Router()

crudRoute.get('/posts', getAllCrud);

crudRoute.get('/posts:id',getAllCrud)

crudRoute.post('/posts',createPost)

crudRoute.delete('/posts/:id', deletedCrud)

crudRoute.put('/posts/:id', editCrud)


module.exports = crudRoute

