const express = require('express');

const router = express.Router();

const {
  createQuiz,
  getAllQuizzes,
  editQuiz,
  deleteQuiz,

  getAllQuestions,
  createQuestion,
  editQuestion,
  deleteQuestion,
  createAnswers,
  addCorrectAnswer,

  // createAnswer,
  editAnswer,
  deleteAnswer,
} = require('../controllers/quiz-controller');
const { getAllUsers, deleteUser, editUser, getAllRestaurants, deleteRestaurant, editRestaurant, createRestaurant } = require('../controllers/admin-controller');

// router.get('/quiz/:id/:questionid/edit', (req, res) => {
//   res.send('quiz/:id - on quiz');
// });

// router.get('/contact/edit', (req, res) => {
//   res.send('contact');
// });

// router.get('/faq/edit', (req, res) => {
//   res.send('faq');
// });

// router.get('/documentation/edit', (req, res) => {
//   res.send('documentation - list');
// });

// router.get('/documentation/:title/edit', (req, res) => {
//   res.send('documentation - title');
// });

// users

router.get('/users', getAllUsers);

router.post('/user/delete', deleteUser);

router.post('/user/edit', editUser);

// quiz

router.get('/quiz', getAllQuizzes);

router.post('/quiz/create', createQuiz);

router.post('/quiz/edit', editQuiz);

router.post('/quiz/delete', deleteQuiz);

// questions

router.get('/questions', getAllQuestions);

router.post('/question/create', createQuestion, createAnswers, addCorrectAnswer);

router.put('/question/edit', editQuestion);

router.post('/question/delete', deleteQuestion);

// answers

// router.post('/answer/create', createAnswer);

router.put('/answer/edit', editAnswer);

router.delete('/answer/delete', deleteAnswer);

router.get('/users', getAllUsers);

router.post('/user/delete', deleteUser);

router.post('/user/edit', editUser);

//restaurants
router.get('/restaurants', getAllRestaurants);

router.put('/restaurant/edit', editRestaurant);

router.post('/restaurant/create', createRestaurant);

router.delete('/restaurant/delete', deleteRestaurant);

module.exports = router;
