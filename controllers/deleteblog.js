const blog = require("../models/blog");

exports.deleteBlog = async (req, res) => {
    try {
        const id = req.params.id;

        if (await blog.findByIdAndDelete({ _id: id })) {

            res.status(200).json({
                success: true,
                message: 'Blog deleted successfully.'
            })
        } else {
            res.status(200).json({
                success: false,
                message: `no data found for id ${id}`,
            })
        }

    } catch (error) {
        console.log(error);
        console.error(error)
        res.status(500).json({
            success: false,
            data: "data can't be deleted",
            message: error.message,
        })
    }
}
