strapp
======

[Imgur](http://i.imgur.com/AhjBvfg.png)

Strapp is simple. Strapp takes a definition of an object (json) then applies templates (using underscore template) to generate production ready code.

Example definition.json

```js
{
  "_name": "movie",
  "_key" : {
    "name" : "movie_id",
    "type": "int",
    "length": "11"
  },
  "properties" : [
      {
        "name" : "title",
        "placeholder": "Movie Title",
        "prettyname": "Title",
        "length": 32
      }
  ]
}
```

Example template.html
```html
<form>
  <fieldset>
    <legend><%= _name %></legend>
    <% _.each( properties, function( property, i ){ %>
      <label for="<%=property.name%>"><%=property.name%></label>
      <input id="<%=property.name%>" name="<%=property.name%>" type="text"<% if ( property.placeholder ) { %> placeholder="<%= property.placeholder %>"<% } %> class="form-control input-md">
    <% }); %>
  </fieldset>
</form>
```

Usage:
```js
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
```

## Try it!

cd example/
node example.js