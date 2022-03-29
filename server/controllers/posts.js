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
    res.send('Post creation')
}