const {ObjectID} = require('mongodb');
module.exports = {
  showCatalog: async (req, res) => {
    const client = req.app.client;
    const db = client.db('AsiaOpt');
    const collection = db.collection('Items');
    const items = await collection.find().toArray();
    res.render('routes/views/catalog', {items});
  },
  showIndex: (req, res) => {
    res.render('routes/views/index');
  },
  createPOST: async (req, res) =>{
    const item = req.body;
    const client = req.app.client;
    const db = client.db('AsiaOpt');
    const collection = db.collection('Items');
    await collection.insertOne(item);
    res.redirect('/');

  },
  showCreate: (req, res) =>{
    res.render('routes/views/create');
  },
  showItem: async (req, res) =>{
    const client = req.app.client;
    const db = client.db('AsiaOpt');
    const collection = db.collection('Items');
    const item = await collection.findOne({ _id: ObjectID(req.params.itemId)});
    if(!item) return res.redirect('/catalog');
    res.render('routes/views/item', {item});
  },
  showContacts: (req, res) => {
    res.render('routes/views/contacts');
  },
  showUsage: (req, res) => {
    res.render('routes/views/usage');
  },

}
