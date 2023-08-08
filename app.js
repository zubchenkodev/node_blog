let express = require('express');
let blogApp = express();
let router = require('./router');

blogApp.use(express.static('public'));
blogApp.set('views', 'views');
blogApp.set('view engine', 'ejs');

blogApp.use(express.urlencoded({extended: false}));
blogApp.use(express.json());

blogApp.use('/', router);

blogApp.listen(3000)