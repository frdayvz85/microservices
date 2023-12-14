import express from 'express';
import { deleteUser, getUser, getUsers, login, register } from './controllers';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/', getUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
export default router;