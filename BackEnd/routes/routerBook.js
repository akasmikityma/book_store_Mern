import express from "express";
import allControllers from "../controllers/booksControllers.js";
const router=express.Router();

router.post('/books',allControllers.registerBooks);
router.get('/books',allControllers.getbooks);
router.get('/books/:id',allControllers.getBookByid);
router.put('/books/:id',allControllers.updateBook);
router.delete('/books/:id',allControllers.deleteBook);
export default router;