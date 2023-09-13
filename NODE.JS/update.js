const dbConnection = require('./mongodb');

const updateData = async () => {
    let data = await dbConnection();
    let result = await data.updateOne(
        {name:"Apple"},
        {$set : {name:"Sony"}}
    );
}


updateData();