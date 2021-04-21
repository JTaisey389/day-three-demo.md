'use strict';

// FirstClassModel

const express = require('express');

const BringInClasses = require('../models/things.js');
const things = new BringInClasses();

const router = express.Router();

// RESTful routes 

router.get('/things', getThings);
router.get('/things/:id', getOneThing);
router.post('/things', creatThing);
router.put('/things/:id', updateThing);
router.delete('/things/:id', deleteThings);

function getThings(req, res){
  let getallthings = things.read();
  res.status(200)(getallthings);
}
function getOneThing(req, res){
  const id = parseInt(req.params.id);
  let oneThing = things.read(id);
  res.status(200)(oneThing)
};

function creatThing(req, res){
  let content = req.body;
  let createdThing = things.create(content);
  res.status(201).json(creatThing);
}
function updateThing(req, res){
//  Placeholder for now
}
function deleteThings(req, res){
//  Placeholder for now
}

module.exports = router;