/**
 * This class is the view model for the Main view of the application.
 */
Ext
		.define(
				'webapp.view.login.LoginModel',
				{
					extend : 'Ext.app.ViewModel',

					alias : 'viewmodel.main',

					data : {
						name : 'webapp',

						loremIpsum : ''
					}

				// TODO - add data, formulas and/or methods to support your view
				});
