$(document).ready(function() {

	$(document).on("click","#submit", function() {
		var data = {
			<% _.each( properties, function( property, i ){ %>"<%= property.name %>": $("#<%= property.name %>").val(),
			<% }); %>
		}
	});
});