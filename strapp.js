var fs = require('fs');
var async = require('async');
var hb = require('handlebars');
var _ = require('underscore');

var args = process.argv.slice(2);
var def = args[0];
var template = args[1];

if( def == undefined ) {
	console.log( "Definition undefined!" );
	process.exit();
}
if( template == undefined ) {
	console.log( "Template undefined!" );
	process.exit();
}

console.log('strapp 0.1');

var templates = [{ file: template, type: 'template' }];
var definition = { file: def };

// Load definition
fs.readFile(definition.file, "utf-8", function (err,data) {
	if (err) {
		console.log( 'File read error! ' + err );
		process.exit();
	}
	definition.data = data;
	definition.obj = JSON.parse(definition.data);
	processTemplates( definition, templates );
});

function processTemplates( definition, templates) {
	_.each(templates, function(t) {
		fs.readFile(t.file, "utf-8", function (err,data) {
			if (err) {
				return console.log( 'Template read error! ' + err );
			}
			t.data = data;
			var out = applyTemplate( definition.obj, t );
			fs.writeFile( t.file + ".out", out, function(err) {
				if(err) {
					return console.log(err);
				}
				console.log( t.file + ".out generated");
			}); 
		});
	});
}

function applyTemplate( definition, template ) {
	if( template.data == undefined ) return console.log( "Template data is undefined!" );
	// console.log( "Applying definition to ", template.file );
	var template = hb.compile(template.data);
	return template(definition);
}