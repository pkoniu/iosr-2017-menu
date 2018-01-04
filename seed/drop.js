const MongoClient = require('mongodb').MongoClient;

const {
    MONGODB_URI,
    MONGO_HOST = 'localhost',
    MONGO_PORT = '27017',
    DB_NAME = 'iosr2017-menu'
} = process.env;

const mongoUrl = createMongoUrl();

const dropDatabase = db => {
    console.log(`Connected to ${DB_NAME}.`);
    console.log(`Dropping ${DB_NAME}.`);
    return db.dropDatabase();
};

const actAfterDrop = result => {
    console.log(`Dropped ${DB_NAME}.`);
    return process.exit(0);
};

const actOnError = error => {
    console.log(`Couldn't finish seeding: ${error}`);
    return process.exit(1);
};

return MongoClient.connect(mongoUrl)
    .then(dropDatabase)
    .then(actAfterDrop)
    .catch(actOnError);

function createMongoUrl() {
    const customUrl = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${DB_NAME}`
    return MONGODB_URI || customUrl;
}
