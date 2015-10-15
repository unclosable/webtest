/**
 * This example shows how to create a line chart with images as markers. Line
 * charts allow to visualize the evolution of a value over time, or the ratio
 * between any two values.
 */
Ext.define('webapp.view.test.ChartTestPanel', {
	extend : 'Ext.panel.Panel',
	xtype : 'line-markers',

	width : 650,

	initComponent : function() {
		var me = this;

		this.myDataStore = Ext.create('Ext.data.JsonStore', {
			fields : [ 'month', 'data1' ],
			data : [ {
				month : 'Jan',
				data1 : 20
			}, {
				month : 'Feb',
				data1 : 20
			}, {
				month : 'Mar',
				data1 : 19
			}, {
				month : 'Apr',
				data1 : 18
			}, {
				month : 'May',
				data1 : 18
			}, {
				month : 'Jun',
				data1 : 17
			}, {
				month : 'Jul',
				data1 : 16
			}, {
				month : 'Aug',
				data1 : 16
			}, {
				month : 'Sep',
				data1 : 16
			}, {
				month : 'Oct',
				data1 : 16
			}, {
				month : 'Nov',
				data1 : 15
			}, {
				month : 'Dec',
				data1 : 15
			} ]
		});

		me.items = [ {
			xtype : 'polar',
			width : '100%',
			height : 500,
			store : this.myDataStore,
			insetPadding : '40 40 60 40',
			interactions : [ 'rotate' ],
			sprites : [ {
				type : 'text',
				text : 'Radial Charts - Basic',
				fontSize : 22,
				width : 100,
				height : 30,
				x : 40, // the sprite x position
				y : 20
			// the sprite y position
			}, {
				type : 'text',
				text : 'Data: Browser Stats 2012 - Internet Explorer',
				fontSize : 10,
				x : 12,
				y : 480
			}, {
				type : 'text',
				text : 'Source: http://www.w3schools.com/',
				fontSize : 10,
				x : 12,
				y : 495
			} ],
			axes : [ {
				type : 'numeric',
				position : 'radial',
				fields : 'data1',
				renderer : function(v) {
					return v + '%';
				},
				grid : true,
				minimum : 0,
				maximum : 25,
				majorTickSteps : 4
			}, {
				type : 'category',
				position : 'angular',
				grid : true
			} ],
			series : [ {
				type : 'radar',
				xField : 'month',
				yField : 'data1',
				style : {
					opacity : 0.80
				},
				highlight : {
					fillStyle : '#000',
					lineWidth : 2,
					strokeStyle : '#fff'
				},
				tooltip : {
					trackMouse : true,
					style : 'background: #fff',
					renderer : function(storeItem, item) {
						this.setHtml(storeItem.get('month') + ': ' + storeItem.get('data1') + '%');
					}
				}
			} ]
		} ];

		this.callParent();
	}

});