# Basic contact manager written using the MEAN stack

## Libraries used
<ul>
  <li>node.js / npm</li>
  <li>express</li>
  <li>MongoDB</li>
  <li>Mongoose</li>
  <li>ejs</li>
  <li>AngularJS</li>
  <li>Angular-UI</li>
</ul>

# Functionality
<p>Basic functionality to add/view/update/delete (CRUD) a contact

## Setup and configuration

Make sure that you update <strong>app.js</strong>:
<pre>app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 3000);
  app.set('ipaddr', process.env.OPENSHIFT_NODEJS_IP || "192.168.56.102");</pre>
and add your own IP address/hostname/port number if required.

You may also want to configure <strong>/routes/api.js</strong> - to connect to the right MongoDB collection:

<pre>mongoose.connect('mongodb://localhost/contact');</pre>

Finally to install execute: <code>npm install && bower install</code>

To start the projet: <code>node app.js</code>

New up to date post: http://tamas.io/updated-mean-contact-manager/

Previous articles related to this topic:
<ul>
  <li>http://tamas.io/contact-manager-2-0/</li>
  <li>http://tamas.io/contact-manager-written-in-angularjs-express-and-mongodb-episode-1/</li>
  <li>http://tamas.io/contact-manager-written-in-angularjs-express-and-mongodb-episode-2/</li>
  <li>http://tamas.io/contact-manager-written-in-angularjs-express-and-mongodb-episode-3/</li>
</ul>
