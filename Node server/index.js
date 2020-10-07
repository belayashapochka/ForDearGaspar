const express = require('express')//Подключение экспреса
const mongoose = require('mongoose')// Entered DB
const exphbs = require('express-handlebars')entered hbs

const PORT = process.env.PORT || 3000 //Установка локального хоста

const app = express()
const hbs = exphbs.create(//Use method create administrated template engine
{
	defaultLayout: 'main',
	extname: 'nbs'//change expansion
})

app.engine('hbs',hbs.engine)//rendering,my main boot)

async function start () 
{
	try 
	{
		await mongoose.connect('',//Connect DB,
		{
			useNewUrlParser:true,
			useFindAndModify:false
		})
		app.listen(PORT, ()=>
		{
			console.log('Server has been worked')//Запускаем сервер+если он вкл выводим сообщение
		})
	}
	catch(e)
	{
		console.log(e)
	}

}
start()

