require('./User');
require('./Company');

module.exports = bookshelf.model('Job', {
	tableName: 'jobs',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	company: function () {
	return this.hasMany('Company', 'companyID');
	}
});