var Strapp = require("../strapp.js");

Strapp.apply("definition.json", [{ 
		src: "bootstrap.form.html",
		dest: "out/template.html"
	},{ 
		src: "script.js",
		dest: "out/script.js"
	},{ 
		src: "mysql.createtable.sql",
		dest: "out/mysql.createtable.sql"
	}]);