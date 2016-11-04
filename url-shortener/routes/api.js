//claim module as function so that you can control what is returned
module.exports = function(express){
	var router = express.Router();  //connect to express



//   CONNECT TO DB
	var Sequelize = require('sequelize')
  , sequelize = new Sequelize('urldb', 'root', 'root', {
      dialect: "mysql", // or 'sqlite', 'postgres', 'mariadb'
      port:    3306, //..3306 or 5432 (for postgres)
    });

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
  });


// DEFINING A MODEL
var Url = sequelize.define('urls', {
  short_url: Sequelize.STRING,
  long_url: Sequelize.STRING
}, {
  tableName: 'urls'
});


//SYNCHRONIZE SCHEMA
sequelize
  .sync({ force: false })
  .then(function(err) {
    console.log('It worked!');
  }, function (err) { 
    console.log('An error occurred while creating the table:', err);
  });


  router.post('/v1/:url', function(req, res){  //post runs this function which is activated on this route /v1/:url  
		var longUrl = req.params.url
		
				function makeid() // random 5 digit string generater
		{
		    var text = '';
		    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		    for( var i=0; i < 5; i++ )
		        text += possible.charAt(Math.floor(Math.random() * possible.length));

		    return text;
		}


		var newUrl = makeid();  //generate new random 5 digit string
		var shortUrl = newUrl ; //'convert' the string to url

		var url = Url.build({
		  short_url: shortUrl,
		  long_url: longUrl
		})

		url.save().then(function() {
		  /* ... */
		})



		res.json({url: shortUrl }); //respond with json format with new generated random string
	});




	router.get('/v1/urls', function(req, res){   //Endpoint shows all urls, both original and shortened
		
			Url.findAll({
	  attributes: ['short_url', 'long_url']
		}).then(function (Url) {
				    res.send(Url);

			}).error(function (err) {
			    console.log("Error:" + err);
			});

	});



	router.get('/v1/url/:id', function(req, res){  // Get a single row's short/original urls based on id entered
		
			Url.findAll({
				where: {id: req.params.id},
	  			attributes: ['short_url', 'long_url']
			}).then(function (Url) {
				    res.send(Url);

			}).error(function (err) {
			    console.log("Error:" + err);
			});

	});


	router.delete('/v1/url/:id', function(req, res){ // delete row from urls based on id entered 
		
			Url.destroy({
				where: {id: req.params.id}
			}).then(function (Url) {
				    res.send(Url);

			}).error(function (err) {
			    console.log("Error:" + err);
			});

	});


	router.post('/v1/url/:id', function(req, res){ // update short url based on id entered 
		
					function makeid() // random 5 digit string generater
		{
		    var text = '';
		    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		    for( var i=0; i < 5; i++ )
		        text += possible.charAt(Math.floor(Math.random() * possible.length));

		    return text;
		}


		var newUrl = makeid();  //generate new random 5 digit string
		var shortUrl = newUrl ; //'convert' the string to url

		var values = { short_url: shortUrl};
		var selector = { where: {id: req.params.id}};


			Url.update(values, selector).then(function () {
				   

			});

	});


	router.get('/go/:shortURL', function(req, res){  // Redirect to original url based on short url entered
			Url.find({
				where: {short_url: req.params.shortURL},
	  			attributes: ['long_url']
			}).then(function (Url) {
				    res.redirect("http://" + Url.long_url);
				    
			}).error(function (err) {
			    console.log("Error:" + err);
			});
	});

	






	return router; //return this whole function which is used in your server.js


}