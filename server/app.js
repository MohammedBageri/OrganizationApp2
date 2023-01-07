require('dotenv').config();
require('express-async-errors');

const fs = require('fs');
const http = require('http');
const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');

const connectDB = require('./db/connect');
const OrganizationRouter = require('./routes/OrganizationRoutes');
const StateRouter = require('./routes/StateRoutes');
const CityRouter = require('./routes/CityRoutes');
const AuthenticationRouter = require('./routes/AuthenticationRoutes');
const UserRouter = require('./routes/UserRoutes');
const NewsRouter = require('./routes/NewsRoutes');
const OrderRouter = require('./routes/OrderRoutes');
const MapAreaRouter = require('./routes/MapAreaRoute');

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const agenda = require('./middleware/agenda');

app.set('trust proxy', 1);
// app.use(
//   rateLimiter({
//     windowMs: 15 * 60 * 1000,
//     max: 60,
//   })
// );
app.use(helmet());
app.use(
  cors({
    credentials: true,
    origin: [process.env.ORIGIN1, process.env.ORIGIN2],
  })
);
app.use(xss());
app.use(mongoSanitize());

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send('Organizations Project');
});

app.use('/api/Organizations', OrganizationRouter);
app.use('/api/States', StateRouter);
app.use('/api/Cities', CityRouter);
app.use('/api/Authentication', AuthenticationRouter);
app.use('/api/Users', UserRouter);
app.use('/api/News', NewsRouter);
app.use('/api/Orders', OrderRouter);
app.use('/api/MapAreas', MapAreaRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3005;
const start = async () => {
  try {
    createFolders();
    await connectDB(process.env.MONGO_URL);

    const server = http.createServer(app);
    server.listen(port, () => console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

(async function () {
  await agenda.start();

  await agenda.schedule('everyday at 00:00', 'checkIsActive');
})();

function createFolders() {
  const dirs = ['./public/upload-files'];

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

start();
