import express from 'express';
import mongoose from 'mongoose';
import Logger from './src/middleware/CustomLogger.js';
import ticketRouter from './src/routes/TicketRouter.js';
import userRouter from './src/routes/UserRouter.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
// Home route
app.get('/', (req, res) => {
  res.send('home');
});

// Custom logger implementation
app.use(Logger);

// Application routes
app.use('/ticket', ticketRouter);
app.use('/user', userRouter);

// DB Connection + server start
mongoose
  .connect(
    `mongodb+srv://mgmacdougall:<passord>@maincluser.vsgj6ng.mongodb.net/?retryWrites=true&w=majority&appName=MainCluser`
  )
  .then(() => {
    console.log('db connected');
    app.listen(4044, () => console.log(`Server started on port 4044`));
  })
  .catch(e => console.log(e));
