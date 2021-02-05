import express from 'express';
import { getPosts } from '../controllers/posts';

const router = express.Router();

router.get('/', getPosts)


export default router;