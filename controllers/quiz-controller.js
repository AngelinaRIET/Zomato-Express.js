
const Answer = require('../models/Answer');
const Quiz = require('../models/Quiz');

const createQuiz = (req, res, next) => {
  Quiz.create(req.body, (err) => {
    console.log(err);
    if (err) return next(err);
    res.redirect('/admin/quiz');
  });
};

const getAllQuizzes = (req, res, next) => {
  Quiz.getAll((err, results, fields) => {
    if (err) return next(err);
    res.json({ quiz: results });
  });
};

const createAnswer = (req, res) => {
  Answer.create((err, results, fields, next) => {
    if (err) return next(err);
    return res.json({ message: 'Answer created' });
  });
};

// create answer should return a positive message?
// OR
// {answer : results} ? Does it make sense to send back
// what the zomato admin just typed?

const editAnswer = (req, res) => {
  Answer.edit((err, results, fields, next) => {
    if (err) return next(err);
    return res.json({ message: 'Answer edited' });
  });
};

const deleteAnswer = (req, res) => {
  Answer.delete((err, results, fields, next) => {
    if (err) return next(err);
    return res.json({ message: 'Answer deleted' });
  });
};

module.exports = {
  createQuiz,
  getAllQuizzes,
  createAnswer,
  editAnswer,
  deleteAnswer,
};
