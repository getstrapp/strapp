CREATE TABLE <%= _name %>
(
	<%= _key.name %> <%= _key.type %>(<%= _key.length %>) NOT NULL,
<% _.each( properties, function( property, i ){ %>
	<%= property.name %> <% if(property.type) { %><%=property.type%><%}else{%>varchar<%}%>(<% if(property.length) { %><%=property.length%><%}else{%>32<%}%>),
<% }); %>
	PRIMARY KEY (<%= _key.name %>)
);
