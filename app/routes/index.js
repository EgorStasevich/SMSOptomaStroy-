const { Router } = require('express');
const express = require('express');
const router = Router();
const controller = require('./controller');
const routes = require('./routes');
const server = express();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
router.get('/', controller.showIndex);

router.get('/contacts', controller.showContacts);
router.get('/usage', controller.showUsage);
router.get('/catalog', controller.showCatalog);
router.get('/account', controller.showAccount);
router.get('/:itemId', controller.showItem);
router.get('/catalog/create', controller.showCreate);
router.post('/catalog/create', controller.createPOST);

server.set('view engine', 'pug');
server.set('views', __dirname);
server.locals.basedir = __dirname;

server.on('mount', server => {
  server.client = server.client;
});

server.use(express.urlencoded({extended: true}));


server.use('/', routes);

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

module.exports = router;
module.exports = server;
