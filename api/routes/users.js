const express = require("express");
const router = express.Router();


router.route('/')
.get((req, res) => {
    res.status(201).json({
        message: "users list"
    });
})
.post((req, res) => {
    const name = req.body.name;
    res.status(201).json({
        message: `create user ${name} `
    });
});

router.get('/new', (req, res) => {
    res.status(201).json({
        message: "new user form"
    });
})

router.route('/:id')
    .get((req, res) => {
        const id = req.params.id;
        res.status(201).json({
            message: `get user with id : ${id} `,
            user: req.user
        })
    })
    .put((req, res) => {
        const id = req.params.id;
        res.status(201).json({
            message: `update user  withid : ${id} `
        })
    })
    .delete((req, res) => {
        const id = req.params.id;
        res.status(201).json({
            message: `delete user with id : ${id} `,
        })
    });

    const users = [{name:"nabil"},{name:"samir"}]
    router.param('id',(req,res,next,id) => {
      req.user = users[id];
      next();
    })

module.exports = router;
