const dbConnection = require('./mongodb');

const insert = async () => {
    const db = await dbConnection();
    let result = await db.insertMany(
        [
            {
                name: "Apple",
                broad: "Nokia",
                price: 100,
                category: "LOLolia"
            },
            {
                name: "Nomi",
                broad: "BIB",
                price: 100,
                category: "KAli"
            }
        ]);
console.log(result.acknowledged);
}

insert();