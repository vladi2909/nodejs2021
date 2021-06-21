import { Request, Response } from 'express';
import User from '../../entities/user.model';
import express from 'express';
const router = express.Router();
import usersService from './user.service';
import { IParamId } from '../../models/paramsId.model';

router.route('/').get(async (_req: Request, res: Response) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req: Request<IParamId>, res: Response) => {
  try {
    const user = await usersService.get(req.params.id);
    res.status(200).json(User.toResponse(user));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.route('/').post(async (req: Request, res: Response) => {
  const user = await usersService.create(
    new User({
      name: req.body.name,
      login: req.body.login,
      password: req.body.password,
    })
  );
  try {
    res.status(201).json(User.toResponse(user));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.route('/:id').delete(async (req: Request<IParamId>, res: Response) => {
  try {
    const user = await usersService.deleteById(req.params.id);
    res.status(200).json(User.toResponse(user));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.route('/:id').put(async (req: Request<IParamId>, res: Response) => {
  const modUser = {
    id: req.params.id,
    name: req.body.name,
    login: req.body.login,
    password: req.body.password,
  };

  try {
    const user = await usersService.update(req.params.id, modUser);
    res.json(User.toResponse(user));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
