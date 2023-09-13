module.exports = reqFilter = (req, resp, next) => {  // Application Level Middle ware
    console.log('reqFilter');
    if (!req.query.age) {
        resp.send("please provide age");
    }
    else if(req.query.age < 18)
    {
        resp.send("You cannot access the page");
    }
    else {
        next();
    }
}