var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Produto = require('../models/Produto.js');

/* GET ALL PRODUTOS */
router.get('/', function(req, res, next) {
  Produto.find(function (err, produtos) {
    if (err) return next(err);
    res.json(produtos);
  });
});

/* GET SINGLE PRODUTO BY ID */
router.get('/:id', function(req, res, next) {
  Produto.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE PRODUTO */
router.post('/', function(req, res, next) {
  Produto.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE PRODUTO */
router.put('/:id', function(req, res, next) {
  Produto.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE PRODUTO */
router.delete('/:id', function(req, res, next) {
  Produto.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
