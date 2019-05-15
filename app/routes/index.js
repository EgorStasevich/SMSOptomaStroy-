const { Router } = require('express');
const router = Router();
const controller = require('./controller');
router.get('/', controller.Index );

router.get('/contacts', controller.showContacts);
router.get('/usage', controller.showUsage);
router.get('/catalog', controller.showCatalog);
router.get('/:itemId', controller.showItem);
router.get('/catalog/create', controller.showCreate);
router.post('/catalog/create', controller.createPOST);
module.exports = router;
