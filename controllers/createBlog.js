
const blog = require('../models/blog');


exports.createBlog = async (req, res) => {
    try {
        const { writter, title, content } = req.body;
        const newblog = await blog.create({ writter, title, content });

        res.status(200).json({
            success: true,
            data: newblog,
            message: 'Blog uploaded successfully.'
        })

    } catch (error) {
        console.log(error);
        console.error(error)
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}