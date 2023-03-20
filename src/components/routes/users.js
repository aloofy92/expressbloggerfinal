import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
