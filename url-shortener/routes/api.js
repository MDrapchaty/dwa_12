// claim module as function so that you can control what is returned
module.exports = function exp(express) {
  const router = express.Router();  // connect to express


// CONNECT TO DB
  const Sequelize = require('sequelize');

  const sequelize = new Sequelize('urldb', 'root', 'root', {
    dialect: 'mysql', // or 'sqlite', 'postgres', 'mariadb'
    port: 3306, //..3306 or 5432 (for postgres)
  });

// DEFINING A MODEL
  const Url = sequelize.define('urls', {
    short_url: Sequelize.STRING,
    long_url: Sequelize.STRING,
  }, {
    tableName: 'urls',
  });


  sequelize
  .authenticate();


// SYNCHRONIZE SCHEMA
  sequelize
  .sync({ force: false });


  router.post('/v1/:url', (req, res) => { // post runs this function which is activated on this route /v1/:url
    const longUrl = req.params.url;

    function makeid() { // random 5 digit string generater
      let text = '';
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      for (let i = 0; i < 5; i += 1) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      return text;
    }


    const newUrl = makeid();  // generate new random 5 digit string
    const shortUrl = newUrl;// 'convert' the string to url

    const url = Url.build({
      short_url: shortUrl,
      long_url: longUrl,
    });

    url.save();

    res.json({ url: shortUrl }); // respond with json format with new generated random string
  });


  router.get('/v1/urls', (req, res) => { // Endpoint shows all urls, both original and shortened
    Url.findAll({
      attributes: ['short_url', 'long_url'],
    }).then((UrlLoc) => {
      res.send(UrlLoc);
    });
  });


  router.get('/v1/url/:id', (req, res) => {  // Get a single row's short/original urls based on id entered
    Url.findAll({
      where: { id: req.params.id },
      attributes: ['short_url', 'long_url'],
    }).then((UrlLoc2) => {
      res.send(UrlLoc2);
    });
  });


  router.delete('/v1/url/:id', (req, res) => { // delete row from urls based on id entered
    Url.destroy({
      where: { id: req.params.id },
    }).then((UrlLoc3) => {
      res.send(UrlLoc3);
    });
  });

  router.post('/v1/url/:id', (req) => { // update short url based on id entered
    function makeid() { // random 5 digit string generater
      let text = '';
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      let i = 0;
      for (i = 0; i < 5; i += 1) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    }


    const newUrl = makeid();  // generate new random 5 digit string
    const shortUrl = newUrl; // 'convert' the string to url

    const values = { short_url: shortUrl };
    const selector = { where: { id: req.params.id } };


    Url.update(values, selector);
  });

  router.get('/go/:shortURL', (req, res) => { // Redirect to original url based on short url entered
    Url.find({
      where: { short_url: req.params.shortURL },
      attributes: ['long_url'],
    }).then(
      res.redirect('http://' + Url.long_url)
    );
  });


  return router; // return this whole function which is used in your server.js
};
