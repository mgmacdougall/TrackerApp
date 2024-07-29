import Router from 'express';
import UserModel from '../models/UserModel.js';

const userRouter = Router();

// Get All users
userRouter.get('/', async (req, res) => {
  try {
    let result = await UserModel.find({});
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

userRouter.post('/', async (req, res) => {
  const {name} = req.body;

  try {
    const user = new UserModel({name});
    const result = await UserModel.create(user);
    res.status(201).json(result);
  } catch (error) {
    res.send({message: error.message});
  }
});

// Find single user by id
userRouter.get('/:id', async (req, res) => {
  try {
    const {name} = req.body;
    const {id} = req.params;

    const doc = await UserModel.findOne({_id: id});
    if (doc) {
      doc.overwrite({name: name});
      await doc.save();
      let result = await UserModel.findById({_id: id});
      res.send(result);
    } else {
      res.send('Update failed please make sure parameters correct');
    }
  } catch (error) {
    res.send(error.message);
  }
});

// Update route for user
userRouter.put('/:id', async (req, res) => {
  try {
    const {name} = req.body;
    const {id} = req.params;

    const doc = await UserModel.findOne({_id: id});
    if (doc) {
      doc.overwrite({name: name});
      await doc.save();
      let result = await UserModel.findById({_id: id});
      res.send(result);
    } else {
      res.send('Update failed please make sure parameters correct');
    }
  } catch (error) {
    res.send(error.message);
  }
});

userRouter.delete('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    await UserModel.findOneAndDelete({_id: id});
    let result = await UserModel.find();
    return res.send(result);
  } catch (e) {
    res.send({message: e.message});
  }
});

export default userRouter;
