require('./User');
module.exports = bookshelf.model('Application', {
	tableName: 'applications',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt']
	
});