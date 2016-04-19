exports.up = function(knex, Promise) {
	return knex.schema.createTable('companies', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.integer('userID').notNull();
		t.foreign('userID');
		t.string('name').notNull();
		t.string('headquarters').notNull();
		t.string('description').notNull();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('companies');
};