exports.up = function(knex, Promise) {
	return knex.schema.createTable('applications', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.integer('userID').notNull();
		t.foreign('userID');
		t.text('coverletter').notNull();
		t.string('resumeURL').notNull();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('applications');
};