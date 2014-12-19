var fs = require('fs');
var async = require('async');
var _ = require('underscore');

var Strapp = {
	apply : function( def, templates ) {

		console.log('strapp 0.1');

		if( def == undefined ) {
			return console.log( "Definition undefined!" );
		}
		if( templates == undefined ) {
			return console.log( "Templates undefined!" );
		}
		if( typeof templates === 'string' ) {
		    templates = [ templates ];
		}
		var t = [];
		for( var i = 0; i < templates.length; i++ ) {
			var template = templates[i];
			if( typeof template === 'string' ) {
			    template = { src: templates[i], type: 'template' };
			}
			t.push(template);
		}
		var definition = { src: def };

		// Load definition
		fs.readFile(definition.src, "utf-8", function (err,data) {
			if (err) {
				console.log( 'File read error! ' + err );
				process.exit();
			}
			definition.data = data;
			definition.obj = JSON.parse(definition.data);
			Strapp.processTemplates( definition, t );
		});

	},
	processTemplates : function( definition, templates) {
		_.each(templates, function(t) {
			fs.readFile(t.src, "utf-8", function (err,data) {
				if (err) {
					return console.log( 'Template read error! ' + err );
				}
				t.data = data;
				if( t.dest === undefined ) {
					t.dest = t.src + ".out";
				}
				var out = Strapp.applyTemplate( definition.obj, t );
				fs.writeFile( t.dest, out, function(err) {
					if(err) {
						return console.log(err);
					}
					console.log( t.src + " ==> " + t.dest + " generated");
				}); 
			});
		});
	},
	applyTemplate : function( definition, t ) {
		if( t.data == undefined ) return console.log( "Template data is undefined!" );
		console.log( "applying template to " + t.src );
		
		// _.templateSettings = {
		// 	interpolate: /\{\{(.+?)\}\}/g
		// };
		var template = _.template( t.data );
		return template(definition);
	}
}

module.exports = Strapp;
