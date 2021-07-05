import Post from './Post.js';
import fileService from './fileService.js';

class PostService {
    create(post, picture) {
        const fileName = fileService.saveFile(picture);
        return Post.create({ ...post, picture: fileName });
    }

    getPosts() {
        return Post.find();
    }

    getPost(id) {
        if (!id)
            throw new Error('не указан id');

        return Post.findById(id);
    }

    updatePosts(post) {
        if (!post._id)
            throw new Error('не указан id');

        return Post.findByIdAndUpdate(post._id, post, { new: true, useFindAndModify: false });
    }

    deletePosts(id) {
        if (!id)
            throw new Error('не указан id');

        return Post.findByIdAndDelete(id);
    }
}

export default new PostService();