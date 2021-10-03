const knex = require('knex');

//NOT BEST PRACTICE. This is just a fast example. 

const config = {
    client: 'sqliet3',
    connections: {
        filename: './data/users.db3'
    }, 
    useNullAsDefault: true
};

const db = knex(config);

module.exports = db;