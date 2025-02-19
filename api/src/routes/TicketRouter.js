import Router from 'express';
import TicketModel from '../models/TicketModel.js';
import mongoose from 'mongoose';

const ticketRouter = Router();

// All tickets
ticketRouter.get('/all', async (req, res) => {
  try {
    const result = await TicketModel.find();
    if (result) {
      res.status(200).json(result);
    }
  } catch (e) {
    res.send(e.message);
  }
});

// Create route
ticketRouter.post('/', async (req, res) => {
  const {title, component, state, owner, steps} = req.body.form;
  try {
    const bugTicket = new TicketModel({
      title,
      component,
      state,
      owner,
      steps
    });
    const result = await TicketModel.create(bugTicket);
    res.status(201).json(result);
  } catch (error) {
    res.send({message: error.message});
  }
});

//Delete route
ticketRouter.delete('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    await TicketModel.findOneAndDelete({_id: id});
    let result = await TicketModel.find();
    return res.send(result);
  } catch (e) {
    res.send({message: e.message});
  }
});

// Get Single by id
ticketRouter.get('/query/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const doc = await TicketModel.findOne({_id: id});
    if (doc) {
      res.status(200).send(doc);
    }
  } catch (error) {
    res.status(501).send(error);
  }
});

// Update route
ticketRouter.put('/query/update/:id', async (req, res) => {
  try {
    const {title, component, state, owner} = req.body;
    var id = new mongoose.Types.ObjectId(req.params.id);

    let update = await TicketModel.findOneAndUpdate(
      {_id: id},
      {title, component, state, owner},
      {
        returnOriginal: false
      }
    );

    if (update) {
      const result = await TicketModel.findOne(id);
      return res.status(200).send(result);
    }
  } catch (error) {
    res.send(error.message);
  }
});

ticketRouter.get('/query', async (req, res) => {
  let query = {};
  if (req.query.title) {
    query.title = req.query.title;
  }
  if (req.query.component) {
    query.component = req.query.component;
  }
  if (req.query.state) {
    query.state = req.query.state;
  }
  if (req.query.owner) {
    query.state = req.query.owner;
  }
  try {
    const result = await TicketModel.find(query).exec();
    res.status(200).send(result);
  } catch (error) {
    res.send('error', error);
  }
});
export default ticketRouter;
