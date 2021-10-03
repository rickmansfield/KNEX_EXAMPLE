const db = require('./db-config');


db.select('*').from('users');

//shortcut
db('users'); //resolves to an array of users. 

db('users').wehre({ id:3 }); //resolves to an array containingany users that matcht the "where" value

db('users').insert({ name: 'Rick', age: 55 }); //NOTE resolves to an array containg the ID of the new user

db('users').where({ id:5 }).update({ age:55 });//resolves to the count of records updated. i.e. in this case a count of ONE 1

db('users').where({ age:55 }).del;//resolves to a count of records removed. 