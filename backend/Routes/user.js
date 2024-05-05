import express from 'express';
import{updateUser, getAllUser, getSingleUser, deleteUser} from "../Controllers/userController.js";

const router = express.Router();

router.get('/:id', getSingleUser);
router.get('/', getAllUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;