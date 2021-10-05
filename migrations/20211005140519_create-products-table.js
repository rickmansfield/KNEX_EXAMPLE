
exports.up = function (knex) {
    return knex.schema.createTable('product', tbl => {
        tbl.increments();
        tbl.text('name', 128)
            .unique()
            .notNullable();
        tbl.integer('price')
            .notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('product');
};
