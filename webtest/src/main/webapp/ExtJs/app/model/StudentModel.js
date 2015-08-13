Ext.define('webapp.model.StudentModel', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'name',
		type : 'string'
	}, {
		name : 'groupName',
		type : 'string'
	}, {
		name : 'age',
		type : 'int'
	}, {
		name : 'sex',
		type : 'int'
	} ],
	showStudentInfo : function() {
		console.log('name:' + this.get('name') + ',age:' + this.get('age'));
	}
});