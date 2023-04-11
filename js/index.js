const express = require("express");
const redirect = require("www-redirect");
const app = express();

// app.use(redirect(option)); // option = 'www' or option = 'non-www'
// 'www' option for redirecting non-www to www and 'non-www'option for redirecting www to non-www

app.use(redirect("non-www")); 