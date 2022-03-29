import PostMessage from '../models/postMessage.js'

export const getPost = async (req, res) => {
    try {
        const postMessages = await PostMessage.find()
        res.status(200).json({
            data: postMessages
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

export const createPost = (req, res) => {
    const post = req.body
    
    const newPost = new PostMessage(post)

    try {
        await newPost.save()
        res.status(201).json({
            data: newPost
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}