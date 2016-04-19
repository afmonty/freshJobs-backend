require('./Job');
require('./Tag');

module.exports = bookshelf.model('JobTag', {
	tableName: 'jobtags',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt']
	
});