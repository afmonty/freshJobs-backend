exports.up = function(knex, Promise) {
	return knex.schema.createTable('jobs', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.integer('userID').notNull();
		t.integer('companyID').notNull();
		t.foreign('companyID');
		t.foreign('userID');
		t.integer('minSalary').nullable();
		t.integer('maxSalary').nullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('jobs');
};