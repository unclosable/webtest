Ext.define('webapp.store.StudentStore', {
	extend : 'Ext.data.Store',
	requires : [ 'webapp.model.StudentModel' ],
	initComponent : function() {
		console.log('initComponent');
		this.callParent(arguments);
	},
	constructor : function(cfg) {
		cfg = cfg || {};
		this.callParent(Ext.apply(this, cfg));
	},
	autoLoad : true,
	clearOnPageLoad : true,
	model : 'webapp.model.StudentModel',
	proxy : {
		type : 'ajax',
		url : 'json/student.json',
		reader : {
			type : 'json',
			rootProperty : 'studentList'
		}
	},
	listeners : {
		load : {
			fn : function(thiz, records, success, operation, eOpts) {
				thiz.getData().each(function(o, a, b) {
					o.showStudentInfo();
				});
			}
		}
	}

});