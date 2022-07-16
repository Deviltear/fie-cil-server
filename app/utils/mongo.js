const mongoDB = require('@pick-star/cli-mongodb');

const { mongoDBName ,mongoUrl} = require('../../config/mongodb');
function mongo() {
  return new mongoDB(mongoUrl,mongoDBName)
}
module.exports ={mongo}