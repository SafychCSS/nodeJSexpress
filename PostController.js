import Post from './Post.js';
import PostService from './PostService.js';

class PostController {
    async create(request, response) {
        try {
            const post = await PostService.create(request.body, request.files.picture);
            response.json(post);
        } catch (e) {
            response.status(500).json(e.message);
        }
    }

    async getPosts(request, response) {
        try {
            const posts = await Post.find();
            return response.json(posts);
        }
        catch (e) {
            response.status(500).json(e.message);
        }
    }

    async getPost(request, response) {
        try {
            const post = await PostService.getPost(request.params.id);
            return response.json(post);
        } catch (e) {
            response.status(500).json(e.message);
        }
    }

    async updatePosts(request, response) {
        try {
            const post = request.body;

            if (!post._id)
                return response.status(400).json({ message: 'Необходимо указать Id записи' });

            const updatePost = await PostService.updatePosts(post);
            return response.json(updatePost);
        }
        catch (e) {
            response.status(500).json(e.message);
        }
    }

    async deletePosts(request, response) {
        try {
            const { id } = request.params;

            if (!id)
                return response.status(400).json({ message: 'Необходимо указать Id записи' });

            const post = await PostService.deletePosts(id);
            return response.json(post);
        }
        catch (e) {
            response.status(500).json(e.message);
        }
    }
}

export default new PostController();