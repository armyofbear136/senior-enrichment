'use strict';

const router = require('express').Router();

const HttpError = require('../../utils/HttpError');
const Student = require('./student.model');
const Campus = require('./campus.model');

router.param('id', function (req, res, next, id) {
  Student.findById(id)
    .then(function (student) {
      if (!student) throw HttpError(404);
      req.requestedStudent = student;
      next();
      return null;
    })
    .catch(next);
});

router.get('/', function (req, res, next) {
  Student.findAll({
    include: [{
      model: Campus
    }]
  })
    .then(function (students) {
      res.json(students);
    })
    .catch(next);
});

router.post('/', function (req, res, next) {
  Student.create(req.body)
    .then(function (student) {
      console.log("finding one student", student.dataValues.id);
      return Student.findOne(
        {
          where: {id: student.dataValues.id},
          include: [{
            model: Campus
          }]
        })
    })
    .then(function (newStudent) {
      console.log(newStudent);
      res.status(201).json(newStudent);
    })
    .catch(next);
});

router.get('/:id', function (req, res, next) {
  req.requestedStudent.reload(Student.options.scopes.populated())
    .then(function (requestedStudent) {
      res.json(requestedStudent);
    })
    .catch(next);
});

router.put('/:id', function (req, res, next) {
  req.requestedStudent.update(req.body)
    .then(function (student) {
      res.json(student);
    })
    .catch(next);
});

router.delete('/:id', function (req, res, next) {
  req.requestedStudent.destroy()
    .then(function () {
      res.status(204).end();
    })
    .catch(next);
});

module.exports = router;
