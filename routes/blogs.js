const express = require('express');
const router = express.Router();

const { createBlog } = require('../controllers/createBlog');
const { deleteBlog } = require('../controllers/deleteblog');
const { getAllBlogs, getBlogById } = require('../controllers/getBlog');
const { updateBlog, editDetails } = require('../controllers/updateBlog');

router.post('/createBlog', createBlog);
router.delete('/deleteBlog/:id', deleteBlog);
router.get('/getAllBlogs', getAllBlogs);
router.get('/getBlogById/:id', getBlogById);
router.put('/updateBlog/:id', updateBlog);
router.patch('/editDetails/:id', editDetails);

module.exports = router;


