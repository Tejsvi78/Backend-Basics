const blog = require("../models/blog");

exports.getAllBlogs = async (req, res) => {

    try {
        const allBlogs = await blog.find({});
        if (!allBlogs) {
            return res.status(404).json({
                success: true,
                data: "The Database is empty.",
            })
        }
        res.status(200).json({
            success: true,
            data: allBlogs,
            message: "All data is fetched.",
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Data can't be fetched from database."
        })
    }
}

exports.getBlogById = async (req, res) => {

    try {
        const id = req.params.id;
        const idBlog = await blog.findById({ _id: id });
        if (!idBlog) {
            return res.status(404).json({
                success: true,
                data: `No data found for id ${id}.`,
            })
        }
        res.status(200).json({
            success: true,
            data: idBlog,
            message: `Data fetched for id ${id}.`,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            data: `Data can't be fetched for id ${id} `,
            message: error.message,
        })
    }
}