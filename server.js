const express = require("express");
const bodyParser = require("body-parssr");

const app = express();

app.set("port", process.env.PORT || process.argv[2] || 80);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.get('port');