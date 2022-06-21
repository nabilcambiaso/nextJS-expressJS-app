const express = require("express");
const app = express();
app.use(express.json());
const userRouter = require('./routes/users');
const logger = require('./middlewares/logger');
const welcome = require('./middlewares/welcome');
//middlewares
// app.use(express.urlencoded({extended:true}))
app.use(logger);
app.use('/users', userRouter)

app.get('/',welcome, (req,res) => {
    res.status(500).json({
        message:"error"
    });
})

app.listen(3000)