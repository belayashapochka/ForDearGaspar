module.exports = function(app){
	app.get('/test', (req, res) => {
		console.log(req.query)
  		res.send(`вы запросили тест номер ${req.query.test_id} для ${req.query.class} класса`);
	});

	app.post('/test', (req, res) => {
		res.send('ВЫ отправили POST запрос в /test');
		
	});

	app.put('/test', (req, res) => {
		res.send('ВЫ отправили PUT запрос в /test');
	});

	app.delete('/test', (req, res) => {
		res.send('ВЫ отправили DELETE запрос в /test');
	});
}