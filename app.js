const _ = require('lodash');
const db = require('./controllers/db/mongo_database');
const commonDB = require('./controllers/db/common_db');

const documentCollection = db.use('cats');
// const errorHandling = errorUtil.propagateError(next);

commonDB.find(documentCollection, {name: "cat3"})
        .then(theout)
        .catch((err) => {
            console.log('an error occured : ' + err);
        });


function theout(out) {
    if(!_.isEmpty(out)) {
        console.log(out);
    }
    else {
        console.log('no output');
    }
    
}

