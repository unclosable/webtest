Ext.define('webapp.store.StudentStore', {
	extend : 'Ext.data.JsonStore',
	requires : [ 'webapp.model.StudentModel' ],
	
	autoLoad : true,
	clearOnPageLoad : true,
	
	model : 'webapp.model.StudentModel',
	proxy : {
		type : 'ajax',
		url : 'json/student.json'
	},
	reader : {
		type : 'json',
		rootProperty : 'studentList'
	},
	listeners : {
		load : {
			fn : function(thiz, records, success, operation, eOpts) {
				console.log(records);
				thiz.each(function(re) {
					console.log(re);
				});
			}
		}
	}
});