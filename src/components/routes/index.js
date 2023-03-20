
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

