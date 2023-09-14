const dbConnection = require('./mongodb');


const DeleteData = async () => {
    const db = await dbConnection();
    let res = await db.deleteOne({name:"Sony"});
    console.log(res.acknowledged);
}


DeleteData();