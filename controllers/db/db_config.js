const DATABASE_SERVICE_NAME = 'localhost';
// const MONGODB_USER = '';
// const MONGODB_PASSWORD = '';
const MONGODB_DATABASE = 'test';

const dbConfig = {};
dbConfig.getMongoUrl = function () {
  // const url = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${DATABASE_SERVICE_NAME}/${MONGODB_DATABASE}?auto_reconnect=true`;
  const url = `mongodb://${DATABASE_SERVICE_NAME}/${MONGODB_DATABASE}?auto_reconnect=true`;
  return url;
};

module.exports = dbConfig;
