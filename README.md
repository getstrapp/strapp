strapp
======

Let's make app creation easier


npm install -g strapp

strapp install movies-phpmysql

strapp update

strapp

strapp.json
{
  title: "movies-phpmysql",
  version: "1.0",
  models: [ {
    movie: {
      definition: "movie.json",
      templates: [ "html", "js" ]
    }
  ],
  templates: [ {
    html: {
      definition: "strapptemplates/html.tpl",
      output: "."
    },
    html: {
      definition: "strapptemplates/js.tpl",
      output: "scripts/"
    }
  ]
}
