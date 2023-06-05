const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async(req, res) => {
    try {
        const data = await Comment.findAll()
        res.status(200).json(data)
    } catch(err) {
        console.log(err)
    }
})

router.post('/', async(req, res) => {
    try {
        const commentData = await Comment.create({
           ...req.body,
           user_id: req.session.user_id
        })
        res.status(200).json(commentData)
    } catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
})


module.exports = router;