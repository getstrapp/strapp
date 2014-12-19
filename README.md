strapp
======

![Strapp diagram](http://i.imgur.com/AhjBvfg.png)

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

### bootstrap.form.html
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

### mysql.createtable.sql
```sql
CREATE TABLE <%= _name %>
(
  <%= _key.name %> <%= _key.type %>(<%= _key.length %>) NOT NULL,
<% _.each( properties, function( property, i ){ %>
  <%= property.name %> <% if(property.type) { %><%=property.type%><%}else{%>varchar<%}%>(<% if(property.length) { %><%=property.length%><%}else{%>32<%}%>),
<% }); %>
  PRIMARY KEY (<%= _key.name %>)
);
```

Usage:
```js
var Strapp = require("strapp");

Strapp.apply("definition.json", [{ 
    src: "bootstrap.form.html",
    dest: "out/form.html"
  },{ 
    src: "mysql.createtable.sql",
    dest: "out/mysql.createtable.sql"
  }]);
```

## Try it!

cd example/
node example.js