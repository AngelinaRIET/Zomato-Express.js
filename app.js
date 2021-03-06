const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');
const learnerRouter = require('./routes/learner');
const quizRouter = require('./routes/quiz');
const { getBrowserLang } = require('./controllers/language-controller');
const { authenticateWithJwt } = require('./services/jwt');
const { checkIfAdmin } = require('./controllers/auth-controller');



const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', getBrowserLang);


app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/admin', adminRouter);
app.use('/learner', learnerRouter);
app.use('/quiz', quizRouter);

// add more routers here:
// app.use('/posts', postsRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
