var Strapp = require("../strapp.js");

Strapp.apply("definition.json", [{ 
		src: "template.bootstrap-form.html",
		dest: "out/template.html"
	},{ 
		src: "template.script.js",
		dest: "out/script.js"
	},{ 
		src: "template.mysql.createtable.sql",
		dest: "out/mysql.createtable.sql"
	}]);