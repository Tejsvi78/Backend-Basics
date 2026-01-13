
const blog = require('../models/blog');


exports.updateBlog = async (req, res) => {
    try {
        const { writter, title, content } = req.body;
        if (!writter || !title || !content) {
            return res.status(400).json({
                message: "PUT request requires all fields.You can use editDetails with PATCH"
            });
        }
        const id = req.params.id;
        const updatedblog = await blog.findByIdAndUpdate(
            { _id: id },
            { writter, title, content, updatedAt: Date.now() },
            { new: true, runValidators: true }
        );
        if (!updatedblog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }
        res.status(200).json({
            success: true,
            data: updatedblog,
            message: 'Blog updated successfully.'
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

exports.editDetails = async (req, res) => {
    try {

        const id = req.params.id;
        const updatedblog = await blog.findByIdAndUpdate(
            { _id: id },
            { $set: req.body },
            { new: true, runValidators: true }
        );
        if (!updatedblog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }
        res.status(200).json({
            success: true,
            data: updatedblog,
            message: 'Blog updated successfully.'
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