
exports.up = function(knex, Promise) {
	return knex.schema.createTable('jobtags', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.integer('jobID').notNull();
		t.foreign('jobID');
		t.integer('userID').notNull();
		t.foreign('userID');
	
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('jobtags');
};