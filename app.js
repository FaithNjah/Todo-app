 var express = require ('express');
 var app = express();

 var todocontroller = require('./controllers/todocontroller');


 app.set('view engine', 'ejs');
 app.use(express.static('./public'));

 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());



 todocontroller(app);

 app.listen(3001);
 console.log('working')