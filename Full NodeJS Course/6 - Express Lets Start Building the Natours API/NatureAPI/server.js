const dotenv = require('dotenv')

dotenv.config({path : './config.env'})

const app = require(".");

// by Default express use development environment variable
// console.log(app.get('env'))

// Environment variables of NodeJS
// console.log(process.env)


const PORT = process.env.PORT || 8000;
    
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`)
})