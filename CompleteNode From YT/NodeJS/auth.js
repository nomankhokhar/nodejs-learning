const register = function(username){
    console.log(`User ${username} has been Registered`);
}

const login = function(username , password) {
    console.log(`User ${username} has been Logged in`);
}

module.exports = {register , login};


