import Router from 'express';
import PostController from './PostController.js';

const router = new Router();

router.post('/post', PostController.create);
router.get('/post', PostController.getPosts);
router.get('/post/:id', PostController.getPost);
router.put('/post', PostController.updatePosts);
router.delete('/post/:id', PostController.deletePosts);

export default router;