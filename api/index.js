import express from 'express';
import mongoose from 'mongoose';
import TicketModel from './src/models/TicketModel.js';
import User from './src/models/UserModel.js';

const app = express();
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('home');
});

// Read all
app.get('/all', async (req, res) => {
  try {
    const result = await TicketModel.find();
    if (result) {
      res.send(result);
    }
  } catch (e) {
    res.send(e.message);
  }
});

// Create route
app.post('/ticket', async (req, res) => {
  const {title} = req.body;

  try {
    const bugTicket = new TicketModel({title});
    const result = await TicketModel.create(bugTicket);
    res.status(201).json(result);
  } catch (error) {
    res.send({message: error.message});
  }
});

//Delete route
app.delete('/ticket/:id', async (req, res) => {
  try {
    const {id} = req.params;
    await TicketModel.findOneAndDelete({_id: id});
    let result = await TicketModel.find();
    return res.send(result);
  } catch (e) {
    res.send({message: e.message});
  }
});

// Update route
app.put('/ticket/:id', async (req, res) => {
  try {
    const {title} = req.body;
    const {id} = req.params;

    const doc = await TicketModel.findOne({_id: id});
    if (doc) {
      doc.overwrite({title: title});
      await doc.save();
      let result = await TicketModel.findById({_id: id});
      res.send(result);
    } else {
      res.send('Update failed please make sure parameters correct');
    }
  } catch (error) {
    res.send(error.message);
  }
});

// get all users
app.get('/users', async (req, res) => {
  try {
    const result = await User.find();
    console.log(result);
    if (result) {
      res.send(result);
    }
  } catch (e) {
    res.send(e.message);
  }
});

// Create User
app.post('/user', async (req, res) => {
  const {name} = req.body;

  try {
    const user = new User({name});
    const result = await User.create(user);
    res.status(201).json(result);
  } catch (error) {
    res.send({message: error.message});
  }
});

// Get All users
app.get('/users', async (req, res) => {
  try {
    let result = await User.find({});
    console.log(result);
    if (result) {
      res.send(result);
    } else {
      res.send('No users found');
    }
  } catch (error) {
    res.send(error.message);
  }
});

// Find single user by id
app.get('/user/:id', async (req, res) => {
  try {
    const {name} = req.body;
    const {id} = req.params;

    const doc = await User.findOne({_id: id});
    if (doc) {
      doc.overwrite({name: name});
      await doc.save();
      let result = await User.findById({_id: id});
      res.send(result);
    } else {
      res.send('Update failed please make sure parameters correct');
    }
  } catch (error) {
    res.send(error.message);
  }
});

// Update route for user
app.put('/user/:id', async (req, res) => {
  try {
    const {name} = req.body;
    const {id} = req.params;

    const doc = await User.findOne({_id: id});
    if (doc) {
      doc.overwrite({name: name});
      await doc.save();
      let result = await User.findById({_id: id});
      res.send(result);
    } else {
      res.send('Update failed please make sure parameters correct');
    }
  } catch (error) {
    res.send(error.message);
  }
});

app.delete('/user/:id', async (req, res) => {
  try {
    const {id} = req.params;
    await User.findOneAndDelete({_id: id});
    let result = await User.find();
    return res.send(result);
  } catch (e) {
    res.send({message: e.message});
  }
});

// DB Connection + server start
mongoose
  .connect(
    `mongodb+srv://mgmacdougall:nc8TUlpkXVpzrCWN@maincluser.vsgj6ng.mongodb.net/?retryWrites=true&w=majority&appName=MainCluser`
  )
  .then(() => {
    console.log('db connected');
    app.listen(4044, () => console.log(`Server started on port 4044`));
  })
  .catch(e => console.log(e));
