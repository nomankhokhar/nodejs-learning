const loggin = (req, res, next) => {
    console.log("Logging...")
    next()
}


const Auth = (req, res, next) => {
    console.log("Authenticating...")
    next()
}

module.exports = { loggin, Auth }