var express = require ('express');

var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var artists = 
[
	{	id: 1,
		name: 'Metallica'
	},
	{
		id: 2,
		name:'Linkin Park'
	},
	{
		id: 3,
		name:'Imagine Dragons'
	}


]; 
app.get('/', function (req,res)
{
	res.send('Hello API');
});

app.get('/artists', function (req,res)
{
	res.send(artists);
});



app.get('/artists/:id', function (req, res)
{
	console.log(req.params);
	var artist = artists.find(function(artists)
	{
		return artists.id === Number(req.params.id)
	});
	res.send(artist);
});


app.post('/artists', function(req, res){
	console.log(req.body);
	res.send('post data')
});


app.listen(3012, function ()
{
	console.log('API app started');
});
