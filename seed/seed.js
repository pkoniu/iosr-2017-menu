const MongoClient = require('mongodb').MongoClient;

const seedData = require('./menu-items.json');

const {
    MONGO_HOST = 'localhost',
    MONGO_PORT = '27017',
    DB_NAME = 'iosr2017-menu'
} = process.env;

const mongoUrl = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${DB_NAME}`;

const insertItems = db => {
    console.log(`Connected to ${DB_NAME}.`);
    console.log(`Inserting ${seedData.length} menu items.`);
    return db.collection('menu-items').insertMany(seedData);
};

const actAfterInsert = result => {
    console.log(`Inserted ${result.insertedCount} menu items.`);
    return process.exit(0);
};

const actOnError = error => {
    console.log(`Couldn't finish seeding: ${error}`);
    return process.exit(1);
};

return MongoClient.connect(mongoUrl)
    .then(insertItems)
    .then(actAfterInsert)
    .catch(actOnError);
