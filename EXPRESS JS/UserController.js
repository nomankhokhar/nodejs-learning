 const registerUser =  (req,res)=>{
    const userName = req.body.name;
    const userEmail = req.body.email;
    const userPass = req.body.pass;

    res.json({
        success:true,
        // "name":userName,
        // "email":userEmail, // We dont Send All the Data in URL Just Send Success Msg for Security Purpose
        // "pass":userPass
    });
};

module.exports = registerUser;