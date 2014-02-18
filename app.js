var express = require('express')
, app = express()
, routes = require('./routes')
, api = require('./routes/api'),
server = require('http').createServer(app);

app.configure(function() {
  app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 3000);
  app.set('ipaddr', process.env.OPENSHIFT_NODEJS_IP || "192.168.56.102");
  app.locals.pretty = true;
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'secret!' }));
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use('/components', express.static(__dirname + '/components'));
  app.use(app.router);
  app.set('views', __dirname + '/views');
  app.engine('html', require('ejs').renderFile);
});

app.get('/', routes.index); // main page
app.get('/p/:name', routes.p); //redirect routes

app.get('/api/contact', api.contacts); //look at all
app.get('/api/contact/:id', api.contact); //look at one
app.post('/api/contact', api.add); //add contact
app.put('/api/contact/:id', api.edit); //edit&update contact
app.delete('/api/contact/:id', api.delete); //delete contact

server.listen(app.get('port'), app.get('ipaddr'), function(){
  console.log("Express server up and running for the API on port " + app.get('port') + " on IP " + app.get('ipaddr'));
});