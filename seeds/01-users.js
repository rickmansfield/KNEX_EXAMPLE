
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {name: 'Rick', website: 'www.dummysite.com'},
        {name: 'Sara', website: 'www.anotherdummysite.com'},
        {name: 'Max', website: 'www.dumolesite.com'},
      ]);
    });
};
