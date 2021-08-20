var express = require('express');
var app = express();
const cors = require('cors');

const db = require("./models");
const initRoutes = require("./routes/uploadImage.js");

global.__basedir = __dirname;



// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

initRoutes(app);

// app.use('/', indexRouter);
// app.use('/image', initRoutes)

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// db.sequelize.async({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;

// db.sequelize.sync();
db.sequelizeConnect.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

let port = 3000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
