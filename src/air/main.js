define([
	'exports'
], function (air) {
	air.init = function () {
		//	summary:
		//		This function is executed automatically by the loader configuration.
		//		It will be executed after the page has loaded, the DOM is ready, and all
		//		dependencies of this module have been loaded. Use this function to initialize
		//		the application; for instance, creating	a page controller or running the
	    //		Dojo parser.

	    require(['dojo/on', 'air/modules/myModule'], function (on, myMod) {
           
	        var clicker = document.getElementById('clickH1');
	        on(clicker, "click", function (e) {
	            // handle the event
	            // call custom require module
	            myMod.someMethod();
	        });

	    });

	};
});
