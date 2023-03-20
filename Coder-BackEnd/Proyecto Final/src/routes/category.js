import { Router } from 'express';
import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../controller/logicaCategory.js';
const router = Router();

router.get('/', getAllCategories);

router.get('/:id', getCategoryById);

router.post('/', createCategory);

router.put('/:id', updateCategory); 

router.delete('/:id', deleteCategory);

export default router;