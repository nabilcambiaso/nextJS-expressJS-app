function welcome (req,res,next)
{
    console.log("url is",req.baseUrl);
    next();
}

module.exports = welcome;