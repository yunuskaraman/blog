const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const adminRouters = require('./routers/admin');
const writingRoutes = require('./routers/writing');

const errorControllers = require('./controllers/errors')

const path = require('path');

app.set('view engine','pug');
app.set('views','./views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRouters);
app.use(writingRoutes);

app.use(errorControllers.get404Page)

app.listen(3000,(req,res)=>{
    console.log('Listen  on port 3000');
});
