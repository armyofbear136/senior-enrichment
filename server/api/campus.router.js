'use strict';

const router = require('express').Router();

const HttpError = require('../../utils/HttpError');
const Campus = require('./campus.model');

router.param('id', function (req, res, next, id) {
  Campus.findById(id)
  .then(function (campus) {
    if (!campus) throw HttpError(404);
    req.requestedCampus = campus;
    next();
    return null;
  })
  .catch(next);
});

router.get('/', function (req, res, next) {
  Campus.findAll({})
  .then(function (campuss) {
    res.json(campuss);
  })
  .catch(next);
});

router.post('/', function (req, res, next) {
  Campus.create(req.body)
  .then(function (campus) {
    res.status(201).json(campus);
  })
  .catch(next);
});

router.get('/:id', function (req, res, next) {
  req.requestedCampus.reload(Campus.options.scopes.populated())
  .then(function (requestedCampus) {
    res.json(requestedCampus);
  })
  .catch(next);
});

router.put('/:id', function (req, res, next) {
  req.requestedCampus.update(req.body)
  .then(function (campus) {
    res.json(campus);
  })
  .catch(next);
});

router.delete('/:id', function (req, res, next) {
  req.requestedCampus.destroy()
  .then(function () {
    res.status(204).end();
  })
  .catch(next);
});

module.exports = router;
