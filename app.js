const express = require('express')
const app = express()

const bodyParser = require('body-parser') // npm list -g
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static('public'))
require('dotenv').config()





let result

app.get('/', function(req, res){
	// res.sendFile(__dirname + '/calculator.html')
	res.render('calculator', {
		result: result
	})
})

app.post('/', function(req, res){
	const {num1, num2, operator} = req.body

	// console.log(req.body)
	let a = parseInt(num1)
	let b = parseInt(num2)

	switch(operator){
		case 'plus': result = a+b; break
		case 'minus': result = a-b; break
		case 'multiply': result = a*b; break
		case 'divide': result = a/b; break
	}

	console.log('Result = ' + result)
	res.redirect('/')
})







app.get('/bmi-cal', function(req, res){
	res.sendFile(__dirname + '/bmi-calculator.html')
})

app.post('/bmi-cal', function(req, res){
	let height = parseFloat(req.body.height)
	let weight = parseFloat(req.body.weight)

	let bmi = (weight/Math.pow(height, 2)).toFixed(2)

	res.send('Your BMI is: ' + bmi)
})






const port = process.env.PORT || 3000
app.listen(port, function(){console.log('Server running at port ' + port)})
