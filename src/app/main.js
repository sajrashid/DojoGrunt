define([
	'exports'
], function (app) {
	app.init = function () {
		//	summary:
		//		This function is executed automatically by the loader configuration.
		//		It will be executed after the page has loaded, the DOM is ready, and all
		//		dependencies of this module have been loaded. Use this function to initialize
		//		the application; for instance, creating	a page controller or running the
	    //		Dojo parser.

	    require(['dojo/on', 'app/modules/myModule', 'dstore/Memory', 'dgrid/OnDemandGrid', ],
            function (on, myMod,  Memory, OnDemandGrid) {
           
	        // dojo on eevnt example
            // get an elem
	        var clicker = document.getElementById('clickH1');
	        // below dojo on attaches an event handles, if a module loads multiple time 
	        // you will register the event handler multiple times, careful!!!
	        on(clicker, "click", function (e) {
	            // handle the event
	            // call custom require module
	            myMod.someMethod();
	        });

            /// example D-Grid, uses a pre created html div in index.html
	            var data = [
                 { id: 1, name: 'Peter' },
                 { id: 2, name: 'Paul' },
                 { id: 3, name: 'Mary' }
	            ];
                // create an in memory store 
	            var store = new Memory({ data: data });
	            // create grid
	            var grid = new OnDemandGrid({
	                collection: store, //assign store to a collection
	                columns: [
	                 {
	                     field: 'id',
	                     label: 'ID',
	                 },
                     {
                         field: 'name',
                         label: 'ID'
                     }
	                ]
	            }, 'gridcontainer'); //div

	    });

	};
});
