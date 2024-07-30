import Router from 'express';
import TicketModel from '../models/TicketModel.js';

const ticketRouter = Router();

// All tickets
ticketRouter.get('/all', async (req, res) => {
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

// Update route
ticketRouter.put('/:id', async (req, res) => {
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

export default ticketRouter;
