strapp
======

Let's make app creation easier


npm install -g strapp
strapp

strapp.json
{
  title: "Movie App",
  stack: "LAMP",
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
