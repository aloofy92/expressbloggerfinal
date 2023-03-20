
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPost, updatePost } from './api';


import './App.css';



import CreateBook from './components/CreateBook';

import ShowBookList from './components/ShowBookList';

import ShowBookDetails from './components/ShowBookDetails';



const { v4: uuidv4 } = require("uuid");
var express = require("express");
var router = express.Router();


const blogsController = require('../controllers/blogsController');


router.get('/all',blogsController.getAllBlogs);
router.post("/create-one", blogsController.createOneBlog);
router.get("/get-one/:id", blogsController.getOneBlog);
router.put("/update-one/:id", blogsController.updateOneBlog);
router.delete("/delete-one/:id", blogsController.deleteOneBlog);

module.exports = router;

export default App;