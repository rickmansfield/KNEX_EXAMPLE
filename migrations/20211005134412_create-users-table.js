
exports.up = function (knex) {
    //the change we want to make to our schema
    return knex.schema.createTable('user', tbl => {
        tbl.increments();
        tbl.text('name', 128).unique().notNullable();
        tbl.text('website');
    });
};

exports.down = function (knex) {
    //undoing that change
    return knex.schema.dropTableIfExists('user');
};
